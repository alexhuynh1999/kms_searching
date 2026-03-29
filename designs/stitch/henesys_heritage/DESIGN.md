# Design System Document

## 1. Overview & Creative North Star: "The Whimsical Odyssey"

This design system is not a static set of rules; it is a portal to a nostalgic, high-fidelity world. Our Creative North Star is **The Whimsical Odyssey**. We aim to bridge the gap between childhood playfulness and high-end editorial sophistication. 

To move beyond the "standard template" look, this system embraces **Organic Asymmetry**. Layouts should feel like a hand-composed adventure map—elements should overlap slightly, containers should feel like floating islands, and typography should dominate with a sense of "character-led" storytelling. We avoid rigid, boxy grids in favor of high-radius containers and deep tonal layering that mimics the parallax depth of a classic 2D side-scroller.

---

## 2. Colors & Environmental Tones

Our palette is split into two distinct environmental "biomes." 

*   **Light Mode (Henesys Mornings):** Dominated by `surface` (#fff8f5) and `primary` (#9c4600), evoking autumn maple leaves and sun-drenched clearings.
*   **Dark Mode (Kerning After Hours):** While utilizing the same tokens, the implementation shifts toward high-contrast glows. The `secondary` (#006690) and `tertiary` (#2b6d00) accents act as neon signs against deep, mysterious backdrops.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. 
*   *Example:* A `surface-container-low` section sitting on a `surface` background provides all the separation needed. If it looks "flat," adjust the elevation tier, do not add a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. To create "nested" depth:
1.  **Base Layer:** `surface`
2.  **Structural Sections:** `surface-container-low` (#fff1e9)
3.  **Interactive Cards:** `surface-container` (#ffeadc)
4.  **Floating Modals/Popovers:** `surface-container-highest` (#ffdcc3)

### The "Glass & Gradient" Rule
To capture the "soul" of the inspiration, use **Glassmorphism** for floating HUD elements. Use semi-transparent `surface` colors with a `backdrop-filter: blur(12px)`. 
*   **Signature Gradients:** Main CTAs must use a subtle linear gradient transitioning from `primary` (#9c4600) to `primary_container` (#ffae81) at a 135-degree angle.

---

## 3. Typography: Editorial Playfulness

We use a duo of **Plus Jakarta Sans** for headlines (to provide a modern, high-end feel) and **Be Vietnam Pro** for body text (to maintain a friendly, legible character).

*   **Display (Large/Medium):** Use `display-lg` (3.5rem) with tight tracking (-2%) for hero sections. This is your "Title Screen" font.
*   **Headlines:** `headline-md` (1.75rem) should feel like quest titles—bold and inviting.
*   **Body:** `body-lg` (1rem) is our workhorse. Ensure line-height is generous (1.6) to maintain an airy, whimsical feel.
*   **Labels:** Use `label-md` in all-caps with increased letter-spacing for "meta" information, evoking the small, pixelated UI labels of classic RPGs.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "software-like." We use **Ambient Softness**.

*   **The Layering Principle:** Stack `surface-container-lowest` cards on `surface-container-low` sections. This creates a soft, natural "lift" without visual noise.
*   **Ambient Shadows:** When an element must float (e.g., a dropdown), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(78, 41, 5, 0.06)`. Note the use of `on-surface` (#4e2905) for the shadow tint instead of pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use a "Ghost Border": `outline-variant` (#e0a678) at **15% opacity**. 

---

## 5. Components

### Buttons
*   **Primary:** Fully rounded (`radius-full`), gradient-filled (`primary` to `primary-container`). Add a subtle 2px inner-glow at the top to mimic a tactile "3D" button.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Interaction:** On hover, buttons should scale 1.05x. This "bounce" mimics game-like feedback.

### Cards & Lists
*   **The Borderless Rule:** Forbid divider lines. Use `spacing-6` (2rem) of vertical white space or shift the background to `surface-variant` to separate content blocks.
*   **Card Styling:** Use `radius-xl` (3rem) for all main containers to emphasize the "whimsical" nature.

### Input Fields
*   **Style:** Pill-shaped (`radius-full`). 
*   **State:** The "Active" state should use a soft outer glow of `secondary` (#006690) at 20% opacity rather than a harsh border change.

### Iconic Motifs (Special Components)
*   **The "Quest Badge":** Use `tertiary_container` (#a0eb77) for success chips or "complete" states, mimicking the lush greens of the starter maps.
*   **Health Bars (Progress):** Use `primary` (#9c4600) for the fill and `surface-dim` for the track. The track should be fully rounded.

---

## 6. Do's and Don'ts

### Do:
*   **Overlap Elements:** Let images bleed out of containers or let text overlap background elements slightly to break the "web grid."
*   **Use High Roundness:** If an element isn't at least `radius-md`, it doesn't belong in this system.
*   **Embrace Color:** Use the `secondary` and `tertiary` tokens for icons and accents to keep the "bright and whimsical" promise.

### Don't:
*   **Don't use 1px Dividers:** They are the enemy of this system's premium, organic feel.
*   **Don't use Pure Black (#000):** Even in dark mode, use the `on-surface` or `inverse_surface` tones to keep the "mysterious" but soft atmosphere.
*   **Don't use Sharp Corners:** Sharp corners break the immersion of the "Whimsical Odyssey." Ensure even smaller elements like tooltips use at least `radius-sm`.

### Accessibility Note:
While we use soft tonal shifts for hierarchy, ensure that all text (`on-surface`) maintains at least a 4.5:1 contrast ratio against its specific `surface-container` tier. Use the `error` (#aa371c) token sparingly but clearly for critical warnings.