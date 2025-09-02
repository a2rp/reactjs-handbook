import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Find / Some / Every
 */
export default function FindSomeEvery({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "find-some-every";

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
                <span>Find / Some / Every (search, any, all)</span>
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
            <div style={{ marginBottom: "30px" }}>
                Three quick checks:
                <ul>
                    <li><strong>find</strong> returns the first matching item,</li>
                    <li><strong>some</strong> tells if <em>any</em> matches, and</li>
                    <li><strong>every</strong> checks if <em> all</em> match.</li>
                </ul>
                They do not mutate the array and they short-circuit.
            </div>

            <h3>A) <code>find</code> - get the first matching element</h3>
            <Styled.Code>{`const users = [
  { id: 1, name: "Ash" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Dev" },
];

const r = users.find(u => u.id > 1);
console.log(r);                                // { id: 2, name: "Riya" }

const none = users.find(u => u.id === 99);
console.log(none);                             // undefined  (not found)

// Safe property access
console.log((users.find(u => u.name === "Dev") || {}).id); // 3
// or with optional chaining + default:
console.log(users.find(u => u.name === "Foo")?.id ?? "NA"); // "NA"`}</Styled.Code>

            <h3>B) <code>some</code> - does any element pass?</h3>
            <Styled.Code>{`const nums = [1, 3, 5, 8];

console.log(nums.some(n => n % 2 === 0));      // true  (8 is even)
console.log(nums.some(n => n > 10));           // false

// Practical: any item out of stock?
const cart = [{ id: 1, qty: 2 }, { id: 2, qty: 0 }];
console.log(cart.some(item => item.qty === 0)); // true`}</Styled.Code>

            <h3>C) <code>every</code> - do all elements pass?</h3>
            <Styled.Code>{`const scores = [7, 8, 9];

console.log(scores.every(s => s >= 7));         // true
console.log(scores.every(s => s >= 9));         // false

// NOTE: empty arrays
console.log([].every(x => x > 0));              // true  (vacuously true)
console.log([].some(x => x > 0));               // false`}</Styled.Code>

            <h3>D) Objects & deep checks</h3>
            <Styled.Code>{`const people = [
  { id: 1, tags: ["dev","js"] },
  { id: 2, tags: ["design"] },
  { id: 3, tags: ["dev","react"] },
];

// find first person with "react"
const reactDev = people.find(p => p.tags.includes("react"));
console.log(reactDev?.id ?? null);              // 3

// some: does anyone have "design"?
console.log(people.some(p => p.tags.includes("design"))); // true

// every: does everyone have "dev"?
console.log(people.every(p => p.tags.includes("dev")));   // false`}</Styled.Code>

            <h3>E) Compare with <code>includes</code> (value vs predicate)</h3>
            <Styled.Code>{`// includes checks values (strict equality), not conditions:
console.log([1,2,3].includes(2));              // true
// find/some let you write a predicate:
console.log([1,2,3].some(n => n > 2));         // true`}</Styled.Code>

            <h3>F) Performance & short-circuiting</h3>
            <Styled.Code>{`// these stop early:
// - find: after first match
// - some: after first true
// - every: after first false

let steps = 0;
[1,2,3,4].some(n => (steps++, n > 2));
console.log(steps);                             // 3 (stopped at 3)`}</Styled.Code>

            <h3>G) Practical React patterns</h3>
            <Styled.Code>{`// 1) Validation: all fields valid?
const fields = [{ok:true},{ok:true},{ok:false}];
const allValid = fields.every(f => f.ok);
console.log(allValid);                          // false

// 2) Feature flags / roles: any role matches?
const roles = ["viewer","editor"];
const canEdit = roles.some(r => ["admin","editor"].includes(r));
console.log(canEdit);                           // true

// 3) Safe pick: find an item to show details
const todo = [{id:1,t:"A"},{id:2,t:"B"}].find(t => t.id === 2);
// render guard:
// if (!todo) return null;`}</Styled.Code>

            <h3>H) Pitfalls & tips</h3>
            <ul>
                <li><strong>find</strong> can return <code>undefined</code> - guard with <code>?.</code> or a default.</li>
                <li><strong>every</strong> on an empty array returns <code>true</code>; <strong>some</strong> returns <code>false</code>.</li>
                <li>Predicates should be <strong>pure</strong> (no side-effects) for predictable behavior.</li>
                <li>For large lists, these short-circuit - keep the cheap checks first in your predicate.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Need the item itself? → <strong>find</strong>.</li>
                <li>Need a yes/no if <em>any</em>? → <strong>some</strong>.</li>
                <li>Need a yes/no if <em>all</em>? → <strong>every</strong>.</li>
                <li>Remember undefined from <code>find</code>; handle it safely.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
