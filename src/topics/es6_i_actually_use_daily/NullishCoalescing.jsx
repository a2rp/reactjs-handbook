import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Nullish coalescing ??
 */
export default function NullishCoalescing({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "nullish-coalescing";

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
                <span>Nullish coalescing <code>??</code> (clean fallbacks)</span>
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
                <strong><code>??</code></strong> returns the right-hand value <em>only if</em> the left-hand
                side is <code>null</code> or <code>undefined</code> (aka "nullish"). It keeps valid falsey
                values like <code>0</code>, <code>false</code>, and <code>""</code>.
            </p>

            <h3>A) Basics — only null/undefined trigger the fallback</h3>
            <Styled.Code>{`console.log(null ?? "fallback");         // "fallback"
console.log(undefined ?? "fallback");    // "fallback"

// falsey but NOT nullish → left value is kept
console.log(0 ?? 100);                   // 0
console.log(false ?? true);              // false
console.log("" ?? "N/A");                // ""`}</Styled.Code>

            <h3>B) vs <code>||</code> (truthy check)</h3>
            <Styled.Code>{`// || uses truthiness → will replace 0/""/false
console.log(0 || 100);                   // 100   (oops)
console.log(0 ?? 100);                   // 0     (correct when 0 is valid)

console.log("" || "N/A");                // "N/A" (oops)
console.log("" ?? "N/A");                // ""    (keep empty string)`}</Styled.Code>

            <h3>C) With optional chaining (common pattern)</h3>
            <Styled.Code>{`const resp = { data: { items: [1,2,3] } };

const first = resp?.data?.items?.[0] ?? null;
console.log(first);                       // 1

const missing = {};
const list = missing?.data?.items ?? [];
console.log(Array.isArray(list), list.length); // true 0`}</Styled.Code>

            <h3>D) Precedence & mixing with <code>&&</code>/<code>||</code></h3>
            <Styled.Code>{`// You cannot mix ?? with &&/|| without parentheses:
// const bad = null ?? 0 || 5;           // ❌ SyntaxError

const v1 = (null ?? 0) || 5;
console.log(v1);                          // 5   (0 || 5 → 5)

const v2 = null ?? (0 || 5);
console.log(v2);                          // 5   (0 || 5 → 5)

const v3 = (undefined ?? 7) && "ok";
console.log(v3);                          // "ok"`}</Styled.Code>

            <h3>E) Nullish coalescing assignment <code>??=</code></h3>
            <Styled.Code>{`let a = null;
a ??= 10;
console.log(a);                           // 10

let b = 0;
b ??= 5;                                  // left is NOT null/undefined
console.log(b);                           // 0 (kept)

const cfg = { retries: undefined };
cfg.retries ??= 3;
console.log(cfg.retries);                 // 3`}</Styled.Code>

            <h3>F) Edge cases (NaN, empty arrays/objects)</h3>
            <Styled.Code>{`const n = NaN;
console.log(n ?? 0);                      // NaN (not nullish)
console.log(Number.isNaN(n) ? 0 : n);     // 0   (explicit fallback for NaN)

const arr = [];
console.log((arr ?? ["x"]).length);       // 0 (arr is not nullish)

const obj = {};
console.log((obj ?? { a: 1 }));           // {} (obj is not nullish)`}</Styled.Code>

            <h3>G) Practical React patterns</h3>
            <Styled.Code>{`// 1) Safe prop fallbacks (keep 0/false/"")
const label = props?.label ?? "—";
const disabled = props?.disabled ?? false;

// 2) Controlled inputs: avoid undefined
const value = form?.name ?? "";

// 3) API defaults
const items = resp?.data?.items ?? [];
const total = resp?.data?.total ?? 0;

// 4) Optional callback call
props?.onSelect?.(id ?? 0);               // combine ?. and ??`}</Styled.Code>

            <h3>H) Pitfalls & tips</h3>
            <ul>
                <li><strong>Use <code>??</code> when 0/""/false are valid</strong> and should not trigger a fallback.</li>
                <li><strong>Prefer <code>a?.b ?? default</code></strong> for uncertain chains with defaults.</li>
                <li><strong>Add parentheses</strong> when mixing with <code>&&</code> or <code>||</code>.</li>
                <li><strong>NaN is not nullish</strong>: coalesce explicitly if you need a number fallback.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Left side null/undefined? → returns right side; otherwise returns left.</li>
                <li>Don't replace valid falsey values—use <code>??</code>, not <code>||</code>.</li>
                <li>Pair with <code>?.</code> to avoid "cannot read property" errors.</li>
                <li>Consider <code>??=</code> for concise "set if missing".</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
