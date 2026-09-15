## Claymorphism / 3D Soft UI Design System

### Core Direction

Create interfaces that feel physically sculpted from soft material — inflated surfaces, thick colored bottom shadows, rounded geometry, and press animations that simulate real-world tactile depth. Every button feels pressable. Every card feels molded. The interface is emotionally warm, rewarding to interact with, and visually playful without losing product clarity.

The reference feel: Duolingo's big pressable buttons, high-end toy packaging, soft silicone hardware. Not sci-fi UI, not flat Dribbble gradients — matte soft clay under diffused daylight.

### Color System — Complete with Shadow Pairings

Every clay color MUST have a paired shadow color. Shadows are darker, more saturated versions of the object — never neutral gray.

**Background tones:**

- Soft lavender: `#F5F3FF` — primary page background
- Soft blue-white: `#EFF6FF`
- Soft green-white: `#F0FDF4`
- Soft peach: `#FFF7ED`

**Clay accent colors + exact shadow pairs:**
| Object | Object Hex | Shadow | Shadow Hex |
|---|---|---|---|
| Clay Blue | `#60A5FA` | Deep Blue | `#1D4ED8` |
| Clay Green | `#34D399` | Deep Green | `#059669` |
| Clay Yellow | `#FCD34D` | Deep Amber | `#B45309` |
| Clay Coral | `#FB7185` | Deep Rose | `#BE123C` |
| Clay Purple | `#A78BFA` | Deep Violet | `#6D28D9` |
| Clay Teal | `#2DD4BF` | Deep Teal | `#0F766E` |
| Clay Orange | `#FB923C` | Deep Orange | `#C2410C` |
| White/Light | `#FFFFFF` | Mid Gray | `#CBD5E1` |

**Text colors (never pure black):**

- Primary headings: `#1E1B4B`
- Body: `#312E81` or `#334155`
- Muted: `#64748B`
- On colored surfaces: `#FFFFFF`

### The Clay Shadow Formula — MOST CRITICAL RULE

Every elevated element uses a two-layer shadow:

```css
box-shadow:
  0 [depth]px 0 0 [shadow-color],
  /* solid contact shadow — zero blur */ 0 [depth + 6]px [blur]px
    rgba(0, 0, 0, 0.12); /* atmospheric depth */
```

**Button resting:**

```css
box-shadow:
  0 6px 0 0 #1d4ed8,
  0 12px 20px rgba(29, 78, 216, 0.22);
```

**Button hover (compress 2px):**

```css
transform: translateY(2px);
box-shadow:
  0 4px 0 0 #1d4ed8,
  0 8px 16px rgba(29, 78, 216, 0.2);
```

**Button active/pressed (fully pressed):**

```css
transform: translateY(6px);
box-shadow:
  0 0px 0 0 #1d4ed8,
  0 4px 8px rgba(29, 78, 216, 0.15);
```

**Card resting:**

```css
box-shadow:
  0 8px 0 0 #1d4ed8,
  0 16px 32px rgba(29, 78, 216, 0.18);
```

Rules — all mandatory:

- First shadow blur-radius MUST be `0` — it is a solid offset, not a glow
- Shadow color MUST match element's color family (see table above)
- NEVER use gray neutral shadows on colored elements
- Transition: `100ms ease-out` — snappy, never floaty
- Larger cards: 8–10px depth; buttons: 6px; small badges: 3–4px

### Top-Lit Inflated Surface Effect

Every colored surface gets a subtle top highlight to simulate clay lit from above:

```css
/* Radial highlight — best for buttons and small cards */
background:
  radial-gradient(
    ellipse at 50% 0%,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0) 60%
  ),
  #60a5fa; /* base color */
```

**Inner rim highlight (adds realism — combine with shadow):**

```css
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 0.5),
  /* top rim */ 0 6px 0 0 #1d4ed8,
  /* contact */ 0 12px 20px rgba(29, 78, 216, 0.22); /* atmosphere */
```

Gradient opacity: 0.25–0.40 max. Should feel like light bouncing off a rounded surface, not glossy plastic.

### Border Radius — The Roundness System

Sharp edges instantly break the clay illusion.

```
Section wrappers / page containers:  24px–32px
Feature cards:                        20px–28px
Primary buttons:                      14px–18px
Pill buttons / CTAs:                  999px
Input fields:                         12px–16px
Icon containers:                      16px–20px
Stat / number badges:                 14px–18px
Progress bars:                        999px (always full-pill)
Avatars:                              50% (circle)
Modals:                               24px–32px
Nav items (active):                   12px–14px
```

NEVER use border-radius below 12px on any visible card or button. The interface should feel molded, not constructed.

### Typography

Use ONE rounded, friendly typeface — NOT geometric sans or serif.

**Recommended (in order):**

1. Nunito — warmest, best all-round
2. Poppins — slightly more geometric, still friendly
3. Quicksand — softer, good for headlines

**Scale:**

