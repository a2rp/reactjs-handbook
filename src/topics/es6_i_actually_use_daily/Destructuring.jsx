import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Destructuring (objects / arrays / parameters)
 */
export default function Destructuring({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "destructuring";

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
                <span>Destructuring (objects, arrays, parameters)</span>
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
                Destructuring pulls values out of objects/arrays into variables. It's great for
                clean code, default values, renaming, and concise function parameters.
            </p>

            <h3>Core patterns</h3>
            <ul>
                <li><strong>Objects:</strong> match by <em>key name</em>, can rename and set defaults.</li>
                <li><strong>Arrays:</strong> match by <em>position</em>, can skip items and use rest.</li>
                <li><strong>Parameters:</strong> destructure right in the function signature.</li>
            </ul>

            <Styled.Divider />

            <h3>A) Object destructuring - basics, renaming, defaults</h3>
            <Styled.Code>{`const user = { id: 1, name: "Ash", role: "dev" };

const { name, id } = user;
console.log(name, id);                       // "Ash" 1

// Rename and provide defaults
const { name: fullName, city = "Bengaluru" } = user;
console.log(fullName, city);                 // "Ash" "Bengaluru"

// Nested properties (safe default for the parent)
const profile = { meta: { active: true } };
const { meta: { active } = {} } = profile;
console.log(active);                          // true

// Rest properties: everything except 'role'
const { role, ...publicUser } = user;
console.log(role);                            // "dev"
console.log(publicUser);                      // { id: 1, name: "Ash" }`}</Styled.Code>

            <h3>B) Array destructuring - positions, skipping, defaults, rest</h3>
            <Styled.Code>{`const nums = [10, 20, 30, 40];

const [a, b] = nums;
console.log(a, b);                            // 10 20

// Skip with commas
const [first, , third] = nums;
console.log(first, third);                    // 10 30

// Defaults kick in only when value is 'undefined'
const [x = 1, y = 2, z = 3] = [5];
console.log(x, y, z);                         // 5 2 3

// Rest collects the remaining items
const [head, ...tail] = nums;
console.log(head);                            // 10
console.log(tail);                            // [20, 30, 40]

// Swap variables quickly
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q);                            // 2 1`}</Styled.Code>

            <h3>C) Function parameters - object/array + defaults</h3>
            <Styled.Code>{`// Object param with defaults + renaming
function greet({ id, name = "Guest" }) {
  return \`\${id}: \${name}\`;
}
console.log(greet({ id: 7, name: "Riya" }));  // "7: Riya"
console.log(greet({ id: 9 }));                // "9: Guest"

// Array param with a default whole-parameter value
const sumPair = ([a, b] = [0, 0]) => a + b;
console.log(sumPair([4, 6]));                 // 10
console.log(sumPair());                       // 0

// Destructure + rest in params
const logUser = ({ id, ...rest }) => ({ id, rest });
console.log(logUser({ id: 1, name: "Ash", role: "dev"}));
// { id: 1, rest: { name: "Ash", role: "dev" } }`}</Styled.Code>

            <h3>D) Practical React patterns</h3>
            <Styled.Code>{`// 1) Props destructuring in function signature
function Button({ label = "Click", onClick, disabled = false }) {
  // ...
}

// 2) useState returns an array → array destructuring
const [count, setCount] = React.useState(0);
// count: 0 ; setCount: function

// 3) Destructure API response (object)
const resp = { data: { items: [1,2,3] }, status: 200 };
const { data: { items } = { items: [] }, status } = resp;
console.log(items, status);                   // [1,2,3] 200`}</Styled.Code>

            <h3>E) Destructuring with loops & utilities</h3>
            <Styled.Code>{`const scores = { alice: 8, bob: 6, charlie: 9 };

for (const [name, score] of Object.entries(scores)) {
  if (score >= 8) console.log(name, "⭐");   // "alice ⭐", "charlie ⭐"
}

// Map of pairs to objects
const pairs = [["id", 1], ["name", "Ash"]];
const obj = Object.fromEntries(pairs);
console.log(obj);                             // { id: 1, name: "Ash" }`}</Styled.Code>

            <h3>F) Spread vs Rest (quick contrast)</h3>
            <Styled.Code>{`// Rest (collect) in binding/params:
const { password, ...safe } = { user: "a2rp", password: "secret" };
console.log(safe);                            // { user: "a2rp" }

// Spread (expand) in literals:
const base = { id: 1, name: "Ash" };
const clone = { ...base, role: "admin" };
console.log(clone);                           // { id: 1, name: "Ash", role: "admin" }`}</Styled.Code>

            <h3>G) Pitfalls & tips</h3>
            <ul>
                <li><strong>Object vs Array:</strong> objects match by key; arrays by position.</li>
                <li><strong>Defaults run on <code>undefined</code></strong> (not on <code>null</code>).</li>
                <li><strong>Safe nested:</strong> give a default to the parent (<code>{"{ meta: {} }"}</code>) to avoid errors.</li>
                <li><strong>Rename to avoid conflicts:</strong> <code>{"const { id: userId } = user"}</code>.</li>
                <li><strong>Keep it readable:</strong> deep/nested destructuring is powerful-don't overdo it.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use object destructuring for clarity and defaults.</li>
                <li>Use array destructuring for positions and quick swaps.</li>
                <li>Destructure props & hook returns right at the top.</li>
                <li>Use rest (<code>...rest</code>) to exclude or gather extras; spread to clone/extend.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
