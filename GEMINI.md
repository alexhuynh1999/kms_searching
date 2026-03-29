# KMS Searching - Repository Analysis

## Overview
`kms_searching` is a front-end React application designed to help English-speaking MapleStory players search for optimal gameplay videos on YouTube from Korean MapleStory (KMS) players. Because the most optimized rotation and bossing guides are often recorded in Korean, players unacquainted with the language struggle to find good references. This app acts as a query builder, translating English game terminology into Korean and generating a direct YouTube search link.

## Tech Stack
* **Framework:** React (Bootstrapped via Create React App)
* **Styling/Components:** Material-UI (MUI `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`)
* **Deployment Setup:** GitHub Pages (`gh-pages` is present in dependencies for rapid deploying)

## Core Features & Logic
The user interacts with a series of dropdowns depending on the mode they are interested in (*Mobbing/Training* vs *Bossing*).

1. **Translations (`src/constants/`)**: The repository houses constant dictionaries that map English MapleStory terminology to Korean:
   * `classes.js` (e.g., "Hero" -> "히어로")
   * `bosses.js` & `bossDifficulties.js` & `difficulties.js`
   * `maps.js` (Areas and specific map names)

2. **Query Building (`src/helpers/urlFactory.js`)**: Converts the translated terms into an encoded YouTube search string. For example, it naturally appends "메이플" (Maple) and specific contextual tags like "사냥터" (Hunting ground) or "뇌빼기" (Lazy brain/AFK rotation).

3. **User Interface (`src/pages/HomePage/HomePage.js`)**: The root view that manages the application state (`selectedValues`). It shifts between two primary modes:
   * **Mobbing/Grinding Mode:** User selects Class + Area + Map + "Lazy Rotation" toggle.
   * **Bossing Mode:** User selects Class + Boss + Difficulty.

4. **Dynamic Linking (`src/pages/HomePage/YouTubeLink.js`)**: Takes the current component state and invokes the `urlFactory` to render a clickable hyperlink straight to YouTube's search results.

## Project Structure
```text
kms_searching/
│
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI elements (Banner, SearchableDropDown)
│   ├── constants/          # English-to-Korean translation dictionaries
│   ├── helpers/            # Pure functions (urlFactory for youtube links)
│   ├── pages/              # Main page views (HomePage and its modular dropdowns)
│   ├── theme/              # Custom MUI theme config (default.js)
│   ├── App.js              # ThemeProvider wrapper and app entry point
│   └── index.js            # React DOM render hook
│
├── package.json            # Project dependencies and script commands 
└── README.md               # Credits origin of translations
```

## Potential Next Steps
- Implement React Router if adding additional pages (e.g., About, or a reverse search finding English equivalents).
- Add functionality for checking the YouTube Content API directly (to display video thumbnails natively).
- Expand translation dictionaries for newly released maps or newer bosses.
