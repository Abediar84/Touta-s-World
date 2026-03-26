# Design System: Touta's World (Luxury Edition)

## 1. Visual Theme & Atmosphere
**Atmosphere:** Ethereal, sophisticated, and deeply nostalgic. 
**Philosophy:** Transforming a children's educational platform into a premium studio-quality brand. The design balances playful innocence with high-end editorial elegance. It relies on generous whitespace, cinematic proportions, and soft, deliberate motion to create an emotional connection.

## 2. Color Palette & Roles
The palette is rooted in natural, earthy tones with a premium soft-matte finish.
- **Canvas White** (`#FAFAFA`): Use for primary page backgrounds. Clean, airy, and expansive.
- **Parchment Cream** (`#FDFBF7`): Use for secondary sections and cards. Adds warmth.
- **Midnight Charcoal** (`#1A1A1A`): Use for primary typography. Softer than pure black for a refined reading experience.
- **Terracotta Glow** (`#E27D60`): Primary accent. Used for main CTAs and energetic highlights.
- **Sunlit Olive** (`#C2C384`): Secondary accent. Used for organic, calming elements (Notebooks, nature).
- **Golden Sand** (`#E8A87C`): Tertiary accent. Used for playful, creative moments (Puzzles).
- **Dusk Blue** (`#AAB5CC`): Accent for wisdom and calmness (Pins).
- **Soft Rose** (`#E5B3AA`): Accent for gentle, imaginative elements (Coloring Books).

## 3. Typography Rules
- **Brand Mark:** `font-brand` (HaveHeartOne). Used exclusively for the name "Touta". Must always be `font-normal` to preserve its delicate script weight.
- **Primary Headings:** `font-serif`. Used for cinematic storytelling. Should utilize tight leading (`leading-tight` or `leading-none`) and tracking for an editorial feel.
- **Body Content:** `font-sans`. Used for legibility. Must have generous line height (`leading-relaxed`) and a lighter weight (`font-light` or `font-normal`) in a slate or charcoal color.
- **Eyebrows / Overlines:** `font-sans text-xs uppercase tracking-[0.3em] font-bold`. Used to introduce sections with high-end structural elegance.

## 4. Component Stylings
* **Buttons:** 
  - Primary: Pill-shaped (`rounded-full`), solid background with a soft, diffused shadow (`shadow-xl shadow-color/20`). Should expand slightly on hover (`hover:scale-105`) with a smooth transition.
  - Secondary: Pill-shaped, transparent with a delicate 1px border.
* **Cards/Containers:** 
  - Corner roundness: Generously rounded (`rounded-3xl` or `rounded-[2rem]`).
  - Background: Solid or very subtle gradient.
  - Shadow: Whisper-soft diffused shadows (`shadow-sm` moving to `shadow-xl` on hover).
* **Images:**
  - Often borderless, blending seamlessly into the background.
  - When contained, use `rounded-3xl` with a soft overlay.

## 5. Layout Principles & Motion
- **Whitespace:** Extreme generosity. Elements should breathe heavily. Use `py-24` or `py-32` for vertical rhythm.
- **Grid Alignment:** Symmetrical for structural moments, asymmetrical for emotional/storytelling moments.
- **Motion:** Cinematic and deliberate. Items should fade in and drift up smoothly (`duration: 1.0` or `1.2`, `ease: [0.16, 1, 0.3, 1]`). Avoid fast, jerky animations.
