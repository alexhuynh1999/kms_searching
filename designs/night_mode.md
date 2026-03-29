# Design System Strategy: The Storybook Chronicle

## 1. Overview & Creative North Star
This design system is guided by the Creative North Star of **"The Digital Folklore."** It is an invitation to a world where software feels like a hand-painted scroll—a high-end editorial experience that blends the nostalgic warmth of Korean Folk Town with modern, sophisticated interactive depth. 

We move beyond the rigid, sterile grids of typical SaaS platforms. Instead, we embrace **Organic Intentionality**. This means utilizing high-contrast typography scales, intentional asymmetry that mimics a landscape, and soft, oversized rounded corners (reaching up to `xl: 3rem`) to evoke the thatched roofs and rolling hills of a storybook world. The experience is not just "functional"; it is "atmospheric."

## 2. Colors & Tonal Atmosphere
The palette is a dual-narrative of Day and Night. 

*   **Primary Narrative (`#7fd7fe`):** A vibrant sky blue that acts as our "Moonbeam" or "Sky" element, guiding the user's eye to key actions.
*   **Secondary Narrative (`#91f78e`):** A lush forest green used for success states and growth-oriented growth patterns.
*   **Tertiary Narrative (`#ffe2ab`):** Earthy straw and wood tones that provide warmth and a "paper-like" grounding.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. They create visual noise and break the "storybook" immersion. Instead, boundaries must be defined through **background color shifts**. Use `surface-container-low` for secondary content areas sitting on a `surface` background. If you need to separate elements, use a `2rem` vertical space from our spacing scale rather than a line.

### Surface Hierarchy & Nesting
Treat the UI as a physical environment. 
*   **Base:** `surface` (#0c0d1d)
*   **Sub-sections:** `surface-container-low` or `lowest` for "inset" fields.
*   **Interactive Cards:** `surface-container-highest` to bring elements "closer" to the user.

### Signature Textures: Glass & Gradients
To avoid a flat, "out-of-the-box" feel, use **Glassmorphism** for floating navigation and modals. Use the `surface` color at 60% opacity with a `20px` backdrop-blur. Apply a subtle gradient transition from `primary` to `primary_container` on high-priority CTAs to give them a "glowing moonbeam" soul.

## 3. Typography: The Editorial Script
Our typography is a conversation between the traditional and the modern.

*   **Display & Headlines (Noto Serif):** These are our "Traditional" anchors. The serif evokes the feel of a printed legend. Use `display-lg` (3.5rem) with generous leading to anchor hero sections.
*   **Body & Labels (Plus Jakarta Sans):** These are our "Friendly" navigators. The high x-height and geometric clarity ensure high readability against the high-contrast dark mode backgrounds (`on_background` #e5e3fb).

**Hierarchy Principle:** Always pair a `headline-lg` with a `body-md`. The contrast in weight and style creates an authoritative, editorial rhythm that makes information feel curated, not just displayed.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural lines.

*   **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-lowest` card placed on a `surface-container-low` section creates a soft "carved-out" look.
*   **Ambient Shadows:** For floating elements, use ultra-diffused shadows. 
    *   *Blur:* 40px - 60px. 
    *   *Opacity:* 6%.
    *   *Color:* Use a tint of `on_surface` (deep indigo) rather than pure black to maintain the "Night Sky" atmosphere.
*   **The "Ghost Border" Fallback:** If a container absolutely requires definition (e.g., in a complex data table), use the `outline_variant` token at **15% opacity**. It should feel like a whisper, not a wall.

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background with `on_primary` text. Use `DEFAULT` (1rem) roundness. For "Hero" buttons, use `xl` (3rem) roundness to mirror the soft curves of the landscape.
*   **Tertiary:** No background. Use `primary` text with a 10% `primary` background on hover.

### Chips
*   High roundness (`full`). Use `secondary_container` for positive filters and `tertiary_container` for neutral tags. 

### Input Fields
*   Background: `surface_container_highest`. 
*   Border: None (use a subtle 2px bottom-accent of `primary` only on focus).
*   Shape: `md` (1.5rem) for a pill-like, approachable feel.

### Cards & Lists
*   **Forbidden:** Divider lines.
*   **Recommended:** Use `surface_container_low` for the card body and `surface_container_high` for a "Header" area. Use `spacing-6` (2rem) to separate list items.

### Special Component: The "Scroll Container"
For long-form content, use a container with `tertiary_container` (straw/paper tone) in light mode or a semi-transparent `surface_variant` in dark mode. Give it `xl` rounded corners on the top-left and bottom-right only to create an asymmetrical, "parchment" feel.

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Place a large headline on the left and a small body paragraph on the right with a `spacing-16` gap.
*   **Do** use the `secondary` (Forest Green) for success states to lean into the "Lush Forest" theme.
*   **Do** prioritize whitespace. If an interface feels crowded, double the spacing value (e.g., move from `8` to `16`).

### Don't
*   **Don't** use 1px solid dividers or borders. This is the quickest way to make the system look "cheap."
*   **Don't** use pure black `#000000` for text. Always use `on_surface` (#e5e3fb) to maintain the indigo-mist aesthetic.
*   **Don't** use sharp 0px corners. This system is a "Storybook"; it must remain soft and approachable at every touchpoint.