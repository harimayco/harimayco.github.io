import os
import subprocess
from PIL import Image

def generate_icons_from_svg():
    svg_path = "public/favicon.svg"
    public_dir = "public"
    
    # Render sizes using resvg-js
    sizes = {
        "android-chrome-512x512.png": 512,
        "android-chrome-192x192.png": 192,
        "apple-touch-icon.png": 180,
        "favicon-32x32.png": 32,
        "favicon-16x16.png": 16
    }
    
    font_dir = "C:/Windows/Fonts"
    
    for filename, width in sizes.items():
        out_path = os.path.join(public_dir, filename)
        cmd = [
            "npx", "@resvg/resvg-js-cli",
            "--font-dir", font_dir,
            "--fit-width", str(width),
            svg_path, out_path
        ]
        print(f"Rendering {out_path} ({width}x{width})...")
        subprocess.run(cmd, check=True, shell=True)
        
    # Generate 32-bit RGBA ICO from 512x512 resvg render
    master_512_path = os.path.join(public_dir, "android-chrome-512x512.png")
    master_img = Image.open(master_512_path)
    
    ico_path = os.path.join(public_dir, "favicon.ico")
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    
    # Save as 32-bit RGBA ICO
    master_img.save(ico_path, format="ICO", sizes=ico_sizes)
    print(f"Generated 32-bit RGBA {ico_path} from exact SVG render!")

if __name__ == "__main__":
    generate_icons_from_svg()
