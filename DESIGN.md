---
name: Ciné Action Festival
description: The website of an action short-film festival with martial arts at its core, a dark screening room lit by one red action.
colors:
  signal: "#d71e28"
  signal-hover: "#b5141d"
  signal-text: "#ff5a5f"
  ink: "#0a0a0a"
  ink-raised: "#141414"
  line: "#2a2a2a"
  line-strong: "#6b6b6b"
  paper: "#f5f5f5"
  paper-line: "#d4d4d4"
  mute: "#a3a3a3"
  mute-soft: "#8a8a8a"
  mute-ink: "#525252"
  white: "#ffffff"
typography:
  display-hero:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "11.875rem"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  display:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "8.5rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "4rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  numeral:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: '"tnum"'
  logotype:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.333
  lead:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  nav:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.5
  button:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4286
  caption:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4286
rounded:
  none: "0px"
spacing:
  hairline: "1px"
  gutter-sm: "24px"
  gutter-md: "40px"
  gutter-lg: "64px"
  gap: "32px"
  row: "32px"
  section-sm: "80px"
  section: "96px"
  section-lg: "128px"
  section-xl: "144px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    height: "52px"
  button-dark-hover:
    backgroundColor: "{colors.ink-raised}"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    height: "52px"
  button-outline-dark-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-header:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
  button-header-hover:
    backgroundColor: "{colors.signal-hover}"
  input-field:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: "52px"
  nav-link:
    textColor: "rgba(245, 245, 245, 0.8)"
    typography: "{typography.nav}"
    padding: "8px 0"
  nav-link-active:
    textColor: "{colors.paper}"
  nav-link-mobile:
    textColor: "{colors.paper}"
    padding: "20px 0"
  nav-link-mobile-active:
    textColor: "{colors.signal-text}"
  faq-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "32px"
  faq-toggle-open:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
  checkbox:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    size: "24px"
  checkbox-checked:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
  countdown-cell:
    backgroundColor: "rgba(10, 10, 10, 0.5)"
    textColor: "{colors.paper}"
    typography: "{typography.numeral}"
    padding: "16px"
  provisional-note:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  provisional-note-on-paper:
    textColor: "{colors.mute-ink}"
  band-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "128px 64px"
  grid-cell:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "32px"
  grid-cell-on-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "24px"
---

# Design System: Ciné Action Festival

## Overview

**Creative North Star: "The Screening Room"**

The house lights are down. The site is a near-black room in which the footage and the lettering do the work: a full-bleed stunt showreel, towering condensed capitals, off-white text set calmly beside them. One thing is lit red, and it points to the door candidates walk through: registration. This is the film-festival category standard played straight, held to the institutional restraint of the Festival de Cannes website: a structured programme, ruled tables, and nothing themed.

