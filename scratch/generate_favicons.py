import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_clay_favicon():
    # 1024x1024 master canvas for super-sampled crisp anti-aliasing
    size = 1024
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    
    # Create mask for rounded squircle base
    # Margin & Dimensions
    margin = 64
    w = size - 2 * margin # 896
    h = size - 2 * margin # 896
    radius = 224 # rounded clay corners
    
    # 1. Solid Bottom Contact Shadow (3D Depth)
    shadow_depth = 80
    shadow_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_img)
    shadow_rect = [margin, margin + shadow_depth, margin + w, margin + h + shadow_depth]
    shadow_draw.rounded_rectangle(shadow_rect, radius=radius, fill=(29, 78, 216, 255)) # #1D4ED8
    
    # Subtle dark ambient shadow
    ambient_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ambient_draw = ImageDraw.Draw(ambient_img)
    ambient_draw.rounded_rectangle([margin, margin + 40, margin + w, margin + h + 40], radius=radius, fill=(30, 27, 75, 120)) # #1E1B4B
    ambient_blur = ambient_img.filter(ImageFilter.GaussianBlur(32))
    
    # Combine ambient blur and solid 3D shadow
    image = Image.alpha_composite(image, ambient_blur)
    image = Image.alpha_composite(image, shadow_img)
    
    # 2. Main Clay Body (Gradient from #60A5FA to #4F46E5)
    body_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    body_draw = ImageDraw.Draw(body_img)
    body_rect = [margin, margin, margin + w, margin + h]
    
    # Create gradient surface mask
    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle(body_rect, radius=radius, fill=255)
    
    # Draw vertical linear gradient
    grad_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    for y in range(size):
        ratio = max(0.0, min(1.0, (y - margin) / float(h)))
        r = int(96 * (1 - ratio) + 79 * ratio)
        g = int(165 * (1 - ratio) + 70 * ratio)
        b = int(250 * (1 - ratio) + 229 * ratio)
        line_draw = ImageDraw.Draw(grad_img)
        line_draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
        
    grad_img.putalpha(mask)
    image = Image.alpha_composite(image, grad_img)
    
    # 3. Top Surface Radial Highlight (Lit from above)
    top_lit = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    top_draw = ImageDraw.Draw(top_lit)
    top_draw.ellipse([margin - 100, margin - 200, margin + w + 100, margin + h // 2 + 100], fill=(255, 255, 255, 90))
    top_lit_blur = top_lit.filter(ImageFilter.GaussianBlur(64))
    top_lit_blur.putalpha(mask)
    image = Image.alpha_composite(image, top_lit_blur)
    
    # 4. Inner White Specular Rim Highlight
    rim_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rim_draw = ImageDraw.Draw(rim_img)
    rim_rect = [margin + 4, margin + 4, margin + w - 4, margin + h - 4]
    rim_draw.rounded_rectangle(rim_rect, radius=radius - 4, outline=(255, 255, 255, 140), width=10)
    rim_img.putalpha(mask)
    image = Image.alpha_composite(image, rim_img)
    
    # 5. Monogram RH Text
    font_path = "C:/Windows/Fonts/segoeuib.ttf"
    if not os.path.exists(font_path):
        font_path = "C:/Windows/Fonts/arialbd.ttf"
        
    font_size = 460
    try:
        font = ImageFont.truetype(font_path, font_size)
    except Exception:
        font = ImageFont.load_default()
        
    text = "RH"
    
    # Measure text bounding box
    dummy_draw = ImageDraw.Draw(image)
    bbox = dummy_draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    text_x = (size - text_w) // 2 - bbox[0]
    text_y = (size - text_h) // 2 - bbox[1] - 30 # slightly centered vertically
    
    # Text Shadow (Bottom Depth)
    text_shadow_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    text_shadow_draw = ImageDraw.Draw(text_shadow_img)
    text_shadow_draw.text((text_x, text_y + 36), text, font=font, fill=(29, 78, 216, 255)) # #1D4ED8
    text_shadow_img.putalpha(mask)
    image = Image.alpha_composite(image, text_shadow_img)
    
    # Text Front Surface (Pure White)
    text_front_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    text_front_draw = ImageDraw.Draw(text_front_img)
    text_front_draw.text((text_x, text_y), text, font=font, fill=(255, 255, 255, 255))
    text_front_img.putalpha(mask)
    image = Image.alpha_composite(image, text_front_img)

    # Save to public directory in all required sizes
    public_dir = "public"
    
    sizes = {
        "android-chrome-512x512.png": (512, 512),
        "android-chrome-192x192.png": (192, 192),
        "apple-touch-icon.png": (180, 180),
        "favicon-32x32.png": (32, 32),
        "favicon-16x16.png": (16, 16)
    }
    
    for filename, dim in sizes.items():
        resized = image.resize(dim, Image.Resampling.LANCZOS)
        out_path = os.path.join(public_dir, filename)
        resized.save(out_path, "PNG")
        print(f"Generated {out_path} ({dim[0]}x{dim[1]})")
        
    # Generate favicon.ico with 16, 32, 48 sizes
    ico_img = image.resize((48, 48), Image.Resampling.LANCZOS)
    ico_path = os.path.join(public_dir, "favicon.ico")
    ico_img.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Generated {ico_path}")

if __name__ == "__main__":
    create_clay_favicon()
