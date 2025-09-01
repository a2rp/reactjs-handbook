import React from "react";
import { Styled } from "./styled";

/**
 * Topic 2 — ES6+ I use daily (let/const, arrow fns, destructuring,
 * rest/spread, optional chaining, nullish coalescing, classes, modules, array methods)
 */
export default function ES6Daily({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "es6-daily";

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
                <span>
                    ES6+ I use daily — let/const, arrow functions, destructuring, rest/spread,
                    optional chaining, nullish coalescing, classes, modules, array methods
                </span>
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
            <h3>How I think about ES6+ in React code</h3>
            <ul>
                <li>
                    I treat <strong>state & props as immutable</strong>, so spread, array methods,
                    and object copies are my daily tools.
                </li>
                <li>
                    I prefer <strong>const</strong> by default and switch to <strong>let</strong> only when I truly reassign.
                </li>
                <li>
                    Arrow functions keep <Styled.Kbd>this</Styled.Kbd> lexical and reduce boilerplate.
                </li>
            </ul>

            <h3>let / const (and why I avoid var)</h3>
            <p>
                I use <strong>const</strong> for values that don’t get reassigned, and <strong>let</strong> when I must
                reassign. Block scoping + TDZ (temporal dead zone) saves me from many bugs.
            </p>

            <Styled.Code aria-label="let/const basics">
                {String.raw`// const for bindings that don't get reassigned
const API_BASE = "/api";

// let for reassignment (e.g. loop counters)
let total = 0;
for (let i = 0; i < 3; i++) total += i;

// TDZ: using a binding before its declaration throws
// console.log(x); // ReferenceError
let x = 42;

// Avoid var: function-scoped + hoisted in confusing ways
`}
            </Styled.Code>

            <h3>Arrow functions (lexical this, concise returns)</h3>
            <p>
                I like arrows for inline handlers and small utilities. They don’t have
                their own <Styled.Kbd>this</Styled.Kbd> or <Styled.Kbd>arguments</Styled.Kbd>, so I use rest params when needed.
            </p>

            <Styled.Code aria-label="arrow function patterns">
                {String.raw`// Implicit return (great for small mappers)
const ids = users.map(u => u.id);

// Returning an object literal -> wrap in parentheses
const toKV = (k, v) => ({ [k]: v });

// No 'arguments' in arrows; I use rest:
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

// 'this' is lexical: handy inside classes or callbacks
class Timer {
  seconds = 0;
  tick = () => { this.seconds++; }; // arrow keeps 'this'
}`}
            </Styled.Code>

            <h3>Destructuring (objects, arrays, params)</h3>
            <p>
                I destructure early to keep JSX clean. Defaults and renames are super useful.
            </p>

            <Styled.Code aria-label="destructuring tips">
                {String.raw`// Object destructuring with defaults & renames
const user = { id: 7, name: "Ash", role: "dev" };
const { id, name: displayName, team = "unassigned" } = user;

// Array destructuring with skipping
const coords = [10, 20, 30];
const [x1, , z1] = coords;

// Destructure in function params (my favorite)
function greet({ name = "friend", role = "user" }) {
  return \`Hello \${name} (\${role})\`;
}
`}
            </Styled.Code>

            <h3>Rest & Spread (arrays, objects, params)</h3>
            <p>
                I rely on spread to make copies and merge without mutation. Rest collects the “remaining” parts.
            </p>

            <Styled.Code aria-label="rest/spread patterns">
                {String.raw`// Arrays
const a = [1, 2];
const b = [...a, 3];           // copy + append
const [head, ...tail] = b;     // rest in pattern

// Objects
const base = { a: 1, b: 2 };
const withC = { ...base, c: 3 };     // shallow copy + add
const { b, ...rest } = withC;        // rest pulls the remainder

// Function rest params
function join(sep, ...parts) {
  return parts.join(sep);
}
`}
            </Styled.Code>

            <h3>Optional chaining (?.) & Nullish coalescing (??)</h3>
            <p>
                I use <strong>?.</strong> to safely access deep paths and <strong>??</strong> to default only when the
                value is <em>null</em> or <em>undefined</em> (not when it’s 0 or "").
            </p>

            <Styled.Code aria-label="optional chaining + nullish coalescing">
                {String.raw`const city = user?.address?.city;          // undefined if any hop is nullish
const display = user.nickname ?? user.name ?? "Anonymous"; // pick first non-nullish
`}
            </Styled.Code>

            <h3>Classes I actually write</h3>
            <p>
                I don’t use classes inside React components often, but for small utilities they’re fine.
                I prefer class fields + arrows for methods that need <Styled.Kbd>this</Styled.Kbd>.
            </p>

            <Styled.Code aria-label="class essentials">
                {String.raw`class Counter {
  value = 0;                 // public field
  inc = () => { this.value++; };   // arrow: keeps 'this'
  static from(n) {           // static helper
    const c = new Counter();
    c.value = n;
    return c;
  }
}

class LimitedCounter extends Counter {
  constructor(limit) {
    super();
    this.limit = limit;
  }
  inc = () => { if (this.value < this.limit) super.inc(); };
}
`}
            </Styled.Code>

            <h3>Modules (ESM): default vs named, re-exports, dynamic import</h3>
            <p>
                In React apps (Vite), I stay in ESM: <Styled.Kbd>import</Styled.Kbd> /
                <Styled.Kbd>export</Styled.Kbd>. I use named exports for most things.
            </p>

            <Styled.Code aria-label="modules basics">
                {String.raw`// math.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
// export default is optional; I keep it for one main thing per file
export default function sub(a, b) { return a - b; }

// usage
import sub, { add, mul } from "./math.js";

// re-export pattern
export * from "./math.js";

// dynamic import (code-splitting)
const mod = await import("./math.js");
console.log(mod.add(2, 3));
`}
            </Styled.Code>

            <h3>Array methods I reach for constantly</h3>
            <p>
                I chain immutable methods to keep state updates clean and predictable.
            </p>

            <Styled.Code aria-label="array methods in practice">
                {String.raw`const products = [
  { id: 1, price: 99,  tags: ["dev","tools"] },
  { id: 2, price: 10,  tags: ["food"] },
  { id: 3, price: 199, tags: ["dev","pro"] },
];

// map/filter/reduce
const devPrices = products
  .filter(p => p.tags.includes("dev"))
  .map(p => p.price);

const total = devPrices.reduce((a, b) => a + b, 0);

// find / some / every
const pro = products.find(p => p.tags.includes("pro"));
const anyCheap = products.some(p => p.price < 20);
const allPositive = products.every(p => p.price > 0);

// sort (non-mutating copy first!)
const byPriceAsc = [...products].sort((a, b) => a.price - b.price);
`}
            </Styled.Code>

            <h3>My quick checklist</h3>
            <ul>
                <li><strong>const</strong> by default; switch to <strong>let</strong> when I must reassign.</li>
                <li>Arrow fns for inline handlers; rest params instead of <Styled.Kbd>arguments</Styled.Kbd>.</li>
                <li>Destructure props/state early to keep JSX clean.</li>
                <li>Spread to copy/merge; never mutate arrays/objects directly.</li>
                <li><strong>?.</strong> + <strong>??</strong> for safe access + correct defaults.</li>
                <li>Copy before <Styled.Kbd>sort</Styled.Kbd>; avoid in-place mutations.</li>
            </ul>

            <Styled.Divider />
            <p>
                Done with ES6+ essentials I use every day. Next I’ll wire up “JSX: syntax rules & patterns”
                in the same toggle format whenever you say go.
            </p>
        </Styled.Content>
    );
}
