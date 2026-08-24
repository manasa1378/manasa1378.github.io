# Portfolio Site — Project Handoff

Continuation doc for picking this project back up in VS Code (with the Figma MCP server connected via Claude Code or another MCP-enabled tool). Everything below reflects the current state of the `portfolio/` folder as of this handoff.

## Figma source

- **File key:** `AKBYz8noijezrpvXz9Xk7H`
- **File name:** "Product Design – Healthcare"
- **File URL:** https://www.figma.com/design/AKBYz8noijezrpvXz9Xk7H/Product-Design---Healthcare

### Key node IDs

| Page | Figma node ID | Frame name |
|---|---|---|
| Homepage | `200:4612` | Home Page Full Frame |
| Elleloom case study | `144:1887` | Project 3 – Full Frame |
| Premier League Soccer case study | `181:661` | Project 2 – Full Frame |
| Mia Health case study | `188:1336` | Project 1 – Full Frame |
| Shared component: Nav menu | `35:413` | Menu (variants: Default, Home, Projects, About, Contact) |
| Shared component: Hero role text | `309:7343` | Homepage Hero Box (variants: Designer, Bioengineer, Both) |

If you reconnect the Figma MCP server in VS Code, use `get_design_context` with `fileKey: "AKBYz8noijezrpvXz9Xk7H"` and any of the node IDs above to pull fresh design context, or `get_metadata` (no `nodeId`, or `nodeId: "0:1"`) to re-list the whole page structure.

The case study frames are large — `get_design_context` on their top-level node IDs returns sparse metadata only (too big for one response). To get full code/copy for a sub-section, call `get_design_context` again on a child node ID (e.g. the "Problem" or "Solutions" sub-frame) rather than the whole case study frame at once.

## What's built so far

A static HTML/CSS/JS site, no build step, no dependencies:

```
portfolio/
├── index.html                  Home (Hero, Projects list, About, Footer)
├── project-elleloom.html       Case study
├── project-pls.html            Case study
├── project-mia-health.html     Case study
├── css/style.css                All styling — tokens below
├── js/script.js                 Mobile nav, scroll-based active nav link, hero text cycle, contact form stub
├── images/
│   ├── kolam-border-tile.png   ← you are adding this (real export)
│   ├── kolam-motif.png         ← you are adding this (real export)
│   ├── kolam-border-tile-fallback.svg   generated placeholder, unused unless you swap it in
│   ├── kolam-motif-fallback.svg         generated placeholder, unused unless you swap it in
│   └── (everything in the image list below is still needed)
└── README.md                    Setup + GitHub Pages publishing instructions
```

## Design tokens

- Background: `#F5F0E6`
- Text: `#001427`
- Accent teal: `#2F6F6A`
- Accent brick (buttons/footer): `#59190B`
- Headings/buttons/nav: **DM Sans** (700 bold, 600 semibold)
- Body copy: **Spectral** (400 regular, 300 light, italic)

## Animation

Figma's `get_motion_context` returned no keyframe/Smart Animate data anywhere in the file (checked the homepage and all 3 case study frames, recursively). The one animation signal in the file is structural: the hero role text component (`309:7343`) has three named variants — **Designer / Bioengineer / Both** — which reads as a cycling headline. That's implemented in `js/script.js` as a simple accessible cross-fade (`hero-role-word` span), respecting `prefers-reduced-motion`.

If your Figma file gets updated with real prototype interactions or Smart Animate transitions later, re-run `get_motion_context` on the relevant node — if the file was updated after this handoff, it may return real keyframe/easing data that should replace this hand-rolled version.

## Image checklist — still needed

You're providing the two Kolam assets (`kolam-border-tile.png`, `kolam-motif.png`). Everything else below still needs to be exported from Figma Dev Mode (select layer → Export → PNG/JPG → 2x) and saved into `/images` under these exact filenames, since the HTML already references them:

**Homepage (`index.html`):**
- `images/project-elleloom.jpg` — Elleloom "Staged Hero Image"
- `images/project-pls.jpg` — Premier League Soccer iPad mockup
- `images/project-mia-health.jpg` — Mia Health iPhone mockup
- `images/about-portrait.jpg` — "WhatsApp Image..." (About Me portrait)

**`project-elleloom.html`:**
- `images/elleloom-problem.jpg`
- `images/elleloom-wireframes.jpg`
- `images/elleloom-instructions.jpg`
- `images/elleloom-solutions.jpg`
- `images/elleloom-rebrand.jpg`

**`project-pls.html`:**
- `images/pls-problem-chart.jpg`
- `images/pls-wireframes.jpg`
- `images/pls-mirror-ui.jpg`
- `images/pls-medical-team.jpg`

**`project-mia-health.html`:**
- `images/mia-old-homepage.jpg`
- `images/mia-new-homepage.jpg`
- `images/mia-menopause-homepage.jpg`
- `images/mia-pregnancy-homepage.jpg`
- `images/mia-high-risk-checkin.jpg`

Once a file is dropped in, replace the matching `<div class="image-placeholder">...</div>` with an `<img src="images/filename.jpg" alt="...">` tag (homepage already has commented-out `<img>` lines ready to uncomment; case study pages need the tag added directly).

## Known gaps / things to revisit

- **Case study screen mockups**: the Figma case study frames contain dozens of nested phone-UI mockups (calibration screens, graphs, questionnaires, etc.). These were summarized as prose + single hero images per section rather than rebuilt pixel-for-pixel — worth revisiting in Figma Dev Mode if you want richer visual fidelity per case study.
- **Contact form**: currently just a JS stub (shows an alert). Needs a real backend — Formspree or Netlify Forms are the fastest options — before publishing.
- **GitHub Pages publishing steps**: see `README.md` in this folder for the full walkthrough (repo naming, `git push`, enabling Pages).

## Suggested next steps in VS Code

1. Open this `portfolio/` folder in VS Code with the Figma MCP server connected.
2. Re-run `get_design_context` on the case study sub-frames (e.g. the "Solutions" frame inside each project) if you want to pull richer mockup detail per section.
3. Drop in the real image exports per the checklist above.
4. Wire up the contact form to a real form backend.
5. `git init` → push → enable GitHub Pages (see README.md).
