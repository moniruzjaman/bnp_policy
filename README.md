# BNP Policy Multimedia Portal (Bangladesh Agriculture & Governance)

Portal by Abu Md. Moniruzjaman, Additional Deputy Director (Horticulture), DAE Kurigram.
Content: 11 YouTube videos | 6 slide decks (60 slides) | 14 policy docs | 6 live apps.
Theme: Bangladesh national palette - Green #006A4E, Red #F42A41, Teal #00B894.

## Modular structure

    index.html            page structure only (~10 KB)
    assets/css/main.css   all styles + design tokens (:root vars)
    assets/js/slides.js   SLIDE_DECKS base64 slide images (~2.3 MB, rarely edited)
    assets/js/data.js     CONTENT DATA - edit this file for day-to-day updates
    assets/js/app.js      rendering + interaction logic
    bnp_policy.html       legacy monolith kept as backup reference

Script load order: slides.js -> data.js -> app.js (do not reorder).

## How to update

Add a video: append one entry inside const VIDS=[...] in assets/js/data.js:
    {id:"YOUTUBE_ID",t:"English title",s:"Bangla subtitle",cat:"Category",tag:"tag-ag",g:"pitch"},
Tag values: tag-bnp tag-ag tag-eb tag-ipm tag-eg tag-ss tag-pl tag-bd (labels in const TL).
Add a document: append inside const DOCS=[...] (same pattern).
Add a live app: append inside const APPS=[...] e.g. {t:"Name",s:"desc",url:"https://...",icon:"X",tag:"tag-ag"},

## Theme colors

Edit :root tokens at top of assets/css/main.css:
    --p primary | --a accent | --bg background | --bnp | --bnpred | --tx text

## Local dev

    python -m http.server 8000    # then open http://localhost:8000

## Deploy

GitHub Pages: automatic via .github/workflows on push to main.
Live: https://moniruzjaman.github.io/bnp_policy/
Vercel: static via vercel.json.