The page is generous and orderly. Sections breathe at 80 to 144 pixels of vertical space and sit left-aligned on a twelve-column grid, a display headline on the left and its lead on the right. Structure is drawn rather than boxed: one-pixel hairlines rule every list, table and grid, corners are square, and nothing casts a shadow. When a reader needs reference material (the competition's terms, the technical specifications) a light paper band interrupts the dark, like a printed programme handed out in the foyer.

Motion is rare and therefore felt. There is one authored entrance, the hero title rising line by line over the first frame of the reel, and otherwise only quick colour feedback. Imagery is real footage and stills, always credited. The system rejects martial-arts kitsch (dragons, katanas, brush strokes), template pages of centred text, and the site's retired look of yellow, Comic Neue and blue buttons.

**Key Characteristics:**
- Near-black ground with off-white type; colour comes from the footage, not the interface.
- One signal red, spent only on the action that moves a candidate forward and on live states.
- Anton in uppercase for display, Archivo Variable in sentence case for everything else.
- Square corners, 1px hairlines, no shadows; the hero scrim is the only gradient.
- Left-aligned twelve-column composition: headline left, lead right.
- A single authored entrance; everything else is 150 to 300ms feedback.
- Unconfirmed facts are marked as provisional, never stated as settled.

## Colors

A grayscale screening room with one red signal: a ladder of neutrals from near-black to off-white, and a red family used only where the visitor should act or where something is on.

### Primary
- **Signal Red** (#d71e28): The fill of every primary action that moves a candidate forward ("S'inscrire", "S'inscrire au concours", "Se connecter", "Créer mon compte") and of live states: the active desktop link's 1px underline, an open FAQ toggle, a checked box, the success mark. It is also the text-selection highlight (with white text) and the input caret. White on it reads 5.11:1. As text on ink it reads only 3.87:1, so on dark it is a fill, never small text.
- **Deep Signal** (#b5141d): The hover state of every red fill; white on it reads 6.81:1.
- **Lit Signal** (#ff5a5f): The only red allowed as text on ink (6.49:1, and 6.04:1 on Raised Black): the active item in the mobile menu, field error messages, and the border of an invalid field or unchecked required box.

### Neutral
- **Screening-Room Black** (#0a0a0a): The ground of every page, the header bar, the mobile menu and the scrollbar track; the dark button fill and the text colour on paper bands.
- **Raised Black** (#141414): One tonal step up: field fills, the profile-picture well, video and embed placeholders, the dark button's hover.
- **Hairline** (#2a2a2a): The default 1px rule on ink: section dividers, ruled rows, the header's bottom edge, the backing of one-pixel grids.
- **Control Hairline** (#6b6b6b): The stronger 1px boundary for controls and notes at rest: field borders, the FAQ toggle box, the unchecked checkbox, the provisional note, the scrollbar thumb.
- **Programme Paper** (#f5f5f5): Primary text on ink (18.16:1), the outline button's border, the focus ring, and the ground of paper bands.
- **Paper Rule** (#d4d4d4): Hairlines and grid backing on paper bands; the provisional note's border on paper.
- **Credit Grey** (#a3a3a3): Secondary text on ink (7.85:1): leads, body copy beside display headlines, captions, field hints, footer links, the "Festival" half of the header logotype, and the hover colour of text links.
- **Dim Grey** (#8a8a8a): Tertiary text on ink (5.73:1): placeholders, image credits, the legal bar, social accounts without a link yet, the second line of the footer logotype; also a field's border on hover.
- **Graphite** (#525252): Secondary text on paper (7.17:1): leads, definition terms and step descriptions inside paper bands.
- **White** (#ffffff): Text and icons on red fills only.

Translucent paper at 80 to 85% is a softer text tier on ink (resting nav links, the hero lead, long-form copy on the festival page). Translucent paper at 20 to 25% for rules, and translucent ink at 40 to 80% as a veil, appear only over footage and photographs.

### Named Rules
**The One Red Rule.** Red marks the way in and what is on. It fills the primary action and live states and nothing else: never a heading, a decorative rule, a resting border or an illustration.

**The Lit Red Rule.** Red text on ink is always Lit Signal (#ff5a5f). Signal Red (#d71e28) on ink falls to 3.87:1 and stays a fill.

**The Two Grounds Rule.** Ink is the ground and paper is the exception: at most one paper band per page. On it, secondary text switches to Graphite, rules to Paper Rule or ink, and the focus ring to ink. Credit Grey never sits on paper (2.31:1).

## Typography

**Display Font:** Anton, weight 400, self-hosted through Fontsource with latin and latin-ext subsets (Impact, sans-serif as an emergency fallback only)
**Body Font:** Archivo Variable on its weight axis, self-hosted through Fontsource (system-ui, -apple-system, Segoe UI, sans-serif fallback)

**Character:** A tall, compressed poster face shouting in capitals beside a sober grotesque that does all the explaining. Anton is the title card; Archivo is the programme notes.

### Hierarchy
- **Display Hero** (Anton 400, clamp(4rem, 13vw, 11.875rem), 0.9): The two-line festival title over the hero reel, and nothing else. The tight leading is safe because the only accented capital sits on the first line.
- **Display** (Anton 400, clamp(3.5rem, 10vw, 8.5rem), 1.15): Page titles in the page header. The same voice sets the paper-band title at clamp(3.5rem, 9vw, 8rem), the closing calls to action at clamp(3rem, 7 to 7.5vw, 6 to 6.5rem), the form-page titles at clamp(3.5rem, 7vw, 6rem), the footer logotype at clamp(3rem, 7vw, 6rem) and 0.95, and the single-word craft verbs at clamp(3.5rem, 9.5vw, 8.5rem) and 0.82.
- **Headline** (Anton 400, clamp(2.25rem, 4.5vw, 4rem), 1.15): The standard section heading, the most-used display size. Variants: the home statement at clamp(2.5rem, 5.6vw, 5.25rem), list-item titles at clamp(2.5rem, 4vw, 3.5 to 3.75rem), FAQ group titles at clamp(2rem, 3.5vw, 3rem), mobile-menu links at 2.75rem, contact-list entries at clamp(2.5rem, 7vw, 5.5rem).
- **Numeral** (Anton 400, 2rem rising to 2.75rem from 640px, 1, tabular figures): Countdown digits. Step numbers use the same face at 3.5rem.
- **Logotype** (Anton 400, 1.375rem, 1, +0.02em, uppercase): The header and mobile-menu wordmark, "Festival" in Credit Grey.
- **Title** (Archivo 600, 1.5rem, 1.333): Sub-section titles inside a section, spec group heads, the crafts statement. Fieldset legends and step titles sit at 1.25rem; the success heading at 1.875rem is Archivo's ceiling.
- **Lead** (Archivo 400, 1.125rem, 1.625): The paragraph beside a headline, in Credit Grey on ink or Graphite on paper; page-header leads step up to 1.25rem from 640px.
- **Body** (Archivo 400, 1rem, 1.625): Running text, held to a 40rem measure (about 70 characters).
- **Nav** (Archivo 500, 0.9375rem): Header links and the header call to action (at 600).
- **Button** (Archivo 600, 1rem): Every button label, in sentence case.
- **Label** (Archivo 600, 0.875rem): Field labels, footer column heads, the countdown heading.
- **Caption** (Archivo 400, 0.875rem): Captions, image credits, definition terms, field hints and errors (errors at 500), provisional notes. Countdown units drop to 0.75rem.

### Named Rules
**The Accent Clearance Rule.** Anton that can wrap sets line-height 1.15, because its accented capitals rise to 1.11em and strike the line above at anything tighter. Tighter leading is allowed only where no accented capital can reach a second line: the hero title (0.9), the footer logotype (0.95), single-word craft verbs (0.82).

**The Two Voices Rule.** Anton speaks in capitals; Archivo explains in sentence case. Anton never sets body copy, labels or buttons. Archivo is never uppercase, never heavier than 600, never larger than 1.875rem.

## Layout

Content sits in a centred container capped at 90rem (1440px) with side gutters of 24px, 40px from 768px and 64px from 1024px. From 1024px (occasionally 768px) the container becomes a twelve-column grid with a 32px gap. The recurring splits are 7/5 (page header, section openers, closing calls to action), 8/4 (the home statement), 4/8 (a sticky introduction beside a ruled list), 6/6 inside paper bands, and 5 + 6 with an empty column between image and text. Forms take seven columns starting at column six, beside a sticky four-column introduction. Everything is left-aligned; no section centres its text.

Vertical rhythm is generous and section-led: 80 to 96px of padding per section on small screens, 128 to 144px from 1024px (96px on the denser FAQ, form and contact pages). The page header uses 64px above and 56px below, rising to 96px and 80px. Ruled rows carry 24 to 32px of padding, rising to 32 to 40px. The header bar is 80px tall, 96px from 1024px, and sticky sidebars pin 8rem from the top.

Below 1024px every split stacks, headline first; button pairs stack full-width below 640px and sit side by side above it. The hero fills the small-viewport height (100svh) and anchors its content to the bottom edge. Media runs at 16:9 (4:3 for the festival page's lead still; the sign-in page's still fills its half of the screen from 1024px), always object-cover, with its caption beneath.

### Named Rules
**The Headline-Left Rule.** A section opens with its Anton headline on the left (seven of twelve columns) and its Archivo lead on the right (five columns), the lead aligned to the headline's foot. Below 1024px they stack, headline first. Nothing is centred.

## Elevation & Depth

The system is flat. No element carries a box-shadow. Depth comes from three tonal steps (Screening-Room Black, Raised Black, Programme Paper) and from 1px hairlines. The one gradient is the hero's legibility scrim, laid over the muted showreel: ink at 75% at the top under the header, thinning to 20 to 30% through the middle, then 88% and finally solid ink at the bottom where the title and actions sit. Below 1024px a flat 40% ink veil sits under the scrim for extra legibility on small screens. The stack is fixed: video, veil, scrim, content.

### Named Rules
**The Flat Rule.** Nothing casts a shadow. Depth is tonal (ink, Raised Black, paper) and linear (1px hairlines). The hero scrim is the only gradient, and it exists for legibility over footage.

**The One-Pixel Grid Rule.** Cell grids are drawn as a 1px gap over a hairline-coloured backing inside a 1px frame, so every interior rule is exactly one pixel and never doubles.

## Shapes

The form language is the cut and the rule. Every corner is square (0px): buttons, fields (the radius is reset explicitly so native selects and date inputs comply), the FAQ toggle, the checkbox, the profile-picture well, images and video. Borders are always 1px. The only geometry beyond rectangles is in the icon set, drawn by hand as SVG on a 24px grid: 1.75 stroke, square caps, mitre joins, currentColor. Play and pause are filled shapes, brand marks for the social networks are filled, and the check mark thickens to a 2.5 stroke so it holds at small sizes. Icons run at 16 to 24px beside text and 28 to 36px on the contact list.

### Named Rules
**The Square Rule.** Every corner is 0px and every border is 1px. No pill or circular containers, no rounding on any control.

## Components

### Buttons
Blunt flat slabs with sentence-case labels; a colour change is the only feedback.
- **Shape:** Square corners (0px), at least 52px tall, 16px by 28px padding, a 12px gap before an optional trailing arrow (20px).
- **Primary:** Signal Red fill, white label. Reserved for the action that moves a candidate forward.
- **Hover / Focus:** Fill shifts to Deep Signal over 150ms. Focus shows a 2px Programme Paper outline offset 3px (ink on paper bands).
- **Outline (on ink):** 1px Programme Paper border and label; on hover it fills paper with an ink label. The partner to a primary button on dark ground.
- **Dark and Outline Dark (on paper):** An ink fill with paper label (hover Raised Black), and a 1px ink outline that fills ink on hover. Used inside paper bands.
- **Header call to action:** A compact Signal Red slab, 44px tall with 20px side padding and a 15px semibold label.
- **Text link with arrow:** Semibold, 1px underline offset 0.3em, a 16px arrow; hover turns it Credit Grey. Used for secondary routes beside a button ("Questions fréquentes", "Le festival en détail").

### Inputs / Fields
- **Style:** Raised Black fill, 1px Control Hairline border, square corners, at least 52px tall, 12px by 16px padding, 16px text, placeholders in Dim Grey. A Label sits 8px above; a hint in Credit Grey sits 8px below. The caret is Signal Red.
- **Focus:** The border turns Programme Paper; there is no glow and no outline.
- **Hover:** The border lifts to Dim Grey.
- **Error:** The border turns Lit Signal and the hint is replaced by a Lit Signal message naming the problem and the fix. On submit, focus moves to the first invalid field.
- **Selects:** The same field with native styling removed and a 16px chevron, Credit Grey, 16px from the right edge. The date picker's indicator is inverted to read on dark.
- **Checkbox:** A 24px square with a Control Hairline border; checked, it fills Signal Red with a white check; invalid, its border turns Lit Signal. The focus ring follows the native input underneath.
- **Groups:** Fieldsets open with a 1.25rem semibold legend under a hairline, fields in two columns from 640px.

### Navigation
- **Header:** 80px tall, 96px from 1024px. On the home page it lies transparent over the hero; everywhere else it is sticky, solid ink, with a Hairline bottom edge.
- **Links:** Nav type in paper at 80%, turning full paper on hover over 150ms. The active link is full paper with a 1px Signal Red underline set just below it. Connexion sits as a link beside the compact red "S'inscrire".
- **Mobile (below 1024px):** A "Menu" button with a two-line icon opens a full-screen ink dialog: the logotype and "Fermer" at the top, the links as Anton headlines (2.75rem) in a hairline-ruled list with the active one in Lit Signal, and Connexion (outline) beside S'inscrire (primary) at the bottom. Escape closes it and the page behind stops scrolling.
- **Skip link:** "Aller au contenu" appears on focus as a paper chip with ink text.
- **Footer:** A two-line Anton logotype ("Festival" in Dim Grey), columns of links in Credit Grey that turn paper on hover, social accounts without a link shown in Dim Grey with "· bientôt", and a legal bar under a hairline.

### Hero
The home page's opening frame. The muted showreel plays full-bleed behind the scrim (it does not autoplay when reduced motion is requested, and a Pause/Lecture control sits in the bottom bar). The Display Hero title, a lead, a primary and an outline button sit bottom-left; the countdown sits bottom-right; a bottom bar under a 20% paper rule carries the next edition, the image credit and the video control.

Its entrance is the system's one authored moment: each title line rises from below its own clipped line box (1100ms, cubic-bezier(0.16, 1, 0.3, 1), 110ms between lines after a 150ms start), then the lead, countdown and actions fade up 14px in turn (900ms, starting at 550, 600 and 700ms). The animation runs only under prefers-reduced-motion: no-preference, so content is visible by default.

### Page Header
The opening of every inner page: a Display title in seven columns, and in the remaining five, aligned to its foot, a Lead plus an optional primary action, provisional note or edition line. A Hairline closes it.

### Ruled Lists and Definition Tables
The system's main container, used instead of cards.
- **On ink:** A top hairline, then rows divided by Hairline. Rules sit as term (1.125rem semibold, paper, two of eight columns) beside definition (1.125rem Credit Grey, six columns). Festival strands, crafts and contact entries use the same ruled row at larger scale, with an Anton title leading each row.
- **On paper:** Terms in Graphite caption type above values in 1rem medium ink, rows divided by Paper Rule, each group headed by a Title under a 1px ink rule. Steps are topped by a 1px ink rule with an Anton numeral.
- **Cell grids:** Facts and strands set in one-pixel grids (2 or 4 columns), each cell padded 24px (32 to 48px for the larger strand cells).

### Accordion (FAQ item)
- **Question:** A full-width button in 1.125rem (1.25rem from 640px) semibold paper, turning Credit Grey on hover. On the right, a 32px square toggle with a 1px Control Hairline border and a plus; the border brightens to paper on hover.
- **Open:** The toggle fills Signal Red (200ms) and the plus turns 45° into a cross (300ms, expo ease-out); the answer opens by animating grid rows from 0fr to 1fr over 300ms. Answers sit in 1.125rem Credit Grey at a 40rem measure.
- **Rhythm:** 24px of padding above and below each question, a Hairline between items.

### Countdown
A label row (Label "Ouverture des inscriptions", the date in Credit Grey with "· provisoire") above four cells in a 1px frame of 25% paper over 50% ink, divided by 1px rules. Numerals are Anton with tabular figures, units in 0.75rem Credit Grey. Screen readers get one sentence instead of the ticking cells, and once the date has passed the cells give way to "Les inscriptions sont ouvertes".

### Paper Band
A full-bleed Programme Paper section with ink text and Graphite secondary text, rules in Paper Rule or ink, and dark or outline-dark buttons beside the primary. It carries the page's reference block (the competition's terms and five steps, the technical specifications) or, on the festival page, the hand-off to the FAQ.

### Provisional Note
An inline caption in a 1px box (6px by 12px padding): Control Hairline border and Credit Grey text on ink, Paper Rule border and Graphite text on paper. It renders only while the festival data's provisional flag is on.

**The Visible Provisional Rule.** Unconfirmed facts come from the festival data file, never from hard-coded copy, and are marked where they appear: the provisional note on rules, specifications and answers, "· provisoire" beside the countdown date, "à annoncer" for unknown dates and venue, "· bientôt" for unlinked accounts. An unknown fact is never invented.

### Media and Captions
Stills and clips are real footage. Every image or video is captioned below a hairline with 12px of space on each side, in Credit Grey caption type, crediting its source. Videos with sound use native controls and load on demand, on a Raised Black placeholder.

## Do's and Don'ts

### Do:
- **Do** reserve Signal Red (#d71e28) for the action that moves a candidate forward and for on-states, and hover it to Deep Signal (#b5141d).
- **Do** use Lit Signal (#ff5a5f) for any red text on ink, including error messages and the active mobile-menu item.
- **Do** set every Anton line that can wrap in uppercase at line-height 1.15 with -0.005em tracking.
- **Do** draw structure with 1px rules: Hairline (#2a2a2a) between rows on ink, Control Hairline (#6b6b6b) around controls, Paper Rule (#d4d4d4) on paper, ink for emphasis rules on paper.
- **Do** open sections with the headline on the left and the lead on the right of the twelve-column grid, inside the 90rem container.
- **Do** give every interactive element a 150ms colour transition and the 2px Programme Paper focus ring at a 3px offset (ink on paper bands).
- **Do** run all motion on the expo ease-out, cubic-bezier(0.16, 1, 0.3, 1), behind prefers-reduced-motion: no-preference, starting from content that is visible by default.
- **Do** draw new icons on a 24px grid with a 1.75 stroke, square caps, mitre joins and currentColor.
- **Do** caption and credit every still and clip below a hairline.
- **Do** route unconfirmed facts through the festival data file and mark them as provisional where they appear.

### Don't:
- **Don't** round a corner, cast a shadow, or add a gradient other than the hero's legibility scrim.
- **Don't** set Signal Red (#d71e28) as text on ink, or Credit Grey (#a3a3a3) as text on paper.
- **Don't** add a second authored entrance; everything below the hero appears without animation.
- **Don't** set Archivo in uppercase or heavier than 600, and don't set body copy, labels or buttons in Anton.
- **Don't** centre section text; every section aligns left on the grid.
- **Don't** put a label above a section headline; the Anton headline opens its section on its own.
- **Don't** use dragons, katanas, brush strokes or other martial-arts kitsch, and don't bring back the retired yellow (#FCCD04), Comic Neue and blue-button look.
- **Don't** use emoji or Unicode glyphs as icons; the middle dot is punctuation only.
- **Don't** state an unconfirmed date, venue, prize or duration as settled.
