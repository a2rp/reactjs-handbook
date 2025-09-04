import{R as o,j as e,d as c}from"./index-B46-zIwX.js";import{S as n}from"./styled-CjylpLiR.js";function h({defaultOpen:s=!1}){const[t,r]=o.useState(!!s),i="react-definition";return e.jsxs(n.Topic,{children:[e.jsxs(n.Title,{onClick:()=>r(a=>!a),"aria-expanded":t,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"React: definition & inspiration"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(p,{})})})]})}function p(){return e.jsxs(n.Content,{children:[e.jsx("h3",{children:"What is React (how I define it)"}),e.jsxs("p",{children:["React is a ",e.jsx("strong",{children:"JavaScript library for building user interfaces"}),". I use it to describe UI as a pure function of state: ",e.jsx("em",{children:"UI = f(state)"}),". Instead of manually manipulating the DOM step-by-step, I declare how the UI should look for a given state and React takes care of updating the browser efficiently."]}),e.jsxs("p",{children:["It’s ",e.jsx("strong",{children:"component-based"})," (I build small, reusable components),"," ",e.jsx("strong",{children:"declarative"})," (I say “what”, not “how”), and it prefers"," ",e.jsx("strong",{children:"one-way data flow"})," (data goes down from parent to child)."]}),e.jsx("h3",{children:"Why React was created (the inspiration I keep in mind)"}),e.jsxs("p",{children:["React originated to tame complex, interactive UIs where frequent state changes made imperative DOM code fragile. The big idea was: treat the DOM as a ",e.jsx("em",{children:"result"})," of state, reconcile differences between the previous and next “virtual tree”, and update only what changed. This approach simplified mental load and reduced UI bugs caused by manual DOM ops."]}),e.jsx("p",{children:"Composition over inheritance, predictable data flow, and a fast diffing strategy (keys + identity) are the core inspirations that shaped how I write React apps today."}),e.jsx("h3",{children:"Mini example (UI = f(state))"}),e.jsx(n.Code,{"aria-label":"UI = f(state)",children:String.raw`function Hello() {
  const [name, setName] = React.useState("Ash");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
// I declare what the UI should be for the current 'name'.
// React handles the DOM updates when 'name' changes.`}),e.jsx("h3",{children:"Where I reach for React (and where I don't)"}),e.jsx("p",{children:"I reach for React when I’m building interactive dashboards, forms, and views with lots of dynamic state. If a page is mostly static content, plain HTML/CSS (or a lightweight templating setup) can be enough; I don’t force React where it doesn’t add value."}),e.jsxs("p",{children:["That’s my short, practical mental picture: ",e.jsx("strong",{children:"components + state → declarative UI"}),", with React efficiently reconciling changes under the hood."]})]})}function x({defaultOpen:s=!1}){const[t,r]=o.useState(!!s),i="vite-install";return e.jsxs(n.Topic,{children:[e.jsxs(n.Title,{onClick:()=>r(a=>!a),"aria-expanded":t,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Vite install (create app, run dev)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(j,{})})})]})}function j(){return e.jsxs(n.Content,{children:[e.jsx("h3",{children:"Prereq (1-time)"}),e.jsx("p",{children:"I generally work on node version 18."}),e.jsx(n.Code,{"aria-label":"check node",children:String.raw`node -v   # v18.20.4`}),e.jsx("h3",{children:"Create a new React app (interactive)"}),e.jsx("p",{children:"I usually run the interactive creator and pick React."}),e.jsx(n.Code,{"aria-label":"create vite app",children:String.raw`npm create vite@latest

# Prompts I pick:
# ✔ Project name: » reactjs-handbook
# ✔ Select a framework: » React
# ✔ Select a variant: » JavaScript
`}),e.jsx("h4",{children:"One-liner (skip prompts)"}),e.jsx(n.Code,{"aria-label":"one-liner create",children:String.raw`npm create vite@latest reactjs-handbook -- --template react`}),e.jsx("h3",{children:"Install & run locally"}),e.jsx(n.Code,{"aria-label":"install + dev",children:String.raw`cd reactjs-handbook
npm i
npm run dev   # opens http://localhost:5173`}),e.jsx("h3",{children:"Handy flags I use while coding"}),e.jsx(n.Code,{"aria-label":"dev flags",children:String.raw`# choose a different port if 5173 is busy
npm run dev -- --port 5174`}),e.jsx("h3",{children:"Quick notes I keep in mind"}),e.jsx("ul",{children:e.jsxs("li",{children:["After first run, I commit my own structure and add ",e.jsx("code",{children:"styled-components"})," when I start UI."]})}),e.jsx(n.Divider,{}),e.jsxs("p",{children:["That's it: create → install → ",e.jsx("strong",{children:"npm run dev"})," at ",e.jsx("code",{children:"http://localhost:5173"}),"."]})]})}var l=Object.freeze,m=Object.defineProperty,u=(s,t)=>l(m(s,"raw",{value:l(s.slice())})),d;function f({defaultOpen:s=!1}){const[t,r]=o.useState(!!s),i="project-tree";return e.jsxs(n.Topic,{children:[e.jsxs(n.Title,{onClick:()=>r(a=>!a),"aria-expanded":t,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Project tree (what each file does)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(g,{})})})]})}function g(){return e.jsxs(n.Content,{children:[e.jsx("h3",{children:"My project tree (Vite + React)"}),e.jsx(n.Code,{"aria-label":"folder tree",children:String.raw`.
reactjs-handbook/
├─ public/                 # static files served as-is
│  └─ 404.html             # (only for GitHub Pages SPA refresh)
├─ src/
│  ├─ assets/              # images, svg, fonts
│  ├─ components/          # reusable UI bits (optional)
│  ├─ topics/              # each tutorial as a toggle component
│  ├─ ReactTutorial.jsx    # renders the list of topics
│  ├─ ProjectTree.jsx      # ← this topic (same folder as styled.js)
│  ├─ styled.js            # shared Styled object
│  ├─ App.jsx              # app shell
│  └─ main.jsx             # React entry
├─ index.html              # single HTML file (Vite injects scripts)
├─ package.json            # scripts & deps
├─ vite.config.js          # dev/build config, aliases
├─ .env*                   # public config (VITE_* only)
└─ README.md
`}),e.jsx("h3",{children:"What each file does (short)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"index.html"})," - Minimal HTML with a ",e.jsx("code",{children:'<div id="root">'}),". Vite injects the built JS here."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/main.jsx"})," - Boot file; creates the root and renders ",e.jsx("code",{children:"<App />"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/App.jsx"})," - App shell; I mount ",e.jsx("code",{children:"<ReactTutorial />"})," here."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/ReactTutorial.jsx"})," - Lists all topic components (each one collapsible)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/topics/"})," - Every note lives in its own file (e.g. ",e.jsx("code",{children:"ViteInstall.jsx"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"src/styled.js"})," - Shared Styled object with primitives:",e.jsx("code",{children:"Topic"}),", ",e.jsx("code",{children:"Title"}),", ",e.jsx("code",{children:"Arrow"}),", ",e.jsx("code",{children:"Panel"}),", ",e.jsx("code",{children:"Content"}),", ",e.jsx("code",{children:"Code"}),", ",e.jsx("code",{children:"Divider"}),", etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"public/"})," - Files served as-is (no bundling)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"vite.config.js"})," - Aliases and build dev settings."]})]}),e.jsx("h3",{children:"index.html (tiny and clean)"}),e.jsx(n.Code,{"aria-label":"index.html",children:String.raw(d||(d=u([`<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS Handbook</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"><\/script>
  </body>
</html>`])))}),e.jsx("h3",{children:"main.jsx (entry)"}),e.jsx(n.Code,{"aria-label":"main.jsx",children:String.raw`import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // if I keep global styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}),e.jsx("h3",{children:"App.jsx (shell)"}),e.jsx(n.Code,{"aria-label":"App.jsx",children:String.raw`import React from "react";
import ReactTutorial from "./ReactTutorial";

export default function App() {
  return <ReactTutorial />;
}`}),e.jsx("h3",{children:"Tip I follow"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Keep ",e.jsx("strong",{children:"topics"})," small and focused-one concept per file."]}),e.jsxs("li",{children:["Assets go in ",e.jsx("code",{children:"src/assets"}),"; import them directly in components."]}),e.jsxs("li",{children:["Shared UI in ",e.jsx("code",{children:"components/"})," if I reuse it across topics."]})]}),e.jsx(n.Divider,{})]})}function v({defaultOpen:s=!1}){const[t,r]=o.useState(!!s),i="editor-setup";return e.jsxs(n.Topic,{children:[e.jsxs(n.Title,{onClick:()=>r(a=>!a),"aria-expanded":t,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Editor setup (VS Code, extensions)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(b,{})})})]})}function b(){return e.jsxs(n.Content,{children:[e.jsx("h3",{children:"Extensions I install"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ESLint"})," - dbaeumer.vscode-eslint"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prettier - Code formatter"})," - esbenp.prettier-vscode"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error Lens"})," - usernamehw.errorlens"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"vscode-styled-components"})," - styled-components.vscode-styled-components"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Auto Rename Tag"})," - formulahendry.auto-rename-tag"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Auto Close Tag"})," - formulahendry.auto-close-tag"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Path Intellisense"})," - christian-kohler.path-intellisense"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ES7+ React/Redux snippets"})," - dsznajder.es7-react-js-snippets"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git Graph"})," - mhutchie.git-graph (nice to have)"]})]}),e.jsx("h3",{children:"Workspace recommendations"}),e.jsx("p",{children:"I add this file so VS Code suggests the right extensions to anyone opening the repo."}),e.jsx(n.Code,{"aria-label":".vscode/extensions.json",children:String.raw`{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "usernamehw.errorlens",
    "styled-components.vscode-styled-components",
    "formulahendry.auto-rename-tag",
    "formulahendry.auto-close-tag",
    "christian-kohler.path-intellisense",
    "dsznajder.es7-react-js-snippets",
    "mhutchie.git-graph"
  ]
}`}),e.jsx("h3",{children:"My VS Code settings"}),e.jsx("p",{children:"Format on save + ESLint fixes; tidy imports; good highlighting for styled-components."}),e.jsx(n.Code,{"aria-label":".vscode/settings.json",children:String.raw`{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.trailingComma": "all",
  "prettier.printWidth": 100,

  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",

  "files.associations": {
    "*.js": "javascript",
    "*.jsx": "javascriptreact"
  }
}`}),e.jsx("h3",{children:"Command palette shortcuts"}),e.jsx(n.Code,{"aria-label":"commands",children:String.raw`Ctrl/Cmd + Shift + P →
> Format Document
> Restart ESLint Server
> Developer: Reload Window`}),e.jsx("h3",{children:"Notes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prettier handles formatting; ESLint handles code quality/fixes. I run both on save."}),e.jsx("li",{children:"The styled-components extension improves syntax highlighting inside template literals."}),e.jsx("li",{children:"VS Code auto-updates imports when files move (with the settings above)."})]}),e.jsx(n.Divider,{}),e.jsxs("p",{children:[e.jsx("em",{children:"PS:"})," My laptop is older, so I keep VS Code light - I install only essential extensions and prefer a minimal UI to save memory/CPU."]})]})}function w({defaultOpen:s=!1}){const[t,r]=o.useState(!!s),i="env-files";return e.jsxs(n.Topic,{children:[e.jsxs(n.Title,{onClick:()=>r(a=>!a),"aria-expanded":t,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:".env / .env.development / .env.production"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(y,{})})})]})}function y(){return e.jsxs(n.Content,{children:[e.jsx("h3",{children:"What I use these files for"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:".env"})," - default values for all modes (non-secret)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:".env.development"})," - overrides when I run ",e.jsx("code",{children:"npm run dev"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:".env.production"})," - overrides when I build/serve prod."]}),e.jsxs("li",{children:[e.jsx("strong",{children:".env.local"})," - machine-specific values I don't commit (gitignored)."]})]}),e.jsx("h3",{children:"Important rule (Vite)"}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Only variables prefixed with ",e.jsx("code",{children:"VITE_"})," are exposed to the browser."]})," Everything else is ignored in client code. Also, I access them via ",e.jsx("code",{children:"import.meta.env"})," (not ",e.jsx("code",{children:"process.env"}),")."]}),e.jsx("h3",{children:"Examples I actually use"}),e.jsx(n.Code,{"aria-label":".env files",children:String.raw`# .env
VITE_APP_NAME=ReactJS Handbook

# .env.development
VITE_API_BASE=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_BASE=https://api.example.com
VITE_DEBUG=false

# .env.local (gitignored; for my machine)
VITE_EXPERIMENT=true`}),e.jsx("p",{children:"Read them in code like this:"}),e.jsx(n.Code,{"aria-label":"usage in code",children:String.raw`// inside React code
const name = import.meta.env.VITE_APP_NAME;
const api  = import.meta.env.VITE_API_BASE;

// Vite's built-ins:
if (import.meta.env.DEV)   console.log("dev mode");
if (import.meta.env.PROD)  console.log("prod mode");
console.log(import.meta.env.MODE);      // "development" | "production" | "staging"...
console.log(import.meta.env.BASE_URL);  // base path`}),e.jsx("h3",{children:"Load order & precedence"}),e.jsx("p",{children:"Later files override earlier ones (more specific wins):"}),e.jsxs("ol",{children:[e.jsx("li",{children:".env"}),e.jsx("li",{children:".env.local"}),e.jsxs("li",{children:[".env.",e.jsx("em",{children:"mode"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[".env.",e.jsx("em",{children:"mode"}),".local"]})," (highest priority)"]})]}),e.jsx("h3",{children:"Switching modes (optional)"}),e.jsxs("p",{children:["Dev uses ",e.jsx("code",{children:"development"})," mode by default; build uses ",e.jsx("code",{children:"production"}),". I can opt into a custom mode:"]}),e.jsx(n.Code,{"aria-label":"custom mode",children:String.raw`vite build --mode staging   # will load .env.staging (and .env.staging.local if present)`}),e.jsx("h3",{children:"Git ignore (what I don't commit)"}),e.jsx(n.Code,{"aria-label":".gitignore",children:String.raw`.env.local
.env.*.local`}),e.jsx("h3",{children:"Quick checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Expose only public values with the ",e.jsx("code",{children:"VITE_*"})," prefix."]}),e.jsx("li",{children:"Never store secrets in frontend env files (anyone can view them in the browser)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:".env.development"}),"/",e.jsx("code",{children:".env.production"})," for mode-specific overrides."]}),e.jsxs("li",{children:[e.jsx("code",{children:".env.local"})," stays uncommitted for machine-specific tweaks."]})]}),e.jsx(n.Divider,{})]})}function I({defaultOpen:s=!1}){const[t,r]=o.useState(!!s),i="import-export-basics";return e.jsxs(n.Topic,{children:[e.jsxs(n.Title,{onClick:()=>r(a=>!a),"aria-expanded":t,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Import/export basics (named vs default)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(S,{})})})]})}function S(){return e.jsxs(n.Content,{children:[e.jsx("h3",{children:"How I decide"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default export"}),": file exposes one primary thing. Import name is my choice."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Named exports"}),": file exposes multiple things. Names are explicit; great for autocomplete and refactors."]})]}),e.jsx("h3",{children:"Default export"}),e.jsx(n.Code,{"aria-label":"default export",children:String.raw`// math.js
export default function add(a, b) { return a + b; }

// usage
import add from "./math.js";      // I can name it anything
console.log(add(2, 3));`}),e.jsx("h3",{children:"Named exports"}),e.jsx(n.Code,{"aria-label":"named exports",children:String.raw`// math2.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
export function sub(a, b) { return a - b; }

// usage
import { add, mul, sub } from "./math2.js";
import { add as plus } from "./math2.js";  // rename with 'as'`}),e.jsx("h3",{children:"Mixing default + named (allowed)"}),e.jsx(n.Code,{"aria-label":"mixed exports",children:String.raw`// math3.js
export default function add(a, b) { return a + b; }
export const mul = (a, b) => a * b;

// usage
import add, { mul } from "./math3.js";`}),e.jsx("h3",{children:"Namespace import (group everything)"}),e.jsx(n.Code,{"aria-label":"namespace import",children:String.raw`import * as math from "./math2.js";
console.log(math.add(1, 2), math.mul(2, 3));`}),e.jsx("h3",{children:"Re-exports & barrels"}),e.jsx(n.Code,{"aria-label":"re-exports",children:String.raw`// utils/index.js (barrel)
export * from "./math2.js";           // re-export named
export { default as add } from "./math3.js"; // re-export default with a name

// usage
import { add, mul } from "./utils/index.js";`}),e.jsx("h3",{children:"Dynamic import (on demand)"}),e.jsx(n.Code,{"aria-label":"dynamic import",children:String.raw`const mod = await import("./math2.js");
const { add } = mod;          // named
// const addDefault = mod.default;   // default (if any)`}),e.jsx("h3",{children:"Common mistakes I avoid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Importing a named symbol from a file that only exports ",e.jsx("em",{children:"default"})," (and vice-versa)."]}),e.jsx("li",{children:"Creating circular imports with large barrel files."}),e.jsxs("li",{children:["Mixing CommonJS (",e.jsx("code",{children:"module.exports"}),") with ESM in the frontend-Vite expects ESM."]})]}),e.jsx(n.Divider,{}),e.jsxs("p",{children:["Rule of thumb I follow: **one main thing → default**, **multiple things → named**. Rename with ",e.jsx("code",{children:"as"})," when needed."]})]})}const E=()=>e.jsxs("div",{style:{padding:"15px"},children:[e.jsx("h3",{children:"Setup & Local Dev"}),e.jsxs(C.PageIntro,{children:[e.jsx("p",{children:"This section gets your machine ready to build React apps the same way I ship them. We'll spin up a Vite project, understand the project tree, set up VS Code basics, and configure environment files for dev/production. You'll also add deploy-ready scripts (GH-Pages/Netlify/Cloudflare) with a working 404 fallback and safe routing defaults. Finish this page and you can create a new repo, run locally, and deploy with deep links working—consistently, every time."}),e.jsxs("p",{className:"outcome",children:[e.jsx("strong",{children:"Outcome:"})," a repeatable React starter with fast boot, clean lint/format, and zero-surprise deploys."]})]}),e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsx(x,{}),e.jsx(f,{}),e.jsx(v,{}),e.jsx(w,{}),e.jsx(I,{})]})]}),C={PageIntro:c.div`
        margin: 8px 0 16px;
        padding: 14px 16px;
        background: #0f0f12;
        border: 1px solid #1f1f1f;
        border-radius: 12px;
        color: #c9c9c9;
        line-height: 1.65;

        p { margin: 0 0 8px; }
        .outcome { color: #bfcfff; }
        strong { color: #e2e8ff; font-weight: 600; }
    `};export{E as default};
