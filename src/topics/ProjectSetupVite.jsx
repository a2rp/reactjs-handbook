import React from "react";
import { Styled } from "./styled";

/**
 * Topic — Project setup with Vite; npm scripts; folder structure; .env.*; aliases
 */
export default function ProjectSetupVite({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "project-setup-vite";

    return (
        <Styled.Topic>
            <Styled.Title
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                data-open={open}
            >
                <Styled.Arrow data-open={open}>▸</Styled.Arrow>
                <span>Project setup with Vite; npm scripts; folder structure; .env.*; aliases</span>
            </Styled.Title>

            <Styled.Panel
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-button`}
                data-open={open}
            >
                <div>
                    <Content />
                </div>
            </Styled.Panel>
        </Styled.Topic>
    );
}

/* -------------------- Tutorial Content -------------------- */
function Content() {
    return (
        <Styled.Content>
            <h3>How I bootstrap a React app (Vite)</h3>
            <Styled.Code aria-label="create project">
                {String.raw`# 1) Create
npm create vite@latest reactjs-handbook -- --template react

# 2) Install deps
cd reactjs-handbook
npm i

# 3) Add styled-components (my base UI choice)
npm i styled-components

# 4) Start dev server
npm run dev
`}
            </Styled.Code>

            <h3>Folder structure I keep</h3>
            <Styled.Code aria-label="folder tree">
                {String.raw`.
reactjs-handbook/
├─ public/
│  ├─ 404.html            # SPA refresh fix for GitHub Pages
│  └─ favicon.svg
├─ src/
│  ├─ assets/
│  ├─ components/         # shared UI bits
│  ├─ topics/             # each tutorial component lives here
│  │  ├─ HowReactThinks.jsx
│  │  ├─ ES6Daily.jsx
│  │  └─ ProjectSetupVite.jsx   # (this one)
│  ├─ styled.js           # my shared Styled object
│  ├─ ReactTutorial.jsx   # main list rendering topics
│  ├─ App.jsx
│  └─ main.jsx
├─ .env                   # defaults (never secrets)
├─ .env.development
├─ .env.production
├─ .env.local             # gitignored machine-specific
├─ vite.config.js
├─ package.json
└─ README.md
`}
            </Styled.Code>

            <h3>npm scripts I actually use</h3>
            <p>I prefer a simple set; deploy uses <code>gh-pages</code> to branch <code>gh-pages</code>.</p>
            <Styled.Code aria-label="package.json scripts">
                {String.raw`"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "predeploy": "npm run build",
  "deploy": "npx gh-pages -d dist -b gh-pages"
}`}
            </Styled.Code>

            <h3>Vite config I keep for GitHub Pages + aliases</h3>
            <p>
                Since this repo deploys to <strong>/reactjs-handbook/</strong>, I set <code>base</code>.
                I also map aliases so imports stay clean.
            </p>
            <Styled.Code aria-label="vite.config.js with base and aliases">
                {String.raw`// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  base: "/reactjs-handbook/",   // repo name for GitHub Pages
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "~topics": fileURLToPath(new URL("./src/topics", import.meta.url)),
    },
  },
});
`}
            </Styled.Code>

            <p>Example usage of those aliases:</p>
            <Styled.Code aria-label="alias import usage">
                {String.raw`import Button from "~components/Button.jsx";
import HowReactThinks from "~topics/HowReactThinks.jsx";
import { someUtil } from "@/lib/utils.js"; // if I add /src/lib/utils.js
`}
            </Styled.Code>

            <h3>.env strategy (Vite)</h3>
            <ul>
                <li>Only variables prefixed with <strong>VITE_</strong> are exposed to the client.</li>
                <li>I keep secrets on the server; frontend .envs are for public config.</li>
                <li>Files are loaded by <em>mode</em>: <code>.env</code> → <code>.env.development</code> / <code>.env.production</code> → <code>.env.local</code>.</li>
                <li>I can build with a custom mode like <code>--mode staging</code> to load <code>.env.staging</code>.</li>
            </ul>

            <Styled.Code aria-label="env files + usage">
                {String.raw`# .env
VITE_APP_NAME=ReactJS Handbook

# .env.development
VITE_API_BASE=http://localhost:3000

# .env.production
VITE_API_BASE=https://api.example.com

# .env.local   (gitignored; machine specific)
VITE_DEBUG=true

// usage in code
console.log(import.meta.env.VITE_APP_NAME);
const api = import.meta.env.VITE_API_BASE;
`}
            </Styled.Code>

            <h3>SPA refresh fix (must-have for Pages)</h3>
            <p>I include a minimal redirect file so deep links don’t 404 on refresh.</p>
            <Styled.Code aria-label="public/404.html">
                {String.raw`<!doctype html><html><head>
  <meta http-equiv="refresh" content="0; url=/reactjs-handbook/">
</head><body></body></html>
`}
            </Styled.Code>

            <h3>My quick checklist</h3>
            <ul>
                <li>Set <strong>base</strong> to <code>/reactjs-handbook/</code> for GitHub Pages.</li>
                <li>Add <code>public/404.html</code> for SPA routing.</li>
                <li>Use aliases (<code>@</code>, <code>~components</code>, <code>~topics</code>) to avoid long relative paths.</li>
                <li>Expose only <code>VITE_*</code> envs; never commit secrets.</li>
                <li>Keep deploy script using <code>gh-pages</code> and set Pages to branch <code>gh-pages</code>.</li>
            </ul>

            <Styled.Divider />
            <p>That’s my Vite setup routine. Next I’ll move to “JSX — syntax rules & patterns” in the same toggle format.</p>
        </Styled.Content>
    );
}
