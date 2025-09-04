import React from "react";
import { Styled } from "../styled";

/**
 * Topic - let vs const
 */
export default function LetVsConst({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "let-vs-const";

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
                <span>let vs const (avoid var)</span>
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
                Practical rule: <strong>use <code>const</code> by default</strong>. Switch to{" "}
                <code>let</code> only when you truly need to <em>reassign</em>. Prefer block scope and avoid <code>var</code>.
            </p>

            <h3>Definitions</h3>
            <ul>
                <li>
                    <code>let</code>: <strong>block-scoped</strong> variable; <em>reassignable</em>; not redeclarable
                    in the same scope.
                </li>
                <li>
                    <code>const</code>: <strong>block-scoped binding</strong>; <em>not reassignable</em>. For objects/arrays,
                    the reference is fixed but contents can still mutate.
                </li>
            </ul>

            <h3>Key points</h3>
            <ul>
                <li><strong>Scope:</strong> <code>let</code>/<code>const</code> → block; <code>var</code> → function.</li>
                <li><strong>Redeclare:</strong> <code>let</code>/<code>const</code> ❌ (same scope), <code>var</code> ✅.</li>
                <li><strong>Reassign:</strong> <code>let</code> ✅; <code>const</code> ❌ (but object/array contents may mutate).</li>
                <li><strong>Readability:</strong> <code>const</code> signals “this shouldn’t change”, which prevents bugs.</li>
                <li><strong>Loops:</strong> <code>let</code> makes a new binding per iteration (great with async callbacks).</li>
            </ul>

            <Styled.Divider />

            <h3>A) Block scope &amp; redeclare vs reassign</h3>
            <Styled.Code>{`{
  let a = 1;
  a = 2;               // ✅ reassign allowed
  // let a = 3;        // ❌ SyntaxError: already declared in this scope

  const b = 10;
  // b = 11;           // ❌ TypeError: cannot reassign a const binding

  console.log(a, b);   // 2 10
}
// console.log(a, b);  // ❌ ReferenceError: not visible outside the block

let x = 5;
x = 6;                 // ✅ reassign ok
// let x = 7;          // ❌ cannot redeclare in the same scope

const y = { n: 1 };
// y = { n: 2 };       // ❌ cannot reassign binding
y.n = 2;               // ✅ mutate property
console.log(y);        // { n: 2 }`}</Styled.Code>

            <h3>B) Loops &amp; closures (why <code>let</code> shines)</h3>
            <Styled.Code>{`// VAR: one binding shared → all log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}

// LET: new binding per iteration → 0,1,2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}`}</Styled.Code>

            <h3>C) const with arrays/objects (mutate vs reassign)</h3>
            <Styled.Code>{`const arr = [1, 2, 3];
arr.push(4);           // ✅ mutate contents
// arr = [];           // ❌ reassign binding
console.log(arr);      // [1,2,3,4]

const user = Object.freeze({ id: 1, name: "Ash" });
// user.name = "New";  // ❌ blocked when frozen (strict mode errors)
console.log(user);`}</Styled.Code>

            <h3>D) Shadowing &amp; blocks</h3>
            <Styled.Code>{`let value = "outer";
{
  const value = "inner"; // shadowed in block scope
  console.log(value);    // "inner"
}
console.log(value);      // "outer"`}</Styled.Code>

            <h3>When I use which</h3>
            <ul>
                <li><strong>const</strong> for imports, config values, functions/components, derived values.</li>
                <li><strong>let</strong> for counters, accumulators, and anything that must change over time.</li>
                <li>Avoid <strong>var</strong> (function scope + redeclare allow many footguns).</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Default to <strong>const</strong>.</li>
                <li>Need to change the value? → switch to <strong>let</strong>.</li>
                <li>Declare before use for clarity.</li>
                <li>Prefer block scope; avoid <code>var</code>.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
