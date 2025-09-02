import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Arrow functions
 */
export default function ArrowFunctions({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "arrow-functions";

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
                <span>Arrow functions (implicit return, this)</span>
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
                Arrow functions are concise function expressions with a{" "}
                <strong>lexical <code>this</code></strong> and optional{" "}
                <strong>implicit return</strong>. Great for callbacks and short utilities.
                Not good as object methods or constructors.
            </p>

            <h3>Quick definitions</h3>
            <ul>
                <li><strong>Implicit return:</strong> single-expression body (no braces) returns that value.</li>
                <li><strong>Lexical <code>this</code>:</strong> arrows capture the surrounding <code>this</code>.</li>
                <li>Arrows don’t have their own <code>arguments</code>/<code>prototype</code> and can’t be used with <code>new</code>.</li>
            </ul>

            <Styled.Divider />

            <h3>A) Syntax &amp; implicit return</h3>
            <Styled.Code>{`// 1 param (parens optional)
const double = x => x * 2;                 // implicit return
console.log(double(4));                    // 8

// 0 or 2+ params → parentheses required
const greet = () => "Hello";               // implicit return
console.log(greet());                      // "Hello"

const add = (a, b) => a + b;
console.log(add(2, 3));                    // 5

// Multi-line body → use braces + 'return'
const sum = (a, b) => {
  const r = a + b;
  return r;                                // explicit return
};
console.log(sum(7, 8));                    // 15

// Returning an object literal → wrap in ()
const makeUser = (id, name) => ({ id, name });
console.log(makeUser(7, "Ash"));           // { id: 7, name: "Ash" }

// Default params, destructuring, rest
const price = (amt = 0, tax = 0.18) => amt * (1 + tax);
console.log(price(100, 0.1));              // 110
console.log(price(100));                   // 118

const printUser = ({ id, name }) => \`\${id}: \${name}\`;
console.log(printUser({ id: 3, name: "Eva" })); // "3: Eva"

const avg = (...nums) => nums.reduce((a, n) => a + n, 0) / nums.length;
console.log(avg(3, 5, 7));                 // 5

// Async arrow (example call would resolve to JSON)
const fetchJSON = async (url) => (await fetch(url)).json();
// fetchJSON("/api").then(data => console.log(data)); // → Promise -> parsed JSON

// IIFE arrow (immediately invoked)
(() => console.log("IIFE arrow"))();       // "IIFE arrow"`}</Styled.Code>

            <h3>B) <code>this</code>: lexical vs normal functions</h3>
            <p>
                Normal functions have a dynamic <code>this</code> (depends on how they’re called).
                Arrow functions <em>capture</em> the surrounding <code>this</code>.
            </p>
            <Styled.Code>{`const counter = {
  n: 0,
  // ❌ Arrow as a method captures outer 'this', not the object
  badInc: () => { /* this is not 'counter' here */ },
  // ✅ Use a normal method when you need 'this'
  inc() { this.n++; },
};

counter.inc();
console.log(counter.n);                    // 1
// counter.badInc();                       // ❌ TypeError in strict mode (this is undefined)

// Preserving 'this' inside callbacks: arrow shines
class Timer {
  constructor() {
    this.ticks = 0;
  }
  start() {
    setInterval(() => {  // arrow captures 'this' from start()
      this.ticks++;
    }, 1000);
  }
}

const t = new Timer();
t.start();
setTimeout(() => console.log("ticks ~", t.ticks), 3100); // "ticks ~" 3 (approx)`}</Styled.Code>

            <h3>C) <code>arguments</code>, <code>call/apply/bind</code>, and constructors</h3>
            <ul>
                <li>Arrows don’t have their own <code>arguments</code>; use rest <code>...args</code>.</li>
                <li><code>call</code>/<code>apply</code>/<code>bind</code> don’t change <code>this</code> for arrows.</li>
                <li>Arrows cannot be used with <code>new</code> and have no <code>prototype</code>.</li>
            </ul>
            <Styled.Code>{`// No 'arguments' in arrows:
const listArgs = (...args) => args;
console.log(listArgs(1, "a", true));       // [1, "a", true]

// call/apply/bind don't affect 'this' on arrows:
const obj = { id: 42 };
const getId = () => this?.id;              // 'this' from outer scope
console.log(getId.call(obj));              // undefined

// ❌ Arrow as constructor → TypeError
const Person = (name) => { this.name = name; };
// new Person("Ash"); // TypeError: Person is not a constructor`}</Styled.Code>

            <h3>D) Common use-cases</h3>
            <Styled.Code>{`// Array utilities
const nums = [1, 2, 3];
const squares = nums.map(n => n ** 2);
console.log(squares);                      // [1, 4, 9]
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);                        // [2]
const total = nums.reduce((a, n) => a + n, 0);
console.log(total);                        // 6

// Event handlers (React/DOM) that don't need their own 'this'
const onClick = (e) => console.log("clicked", e.currentTarget.tagName);
// clicking a <button> → "clicked" "BUTTON"

// Small utilities
const clamp = (x, min, max) => Math.min(max, Math.max(min, x));
console.log(clamp(10, 0, 5));              // 5
console.log(clamp(-2, 0, 5));              // 0
console.log(clamp(3, 0, 5));               // 3`}</Styled.Code>

            <h3>E) Pitfalls (and fixes)</h3>
            <ul>
                <li><strong>Object methods:</strong> avoid arrows when a method needs <code>this</code>. Use method syntax.</li>
                <li><strong>Returning object literal:</strong> wrap in <code>(...)</code> or you’ll return <code>undefined</code>.</li>
                <li><strong>Multiline:</strong> with braces, add an explicit <code>return</code>.</li>
                <li><strong>Constructors:</strong> never use arrows with <code>new</code>.</li>
                <li><strong><code>arguments</code>:</strong> use rest params <code>(...args)</code> instead.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use arrows for small functions and callbacks.</li>
                <li>Use normal functions for object/class methods that need <code>this</code>.</li>
                <li>Implicit return? → no braces. Returning object? → wrap in <code>( )</code>.</li>
                <li>Need parameters list? Use defaults, destructuring, or <code>...rest</code>.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
