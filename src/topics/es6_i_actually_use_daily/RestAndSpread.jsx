import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Rest & spread (arrays / objects / params)
 */
export default function RestAndSpread({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "rest-and-spread";

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
                <span>Rest &amp; spread (arrays, objects, params)</span>
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
                **Spread** <code>...</code> copies/expands values into a new literal.
                <br />
                **Rest** <code>...</code> gathers the remaining values into a single variable
                (in bindings or parameter lists).
            </p>

            <h3>A) Spread - Arrays</h3>
            <Styled.Code>{`const a = [1, 2];
const b = [3, 4];

// clone
const copy = [...a];
console.log(copy);                     // [1, 2]

// merge
const merged = [...a, ...b];
console.log(merged);                   // [1, 2, 3, 4]

// add at ends
const withEnds = [0, ...a, 5];
console.log(withEnds);                 // [0, 1, 2, 5]

// expand into calls
console.log(Math.max(...merged));      // 4

// from string/iterables
console.log([..."hey"]);               // ["h", "e", "y"]`}</Styled.Code>

            <h3>B) Rest - Arrays & bindings</h3>
            <Styled.Code>{`const nums = [10, 20, 30, 40];

const [head, ...tail] = nums;
console.log(head);                     // 10
console.log(tail);                     // [20, 30, 40]

// skip with commas + rest
const [, second, ...rest] = nums;
console.log(second);                   // 20
console.log(rest);                     // [30, 40]`}</Styled.Code>

            <h3>C) Spread - Objects</h3>
            <Styled.Code>{`const base = { id: 1, name: "Ash" };

// shallow clone
const clone = { ...base };
console.log(clone);                    // { id: 1, name: "Ash" }

// merge (later wins on key conflicts)
const a = { role: "dev", city: "BLR" };
const b = { role: "admin" };
const merged = { ...a, ...b };
console.log(merged);                   // { role: "admin", city: "BLR" }

// nested is shallow!
const user = { info: { score: 7 } };
const user2 = { ...user };
user2.info.score = 9;
console.log(user.info.score);          // 9  (same inner object reference)`}</Styled.Code>

            <h3>D) Rest - Object properties</h3>
            <Styled.Code>{`const user = { id: 1, name: "Ash", password: "secret", role: "dev" };

// pick some, gather the rest
const { password, ...publicUser } = user;
console.log(publicUser);               // { id: 1, name: "Ash", role: "dev" }

// rename + rest
const { id: userId, ...rest } = user;
console.log(userId);                   // 1
console.log(rest.role);                // "dev"`}</Styled.Code>

            <h3>E) Parameters: defaults, rest & spread</h3>
            <Styled.Code>{`// rest in params (collects arguments)
const sum = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log(sum(1, 2, 3));             // 6

// default params + rest
const makeUrl = (base = "/", ...parts) => base + parts.join("/");
console.log(makeUrl("/api", "v1", "users")); // "/api/v1/users"

// spread when calling
const pair = [4, 6];
console.log(sum(...pair));             // 10

// NOTE: rest must be last
// const bad = (a, ...rest, b) => {}   // ❌ SyntaxError`}</Styled.Code>

            <h3>F) Practical React patterns</h3>
            <Styled.Code>{`// 1) Update array state immutably
const addTodo = (todos, t) => [...todos, t];
console.log(addTodo(["a"], "b"));      // ["a", "b"]

// 2) Update object state immutably
const setName = (user, name) => ({ ...user, name });
console.log(setName({ id: 1 }, "Ash")); // { id: 1, name: "Ash" }

// 3) Component props: pick props + pass through the rest
function Button({ variant = "primary", ...props }) {
  // return <button data-variant={variant} {...props} />
}
console.log(Button.length);            // 1 (only counts named params)

// 4) Avoid accidental overrides (order matters)
const baseProps = { type: "button", disabled: false };
const override = { disabled: true };
const finalProps = { ...baseProps, ...override };
console.log(finalProps.disabled);      // true`}</Styled.Code>

            <h3>G) Pitfalls & tips</h3>
            <ul>
                <li><strong>Shallow copies only:</strong> spread does not deep-clone nested objects/arrays.</li>
                <li><strong>Order matters:</strong> in object spreads, later keys overwrite earlier keys.</li>
                <li><strong>Performance:</strong> for very large arrays/objects, repeated spreads can be costly-batch updates when possible.</li>
                <li><strong>Rest vs spread:</strong> rest collects in bindings/params; spread expands in literals/calls.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use spread to clone/merge immutably.</li>
                <li>Use rest in destructuring and function params to gather extras.</li>
                <li>Remember: shallow copy-be careful with nested structures.</li>
                <li>In objects, put overrides last so they win.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
