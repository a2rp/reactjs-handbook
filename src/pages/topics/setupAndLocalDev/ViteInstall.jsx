import React from "react";
import { Styled } from "../styled";

/**
 * Topic — Vite install (create app, run dev)
 */
export default function ViteInstall({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "vite-install";

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
                <span>Vite install (create app, run dev)</span>
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
            <h3>Prereq (1-time)</h3>
            <p>I generally work on node version 18.</p>
            <Styled.Code aria-label="check node">
                {String.raw`node -v   # v18.20.4`}
            </Styled.Code>

            <h3>Create a new React app (interactive)</h3>
            <p>I usually run the interactive creator and pick React.</p>
            <Styled.Code aria-label="create vite app">
                {String.raw`npm create vite@latest

# Prompts I pick:
# ✔ Project name: » reactjs-handbook
# ✔ Select a framework: » React
# ✔ Select a variant: » JavaScript
`}
            </Styled.Code>

            <h4>One-liner (skip prompts)</h4>
            <Styled.Code aria-label="one-liner create">
                {String.raw`npm create vite@latest reactjs-handbook -- --template react`}
            </Styled.Code>

            <h3>Install & run locally</h3>
            <Styled.Code aria-label="install + dev">
                {String.raw`cd reactjs-handbook
npm i
npm run dev   # opens http://localhost:5173`}
            </Styled.Code>

            <h3>Handy flags I use while coding</h3>
            <Styled.Code aria-label="dev flags">
                {String.raw`# choose a different port if 5173 is busy
npm run dev -- --port 5174`}
            </Styled.Code>

            <h3>Quick notes I keep in mind</h3>
            <ul>
                <li>After first run, I commit my own structure and add <code>styled-components</code> when I start UI.</li>
            </ul>

            <Styled.Divider />
            <p>That's it: create → install → <strong>npm run dev</strong> at <code>http://localhost:5173</code>.</p>
        </Styled.Content>
    );
}