- Hero H1: 56–72px, weight 900, `#1E1B4B`, letter-spacing -0.02em
- Section H2: 36–48px, weight 800, `#1E1B4B`, letter-spacing -0.015em
- Card H3: 20–24px, weight 700, `#1E1B4B`
- Body: 16–18px, weight 500, `#312E81`, line-height 1.65
- Labels/muted: 13–14px, weight 600, `#64748B`
- Button text: 16–18px, weight 700, white on colored

### Button System — The Signature Clay Component

**Primary clay button:**

```css
.clay-btn {
  font-weight: 700;
  font-size: 17px;
  color: white;
  border: none;
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 16px;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 255, 255, 0) 60%
    ),
    #60a5fa;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 6px 0 0 #1d4ed8,
    0 12px 22px rgba(29, 78, 216, 0.24);
  transition:
    transform 100ms ease-out,
    box-shadow 100ms ease-out;
}
.clay-btn:hover {
  transform: translateY(2px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 4px 0 0 #1d4ed8,
    0 8px 16px rgba(29, 78, 216, 0.22);
}
.clay-btn:active {
  transform: translateY(6px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 0px 0 0 #1d4ed8,
    0 4px 8px rgba(29, 78, 216, 0.15);
}
```

**White/secondary button (NOT a ghost outline — use a white clay surface):**

```css
background: white;
color: #1e1b4b;
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 1),
  0 6px 0 0 #cbd5e1,
  0 12px 20px rgba(0, 0, 0, 0.08);
```

NEVER use: outline-only ghost buttons, flat borderless buttons, or gradient-only buttons with no shadow.

### Card System

**Colored clay card:**

```css
background:
  radial-gradient(
    ellipse at 50% 0%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 55%
  ),
  #60a5fa;
border-radius: 24px;
padding: 28px;
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 0.45),
  0 8px 0 0 #1d4ed8,
  0 16px 32px rgba(29, 78, 216, 0.18);
```

**White card on colored background:**

```css
background: #ffffff;
border-radius: 24px;
padding: 28px;
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 1),
  0 8px 0 0 #cbd5e1,
  0 16px 32px rgba(0, 0, 0, 0.08);
```

**Slight rotation for playfulness (decorative cards only):**

```css
transform: rotate(-1.5deg); /* first card */
transform: rotate(0deg); /* middle card */
transform: rotate(1.5deg); /* third card */
```

### Layout Rules — Space Is Mandatory

Claymorphism breaks immediately when crowded.

- Section padding: `80px–120px` top/bottom
- Card gap: `24px–32px` minimum
- Max content width: `1100px`
- Never more than 3 cards per row
- Hero: single-column centered — no grid in the hero content
- One dominant CTA per section only
- Headline to cards gap: minimum `40px`

### Blob/Shape Decorations

Soft background blobs create depth without competing with content:

```css
.blob {
  position: absolute;
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  filter: blur(48px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.18–0.25;
}
```

- Use 2–4 blobs per page maximum
- Colors: tinted page accent colors only
- Always behind content (`z-index: 0`, content at `z-index: 1`)
- Sizes: 280px–520px, very low opacity

### Icon Container System

Icons sit inside clay-shaped containers — never raw on backgrounds.

```css
.clay-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 255, 255, 0) 60%
    ),
    #34d399;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 4px 0 0 #059669,
    0 8px 16px rgba(5, 150, 105, 0.2);
}
/* On colored card backgrounds, use semi-transparent white: */
.clay-icon.on-colored {
  background: rgba(255, 255, 255, 0.22);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 3px 0 0 rgba(0, 0, 0, 0.2);
}
```

### Progress / Stat Components

Native to this style — gamification lives here.

**Progress bar:**

```css
.track {
  height: 14px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
.fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #34d399, #60a5fa);
  box-shadow: 0 2px 0 0 #059669;
}
```

**Stat number card:**

```css
.stat-card {
  background: white;
  border-radius: 22px;
  padding: 26px;
  box-shadow:
    0 6px 0 0 #cbd5e1,
    0 12px 24px rgba(0, 0, 0, 0.07);
}
.stat-num {
  font-size: 44px;
  font-weight: 900;
  color: #1e1b4b;
  letter-spacing: -0.02em;
}
```

### What NOT to Do

- ✗ NEVER use gray neutral shadows on colored elements
- ✗ NEVER use outline/ghost-only buttons for primary actions
- ✗ NEVER use border-radius below 12px on cards or buttons
- ✗ NEVER make press animations slower than 150ms
- ✗ NEVER crowd the layout — large spacing is non-negotiable
- ✗ NEVER use pure `#000000` text
- ✗ NEVER use neon or over-saturated colors
- ✗ NEVER apply clay shadows directly to text or raw SVGs
- ✗ NEVER use glassmorphism blur/transparency — clay is opaque and solid
- ✗ NEVER stack more than 3 feature cards per row

### Spacing Reference (8px grid)

```
Section vertical padding:    80px–120px
Card internal padding:       24px–32px
Gap between cards:           24px–32px
Button padding:              16px 32px
H2 to first card gap:        40px–52px
Stat number spacing:         40px–56px
```
