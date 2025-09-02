import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Default parameters
 */
export default function DefaultParameters({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "default-parameters";

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
                <span>Default parameters (practical patterns & pitfalls)</span>
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
                Default parameters set a value when an argument is <strong>explicitly <code>undefined</code></strong>.
                They do <em>not</em> trigger for <code>null</code>, <code>0</code>, <code>false</code>, or <code>""</code>.
            </p>

            <h3>A) Basics - only when arg is <code>undefined</code></h3>
            <Styled.Code>{`function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet("Ash"));        // "Hello, Ash"
console.log(greet());             // "Hello, Guest"  (no arg → undefined)
console.log(greet(undefined));    // "Hello, Guest"
console.log(greet(null));         // "Hello, null"   (null ≠ undefined)`}</Styled.Code>

            <h3>B) Defaults with expressions (evaluated only when used)</h3>
            <Styled.Code>{`let calls = 0;
function expensive() { calls++; return 99; }

function demo(a = expensive()) {
  return a;
}

console.log(demo(5));             // 5        (expensive() NOT called)
console.log(demo());              // 99       (expensive() called)
console.log(calls);               // 1`}</Styled.Code>

            <h3>C) Using earlier params in later defaults (allowed)</h3>
            <Styled.Code>{`function area(w = 1, h = w) {
  return w * h;
}
console.log(area(3));             // 9  (h defaults to w)
console.log(area(3, 4));          // 12

// The reverse is NOT allowed (can't use a later param in an earlier default):
// function bad(a = b, b = 1) {}   // ❌ ReferenceError at call time`}</Styled.Code>

            <h3>D) Destructuring + defaults (object & array)</h3>
            <Styled.Code>{`// Object param with its own default AND property defaults
function createUser({ id = 0, name = "Guest", role = "user" } = {}) {
  return { id, name, role };
}
console.log(createUser({ id: 7, name: "Ash" }));
// { id: 7, name: "Ash", role: "user" }
console.log(createUser());
// { id: 0, name: "Guest", role: "user" }

// Array param with default whole-parameter value
const sumPair = ([a = 0, b = 0] = []) => a + b;
console.log(sumPair([4]));         // 4
console.log(sumPair());            // 0`}</Styled.Code>

            <h3>E) Defaults vs logical OR (don't break on falsey values)</h3>
            <Styled.Code>{`// Using defaults keeps 0 / false / "" intact:
function padLeft(str, n = 0) { return " ".repeat(n) + str; }
console.log(padLeft("X", 0));      // "X"  (0 kept)

// naive || fallback would override 0:
function padLeftBad(str, n) { n = n || 2; return " ".repeat(n) + str; }
console.log(padLeftBad("X", 0));   // "  X"  (oops)`}</Styled.Code>

            <h3>F) With rest & spread (what's valid)</h3>
            <Styled.Code>{`const sum = (...nums) => nums.reduce((a,n) => a + n, 0);
console.log(sum(1,2,3));           // 6

// Rest must come last and cannot have a default:
// const bad = (...nums = []) => 0  // ❌ SyntaxError

// Spreading into a call works as usual
console.log(sum(...[4,6]));        // 10`}</Styled.Code>

            <h3>G) Practical React patterns</h3>
            <Styled.Code>{`// 1) Default simple props in the signature
function Button({ label = "Click", disabled = false, onClick } = {}) {
  // return <button disabled={disabled} onClick={onClick}>{label}</button>
}

// 2) Default event handlers (no-op)
const noop = () => {};
function Field({ onChange = noop, value = "" } = {}) {
  // ...
}

// 3) Derive fallbacks from other props
function Price({ amount, tax = amount * 0.18 } = {}) {
  return amount + tax;
}
console.log(Price({ amount: 100 }));  // 118
console.log(Price({ amount: 100, tax: 5 })); // 105`}</Styled.Code>

            <h3>H) Pitfalls & tips</h3>
            <ul>
                <li><strong>Only undefined triggers</strong> the default (not <code>null</code> or other falsey values).</li>
                <li><strong>Order matters:</strong> you can use previous params in later defaults, not the other way around.</li>
                <li><strong>Evaluate-on-demand:</strong> expensive defaults run only when the arg is missing.</li>
                <li><strong>Destructuring + defaults:</strong> give the whole param a default object/array to avoid errors.</li>
                <li><strong>React:</strong> prefer prop defaults in the function signature; keep objects stable to avoid re-renders.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use defaults instead of <code>||</code> when 0/""/false are valid inputs.</li>
                <li>Put cheaper params first; compute later defaults from earlier ones if needed.</li>
                <li>For params that are objects/arrays, default the whole param too (<code>{"{}"}</code> or <code>{"[]"}</code>).</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
