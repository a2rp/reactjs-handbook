import React from "react";
import { Styled } from "./styled";

/**
 * Topic - .env / .env.development / .env.production
 */
export default function EnvFiles({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "env-files";

    return (
        <Styled.Topic>
            <Styled.Title
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                data-open={open}
            >
                <Styled.Arrow data-open={open}>▸</Styled.Arrow>
                <span>.env / .env.development / .env.production</span>
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
            <h3>What I use these files for</h3>
            <ul>
                <li><strong>.env</strong> - default values for all modes (non-secret).</li>
                <li><strong>.env.development</strong> - overrides when I run <code>npm run dev</code>.</li>
                <li><strong>.env.production</strong> - overrides when I build/serve prod.</li>
                <li><strong>.env.local</strong> - machine-specific values I don't commit (gitignored).</li>
            </ul>

            <h3>Important rule (Vite)</h3>
            <p><strong>Only variables prefixed with <code>VITE_</code> are exposed to the browser.</strong> Everything else is ignored in client code. Also, I access them via <code>import.meta.env</code> (not <code>process.env</code>).</p>

            <h3>Examples I actually use</h3>
            <Styled.Code aria-label=".env files">
                {String.raw`# .env
VITE_APP_NAME=ReactJS Handbook

# .env.development
VITE_API_BASE=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_BASE=https://api.example.com
VITE_DEBUG=false

# .env.local (gitignored; for my machine)
VITE_EXPERIMENT=true`}
            </Styled.Code>

            <p>Read them in code like this:</p>
            <Styled.Code aria-label="usage in code">
                {String.raw`// inside React code
const name = import.meta.env.VITE_APP_NAME;
const api  = import.meta.env.VITE_API_BASE;

// Vite's built-ins:
if (import.meta.env.DEV)   console.log("dev mode");
if (import.meta.env.PROD)  console.log("prod mode");
console.log(import.meta.env.MODE);      // "development" | "production" | "staging"...
console.log(import.meta.env.BASE_URL);  // base path`}
            </Styled.Code>

            <h3>Load order & precedence</h3>
            <p>Later files override earlier ones (more specific wins):</p>
            <ol>
                <li>.env</li>
                <li>.env.local</li>
                <li>.env.<em>mode</em></li>
                <li><strong>.env.<em>mode</em>.local</strong> (highest priority)</li>
            </ol>

            <h3>Switching modes (optional)</h3>
            <p>Dev uses <code>development</code> mode by default; build uses <code>production</code>. I can opt into a custom mode:</p>
            <Styled.Code aria-label="custom mode">
                {String.raw`vite build --mode staging   # will load .env.staging (and .env.staging.local if present)`}
            </Styled.Code>

            <h3>Git ignore (what I don't commit)</h3>
            <Styled.Code aria-label=".gitignore">
                {String.raw`.env.local
.env.*.local`}
            </Styled.Code>

            <h3>Quick checklist</h3>
            <ul>
                <li>Expose only public values with the <code>VITE_*</code> prefix.</li>
                <li>Never store secrets in frontend env files (anyone can view them in the browser).</li>
                <li>Use <code>.env.development</code>/<code>.env.production</code> for mode-specific overrides.</li>
                <li><code>.env.local</code> stays uncommitted for machine-specific tweaks.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
