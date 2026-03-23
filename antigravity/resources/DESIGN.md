# Design System Strategy: Kinetic Precision

## 1. Overview & Creative North Star

The Creative North Star for this system is **"The Kinetic Architect."**

We are moving beyond the standard fitness app "dashboard" to create an editorial-grade workspace for elite trainers. This system blends the high-energy, high-contrast aesthetics of premium athletic brands with the obsessive functional precision of top-tier developer tools.

To break the "template" look, we utilize **Intentional Asymmetry**. Major layouts should avoid perfectly centered grids; instead, use heavy left-aligned typography contrasted against floating, glass-morphic data modules. We treat the screen as a high-performance engine: every element is either a structural chassis or a glowing, energetic component.

---

## 2. Colors & Surface Architecture

Our palette isn't just a set of colors; it’s a hierarchy of energy. The navy depth of the background provides a vacuum in which the Electric Lime and Energetic Blue can "pop" with maximum luminance.

### The Foundation

- **Surface (`#0b1326`):** The absolute base. Use for the primary canvas.
- **Surface Container Low (`#131b2e`):** For large secondary sections or sidebars.
- **Surface Container High (`#222a3d`):** The primary card level.
- **Primary / Electric Lime (`#9ee939`):** Action and achievement.
- **Secondary / Energetic Blue (`#adc6ff`):** Data visualization and professional stability.

### The "No-Line" Rule

Traditional UI relies on 1px borders to separate content. **We prohibit this.** Sectioning must be achieved through background shifts. If you need to separate a list of workouts from a schedule, transition from `surface-container-low` to `surface-container-high`. The eye should perceive depth, not lines.

### Signature Textures & Glass

- **The Glow Factor:** For primary CTAs, do not use flat lime. Use a subtle linear gradient from `primary` (#9ee939) to `primary-container` (#84cc16) at a 135-degree angle.
- **Glassmorphism:** Floating action buttons or top navigation bars must use `surface-bright` (#31394d) at 60% opacity with a **20px backdrop-blur**. This creates a "frosted" lens effect that feels premium and high-end.

---

## 3. Typography: Editorial Authority

We use a dual-sans system to balance athletic aggression with professional clarity.

- **Display & Headlines (Plus Jakarta Sans):** These are your "shout" moments. Use `display-lg` (3.5rem) with tight letter spacing (-0.04em) for hero stats or workout titles.
- **Title & Body (Inter):** The "workhorse." Inter provides the technical, "Linear-style" precision needed for complex training schedules.
- **Hierarchy as Identity:** Always pair a massive `headline-lg` with a much smaller, muted `label-md` in all-caps. This high contrast in scale is what separates "standard" apps from "editorial" experiences.

---

## 4. Elevation & Depth: Tonal Layering

We do not use drop shadows to represent distance; we use light.

- **The Layering Principle:**

1. Base Canvas: `surface`
2. Grouping Areas: `surface-container-low`
3. Interactive Cards: `surface-container-high`
4. Modals/Popovers: `surface-container-highest`

- **Ambient Shadows:** When a card must float (e.g., a dragging interaction), use a shadow tinted with the `on-surface` color: `rgba(218, 226, 253, 0.08)` with a 40px blur.
- **The "Ghost Border" Fallback:** If a border is required for accessibility on a card, use `outline-variant` (#424936) at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Interface Elements

### Buttons

- **Primary:** Background `primary-container` (#84cc16), Text `on-primary` (#1f3700). High-contrast, bold weight. Border radius: `md` (0.75rem).
- **Secondary:** Transparent background, `Ghost Border` (1.5px), Text `on-surface`.
- **States:** On hover, the Primary button should gain a 4px inner "glow" (box-shadow inset) using `primary-fixed`.

### Cards & Progress

- **The "No-Divider" Rule:** In workout lists, never use horizontal rules. Use **Spacing Scale 4 (1.4rem)** to create clear air between items. Separation is achieved by the rhythm of the typography.
- **Data Visualization:** Use `secondary` (Energetic Blue) for "Work in Progress" and `primary` (Electric Lime) for "Completed/Target Met."

### Specialized Trainer Components

- **The Workout Timeline:** A vertical track using `surface-variant`. Completed segments glow with a `primary` outer blur; upcoming segments remain muted `outline`.
- **Performance Chips:** Small, high-density chips using `tertiary-container` (#fea518) for "High Intensity" tags, providing a warm contrast to the cool navy/lime palette.

---

## 6. Do’s and Don’ts

### Do

- **Use "Aggressive" Whitespace:** If you think there is enough space, add one more level from the Spacing Scale.
- **Embrace Asymmetry:** Place a large headline on the left and a small, glowing action button on the far right.
- **Micro-interactions:** Use 1.5px stroke icons (Lucide style). Icons should "pulse" or shift color to `primary` only when active.

### Don’t

- **No Pure Black:** Never use #000000. It kills the depth of the Navy `surface`.
- **No Heavy Borders:** 100% opaque borders make the app look like a legacy enterprise tool. Stick to the "No-Line" rule.
- **No Center-Alignment for Content:** Avoid centering long lists or forms. Keep the "Architect" feel by anchoring elements to a strong left-side vertical axis.

### Accessibility Note

While we prioritize a "Dark Editorial" look, ensure all `label-sm` text maintains at least a 4.5:1 contrast ratio against its specific `surface-container` tier. Use `on-surface-variant` (#c1cab0) for secondary text to ensure readability without sacrificing the dark-mode aesthetic.
