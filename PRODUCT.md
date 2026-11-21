# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, served equally:

- **Filmmakers (candidates):** young hopefuls and confirmed talents, solo or in a collective, who want to enter the short-film competition. Their job: understand the competition, read the rules and technical requirements, create an account, then upload their film and its details (subtitles, crew) from a personal space before the deadline.
- **Audience and spectators:** people who follow the festival and its week of events, watch the finalist screenings at the closing gala, and keep up with announcements through social networks.

## Product Purpose

The website of the Ciné Action Festival: it presents the festival, runs the call for entries of its short-film competition, and gives the public a reason to follow and attend. Success means more qualified submissions that respect the format and theme, and an audience that knows when and where things happen.

## Positioning

A festival dedicated exclusively to action cinema, with martial arts at its core. It puts the craft of action in the spotlight: it awards prizes to the people who coordinate fights and stunts, the people who film them, and the people who perform them. The competition asks for short action films on an imposed theme, open to everyone.

## Operating Context

The festival runs over one week with four distinct strands:

1. A forum on the behind-the-scenes trades of cinema ("métiers de l'ombre").
2. An exhibition on one of the world's film industries.
3. A day of demonstrations and introductions to action scenes.
4. A closing gala with the screening of the finalist short films in competition.

Candidate path, as stated on the current site: Inspiration → Inscription (account) → Réalisation (respect the duration and the theme) → Participation (upload the film from the personal space, then fill in the work's details, subtitles and crew) → Confirmation (an email gives the screening date).

## Capabilities and Constraints

- Existing stack: React 18 (Create React App), React Router 6, Tailwind CSS 3. No backend wired yet: forms log to the console.
- Routes: `/` home, `/participer` participation conditions, `/faq`, `/about`, `/inscription`, `/connexion`, `/a_venir` (page under construction, also used as Contact).
- Registration form fields: email, password and confirmation, first name, last name, phone, company or association (optional), gender, birth date, address, postcode, city, country, profile picture, username, rules acceptance. Google sign-in is offered as an option.
- Language: French.
- **Open decision:** the film duration is stated as 2 min 30 in the festival description and 2 min 20 in the step list. Must be confirmed.
- **Open decision:** dates of the edition, opening of registrations, submission deadline, venue, the imposed theme, and prizes are not known. The countdown in the code targets 1 January 2023, which has passed.

## Brand Commitments

- Official name: **Ciné Action Festival**.
- The incumbent visual look (yellow #FCCD04, Comic Neue, blue buttons) is not binding; it is being replaced.
- Standing preference (chosen 2026-11-21): the category standard for film-festival websites, played straight, with no gimmick world. Craft bar: the Festival de Cannes website.

## Evidence on Hand

- `src/assets/video/Serge_Crozon_presentation.mp4`: presentation video featuring Serge Crozon, used as the home hero.
- YouTube example film embed: `https://www.youtube.com/embed/53rv31Bc5HM`.
- The festival description and the five candidate steps in `src/Page/A_Propos/index.jsx` are real copy.
- Everything else (rules details, video/sound/subtitle specs, FAQ, partners) is placeholder. The user asked for realistic provisional copy, clearly flagged as provisional, with a list of what to verify. Never invent dates, prizes, jury members, partners, attendance figures or testimonials presented as facts.

## Product Principles

1. **Action is a craft.** The site honours the people who make fights and stunts: choreographers, camera operators, performers. Never treat action as cheap spectacle.
2. **Two doors, one festival.** Candidates and audience each find their path within seconds, without one burying the other.
3. **Rules are clear before they are exciting.** Duration, theme, formats and deadline are unmistakable wherever a candidate decides to enter.
4. **Open to everyone.** Beginners and professionals alike must feel invited, not judged.

## Accessibility & Inclusion

No specific requirement established. Default to WCAG 2.2 AA; background video must stay muted, never block content, and respect reduced-motion preferences.
