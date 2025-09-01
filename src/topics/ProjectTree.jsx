import React from "react";
import { Styled } from "./styled";

/**
 * Topic - Project tree (what each file does)
 */
export default function ProjectTree({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "project-tree";

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
                <span>Project tree (what each file does)</span>
            </Styled.Title>

            <Styled.Panel
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-button`}
                data-open={open}
            >
                <div><Content /></div>
            </Styled.Panel>
        </Styled.Topic>
    );
}

function Content() {
    return (
        <Styled.Content>
            <h3>My project tree (Vite + React)</h3>
            <Styled.Code aria-label="folder tree">
                {String.raw`.
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
`}
            </Styled.Code>

            <h3>What each file does (short)</h3>
            <ul>
                <li>
                    <strong>index.html</strong> - Minimal HTML with a <code>&lt;div id="root"&gt;</code>.
                    Vite injects the built JS here.
                </li>
                <li>
                    <strong>src/main.jsx</strong> - Boot file; creates the root and renders <code>&lt;App /&gt;</code>.
                </li>
                <li>
                    <strong>src/App.jsx</strong> - App shell; I mount <code>&lt;ReactTutorial /&gt;</code> here.
                </li>
                <li>
                    <strong>src/ReactTutorial.jsx</strong> - Lists all topic components (each one collapsible).
                </li>
                <li>
                    <strong>src/topics/</strong> - Every note lives in its own file (e.g. <code>ViteInstall.jsx</code>).
                </li>
                <li>
                    <strong>src/styled.js</strong> - Shared Styled object with primitives:
                    <code>Topic</code>, <code>Title</code>, <code>Arrow</code>, <code>Panel</code>, <code>Content</code>, <code>Code</code>, <code>Divider</code>, etc.
                </li>
                <li>
                    <strong>public/</strong> - Files served as-is (no bundling).
                </li>
                <li>
                    <strong>vite.config.js</strong> - Aliases and build dev settings.
                </li>
            </ul>

            <h3>index.html (tiny and clean)</h3>
            <Styled.Code aria-label="index.html">
                {String.raw`<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS Handbook</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`}
            </Styled.Code>

            <h3>main.jsx (entry)</h3>
            <Styled.Code aria-label="main.jsx">
                {String.raw`import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // if I keep global styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
            </Styled.Code>

            <h3>App.jsx (shell)</h3>
            <Styled.Code aria-label="App.jsx">
                {String.raw`import React from "react";
import ReactTutorial from "./ReactTutorial";

export default function App() {
  return <ReactTutorial />;
}`}
            </Styled.Code>

            <h3>Tip I follow</h3>
            <ul>
                <li>Keep <strong>topics</strong> small and focused-one concept per file.</li>
                <li>Assets go in <code>src/assets</code>; import them directly in components.</li>
                <li>Shared UI in <code>components/</code> if I reuse it across topics.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
