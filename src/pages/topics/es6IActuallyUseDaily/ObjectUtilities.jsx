import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Object utilities (keys / values / entries / assign)
 */
export default function ObjectUtilities({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "object-utilities";

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
                <span>Object utilities: <code>keys</code>, <code>values</code>, <code>entries</code>, <code>assign</code></span>
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
                Everyday helpers for working with plain objects: get keys/values/pairs, transform with
                <code> entries</code> ⟷ <code>fromEntries</code>, and merge/clone with <code>assign</code>.
                These work on an object's <em>own enumerable string-keyed</em> properties (symbols are ignored).
            </p>

            <h3>A) <code>Object.keys</code> - list own keys (strings)</h3>
            <Styled.Code>{`const user = { id: 1, name: "Ash" };
console.log(Object.keys(user));                    // ["id", "name"]

// Integer-like keys are ordered numerically first, then the rest by insertion:
const order = { "2": "two", "1": "one", a: "A" };
console.log(Object.keys(order));                   // ["1", "2", "a"]`}</Styled.Code>

            <h3>B) <code>Object.values</code> - list own values</h3>
            <Styled.Code>{`const point = { x: 10, y: 20 };
console.log(Object.values(point));                 // [10, 20]`}</Styled.Code>

            <h3>C) <code>Object.entries</code> ⟷ <code>Object.fromEntries</code></h3>
            <Styled.Code>{`const stats = { a: 1, b: 2 };
console.log(Object.entries(stats));                // [["a",1], ["b",2]]
console.log(Object.fromEntries([["x",10],["y",20]])); // { x: 10, y: 20 }

// Map an object (transform values)
const prices = { apple: 100, mango: 80 };
const withTax = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k, Math.round(v * 1.18)])
);
console.log(withTax);                               // { apple: 118, mango: 94 }

// Filter an object (remove fields)
const user = { id: 1, name: "Ash", password: "secret" };
const publicUser = Object.fromEntries(
  Object.entries(user).filter(([k]) => k !== "password")
);
console.log(publicUser);                            // { id: 1, name: "Ash" }`}</Styled.Code>

            <h3>D) <code>Object.assign</code> - merge/clone (shallow) ⚠️ mutates target</h3>
            <Styled.Code>{`const target = { a: 1 };
const src = { b: 2 };
Object.assign(target, src);
console.log(target);                                // { a: 1, b: 2 } (target mutated)

// Make a NEW merged object (safe)
const a = { id: 1 };
const b = { name: "Ash" };
const merged = Object.assign({}, a, b);
console.log(merged);                                 // { id: 1, name: "Ash" }

// Rightmost wins on conflicts
console.log(Object.assign({}, { role: "dev" }, { role: "admin" }));
// { role: "admin" }

// SHALLOW copy:
const original = { nested: { x: 1 } };
const clone = Object.assign({}, original);
clone.nested.x = 2;
console.log(original.nested.x);                      // 2  (same inner object)`}</Styled.Code>

            <h3>E) Symbols & non-enumerables (FYI)</h3>
            <Styled.Code>{`const s = Symbol("s");
const obj = { a: 1, [s]: 2 };
console.log(Object.keys(obj));                       // ["a"] (symbols ignored)
console.log(Object.getOwnPropertySymbols(obj));      // [Symbol(s)]
// Non-enumerable props are also skipped by keys/values/entries`}</Styled.Code>

            <h3>F) Practical transforms with <code>entries</code></h3>
            <Styled.Code>{`// 1) Rename keys
const user = { first_name: "Ash", last_name: "R" };
const renamed = Object.fromEntries(
  Object.entries(user).map(([k, v]) => [k.replace("_", ""), v])
);
console.log(renamed);                                // { firstname: "Ash", lastname: "R" }

// 2) Pick only certain keys
const pick = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => keys.includes(k)));
console.log(pick({ id:1, name:"Ash", age:20 }, ["id","name"]));
// { id: 1, name: "Ash" }

// 3) Invert (values → keys) - caution with duplicates
const invert = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [String(v), k]));
console.log(invert({ a:1, b:2 }));                  // { "1":"a", "2":"b" }`}</Styled.Code>

            <h3>G) React-friendly patterns</h3>
            <Styled.Code>{`// 1) Render object as a list
const features = { darkMode: true, beta: false };
// Object.entries(features).map(([k, v]) => <li key={k}>{k}: {String(v)}</li>)

// 2) Merge default props/options (spread is equivalent to assign into {})
const defaults = { size: "md", disabled: false };
const final = { ...defaults, ...{ disabled: true } };  // or Object.assign({}, defaults, { disabled: true })
console.log(final);                                    // { size: "md", disabled: true }

// 3) Build object from pairs for quick lookup
const list = [{ id:1, name:"Ash" }, { id:2, name:"Riya" }];
const byId = Object.fromEntries(list.map(u => [u.id, u]));
console.log(byId[2].name);                              // "Riya"`}</Styled.Code>

            <h3>H) Pitfalls & tips</h3>
            <ul>
                <li><strong><code>assign</code> mutates its first arg</strong>; use <code>{"Object.assign({}, a, b)"}</code> or spread for a new object.</li>
                <li><strong>Shallow only:</strong> both <code>assign</code> and spread copy references for nested objects.</li>
                <li><strong>keys/values/entries</strong> ignore symbols & non-enumerables; use <code>Object.getOwnPropertySymbols</code> / descriptors if needed.</li>
                <li><strong>Key order:</strong> integer-like keys come first in ascending order, then others by insertion.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Transform/filter objects via <code>entries → map/filter → fromEntries</code>.</li>
                <li>Merge immutably with <code>{"Object.assign({}, ...)"}</code> or spread.</li>
                <li>Remember it's all shallow copies - be careful with nested state.</li>
                <li>Need symbols? Grab them with <code>Object.getOwnPropertySymbols</code>.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
