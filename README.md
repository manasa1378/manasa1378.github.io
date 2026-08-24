# Manasa Vasudevan — Portfolio

A static HTML/CSS/JS site built from the Figma design ("Product Design – Healthcare" file, Home Page frame). No build step, no dependencies — ready for GitHub Pages.

## Folder structure

```
portfolio/
├── index.html                  Home page (Hero, Projects, About, Footer)
├── project-elleloom.html       Case study: Elleloom
├── project-pls.html            Case study: Premier League Soccer
├── project-mia-health.html     Case study: Mia Health
├── css/
│   └── style.css               All styling — colors/fonts pulled from Figma
├── js/
│   └── script.js               Mobile nav toggle, scroll-based nav highlight, contact form stub
├── images/
│   ├── kolam-border-tile.svg   decorative divider (already done, no action needed)
│   ├── kolam-motif.svg         decorative background circle (already done, no action needed)
│   └── (you need to add real photos — see below)
└── README.md
```

Each "View Case" button on the homepage now links to its own case study page, and each case study page links to the next one plus back to the homepage — all 4 pages, matching the structure of your Figma file.

## 1. Replace the placeholder images

The text, layout, colors, and fonts on every page are pulled directly from your Figma file, but I can't download your actual photos/app-screen mockups through the API (they're temporary preview links, and the case studies contain dozens of nested screen mockups that aren't practical to rebuild pixel-for-pixel in code). Every dashed placeholder box in the HTML tells you exactly which filename to export into `/images`:

**Homepage (`index.html`):**

| Figma layer | Save as |
|---|---|
| "Staged Hero Image" (Elleloom project) | `images/project-elleloom.jpg` |
| iPad mockup (Premier League Soccer project) | `images/project-pls.jpg` |
| iPhone mockup (Mia Health project) | `images/project-mia-health.jpg` |
| "WhatsApp Image..." (About Me portrait) | `images/about-portrait.jpg` |

**Case study pages:** each `<div class="image-placeholder">` names its own filename (e.g. `images/elleloom-solutions.jpg`, `images/pls-mirror-ui.jpg`, `images/mia-new-homepage.jpg`) — open each project page in Figma Dev Mode, find the matching screen/mockup group, and export it under that name.

**To export from Figma:** select the layer → right panel → Export → choose PNG or JPG → 2x → Export.

Once a file is in place, open the relevant `.html` file and swap the placeholder `<div class="image-placeholder">...</div>` for an `<img src="images/your-file.jpg" alt="...">` tag (the homepage already has the commented-out `<img>` line ready to uncomment; for case study pages, just add the tag directly).

## 2. Preview locally

Just open `index.html` in a browser — no server needed. Or, for a local server (recommended so relative paths behave exactly like they will online):

```bash
cd portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Publish to GitHub Pages

1. **Create a repo** on GitHub. For a personal site at `https://yourusername.github.io`, name the repo exactly `yourusername.github.io`. For a project page instead (`https://yourusername.github.io/portfolio`), name it anything, e.g. `portfolio`.

2. **Push this folder's contents** to the repo:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under "Build and deployment" → Source, select **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**

4. Wait 1–2 minutes, then your site is live at:
   - `https://yourusername.github.io` (if repo is named `yourusername.github.io`), or
   - `https://yourusername.github.io/YOUR-REPO-NAME` (if it's a project repo)

## 4. Make the contact form actually send email

GitHub Pages only serves static files — it can't receive form submissions on its own. The form in `js/script.js` currently just shows an alert. To make it work, sign up for a free service like [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/), then point the form's `action` attribute at the endpoint they give you (a couple lines of change in `index.html`).

## Design tokens (for future edits)

- Background: `#F5F0E6`
- Text: `#001427`
- Accent (teal): `#2F6F6A`
- Accent (brick/buttons/footer): `#59190B`
- Headings/buttons/nav: **DM Sans** (700 bold, 600 semibold)
- Body copy: **Spectral** (400 regular, 300 light, italic)
