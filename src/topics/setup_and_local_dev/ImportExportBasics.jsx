import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Import/export basics (named vs default)
 */
export default function ImportExportBasics({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "import-export-basics";

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
                <span>Import/export basics (named vs default)</span>
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
            <h3>How I decide</h3>
            <ul>
                <li><strong>Default export</strong>: file exposes one primary thing. Import name is my choice.</li>
                <li><strong>Named exports</strong>: file exposes multiple things. Names are explicit; great for autocomplete and refactors.</li>
            </ul>

            <h3>Default export</h3>
            <Styled.Code aria-label="default export">
                {String.raw`// math.js
export default function add(a, b) { return a + b; }

// usage
import add from "./math.js";      // I can name it anything
console.log(add(2, 3));`}
            </Styled.Code>

            <h3>Named exports</h3>
            <Styled.Code aria-label="named exports">
                {String.raw`// math2.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
export function sub(a, b) { return a - b; }

// usage
import { add, mul, sub } from "./math2.js";
import { add as plus } from "./math2.js";  // rename with 'as'`}
            </Styled.Code>

            <h3>Mixing default + named (allowed)</h3>
            <Styled.Code aria-label="mixed exports">
                {String.raw`// math3.js
export default function add(a, b) { return a + b; }
export const mul = (a, b) => a * b;

// usage
import add, { mul } from "./math3.js";`}
            </Styled.Code>

            <h3>Namespace import (group everything)</h3>
            <Styled.Code aria-label="namespace import">
                {String.raw`import * as math from "./math2.js";
console.log(math.add(1, 2), math.mul(2, 3));`}
            </Styled.Code>

            <h3>Re-exports & barrels</h3>
            <Styled.Code aria-label="re-exports">
                {String.raw`// utils/index.js (barrel)
export * from "./math2.js";           // re-export named
export { default as add } from "./math3.js"; // re-export default with a name

// usage
import { add, mul } from "./utils/index.js";`}
            </Styled.Code>

            <h3>Dynamic import (on demand)</h3>
            <Styled.Code aria-label="dynamic import">
                {String.raw`const mod = await import("./math2.js");
const { add } = mod;          // named
// const addDefault = mod.default;   // default (if any)`}
            </Styled.Code>

            <h3>Common mistakes I avoid</h3>
            <ul>
                <li>Importing a named symbol from a file that only exports <em>default</em> (and vice-versa).</li>
                <li>Creating circular imports with large barrel files.</li>
                <li>Mixing CommonJS (<code>module.exports</code>) with ESM in the frontend-Vite expects ESM.</li>
            </ul>

            <Styled.Divider />
            <p>Rule of thumb I follow: **one main thing → default**, **multiple things → named**. Rename with <code>as</code> when needed.</p>
        </Styled.Content>
    );
}
