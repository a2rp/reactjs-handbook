import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Optional chaining ?.
 */
export default function OptionalChaining({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "optional-chaining";

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
                <span>Optional chaining <code>?.</code> (safer nested access & calls)</span>
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
            <p>
                <strong>Optional chaining</strong> returns <code>undefined</code> instead of throwing if the part
                on the <em>left</em> of <code>?.</code> is <code>null</code> or <code>undefined</code>.
                It <em>does not</em> short-circuit for other falsey values like <code>0</code>, <code>false</code>, or <code>""</code>.
            </p>

            <h3>A) Property & element access</h3>
            <Styled.Code>{`const user = { id: 1, profile: { email: "a@b.com" } };

console.log(user?.profile?.email);        // "a@b.com"
console.log(user?.settings?.theme);       // undefined (no throw)

// element access with []
const prefKey = "theme";
console.log(user?.prefs?.[prefKey]);      // undefined

// arrays
const arr = [10, 20, 30];
console.log(arr?.[0]);                    // 10
const maybe = null;
console.log(maybe?.[0]);                  // undefined (safe)`}</Styled.Code>

            <h3>B) Optional call (functions & methods)</h3>
            <Styled.Code>{`const maybeCb = undefined;
console.log(maybeCb?.(1, 2));             // undefined (safe, no call)

const counter = {
  n: 0,
  inc() { this.n++; }
};

// preserves 'this' when method exists
counter?.inc?.();
console.log(counter.n);                    // 1

// if object or method is missing → whole call expr is undefined
const nothing = null;
console.log(nothing?.inc?.());            // undefined`}</Styled.Code>

            <h3>C) Combine with a default (preview for next topic)</h3>
            <Styled.Code>{`const api = { data: { items: [1,2,3] } };
const first = api?.data?.items?.[0] ?? null;
console.log(first);                        // 1

const missing = {};
console.log(missing?.data?.items?.[0] ?? "none"); // "none"`}</Styled.Code>

            <h3>D) vs <code>&amp;&amp;</code> (truthy check)</h3>
            <Styled.Code>{`const n = 0;
console.log(n && n.toString());           // 0   (short-circuits on falsy 0)
console.log(n?.toString());               // "0" (0 is not null/undefined, so it proceeds)`}</Styled.Code>

            <h3>E) Practical React / DOM patterns</h3>
            <Styled.Code>{`// React props / API responses
const title = props?.post?.title ?? "Untitled";
const firstItem = resp?.data?.items?.[0] ?? null;

// Safe event access
const handle = (e) => {
  const id = e?.currentTarget?.dataset?.id ?? "unknown";
  // ...
};

// DOM query
document.querySelector("#title")?.scrollIntoView({ behavior: "smooth" });`}</Styled.Code>

            <h3>F) Pitfalls & rules</h3>
            <ul>
                <li><strong>Only guard what's left of <code>?.</code>:</strong> write each uncertain hop as <code>?.</code> (<code>a?.b?.c</code>), not <code>a?.b.c</code>.</li>
                <li><strong>Not an lvalue:</strong> you can't assign to it — <code>obj?.prop = 1</code> ❌ (SyntaxError).</li>
                <li><strong>Doesn't mask real errors:</strong> if a function exists but throws, <code>?.</code> won't catch that.</li>
                <li><strong>Don't overuse:</strong> if something should exist by contract, validate up-front instead of chaining everywhere.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>?.</code> for uncertain hops; chain it per level.</li>
                <li>It short-circuits only on <code>null</code>/<code>undefined</code>.</li>
                <li>Pair with <code>??</code> (next topic) to provide clean defaults.</li>
                <li>For methods, prefer <code>obj?.method?.()</code> to preserve <code>this</code>.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
