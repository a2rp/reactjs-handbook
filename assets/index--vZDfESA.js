import{R as i,j as e,d as c}from"./index-B46-zIwX.js";import{S as s}from"./styled-CjylpLiR.js";function a({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="let-vs-const";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"let vs const (avoid var)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(d,{})})})]})}function d(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:["Practical rule: ",e.jsxs("strong",{children:["use ",e.jsx("code",{children:"const"})," by default"]}),". Switch to"," ",e.jsx("code",{children:"let"})," only when you truly need to ",e.jsx("em",{children:"reassign"}),". Prefer block scope and avoid ",e.jsx("code",{children:"var"}),"."]}),e.jsx("h3",{children:"Definitions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"let"}),": ",e.jsx("strong",{children:"block-scoped"})," variable; ",e.jsx("em",{children:"reassignable"}),"; not redeclarable in the same scope."]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"}),": ",e.jsx("strong",{children:"block-scoped binding"}),"; ",e.jsx("em",{children:"not reassignable"}),". For objects/arrays, the reference is fixed but contents can still mutate."]})]}),e.jsx("h3",{children:"Key points"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Scope:"})," ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"})," → block; ",e.jsx("code",{children:"var"})," → function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Redeclare:"})," ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"})," ❌ (same scope), ",e.jsx("code",{children:"var"})," ✅."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reassign:"})," ",e.jsx("code",{children:"let"})," ✅; ",e.jsx("code",{children:"const"})," ❌ (but object/array contents may mutate)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readability:"})," ",e.jsx("code",{children:"const"})," signals “this shouldn’t change”, which prevents bugs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Loops:"})," ",e.jsx("code",{children:"let"})," makes a new binding per iteration (great with async callbacks)."]})]}),e.jsx(s.Divider,{}),e.jsx("h3",{children:"A) Block scope & redeclare vs reassign"}),e.jsx(s.Code,{children:`{
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
console.log(y);        // { n: 2 }`}),e.jsxs("h3",{children:["B) Loops & closures (why ",e.jsx("code",{children:"let"})," shines)"]}),e.jsx(s.Code,{children:`// VAR: one binding shared → all log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}

// LET: new binding per iteration → 0,1,2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}`}),e.jsx("h3",{children:"C) const with arrays/objects (mutate vs reassign)"}),e.jsx(s.Code,{children:`const arr = [1, 2, 3];
arr.push(4);           // ✅ mutate contents
// arr = [];           // ❌ reassign binding
console.log(arr);      // [1,2,3,4]

const user = Object.freeze({ id: 1, name: "Ash" });
// user.name = "New";  // ❌ blocked when frozen (strict mode errors)
console.log(user);`}),e.jsx("h3",{children:"D) Shadowing & blocks"}),e.jsx(s.Code,{children:`let value = "outer";
{
  const value = "inner"; // shadowed in block scope
  console.log(value);    // "inner"
}
console.log(value);      // "outer"`}),e.jsx("h3",{children:"When I use which"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"const"})," for imports, config values, functions/components, derived values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"let"})," for counters, accumulators, and anything that must change over time."]}),e.jsxs("li",{children:["Avoid ",e.jsx("strong",{children:"var"})," (function scope + redeclare allow many footguns)."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Default to ",e.jsx("strong",{children:"const"}),"."]}),e.jsxs("li",{children:["Need to change the value? → switch to ",e.jsx("strong",{children:"let"}),"."]}),e.jsx("li",{children:"Declare before use for clarity."}),e.jsxs("li",{children:["Prefer block scope; avoid ",e.jsx("code",{children:"var"}),"."]})]}),e.jsx(s.Divider,{})]})}function h({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="arrow-functions";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Arrow functions (implicit return, this)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(u,{})})})]})}function u(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:["Arrow functions are concise function expressions with a"," ",e.jsxs("strong",{children:["lexical ",e.jsx("code",{children:"this"})]})," and optional"," ",e.jsx("strong",{children:"implicit return"}),". Great for callbacks and short utilities. Not good as object methods or constructors."]}),e.jsx("h3",{children:"Quick definitions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Implicit return:"})," single-expression body (no braces) returns that value."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Lexical ",e.jsx("code",{children:"this"}),":"]})," arrows capture the surrounding ",e.jsx("code",{children:"this"}),"."]}),e.jsxs("li",{children:["Arrows don’t have their own ",e.jsx("code",{children:"arguments"}),"/",e.jsx("code",{children:"prototype"})," and can’t be used with ",e.jsx("code",{children:"new"}),"."]})]}),e.jsx(s.Divider,{}),e.jsx("h3",{children:"A) Syntax & implicit return"}),e.jsx(s.Code,{children:`// 1 param (parens optional)
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
(() => console.log("IIFE arrow"))();       // "IIFE arrow"`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"this"}),": lexical vs normal functions"]}),e.jsxs("p",{children:["Normal functions have a dynamic ",e.jsx("code",{children:"this"})," (depends on how they’re called). Arrow functions ",e.jsx("em",{children:"capture"})," the surrounding ",e.jsx("code",{children:"this"}),"."]}),e.jsx(s.Code,{children:`const counter = {
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
setTimeout(() => console.log("ticks ~", t.ticks), 3100); // "ticks ~" 3 (approx)`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"arguments"}),", ",e.jsx("code",{children:"call/apply/bind"}),", and constructors"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Arrows don’t have their own ",e.jsx("code",{children:"arguments"}),"; use rest ",e.jsx("code",{children:"...args"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"call"}),"/",e.jsx("code",{children:"apply"}),"/",e.jsx("code",{children:"bind"})," don’t change ",e.jsx("code",{children:"this"})," for arrows."]}),e.jsxs("li",{children:["Arrows cannot be used with ",e.jsx("code",{children:"new"})," and have no ",e.jsx("code",{children:"prototype"}),"."]})]}),e.jsx(s.Code,{children:`// No 'arguments' in arrows:
const listArgs = (...args) => args;
console.log(listArgs(1, "a", true));       // [1, "a", true]

// call/apply/bind don't affect 'this' on arrows:
const obj = { id: 42 };
const getId = () => this?.id;              // 'this' from outer scope
console.log(getId.call(obj));              // undefined

// ❌ Arrow as constructor → TypeError
const Person = (name) => { this.name = name; };
// new Person("Ash"); // TypeError: Person is not a constructor`}),e.jsx("h3",{children:"D) Common use-cases"}),e.jsx(s.Code,{children:`// Array utilities
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
console.log(clamp(3, 0, 5));               // 3`}),e.jsx("h3",{children:"E) Pitfalls (and fixes)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Object methods:"})," avoid arrows when a method needs ",e.jsx("code",{children:"this"}),". Use method syntax."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning object literal:"})," wrap in ",e.jsx("code",{children:"(...)"})," or you’ll return ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiline:"})," with braces, add an explicit ",e.jsx("code",{children:"return"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constructors:"})," never use arrows with ",e.jsx("code",{children:"new"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"arguments"}),":"]})," use rest params ",e.jsx("code",{children:"(...args)"})," instead."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use arrows for small functions and callbacks."}),e.jsxs("li",{children:["Use normal functions for object/class methods that need ",e.jsx("code",{children:"this"}),"."]}),e.jsxs("li",{children:["Implicit return? → no braces. Returning object? → wrap in ",e.jsx("code",{children:"( )"}),"."]}),e.jsxs("li",{children:["Need parameters list? Use defaults, destructuring, or ",e.jsx("code",{children:"...rest"}),"."]})]}),e.jsx(s.Divider,{})]})}function x({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="destructuring";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Destructuring (objects, arrays, parameters)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(j,{})})})]})}function j(){return e.jsxs(s.Content,{children:[e.jsx("p",{children:"Destructuring pulls values out of objects/arrays into variables. It's great for clean code, default values, renaming, and concise function parameters."}),e.jsx("h3",{children:"Core patterns"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Objects:"})," match by ",e.jsx("em",{children:"key name"}),", can rename and set defaults."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays:"})," match by ",e.jsx("em",{children:"position"}),", can skip items and use rest."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," destructure right in the function signature."]})]}),e.jsx(s.Divider,{}),e.jsx("h3",{children:"A) Object destructuring - basics, renaming, defaults"}),e.jsx(s.Code,{children:`const user = { id: 1, name: "Ash", role: "dev" };

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
console.log(publicUser);                      // { id: 1, name: "Ash" }`}),e.jsx("h3",{children:"B) Array destructuring - positions, skipping, defaults, rest"}),e.jsx(s.Code,{children:`const nums = [10, 20, 30, 40];

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
console.log(p, q);                            // 2 1`}),e.jsx("h3",{children:"C) Function parameters - object/array + defaults"}),e.jsx(s.Code,{children:`// Object param with defaults + renaming
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
// { id: 1, rest: { name: "Ash", role: "dev" } }`}),e.jsx("h3",{children:"D) Practical React patterns"}),e.jsx(s.Code,{children:`// 1) Props destructuring in function signature
function Button({ label = "Click", onClick, disabled = false }) {
  // ...
}

// 2) useState returns an array → array destructuring
const [count, setCount] = React.useState(0);
// count: 0 ; setCount: function

// 3) Destructure API response (object)
const resp = { data: { items: [1,2,3] }, status: 200 };
const { data: { items } = { items: [] }, status } = resp;
console.log(items, status);                   // [1,2,3] 200`}),e.jsx("h3",{children:"E) Destructuring with loops & utilities"}),e.jsx(s.Code,{children:`const scores = { alice: 8, bob: 6, charlie: 9 };

for (const [name, score] of Object.entries(scores)) {
  if (score >= 8) console.log(name, "⭐");   // "alice ⭐", "charlie ⭐"
}

// Map of pairs to objects
const pairs = [["id", 1], ["name", "Ash"]];
const obj = Object.fromEntries(pairs);
console.log(obj);                             // { id: 1, name: "Ash" }`}),e.jsx("h3",{children:"F) Spread vs Rest (quick contrast)"}),e.jsx(s.Code,{children:`// Rest (collect) in binding/params:
const { password, ...safe } = { user: "a2rp", password: "secret" };
console.log(safe);                            // { user: "a2rp" }

// Spread (expand) in literals:
const base = { id: 1, name: "Ash" };
const clone = { ...base, role: "admin" };
console.log(clone);                           // { id: 1, name: "Ash", role: "admin" }`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Object vs Array:"})," objects match by key; arrays by position."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Defaults run on ",e.jsx("code",{children:"undefined"})]})," (not on ",e.jsx("code",{children:"null"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Safe nested:"})," give a default to the parent (",e.jsx("code",{children:"{ meta: {} }"}),") to avoid errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rename to avoid conflicts:"})," ",e.jsx("code",{children:"const { id: userId } = user"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep it readable:"})," deep/nested destructuring is powerful-don't overdo it."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use object destructuring for clarity and defaults."}),e.jsx("li",{children:"Use array destructuring for positions and quick swaps."}),e.jsx("li",{children:"Destructure props & hook returns right at the top."}),e.jsxs("li",{children:["Use rest (",e.jsx("code",{children:"...rest"}),") to exclude or gather extras; spread to clone/extend."]})]}),e.jsx(s.Divider,{})]})}function p({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="rest-and-spread";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Rest & spread (arrays, objects, params)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(m,{})})})]})}function m(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:["**Spread** ",e.jsx("code",{children:"..."})," copies/expands values into a new literal.",e.jsx("br",{}),"**Rest** ",e.jsx("code",{children:"..."})," gathers the remaining values into a single variable (in bindings or parameter lists)."]}),e.jsx("h3",{children:"A) Spread - Arrays"}),e.jsx(s.Code,{children:`const a = [1, 2];
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
console.log([..."hey"]);               // ["h", "e", "y"]`}),e.jsx("h3",{children:"B) Rest - Arrays & bindings"}),e.jsx(s.Code,{children:`const nums = [10, 20, 30, 40];

const [head, ...tail] = nums;
console.log(head);                     // 10
console.log(tail);                     // [20, 30, 40]

// skip with commas + rest
const [, second, ...rest] = nums;
console.log(second);                   // 20
console.log(rest);                     // [30, 40]`}),e.jsx("h3",{children:"C) Spread - Objects"}),e.jsx(s.Code,{children:`const base = { id: 1, name: "Ash" };

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
console.log(user.info.score);          // 9  (same inner object reference)`}),e.jsx("h3",{children:"D) Rest - Object properties"}),e.jsx(s.Code,{children:`const user = { id: 1, name: "Ash", password: "secret", role: "dev" };

// pick some, gather the rest
const { password, ...publicUser } = user;
console.log(publicUser);               // { id: 1, name: "Ash", role: "dev" }

// rename + rest
const { id: userId, ...rest } = user;
console.log(userId);                   // 1
console.log(rest.role);                // "dev"`}),e.jsx("h3",{children:"E) Parameters: defaults, rest & spread"}),e.jsx(s.Code,{children:`// rest in params (collects arguments)
const sum = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log(sum(1, 2, 3));             // 6

// default params + rest
const makeUrl = (base = "/", ...parts) => base + parts.join("/");
console.log(makeUrl("/api", "v1", "users")); // "/api/v1/users"

// spread when calling
const pair = [4, 6];
console.log(sum(...pair));             // 10

// NOTE: rest must be last
// const bad = (a, ...rest, b) => {}   // ❌ SyntaxError`}),e.jsx("h3",{children:"F) Practical React patterns"}),e.jsx(s.Code,{children:`// 1) Update array state immutably
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
console.log(finalProps.disabled);      // true`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow copies only:"})," spread does not deep-clone nested objects/arrays."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Order matters:"})," in object spreads, later keys overwrite earlier keys."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance:"})," for very large arrays/objects, repeated spreads can be costly-batch updates when possible."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rest vs spread:"})," rest collects in bindings/params; spread expands in literals/calls."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use spread to clone/merge immutably."}),e.jsx("li",{children:"Use rest in destructuring and function params to gather extras."}),e.jsx("li",{children:"Remember: shallow copy-be careful with nested structures."}),e.jsx("li",{children:"In objects, put overrides last so they win."})]}),e.jsx(s.Divider,{})]})}function g({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="template-literals";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Template literals (interpolation, multiline, tags)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(f,{})})})]})}function f(){return e.jsxs(s.Content,{children:["Template literals use backticks ",e.jsx("code",{children:"`"})," to make strings easier:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:" interpolation "})," with ",e.jsxs("code",{children:["$","{ ... }"]}),","]}),e.jsxs("li",{children:[e.jsx("strong",{children:" multiline "})," strings, and ",e.jsx("strong",{children:" tagged templates"}),"."]})]}),e.jsx("h3",{children:"A) Basics - interpolation & multiline"}),e.jsx(s.Code,{children:`const name = "Ash";
const score = 42;

const msg = \`Hello, \${name}! Your score is \${score}.\`;
console.log(msg);                            // "Hello, Ash! Your score is 42."

// Multiline without \\n escapes:
const lines = \`
First line
Second line
Third line
\`;
console.log(lines.trim());
// First line
// Second line
// Third line

// Expressions allowed inside \${...}
const taxed = (amt) => amt * 1.18;
console.log(\`Total: \${taxed(100)}\`);       // "Total: 118"`}),e.jsxs("h3",{children:["B) Expressions inside ",e.jsxs("code",{children:["$","{ ... }"]})]}),e.jsx(s.Code,{children:`const a = 3, b = 5;
console.log(\`\${a} + \${b} = \${a + b}\`);   // "3 + 5 = 8"

const ok = true;
console.log(\`Status: \${ok ? "OK" : "FAIL"}\`); // "Status: OK"

// Formatting inside template
const price = 12345.678;
console.log(\`₹\${price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}\`);
// "₹12,345.68"

// Safely stringify objects
const user = { id: 1, name: "Ash" };
console.log(\`user=\${JSON.stringify(user)}\`);
// 'user={"id":1,"name":"Ash"}'`}),e.jsxs("h3",{children:["C) Escaping backticks & ",e.jsxs("code",{children:["$","{ ... }"]})]}),e.jsx(s.Code,{children:'// Escape a backtick inside a template with \\`\nconst s = `Use a backtick like: \\`this\\``;\nconsole.log(s);                              // "Use a backtick like: `this`"\n\n// To show ${...} literally, escape the \'$\' or wrap in a normal string\nconsole.log(`Show \\${x} literally`);      // "Show ${x} literally"'}),e.jsx("h3",{children:"D) Tagged templates (advanced but useful)"}),e.jsxs("p",{children:["A ",e.jsx("em",{children:"tag"})," is a function that receives the string parts and the evaluated values. You can format, sanitize, or highlight values."]}),e.jsx(s.Code,{children:`// Simple highlight tag: wrap values in [brackets]
function highlight(strings, ...values) {
  return strings.reduce((out, str, i) => out + str + (i < values.length ? \`[\${values[i]}]\` : ""), "");
}
const lang = "JS", topic = "templates";
console.log(highlight\`Learning \${lang} \${topic}!\`);
// "Learning [JS] [templates]!"

// Inspect raw strings (preserves escapes)
function showRaw(strings) {
  console.log(strings.raw[0]); // first raw chunk
}
showRaw\`line1\\nline2\`;                      // prints "line1\\nline2"`}),e.jsxs("h3",{children:["E) ",e.jsx("code",{children:"String.raw"})," (keep backslashes)"]}),e.jsx(s.Code,{children:`// Useful for regex, paths, or copy-paste snippets
const raw = String.raw\`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(raw);                              // "C:\\Users\\Ash\\nNewLine"

// Compare with normal template:
const normal = \`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(normal);
// "C:\\Users\\Ash
// NewLine"`}),e.jsx("h3",{children:"F) Practical patterns"}),e.jsx(s.Code,{children:`// 1) Build URLs safely with encodeURIComponent
const params = { q: "react hooks", page: 2 };
const url = \`/search?q=\${encodeURIComponent(params.q)}&page=\${params.page}\`;
console.log(url);                              // "/search?q=react%20hooks&page=2"

// 2) Generate small blocks of text (emails/logs)
const to = "recruiter@company.com";
const body = \`Hi,
I'm sharing my ReactJS handbook link.
Thanks,
Ash\`;
console.log(body.split("\\n").length);         // 4

// 3) Inline templates for labels
const label = (n) => \`\${n} \${n === 1 ? "item" : "items"}\`;
console.log(label(1));                         // "1 item"
console.log(label(3));                         // "3 items"`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Don't over-nest logic"})," inside ",e.jsxs("code",{children:["$","{ ... }"]}),"; extract helpers for readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Escape backticks"})," with ",e.jsx("code",{children:"\\\\`"})," when you must include them literally."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"JSON.stringify"})]})," to embed objects safely."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Beware of whitespace"}),": multiline templates keep your indentation/spaces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For raw backslashes"}),", prefer ",e.jsx("code",{children:"String.raw"})," or a tag."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use backticks for interpolation and multiline strings."}),e.jsx("li",{children:"Keep complex logic out of templates-call helpers instead."}),e.jsxs("li",{children:["Escape backticks and ",e.jsx("code",{children:"$"})," when showing them literally."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"String.raw"})," or tagged templates for special formatting."]})]}),e.jsx(s.Divider,{})]})}function b({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="default-parameters";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Default parameters (practical patterns & pitfalls)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(y,{})})})]})}function y(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:["Default parameters set a value when an argument is ",e.jsxs("strong",{children:["explicitly ",e.jsx("code",{children:"undefined"})]}),". They do ",e.jsx("em",{children:"not"})," trigger for ",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"false"}),", or ",e.jsx("code",{children:'""'}),"."]}),e.jsxs("h3",{children:["A) Basics - only when arg is ",e.jsx("code",{children:"undefined"})]}),e.jsx(s.Code,{children:`function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet("Ash"));        // "Hello, Ash"
console.log(greet());             // "Hello, Guest"  (no arg → undefined)
console.log(greet(undefined));    // "Hello, Guest"
console.log(greet(null));         // "Hello, null"   (null ≠ undefined)`}),e.jsx("h3",{children:"B) Defaults with expressions (evaluated only when used)"}),e.jsx(s.Code,{children:`let calls = 0;
function expensive() { calls++; return 99; }

function demo(a = expensive()) {
  return a;
}

console.log(demo(5));             // 5        (expensive() NOT called)
console.log(demo());              // 99       (expensive() called)
console.log(calls);               // 1`}),e.jsx("h3",{children:"C) Using earlier params in later defaults (allowed)"}),e.jsx(s.Code,{children:`function area(w = 1, h = w) {
  return w * h;
}
console.log(area(3));             // 9  (h defaults to w)
console.log(area(3, 4));          // 12

// The reverse is NOT allowed (can't use a later param in an earlier default):
// function bad(a = b, b = 1) {}   // ❌ ReferenceError at call time`}),e.jsx("h3",{children:"D) Destructuring + defaults (object & array)"}),e.jsx(s.Code,{children:`// Object param with its own default AND property defaults
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
console.log(sumPair());            // 0`}),e.jsx("h3",{children:"E) Defaults vs logical OR (don't break on falsey values)"}),e.jsx(s.Code,{children:`// Using defaults keeps 0 / false / "" intact:
function padLeft(str, n = 0) { return " ".repeat(n) + str; }
console.log(padLeft("X", 0));      // "X"  (0 kept)

// naive || fallback would override 0:
function padLeftBad(str, n) { n = n || 2; return " ".repeat(n) + str; }
console.log(padLeftBad("X", 0));   // "  X"  (oops)`}),e.jsx("h3",{children:"F) With rest & spread (what's valid)"}),e.jsx(s.Code,{children:`const sum = (...nums) => nums.reduce((a,n) => a + n, 0);
console.log(sum(1,2,3));           // 6

// Rest must come last and cannot have a default:
// const bad = (...nums = []) => 0  // ❌ SyntaxError

// Spreading into a call works as usual
console.log(sum(...[4,6]));        // 10`}),e.jsx("h3",{children:"G) Practical React patterns"}),e.jsx(s.Code,{children:`// 1) Default simple props in the signature
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
console.log(Price({ amount: 100, tax: 5 })); // 105`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Only undefined triggers"})," the default (not ",e.jsx("code",{children:"null"})," or other falsey values)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Order matters:"})," you can use previous params in later defaults, not the other way around."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluate-on-demand:"})," expensive defaults run only when the arg is missing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Destructuring + defaults:"})," give the whole param a default object/array to avoid errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React:"})," prefer prop defaults in the function signature; keep objects stable to avoid re-renders."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use defaults instead of ",e.jsx("code",{children:"||"}),' when 0/""/false are valid inputs.']}),e.jsx("li",{children:"Put cheaper params first; compute later defaults from earlier ones if needed."}),e.jsxs("li",{children:["For params that are objects/arrays, default the whole param too (",e.jsx("code",{children:"{}"})," or ",e.jsx("code",{children:"[]"}),")."]})]}),e.jsx(s.Divider,{})]})}function w({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="optional-chaining";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsxs("span",{children:["Optional chaining ",e.jsx("code",{children:"?."})," (safer nested access & calls)"]})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(v,{})})})]})}function v(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Optional chaining"})," returns ",e.jsx("code",{children:"undefined"})," instead of throwing if the part on the ",e.jsx("em",{children:"left"})," of ",e.jsx("code",{children:"?."})," is ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),". It ",e.jsx("em",{children:"does not"})," short-circuit for other falsey values like ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"false"}),", or ",e.jsx("code",{children:'""'}),"."]}),e.jsx("h3",{children:"A) Property & element access"}),e.jsx(s.Code,{children:`const user = { id: 1, profile: { email: "a@b.com" } };

console.log(user?.profile?.email);        // "a@b.com"
console.log(user?.settings?.theme);       // undefined (no throw)

// element access with []
const prefKey = "theme";
console.log(user?.prefs?.[prefKey]);      // undefined

// arrays
const arr = [10, 20, 30];
console.log(arr?.[0]);                    // 10
const maybe = null;
console.log(maybe?.[0]);                  // undefined (safe)`}),e.jsx("h3",{children:"B) Optional call (functions & methods)"}),e.jsx(s.Code,{children:`const maybeCb = undefined;
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
console.log(nothing?.inc?.());            // undefined`}),e.jsx("h3",{children:"C) Combine with a default (preview for next topic)"}),e.jsx(s.Code,{children:`const api = { data: { items: [1,2,3] } };
const first = api?.data?.items?.[0] ?? null;
console.log(first);                        // 1

const missing = {};
console.log(missing?.data?.items?.[0] ?? "none"); // "none"`}),e.jsxs("h3",{children:["D) vs ",e.jsx("code",{children:"&&"})," (truthy check)"]}),e.jsx(s.Code,{children:`const n = 0;
console.log(n && n.toString());           // 0   (short-circuits on falsy 0)
console.log(n?.toString());               // "0" (0 is not null/undefined, so it proceeds)`}),e.jsx("h3",{children:"E) Practical React / DOM patterns"}),e.jsx(s.Code,{children:`// React props / API responses
const title = props?.post?.title ?? "Untitled";
const firstItem = resp?.data?.items?.[0] ?? null;

// Safe event access
const handle = (e) => {
  const id = e?.currentTarget?.dataset?.id ?? "unknown";
  // ...
};

// DOM query
document.querySelector("#title")?.scrollIntoView({ behavior: "smooth" });`}),e.jsx("h3",{children:"F) Pitfalls & rules"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Only guard what's left of ",e.jsx("code",{children:"?."}),":"]})," write each uncertain hop as ",e.jsx("code",{children:"?."})," (",e.jsx("code",{children:"a?.b?.c"}),"), not ",e.jsx("code",{children:"a?.b.c"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not an lvalue:"})," you can't assign to it — ",e.jsx("code",{children:"obj?.prop = 1"})," ❌ (SyntaxError)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Doesn't mask real errors:"})," if a function exists but throws, ",e.jsx("code",{children:"?."})," won't catch that."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't overuse:"})," if something should exist by contract, validate up-front instead of chaining everywhere."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"?."})," for uncertain hops; chain it per level."]}),e.jsxs("li",{children:["It short-circuits only on ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:["Pair with ",e.jsx("code",{children:"??"})," (next topic) to provide clean defaults."]}),e.jsxs("li",{children:["For methods, prefer ",e.jsx("code",{children:"obj?.method?.()"})," to preserve ",e.jsx("code",{children:"this"}),"."]})]}),e.jsx(s.Divider,{})]})}function k({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="nullish-coalescing";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsxs("span",{children:["Nullish coalescing ",e.jsx("code",{children:"??"})," (clean fallbacks)"]})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(C,{})})})]})}function C(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:e.jsx("code",{children:"??"})})," returns the right-hand value ",e.jsx("em",{children:"only if"})," the left-hand side is ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),' (aka "nullish"). It keeps valid falsey values like ',e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"false"}),", and ",e.jsx("code",{children:'""'}),"."]}),e.jsx("h3",{children:"A) Basics — only null/undefined trigger the fallback"}),e.jsx(s.Code,{children:`console.log(null ?? "fallback");         // "fallback"
console.log(undefined ?? "fallback");    // "fallback"

// falsey but NOT nullish → left value is kept
console.log(0 ?? 100);                   // 0
console.log(false ?? true);              // false
console.log("" ?? "N/A");                // ""`}),e.jsxs("h3",{children:["B) vs ",e.jsx("code",{children:"||"})," (truthy check)"]}),e.jsx(s.Code,{children:`// || uses truthiness → will replace 0/""/false
console.log(0 || 100);                   // 100   (oops)
console.log(0 ?? 100);                   // 0     (correct when 0 is valid)

console.log("" || "N/A");                // "N/A" (oops)
console.log("" ?? "N/A");                // ""    (keep empty string)`}),e.jsx("h3",{children:"C) With optional chaining (common pattern)"}),e.jsx(s.Code,{children:`const resp = { data: { items: [1,2,3] } };

const first = resp?.data?.items?.[0] ?? null;
console.log(first);                       // 1

const missing = {};
const list = missing?.data?.items ?? [];
console.log(Array.isArray(list), list.length); // true 0`}),e.jsxs("h3",{children:["D) Precedence & mixing with ",e.jsx("code",{children:"&&"}),"/",e.jsx("code",{children:"||"})]}),e.jsx(s.Code,{children:`// You cannot mix ?? with &&/|| without parentheses:
// const bad = null ?? 0 || 5;           // ❌ SyntaxError

const v1 = (null ?? 0) || 5;
console.log(v1);                          // 5   (0 || 5 → 5)

const v2 = null ?? (0 || 5);
console.log(v2);                          // 5   (0 || 5 → 5)

const v3 = (undefined ?? 7) && "ok";
console.log(v3);                          // "ok"`}),e.jsxs("h3",{children:["E) Nullish coalescing assignment ",e.jsx("code",{children:"??="})]}),e.jsx(s.Code,{children:`let a = null;
a ??= 10;
console.log(a);                           // 10

let b = 0;
b ??= 5;                                  // left is NOT null/undefined
console.log(b);                           // 0 (kept)

const cfg = { retries: undefined };
cfg.retries ??= 3;
console.log(cfg.retries);                 // 3`}),e.jsx("h3",{children:"F) Edge cases (NaN, empty arrays/objects)"}),e.jsx(s.Code,{children:`const n = NaN;
console.log(n ?? 0);                      // NaN (not nullish)
console.log(Number.isNaN(n) ? 0 : n);     // 0   (explicit fallback for NaN)

const arr = [];
console.log((arr ?? ["x"]).length);       // 0 (arr is not nullish)

const obj = {};
console.log((obj ?? { a: 1 }));           // {} (obj is not nullish)`}),e.jsx("h3",{children:"G) Practical React patterns"}),e.jsx(s.Code,{children:`// 1) Safe prop fallbacks (keep 0/false/"")
const label = props?.label ?? "—";
const disabled = props?.disabled ?? false;

// 2) Controlled inputs: avoid undefined
const value = form?.name ?? "";

// 3) API defaults
const items = resp?.data?.items ?? [];
const total = resp?.data?.total ?? 0;

// 4) Optional callback call
props?.onSelect?.(id ?? 0);               // combine ?. and ??`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"??"}),' when 0/""/false are valid']})," and should not trigger a fallback."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"a?.b ?? default"})]})," for uncertain chains with defaults."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Add parentheses"})," when mixing with ",e.jsx("code",{children:"&&"})," or ",e.jsx("code",{children:"||"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"NaN is not nullish"}),": coalesce explicitly if you need a number fallback."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Left side null/undefined? → returns right side; otherwise returns left."}),e.jsxs("li",{children:["Don't replace valid falsey values—use ",e.jsx("code",{children:"??"}),", not ",e.jsx("code",{children:"||"}),"."]}),e.jsxs("li",{children:["Pair with ",e.jsx("code",{children:"?."}),' to avoid "cannot read property" errors.']}),e.jsxs("li",{children:["Consider ",e.jsx("code",{children:"??="}),' for concise "set if missing".']})]}),e.jsx(s.Divider,{})]})}function A({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="map-filter-reduce";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Map / Filter / Reduce (transform, select, aggregate)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(S,{})})})]})}function S(){return e.jsxs(s.Content,{children:[e.jsxs("div",{style:{marginBottom:"30px"},children:["Three array workhorses:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"map"})," transforms each item,"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"filter"})," keeps matching items, and "]}),e.jsxs("li",{children:[e.jsx("strong",{children:"reduce"})," folds many values into one (sum, object, etc.)."]})]}),"All return ",e.jsx("em",{children:" new arrays/values"})," and do not mutate the original."]}),e.jsx("h3",{children:"A) map - transform each item"}),e.jsx(s.Code,{children:`const nums = [1, 2, 3];
const squares = nums.map(n => n * 2);
console.log(squares);                         // [2, 4, 6]
console.log(nums);                            // [1, 2, 3] (unchanged)

// index & array are available
const withIndex = nums.map((n, i) => n + i);
console.log(withIndex);                       // [1, 3, 5]

// Map objects
const users = [{ id: 1, name: "Ash" }, { id: 2, name: "Riya" }];
const names = users.map(u => u.name);
console.log(names);                           // ["Ash", "Riya"]

// parseInt pitfall: map passes (value, index) → index becomes radix!
console.log(["10","11","12"].map(parseInt));  // [10, NaN, 1]  (wrong)
console.log(["10","11","12"].map(x => parseInt(x, 10))); // [10, 11, 12]
console.log(["10","11","12"].map(Number));    // [10, 11, 12]`}),e.jsx("h3",{children:"B) filter - keep items that pass the test"}),e.jsx(s.Code,{children:`const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens);                           // [2, 4, 6]

// Remove null/undefined quickly
const messy = [0, null, "hi", undefined, false];
console.log(messy.filter(Boolean));           // ["hi"] (drops 0/false too!)
console.log(messy.filter(v => v != null));    // [0, "hi", false] (keeps 0/false)

// Unique with filter + indexOf
const dups = [2,2,3,3,3,1];
const unique = dups.filter((n, i, a) => a.indexOf(n) === i);
console.log(unique);                          // [2, 3, 1]`}),e.jsx("h3",{children:"C) reduce - fold into a single value"}),e.jsx(s.Code,{children:`const nums = [5, 2, 7];

// sum
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);                             // 14

// max
const max = nums.reduce((m, n) => n > m ? n : m, -Infinity);
console.log(max);                             // 7

// build an object (index by id)
const list = [{id: 1, name: "Ash"}, {id: 2, name: "Riya"}];
const byId = list.reduce((acc, u) => { acc[u.id] = u; return acc; }, {});
console.log(byId);                            // { '1': {...}, '2': {...} }

// count occurrences (frequency map)
const letters = ["a","b","a","c","b","a"];
const freq = letters.reduce((acc, ch) => (acc[ch] = (acc[ch]||0)+1, acc), {});
console.log(freq);                            // { a: 3, b: 2, c: 1 }

// groupBy
const people = [
  { team: "A", name: "Ash" },
  { team: "B", name: "Riya" },
  { team: "A", name: "Dev" },
];
const groups = people.reduce((acc, p) => {
  (acc[p.team] ||= []).push(p);
  return acc;
}, {});
console.log(Object.keys(groups));             // ["A", "B"]`}),e.jsx("h3",{children:"D) Chain them - readable pipelines"}),e.jsx(s.Code,{children:`const nums = [1,2,3,4,5,6];
const result = nums
  .filter(n => n % 2 === 0)   // keep evens → [2,4,6]
  .map(n => n * n)            // square     → [4,16,36]
  .reduce((a, n) => a + n, 0);// sum        → 56
console.log(result);                          // 56`}),e.jsx("h3",{children:"E) Immutability & side-effects"}),e.jsx(s.Code,{children:`const a = [1,2,3];

// Do NOT mutate the same array while mapping/filtering
// Bad:
const bad = a.map(n => { a.push(99); return n; });
console.log(a.length, bad.length);            // 6 3 (weird bugs)

// Good: treat callbacks as pure functions
const good = a.map(n => n * 10);
console.log(good);                            // [10, 20, 30]`}),e.jsx("h3",{children:"F) Practical React patterns"}),e.jsx(s.Code,{children:`// 1) Render lists
const items = ["Home","Docs","Blog"];
// items.map((t) => <li key={t}>{t}</li>)

// 2) Derive totals
const cart = [{price: 100, qty: 2}, {price: 50, qty: 1}];
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(total);                           // 250

// 3) Update state immutably (map to replace one item)
const toggle = (todos, id) =>
  todos.map(t => t.id === id ? { ...t, done: !t.done } : t);

// 4) Keys: prefer stable ids over array index
// <li key={todo.id}>...</li>`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"map"})," must return a value each time; forgetting a return gives an array of undefined."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"filter"})," expects a boolean; return the condition directly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"reduce"}),": always provide an initial value (especially for empty arrays)."]}),e.jsxs("li",{children:["For deep transforms, consider ",e.jsx("code",{children:"flatMap"})," or a single well-named ",e.jsx("code",{children:"reduce"})," for clarity."]}),e.jsx("li",{children:"Don't mutate items inside callbacks; return new objects/arrays."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Transform → ",e.jsx("strong",{children:"map"}),"; select → ",e.jsx("strong",{children:"filter"}),"; aggregate → ",e.jsx("strong",{children:"reduce"}),"."]}),e.jsx("li",{children:"Keep callbacks pure; no side-effects."}),e.jsxs("li",{children:["Give ",e.jsx("code",{children:"reduce"})," an initial accumulator."]}),e.jsx("li",{children:"Prefer pipeline readability over micro-optimizing chains."})]}),e.jsx(s.Divider,{})]})}function O({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="find-some-every";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Find / Some / Every (search, any, all)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(P,{})})})]})}function P(){return e.jsxs(s.Content,{children:[e.jsxs("div",{style:{marginBottom:"30px"},children:["Three quick checks:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"find"})," returns the first matching item,"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"some"})," tells if ",e.jsx("em",{children:"any"})," matches, and"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"every"})," checks if ",e.jsx("em",{children:" all"})," match."]})]}),"They do not mutate the array and they short-circuit."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"find"})," - get the first matching element"]}),e.jsx(s.Code,{children:`const users = [
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
console.log(users.find(u => u.name === "Foo")?.id ?? "NA"); // "NA"`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"some"})," - does any element pass?"]}),e.jsx(s.Code,{children:`const nums = [1, 3, 5, 8];

console.log(nums.some(n => n % 2 === 0));      // true  (8 is even)
console.log(nums.some(n => n > 10));           // false

// Practical: any item out of stock?
const cart = [{ id: 1, qty: 2 }, { id: 2, qty: 0 }];
console.log(cart.some(item => item.qty === 0)); // true`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"every"})," - do all elements pass?"]}),e.jsx(s.Code,{children:`const scores = [7, 8, 9];

console.log(scores.every(s => s >= 7));         // true
console.log(scores.every(s => s >= 9));         // false

// NOTE: empty arrays
console.log([].every(x => x > 0));              // true  (vacuously true)
console.log([].some(x => x > 0));               // false`}),e.jsx("h3",{children:"D) Objects & deep checks"}),e.jsx(s.Code,{children:`const people = [
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
console.log(people.every(p => p.tags.includes("dev")));   // false`}),e.jsxs("h3",{children:["E) Compare with ",e.jsx("code",{children:"includes"})," (value vs predicate)"]}),e.jsx(s.Code,{children:`// includes checks values (strict equality), not conditions:
console.log([1,2,3].includes(2));              // true
// find/some let you write a predicate:
console.log([1,2,3].some(n => n > 2));         // true`}),e.jsx("h3",{children:"F) Performance & short-circuiting"}),e.jsx(s.Code,{children:`// these stop early:
// - find: after first match
// - some: after first true
// - every: after first false

let steps = 0;
[1,2,3,4].some(n => (steps++, n > 2));
console.log(steps);                             // 3 (stopped at 3)`}),e.jsx("h3",{children:"G) Practical React patterns"}),e.jsx(s.Code,{children:`// 1) Validation: all fields valid?
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
// if (!todo) return null;`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"find"})," can return ",e.jsx("code",{children:"undefined"})," - guard with ",e.jsx("code",{children:"?."})," or a default."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"every"})," on an empty array returns ",e.jsx("code",{children:"true"}),"; ",e.jsx("strong",{children:"some"})," returns ",e.jsx("code",{children:"false"}),"."]}),e.jsxs("li",{children:["Predicates should be ",e.jsx("strong",{children:"pure"})," (no side-effects) for predictable behavior."]}),e.jsx("li",{children:"For large lists, these short-circuit - keep the cheap checks first in your predicate."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Need the item itself? → ",e.jsx("strong",{children:"find"}),"."]}),e.jsxs("li",{children:["Need a yes/no if ",e.jsx("em",{children:"any"}),"? → ",e.jsx("strong",{children:"some"}),"."]}),e.jsxs("li",{children:["Need a yes/no if ",e.jsx("em",{children:"all"}),"? → ",e.jsx("strong",{children:"every"}),"."]}),e.jsxs("li",{children:["Remember undefined from ",e.jsx("code",{children:"find"}),"; handle it safely."]})]}),e.jsx(s.Divider,{})]})}function T({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="sort-without-mutating";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsxs("span",{children:["Sort (without mutating) - ",e.jsx("code",{children:"toSorted"}),", copy+sort"]})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(N,{})})})]})}function N(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"Array.prototype.sort()"})," sorts ",e.jsx("em",{children:"in place"})," (it ",e.jsx("strong",{children:"mutates"})," the array). For immutable code, use ",e.jsx("code",{children:"toSorted()"})," (best) or clone first and then ",e.jsx("code",{children:"sort()"}),"."]}),e.jsx("h3",{children:"A) The mutation gotcha"}),e.jsx(s.Code,{children:`const a = [3, 1, 2];
const b = a.sort();                 // MUTATES 'a'
console.log(a);                     // [1, 2, 3]
console.log(b);                     // [1, 2, 3] (same reference)
`}),e.jsx("h3",{children:"B) Safe patterns (no mutation)"}),e.jsx(s.Code,{children:`// 1) Modern: toSorted (returns a new array)
const nums = [3, 10, 2];
const asc = nums.toSorted((x, y) => x - y);
console.log(nums);                  // [3, 10, 2]  (unchanged)
console.log(asc);                   // [2, 3, 10]

// 2) Classic: copy then sort
const copyAsc = [...nums].sort((x, y) => x - y);
console.log(copyAsc);               // [2, 3, 10]
`}),e.jsx("h3",{children:"C) Numbers - ascending/descending"}),e.jsx(s.Code,{children:`const n = [10, 2, 5, 1];

// Default sort is lexicographic (strings) - wrong for numbers:
console.log([...n].sort());         // [1, 10, 2, 5]  (not numeric)

// Correct numeric comparators:
const asc = n.toSorted((a, b) => a - b);
console.log(asc);                   // [1, 2, 5, 10]

const desc = n.toSorted((a, b) => b - a);
console.log(desc);                  // [10, 5, 2, 1]
`}),e.jsx("h3",{children:"D) Strings - locale & case"}),e.jsx(s.Code,{children:`const cities = ["mumbai", "Delhi", "bengaluru"];

// ASCII compare (case-sensitive)
console.log([...cities].sort());    
// ["Delhi", "bengaluru", "mumbai"]

// Locale/case-insensitive + numeric aware
const nice = cities.toSorted((a, b) => 
  a.localeCompare(b, "en-IN", { sensitivity: "base", numeric: true })
);
console.log(nice);
// ["bengaluru", "Delhi", "mumbai"]
`}),e.jsx("h3",{children:"E) Dates - by timestamp"}),e.jsx(s.Code,{children:`const dates = [new Date("2025-01-01"), new Date("2024-12-31")];
const byTime = dates.toSorted((a, b) => a - b);
console.log(byTime.map(d => d.toISOString().slice(0,10)));
// ["2024-12-31", "2025-01-01"]
`}),e.jsx("h3",{children:"F) Objects - by field, with nulls-last"}),e.jsx(s.Code,{children:`const people = [
  { name: "Ash",  score: 7 },
  { name: "Riya", score: null },
  { name: "Dev",  score: 9 },
];

// Sort by score asc; put null/undefined at the end:
const nullsLast = (v) => (v == null ? Infinity : v);
const byScore = people.toSorted((a, b) => nullsLast(a.score) - nullsLast(b.score));
console.log(byScore.map(p => p.name));        // ["Ash", "Dev", "Riya"]

// Sort by name (case-insensitive)
const byName = people.toSorted((a, b) =>
  a.name.localeCompare(b.name, "en-IN", { sensitivity: "base" })
);
console.log(byName.map(p => p.name));         // ["Ash", "Dev", "Riya"]
`}),e.jsx("h3",{children:"G) Multi-key sort (tie-breakers)"}),e.jsx(s.Code,{children:`const rows = [
  { team: "A", points: 10, name: "Ash" },
  { team: "A", points: 10, name: "Dev" },
  { team: "B", points: 12, name: "Riya" },
];

// Primary: team asc; Secondary: points desc; Tertiary: name asc
const cmp = (a, b) =>
  a.team.localeCompare(b.team) ||
  (b.points - a.points) ||
  a.name.localeCompare(b.name);

const sorted = rows.toSorted(cmp);
console.log(sorted.map(r => \`\${r.team}-\${r.points}-\${r.name}\`));
// ["A-10-Ash", "A-10-Dev", "B-12-Riya"]
`}),e.jsx("h3",{children:"H) React-friendly patterns"}),e.jsx(s.Code,{children:`// 1) Never mutate props/state directly
// BAD: props.items.sort(...)
function SortedList({ items }) {
  const sorted = React.useMemo(
    () => items.toSorted((a, b) => a.label.localeCompare(b.label)),
    [items]
  );
  // return sorted.map(...)
}

// 2) Keep comparators pure and cheap; memoize heavy ones
const byLabel = (a, b) => a.label.localeCompare(b.label);
const sortedOnce = React.useMemo(() => data.toSorted(byLabel), [data]);

// 3) Avoid resorting on every render by precomputing in selectors/hooks
`}),e.jsx("h3",{children:"I) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default sort is string-based."})," Always pass a comparator for numbers/dates."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"sort()"})," mutates."]})," Prefer ",e.jsx("code",{children:"toSorted()"})," or clone before sorting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Locale/case rules:"})," use ",e.jsx("code",{children:"localeCompare"})," with options for user-facing text."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nulls/undefined:"})," coerce to sentinel values (e.g., ",e.jsx("code",{children:"Infinity"}),") or handle explicitly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multi-key:"})," chain with ",e.jsx("code",{children:"||"})," returning the first non-zero comparison."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Immutable? → ",e.jsx("code",{children:"toSorted"})," (best) or ",e.jsx("code",{children:"[...arr].sort(cmp)"}),"."]}),e.jsxs("li",{children:["Numbers/dates → numeric comparator (",e.jsx("code",{children:"a-b"}),")."]}),e.jsxs("li",{children:["Strings for UI → ",e.jsx("code",{children:"localeCompare"})," with options."]}),e.jsx("li",{children:"Define small, pure comparators; reuse them."})]}),e.jsx(s.Divider,{})]})}function $({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="flat-and-flatmap";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Flat / FlatMap (flatten arrays & map+flatten)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(D,{})})})]})}function D(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"flat"})," removes one or more levels of nesting and returns a ",e.jsx("strong",{children:"new array"}),".",e.jsx("code",{children:" flatMap"})," = ",e.jsx("code",{children:"map"})," then ",e.jsx("code",{children:"flat(1)"})," in a single pass."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"flat"})," - basics & depth"]}),e.jsx(s.Code,{children:`const a = [1, [2, 3], [4, [5]]];

console.log(a.flat());                 // [1, 2, 3, 4, [5]]       (default depth = 1)
console.log(a.flat(2));                // [1, 2, 3, 4, 5]
console.log(a.flat(Infinity));         // [1, 2, 3, 4, 5]         (flatten all levels)

// Original is unchanged:
console.log(a);                        // [1, [2,3], [4, [5]]]`}),e.jsx("h3",{children:"B) Holes (sparse arrays) are removed"}),e.jsx(s.Code,{children:`const sparse = [1, , 3, [ , 4 ]];
// flat removes empty slots
console.log(sparse.flat());            // [1, 3, 4]`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"flatMap"})," - map then flatten once"]}),e.jsx(s.Code,{children:`const sentences = ["hi there", "good day"];
// split words from each sentence and flatten
const words = sentences.flatMap(s => s.split(" "));
console.log(words);                    // ["hi", "there", "good", "day"]

// Equivalent two-step:
console.log(sentences.map(s => s.split(" ")).flat());
// [["hi","there"],["good","day"]] → ["hi","there","good","day"]

// Remove nulls while mapping:
const items = [1, null, 2, null];
const cleaned = items.flatMap(x => (x == null ? [] : [x]));
console.log(cleaned);                  // [1, 2]`}),e.jsx("h3",{children:"D) API pagination → flatten pages"}),e.jsx(s.Code,{children:`const pages = [
  { items: [1, 2] },
  { items: [3] },
  { items: [] },
];
const all = pages.flatMap(p => p.items);
console.log(all);                      // [1, 2, 3]`}),e.jsx("h3",{children:"E) Nested mapping patterns"}),e.jsx(s.Code,{children:`// turn groups -> list of user ids
const groups = [
  { team: "A", users: [{id:1},{id:2}] },
  { team: "B", users: [{id:3}] },
];
const userIds = groups.flatMap(g => g.users.map(u => u.id));
console.log(userIds);                  // [1, 2, 3]

// one level only! deeper arrays need an extra flat:
const deep = [ [ [1] ], [ [2, 3] ] ];
console.log(deep.flatMap(x => x).flat()); // [[1], [2, 3]] → [1, 2, 3]`}),e.jsx("h3",{children:"F) React-friendly patterns"}),e.jsx(s.Code,{children:`// 1) Flatten sectioned menu items before rendering
const sections = [
  { title: "A", items: ["Home", "Docs"] },
  { title: "B", items: ["Blog"] },
];
const flatItems = sections.flatMap(s => s.items);
console.log(flatItems);                // ["Home","Docs","Blog"]
// flatItems.map(label => <li key={label}>{label}</li>)

// 2) Build props from nested sources
const sources = [{ props: [{k:"a",v:1},{k:"b",v:2}] }, { props: [{k:"c",v:3}] }];
const propsObj = Object.fromEntries(
  sources.flatMap(s => s.props.map(p => [p.k, p.v]))
);
console.log(propsObj);                 // { a:1, b:2, c:3 }`}),e.jsx("h3",{children:"G) Performance tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"flat"})," returns a copy; heavy flattening (",e.jsx("code",{children:"Infinity"}),") can allocate big arrays."]}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"flatMap"})," over ",e.jsx("code",{children:"map().flat()"})," for one-level cases (fewer passes)."]}),e.jsx("li",{children:"Keep mapping callbacks pure; avoid pushing into outer arrays inside the callback."})]}),e.jsx("h3",{children:"H) Pitfalls & gotchas"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Depth:"})," default is 1. If your output is still nested, pass a deeper depth or add another ",e.jsx("code",{children:"flat"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not deep merge:"})," flattening arrays of objects doesn't merge objects-just removes array nesting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sparse arrays:"})," empty slots are removed by ",e.jsx("code",{children:"flat"}),"; don't rely on their indexes later."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Legacy runtimes:"})," very old environments may lack ",e.jsx("code",{children:"flat/flatMap"}),"; consider a polyfill if needed."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Need to remove one nesting level? → ",e.jsx("strong",{children:"flat()"})," (or set ",e.jsx("em",{children:"depth"}),")."]}),e.jsxs("li",{children:["Need map + flatten(1) in one go? → ",e.jsx("strong",{children:"flatMap(fn)"}),"."]}),e.jsx("li",{children:"Watch out for sparse arrays-they collapse."}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"Infinity"})," unless you really need full flattening."]})]}),e.jsx(s.Divider,{})]})}function E({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="object-utilities";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsxs("span",{children:["Object utilities: ",e.jsx("code",{children:"keys"}),", ",e.jsx("code",{children:"values"}),", ",e.jsx("code",{children:"entries"}),", ",e.jsx("code",{children:"assign"})]})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(R,{})})})]})}function R(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:["Everyday helpers for working with plain objects: get keys/values/pairs, transform with",e.jsx("code",{children:" entries"})," ⟷ ",e.jsx("code",{children:"fromEntries"}),", and merge/clone with ",e.jsx("code",{children:"assign"}),". These work on an object's ",e.jsx("em",{children:"own enumerable string-keyed"})," properties (symbols are ignored)."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"Object.keys"})," - list own keys (strings)"]}),e.jsx(s.Code,{children:`const user = { id: 1, name: "Ash" };
console.log(Object.keys(user));                    // ["id", "name"]

// Integer-like keys are ordered numerically first, then the rest by insertion:
const order = { "2": "two", "1": "one", a: "A" };
console.log(Object.keys(order));                   // ["1", "2", "a"]`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"Object.values"})," - list own values"]}),e.jsx(s.Code,{children:`const point = { x: 10, y: 20 };
console.log(Object.values(point));                 // [10, 20]`}),e.jsxs("h3",{children:["C) ",e.jsx("code",{children:"Object.entries"})," ⟷ ",e.jsx("code",{children:"Object.fromEntries"})]}),e.jsx(s.Code,{children:`const stats = { a: 1, b: 2 };
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
console.log(publicUser);                            // { id: 1, name: "Ash" }`}),e.jsxs("h3",{children:["D) ",e.jsx("code",{children:"Object.assign"})," - merge/clone (shallow) ⚠️ mutates target"]}),e.jsx(s.Code,{children:`const target = { a: 1 };
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
console.log(original.nested.x);                      // 2  (same inner object)`}),e.jsx("h3",{children:"E) Symbols & non-enumerables (FYI)"}),e.jsx(s.Code,{children:`const s = Symbol("s");
const obj = { a: 1, [s]: 2 };
console.log(Object.keys(obj));                       // ["a"] (symbols ignored)
console.log(Object.getOwnPropertySymbols(obj));      // [Symbol(s)]
// Non-enumerable props are also skipped by keys/values/entries`}),e.jsxs("h3",{children:["F) Practical transforms with ",e.jsx("code",{children:"entries"})]}),e.jsx(s.Code,{children:`// 1) Rename keys
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
console.log(invert({ a:1, b:2 }));                  // { "1":"a", "2":"b" }`}),e.jsx("h3",{children:"G) React-friendly patterns"}),e.jsx(s.Code,{children:`// 1) Render object as a list
const features = { darkMode: true, beta: false };
// Object.entries(features).map(([k, v]) => <li key={k}>{k}: {String(v)}</li>)

// 2) Merge default props/options (spread is equivalent to assign into {})
const defaults = { size: "md", disabled: false };
const final = { ...defaults, ...{ disabled: true } };  // or Object.assign({}, defaults, { disabled: true })
console.log(final);                                    // { size: "md", disabled: true }

// 3) Build object from pairs for quick lookup
const list = [{ id:1, name:"Ash" }, { id:2, name:"Riya" }];
const byId = Object.fromEntries(list.map(u => [u.id, u]));
console.log(byId[2].name);                              // "Riya"`}),e.jsx("h3",{children:"H) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"assign"})," mutates its first arg"]}),"; use ",e.jsx("code",{children:"Object.assign({}, a, b)"})," or spread for a new object."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow only:"})," both ",e.jsx("code",{children:"assign"})," and spread copy references for nested objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"keys/values/entries"})," ignore symbols & non-enumerables; use ",e.jsx("code",{children:"Object.getOwnPropertySymbols"})," / descriptors if needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Key order:"})," integer-like keys come first in ascending order, then others by insertion."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Transform/filter objects via ",e.jsx("code",{children:"entries → map/filter → fromEntries"}),"."]}),e.jsxs("li",{children:["Merge immutably with ",e.jsx("code",{children:"Object.assign({}, ...)"})," or spread."]}),e.jsx("li",{children:"Remember it's all shallow copies - be careful with nested state."}),e.jsxs("li",{children:["Need symbols? Grab them with ",e.jsx("code",{children:"Object.getOwnPropertySymbols"}),"."]})]}),e.jsx(s.Divider,{})]})}function I({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="sets-and-maps";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Sets & Maps (when they help)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(M,{})})})]})}function M(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:["Use a ",e.jsx("strong",{children:"Set"})," for unique values + fast ",e.jsx("code",{children:"has"})," checks. Use a ",e.jsx("strong",{children:"Map"})," for key→value where keys can be ",e.jsx("em",{children:"any type"})," (objects, arrays, functions), with stable iteration order."]}),e.jsx("h3",{children:"A) Set - unique values & fast membership"}),e.jsx(s.Code,{children:`const s = new Set([1, 2, 2, 3]);
console.log([...s]);                       // [1, 2, 3] (deduped)
s.add(4).add(4);
console.log(s.has(2), s.size);             // true 3
s.delete(1);
console.log([...s]);                       // [2, 3, 4]

// SameValueZero equality → NaN equals NaN in Set
const z = new Set([NaN, NaN]);
console.log(z.size);                       // 1

// Convert array -> unique array
const unique = arr => [...new Set(arr)];
console.log(unique([2,2,3,1,3]));          // [2, 3, 1]`}),e.jsx("h3",{children:"B) Set operations - union, intersection, difference"}),e.jsx(s.Code,{children:`const A = new Set([1,2,3]);
const B = new Set([3,4]);

const union = new Set([...A, ...B]);
console.log([...union]);                   // [1,2,3,4]

const intersection = new Set([...A].filter(x => B.has(x)));
console.log([...intersection]);            // [3]

const difference = new Set([...A].filter(x => !B.has(x)));
console.log([...difference]);              // [1,2]`}),e.jsx("h3",{children:"C) Map - key→value with any key type"}),e.jsx(s.Code,{children:`const m = new Map([["id", 1], ["name", "Ash"]]);
console.log(m.get("id"), m.has("name"), m.size);  // 1 true 2
m.set("role", "dev").set("city", "BLR");
console.log([...m.keys()]);                        // ["id","name","role","city"]

// Object keys as keys (identity-based)
const objKey = { k: 1 };
m.set(objKey, "value for obj");
console.log(m.get(objKey));                       // "value for obj"
console.log(m.get({ k: 1 }));                     // undefined (different reference)

// Convert object ↔ Map
const o = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(o));
console.log(mapFromObj.get("a"));                 // 1
const objFromMap = Object.fromEntries(mapFromObj);
console.log(objFromMap);                          // { a: 1, b: 2 }`}),e.jsx("h3",{children:"D) When Sets/Maps help vs Arrays/Objects"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Set"}),": quick dedupe; O(1) membership checks (e.g., selected IDs, visited nodes)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Map"}),": non-string keys; predictable insertion order; avoids prototype pitfalls of objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object"}),": best for JSON, simple string-keyed records, and ergonomic literals."]})]}),e.jsx("h3",{children:"E) WeakSet / WeakMap (lifetime tied to object keys)"}),e.jsx(s.Code,{children:`// WeakMap keys must be objects; entries are GC'd when keys are unreachable
const wm = new WeakMap();
let k = {};
wm.set(k, { meta: "cached" });
console.log(wm.has(k));                           // true
k = null; // after GC, entry may disappear (can't reliably log timing)`}),e.jsx("h3",{children:"F) Practical React patterns"}),e.jsx(s.Code,{children:`// 1) Selected IDs as a Set (immutable updates)
const toggle = (selected, id) => {
  const next = new Set(selected);
  next.has(id) ? next.delete(id) : next.add(id);
  return next;
};
console.log([...toggle(new Set([1]), 1)]);        // [] (removed)
console.log([...toggle(new Set([1]), 2)]);        // [1,2]

// 2) Fast lookup with Map (id → item)
const list = [{id:1,n:"A"},{id:2,n:"B"}];
const byId = new Map(list.map(x => [x.id, x]));
console.log(byId.get(2).n);                       // "B"

// 3) Memoized cache keyed by complex keys (Map)
const cache = new Map();
const getSum = (a, b) => {
  const key = JSON.stringify([a, b]); // or array as key if stable reference
  if (cache.has(key)) return cache.get(key);
  const val = a + b;
  cache.set(key, val);
  return val;
};
console.log(getSum(2,3), getSum(2,3));            // 5 5 (second from cache)`}),e.jsx("h3",{children:"G) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Not JSON-serializable:"})," ",e.jsx("code",{children:"Set"}),"/",e.jsx("code",{children:"Map"})," need conversion (e.g., ",e.jsx("code",{children:"[...set]"}),", ",e.jsx("code",{children:"Object.fromEntries(map)"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reference identity:"})," Map keys compare by reference; use the same object instance or a stable string key."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Iteration order:"})," Set/Map iterate in insertion order; use this for deterministic UI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow semantics:"})," Sets don't deep-compare objects; two equal-shaped objects are different keys."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Need uniqueness or fast membership? → ",e.jsx("strong",{children:"Set"}),"."]}),e.jsxs("li",{children:["Need keys that aren't strings? → ",e.jsx("strong",{children:"Map"}),"."]}),e.jsx("li",{children:"Convert before JSON/storage; prefer objects for raw API payloads."}),e.jsx("li",{children:"For React state, clone Sets/Maps to new instances to trigger updates."})]}),e.jsx(s.Divider,{})]})}function B({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="promises-async-await";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Promises & async/await (patterns, errors, concurrency)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(U,{})})})]})}function U(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Promise"})," represents a value that will resolve later.",e.jsx("strong",{children:"async/await"})," makes promise code read like sync code. Use ",e.jsx("code",{children:"try/catch"})," for errors, and prefer ",e.jsx("strong",{children:"concurrency"})," helpers (",e.jsx("code",{children:"Promise.all"}),", etc.) for speed."]}),e.jsx("h3",{children:"A) Make a Promise & basic handlers"}),e.jsx(s.Code,{children:`// Create a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("OK"), 100);
});

p.then(v => console.log("then:", v))     // "then: OK"
 .catch(e => console.log("error:", e))
 .finally(() => console.log("done"));    // "done" (always runs)

// Shortcut: Promise.resolve / Promise.reject
Promise.resolve(42).then(x => console.log(x)); // 42`}),e.jsx("h3",{children:"B) Chain & propagate errors"}),e.jsx(s.Code,{children:`Promise.resolve(2)
  .then(x => x * 3)                        // 6
  .then(x => { throw new Error("boom"); })
  .then(() => "never")
  .catch(err => "handled: " + err.message)  // "handled: boom"
  .then(msg => console.log(msg));           // "handled: boom"`}),e.jsx("h3",{children:"C) async/await - sugar over promises"}),e.jsx(s.Code,{children:`async function work() {
  try {
    const a = await Promise.resolve(10);
    const b = await Promise.resolve(5);
    return a + b;
  } catch (e) {
    return -1; // or: throw e;
  } finally {
    // cleanup
  }
}

work().then(x => console.log(x));          // 15

// async functions always return a Promise
console.log(work() instanceof Promise);    // true`}),e.jsx("h3",{children:"D) Concurrent vs sequential (speed matters)"}),e.jsx(s.Code,{children:`// Slow (sequential): waits one by one
const t = () => new Promise(r => setTimeout(() => r(1), 100));
async function slow() {
  const a = await t();                     // ~100ms
  const b = await t();                     // ~200ms total
  return a + b;
}

// Fast (concurrent): start together, then await
async function fast() {
  const pa = t();                          // start
  const pb = t();                          // start
  const [a, b] = await Promise.all([pa, pb]); // ~100ms total
  return a + b;
}

slow().then(x => console.log("slow:", x)); // "slow: 2"
fast().then(x => console.log("fast:", x)); // "fast: 2"`}),e.jsx("h3",{children:"E) Promise helpers - all / allSettled / race / any"}),e.jsx(s.Code,{children:`const ok = (v, ms=50) => new Promise(r => setTimeout(() => r(v), ms));
const fail = (e, ms=50) => new Promise((_, rej) => setTimeout(() => rej(new Error(e)), ms));

// 1) all: fail-fast if any rejects
Promise.all([ok(1), ok(2)]).then(v => console.log(v));         // [1, 2]
// Promise.all([ok(1), fail("x")]).catch(e => console.log(e.message)); // "x"

// 2) allSettled: never rejects; gives statuses
Promise.allSettled([ok("A"), fail("B")]).then(r => console.log(r.map(x => x.status)));
// ["fulfilled", "rejected"]

// 3) race: first settled (resolve OR reject) wins
Promise.race([ok("first", 30), ok("second", 60)]).then(v => console.log(v)); // "first"

// 4) any: first fulfilled wins (ignores rejections until all reject)
// Promise.any([fail("X",30), ok("Y",40)]).then(v => console.log(v));        // "Y"`}),e.jsx("h3",{children:"F) Fetch JSON helper + timeout (AbortController)"}),e.jsx(s.Code,{children:`// NOTE: Full "Fetch basics + JSON" is its own topic.
// Minimal helper with timeout/abort:
async function fetchJSON(url, { timeout = 8000, ...opts } = {}) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, { ...opts, signal: ctrl.signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } finally {
    clearTimeout(id);
  }
}

// Example usage (won't run here):
// fetchJSON("/api/users").then(data => console.log(Array.isArray(data))); // true/false`}),e.jsx("h3",{children:"G) Loops: forEach pitfall, use for...of or Promise.all"}),e.jsx(s.Code,{children:`const delay = ms => new Promise(r => setTimeout(r, ms));

// ❌ forEach ignores async/await
async function bad(list) {
  list.forEach(async x => {
    await delay(50);
    console.log("done", x);   // runs later, bad control flow
  });
  console.log("returned");     // returns before items finish
}

// ✅ sequential
async function seq(list) {
  for (const x of list) {
    await delay(50);
    console.log("seq", x);    // "seq 1", "seq 2", ...
  }
}

// ✅ concurrent (start all then wait)
async function conc(list) {
  await Promise.all(list.map(async x => {
    await delay(50);
    return x * 2;
  }));
  console.log("all done");    // after ~50ms
}

bad([1,2]);    // "returned" (then logs later)
seq([1,2]);    // orderly
conc([1,2]);   // fast`}),e.jsx("h3",{children:"H) Microtasks vs macrotasks (timing)"}),e.jsx(s.Code,{children:`console.log("A");
Promise.resolve().then(() => console.log("B (microtask)"));
setTimeout(() => console.log("C (macrotask)"), 0);
console.log("D");
// Order: A, D, B (microtask), C (macrotask)`}),e.jsx("h3",{children:"I) Tiny promisify utility"}),e.jsx(s.Code,{children:`// Convert a callback API into a promise-based one
const promisify = (fn) => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

// Example (simulated):
function legacySum(a, b, cb) { setTimeout(() => cb(null, a + b), 20); }
const sumP = promisify(legacySum);
sumP(2,3).then(v => console.log(v));           // 5`}),e.jsx("h3",{children:"J) Practical React pattern (fetch in effect + abort)"}),e.jsx(s.Code,{children:`// inside a component:
// React.useEffect(() => {
//   const ctrl = new AbortController();
//   (async () => {
//     try {
//       const res = await fetch("/api/items", { signal: ctrl.signal });
//       if (!res.ok) throw new Error("HTTP " + res.status);
//       const data = await res.json();
//       // setState(data)
//     } catch (e) {
//       if (e.name !== "AbortError") {
//         // show error toast
//       }
//     }
//   })();
//   return () => ctrl.abort(); // cancel on unmount
// }, []);`}),e.jsx("h3",{children:"K) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always return/await"})," promises you start; avoid unhandled rejections."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't mix styles"})," unnecessarily: pick ",e.jsx("em",{children:"either"})," ",e.jsx("code",{children:"then/catch"})," or ",e.jsx("code",{children:"async/await"})," in a block."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Concurrency"}),": start promises first, then ",e.jsx("code",{children:"await Promise.all"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"forEach + async"})," is a trap - use ",e.jsx("code",{children:"for...of"})," or ",e.jsx("code",{children:"Promise.all(map())"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Timeouts & cancel"}),": use ",e.jsx("code",{children:"AbortController"})," or a ",e.jsx("code",{children:"race"})," with a timeout promise."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"async functions return Promises"}),"; throw to reject, return to resolve."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"async/await"})," + ",e.jsx("code",{children:"try/catch"})," for readable async code."]}),e.jsxs("li",{children:["Batch work with ",e.jsx("code",{children:"Promise.all"})," for speed; handle partials with ",e.jsx("code",{children:"allSettled"}),"."]}),e.jsxs("li",{children:["Guard fetches with ",e.jsx("code",{children:"AbortController"})," (cleanup on unmount)."]}),e.jsx("li",{children:"Know the event loop: microtasks (promise callbacks) run before timeouts."})]}),e.jsx(s.Divider,{})]})}function q({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="fetch-basics-json";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Fetch basics + JSON (GET/POST, errors, timeout, retry)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(F,{})})})]})}function F(){return e.jsxs(s.Content,{children:[e.jsx("div",{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"fetch()"})," returns a ",e.jsx("strong",{children:"Promise<Response>"}),"."]}),e.jsxs("li",{children:["Always check ",e.jsx("code",{children:"res.ok"})," / ",e.jsx("code",{children:"res.status"}),", then parse with ",e.jsx("code",{children:"res.json()"})," (or ",e.jsx("code",{children:"res.text()"}),")."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"AbortController"})," for timeouts/cancel and wrap with small helpers."]})]})}),e.jsx("h3",{children:"A) GET JSON - with query params"}),e.jsx(s.Code,{children:`// Build URL with search params
const params = new URLSearchParams({ page: "1", q: "react" });
const url = \`/api/posts?\${params}\`;

async function getJSON(u) {
  const res = await fetch(u, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}

// Example shape:
getJSON(url).then(data => {
  // data => { items: [...], total: 42 }
  console.log(Array.isArray(data.items), data.total); // true 42
});`}),e.jsx("h3",{children:"B) POST JSON - send body & read JSON"}),e.jsx(s.Code,{children:`async function postJSON(u, body) {
  const res = await fetch(u, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}

// Usage:
postJSON("/api/todos", { title: "Write handbook" })
  .then(todo => console.log(todo.id > 0))     // true
  .catch(e => console.error("create failed:", e.message));`}),e.jsx("h3",{children:"C) Errors: network vs HTTP vs invalid JSON"}),e.jsx(s.Code,{children:`async function safeJSON(u) {
  try {
    const res = await fetch(u);
    if (!res.ok) {
      // 4xx/5xx
      const msg = await res.text().catch(() => "");
      throw new Error(\`HTTP \${res.status} \${msg}\`.trim());
    }
    try {
      return await res.json();
    } catch (e) {
      // e.name === "SyntaxError" for bad JSON
      throw new Error("Invalid JSON");
    }
  } catch (e) {
    // e.name === "TypeError" often indicates a network error in browsers
    console.error("Request failed:", e.message);
    throw e;
  }
}`}),e.jsxs("h3",{children:["D) Timeout / cancel with ",e.jsx("code",{children:"AbortController"})]}),e.jsx(s.Code,{children:`async function getJSONWithTimeout(u, { timeout = 8000, ...opts } = {}) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(u, { ...opts, signal: ctrl.signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (e) {
    if (e.name === "AbortError") console.warn("Request aborted/timeout");
    throw e;
  } finally {
    clearTimeout(id);
  }
}

// getJSONWithTimeout("/api/slow", { timeout: 1500 }).catch(e => console.log(e.name));
// "AbortError"`}),e.jsx("h3",{children:"E) Simple retry with exponential backoff"}),e.jsx(s.Code,{children:`async function retry(fn, { tries = 3, baseMs = 300 } = {}) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); }
    catch (e) {
      lastErr = e;
      await new Promise(r => setTimeout(r, baseMs * 2 ** i));
    }
  }
  throw lastErr;
}

// Usage: retry a fetch
retry(() => getJSON("/api/flaky"), { tries: 3 })
  .then(() => console.log("ok"))
  .catch(e => console.log("failed:", e.message));`}),e.jsx("h3",{children:"F) Non-JSON responses (204, text, blobs)"}),e.jsx(s.Code,{children:`// 204 No Content: don't call res.json()
async function del(u) {
  const res = await fetch(u, { method: "DELETE" });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return; // nothing
}

// text()
fetch("/robots.txt")
  .then(r => r.text())
  .then(t => console.log(t.includes("User-agent"))); // true

// blob() (e.g., download)
fetch("/logo.png")
  .then(r => r.blob())
  .then(b => console.log(b.type.startsWith("image/"))); // true`}),e.jsx("h3",{children:"G) Credentials, headers, and base URL"}),e.jsx(s.Code,{children:`// Send cookies to same-site/another origin (if server allows it)
fetch("/api/me", { credentials: "include" });

// Common headers helper
const jsonHeaders = { "Content-Type": "application/json", Accept: "application/json" };

// Build base URL once
const API = (path) => \`\${import.meta.env.VITE_API_BASE}\${path}\`;
console.log(API("/health")); // e.g., "https://api.example.com/health"`}),e.jsx("h3",{children:"H) React pattern - effect with abort & state"}),e.jsx(s.Code,{children:`// Inside a component:
// const [data, setData] = React.useState(null);
// const [error, setError] = React.useState(null);
// const [loading, setLoading] = React.useState(false);

// React.useEffect(() => {
//   const ctrl = new AbortController();
//   setLoading(true);
//   (async () => {
//     try {
//       const res = await fetch(API("/posts"), { signal: ctrl.signal });
//       if (!res.ok) throw new Error("HTTP " + res.status);
//       setData(await res.json());
//     } catch (e) {
//       if (e.name !== "AbortError") setError(e);
//     } finally {
//       setLoading(false);
//     }
//   })();
//   return () => ctrl.abort();
// }, []);`}),e.jsx("h3",{children:"I) Node vs Browser (tiny note)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Browsers: ",e.jsx("code",{children:"fetch"})," is built-in. CORS must be allowed by the server."]}),e.jsxs("li",{children:["Node: built-in from Node ",e.jsx("strong",{children:"18+"}),". Older Node needs a polyfill (e.g., ",e.jsx("code",{children:"node-fetch"}),")."]})]}),e.jsx("h3",{children:"J) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Always check ",e.jsx("code",{children:"res.ok"})]})," before parsing JSON."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Don't ",e.jsx("code",{children:"await res.json()"})," twice"]})," - the body stream is one-time."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"POST JSON:"})," remember ",e.jsx("code",{children:"JSON.stringify"})," and the ",e.jsx("code",{children:"Content-Type"})," header."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Timeouts:"})," use ",e.jsx("code",{children:"AbortController"})," or a ",e.jsx("code",{children:"Promise.race"})," pattern."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Retries:"})," only retry idempotent calls or ensure your API is retry-safe."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["GET/POST helpers that check ",e.jsx("code",{children:"ok"})," and parse once."]}),e.jsx("li",{children:"Abort on unmount; surface errors to UI."}),e.jsx("li",{children:"Backoff retries for flaky networks."}),e.jsx("li",{children:"Handle 204/text/blob paths, not just JSON."})]}),e.jsx(s.Divider,{})]})}function L({defaultOpen:t=!1}){const[n,o]=i.useState(!!t),r="timers";return e.jsxs(s.Topic,{children:[e.jsxs(s.Title,{onClick:()=>o(l=>!l),"aria-expanded":n,"aria-controls":`${r}-panel`,id:`${r}-button`,"data-open":n,children:[e.jsx(s.Arrow,{"data-open":n,children:"▸"}),e.jsx("span",{children:"Timers (setTimeout, setInterval)"})]}),e.jsx(s.Panel,{id:`${r}-panel`,role:"region","aria-labelledby":`${r}-button`,"data-open":n,children:e.jsx("div",{children:e.jsx(J,{})})})]})}function J(){return e.jsxs(s.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"setTimeout"})," runs a callback once after a delay; ",e.jsx("code",{children:"setInterval"})," runs repeatedly. Always keep the returned ",e.jsx("em",{children:"id"})," and clear with ",e.jsx("code",{children:"clearTimeout"})," /"," ",e.jsx("code",{children:"clearInterval"}),". In React, start timers in effects and clean them up on unmount."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"setTimeout"})," basics (one-shot)"]}),e.jsx(s.Code,{children:`console.log("sync 1");
const id = setTimeout(() => console.log("timeout fired"), 0);
console.log("sync 2");
// Output order:
// "sync 1"
// "sync 2"
// "timeout fired"   (timers are macrotasks, run after sync & microtasks)

// Passing arguments
setTimeout((a, b) => console.log(a + b), 10, 2, 3); // 5

// Cancel before it fires
const t = setTimeout(() => console.log("WON'T RUN"), 50);
clearTimeout(t);`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"setInterval"})," (repeating) + clear"]}),e.jsx(s.Code,{children:`let count = 0;
const iv = setInterval(() => {
  count++;
  console.log("tick", count);
  // "tick 1", "tick 2", "tick 3"
  if (count === 3) clearInterval(iv); // stops after 3
}, 100);`}),e.jsxs("h3",{children:["C) Drift & accuracy: ",e.jsx("em",{children:"recursive"})," timeout over interval"]}),e.jsxs("p",{children:["Long callbacks cause ",e.jsx("code",{children:"setInterval"})," to drift. Prefer scheduling the next run yourself (recursive ",e.jsx("code",{children:"setTimeout"}),") and adjust with timestamps."]}),e.jsx(s.Code,{children:`const stepMs = 100;
let expected = Date.now() + stepMs;
function tick() {
  const drift = Date.now() - expected; // +ve = we're late
  console.log("drift(ms)~", drift >= 0 ? Math.round(drift) : 0);
  expected += stepMs;
  setTimeout(tick, Math.max(0, stepMs - drift)); // adjust next delay
}
setTimeout(tick, stepMs);
// logs small drift values, auto-correcting each step`}),e.jsx("h3",{children:"D) Debounce (wait for quiet period) & Throttle (limit rate)"}),e.jsx(s.Code,{children:`// Debounce: call after N ms of inactivity
function debounce(fn, ms = 200) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms);
  };
}

// Throttle: call at most once per window
function throttle(fn, ms = 200) {
  let ready = true, lastArgs;
  return (...args) => {
    if (!ready) { lastArgs = args; return; }
    ready = false;
    fn(...args);
    setTimeout(() => {
      ready = true;
      if (lastArgs) { fn(...lastArgs); lastArgs = null; }
    }, ms);
  };
}

const log = debounce(v => console.log("debounced", v), 100);
log(1); log(2); log(3); // "debounced 3" (only last call runs)`}),e.jsxs("h3",{children:["E) Promise-based sleep + ",e.jsx("code",{children:"async/await"})]}),e.jsx(s.Code,{children:`const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const t0 = Date.now();
  await sleep(50);
  await sleep(50);
  console.log("elapsed~", Date.now() - t0 >= 100); // true (≈100ms)
})();`}),e.jsx("h3",{children:"F) Next tick & animation"}),e.jsx(s.Code,{children:`// Next microtask (before timeouts)
Promise.resolve().then(() => console.log("microtask"));
// Next animation frame (~60fps)
requestAnimationFrame(() => console.log("raf"));`}),e.jsx("h3",{children:"G) React patterns — effects + cleanup"}),e.jsx(s.Code,{children:`// 1) One-shot timeout on mount with cleanup
// React.useEffect(() => {
//   const id = setTimeout(() => {
//     // setState("ready")
//   }, 300);
//   return () => clearTimeout(id);
// }, []);

// 2) Interval with cleanup
// React.useEffect(() => {
//   const id = setInterval(() => {
//     // setCount(c => c + 1)
//   }, 1000);
//   return () => clearInterval(id);
// }, []);

// 3) Store ids in refs (if you need to clear from handlers)
// const timeoutRef = React.useRef(null);
// function onCancel() {
//   if (timeoutRef.current) clearTimeout(timeoutRef.current);
// }`}),e.jsx("h3",{children:"H) Node vs Browser (notes)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Browsers may ",e.jsx("strong",{children:"throttle"})," timers in background tabs (e.g., clamped to ~1000ms)."]}),e.jsxs("li",{children:["Node also has ",e.jsx("code",{children:"setImmediate"})," and ",e.jsx("code",{children:"process.nextTick"})," (microtask); timers API is otherwise similar."]})]}),e.jsx("h3",{children:"I) Pitfalls & tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always clear"})," timeouts/intervals you create (especially in React effects)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't rely on exact ms."})," Timers run “as soon as possible” after the delay."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Avoid piling work in intervals."})," If work may take longer than the interval, prefer recursive timeouts with drift correction."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debounce for bursts"})," (search input), ",e.jsx("strong",{children:"throttle for steady rate"})," (scroll/resize)."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"setTimeout"})," for one-shot; ",e.jsx("code",{children:"setInterval"})," for repeats (but watch drift)."]}),e.jsx("li",{children:"Keep ids; clear them on unmount or when no longer needed."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sleep()"})," for readable async flows; pair timers with ",e.jsx("code",{children:"Promise"}),"s."]}),e.jsx("li",{children:"Prefer debounce/throttle for high-frequency events."})]}),e.jsx(s.Divider,{})]})}const z=()=>e.jsxs("div",{style:{padding:"15px"},children:[e.jsx("h3",{children:"ES6+ I actually use daily"}),e.jsxs(H.PageIntro,{children:[e.jsxs("p",{children:["This section is a speed-run of the JavaScript features I reach for in every React app. The goal is simple: write cleaner, safer code with fewer bugs and fewer re-renders. Each topic is short, focused, and shows the ",e.jsx("em",{children:"production"})," way to use it with React (immutable updates, safe access, predictable async)."]}),e.jsxs("p",{className:"outcome",children:[e.jsx("strong",{children:"Outcome:"})," you’ll use ",e.jsx("code",{children:"let/const"})," correctly, access data safely with ",e.jsx("code",{children:"?."})," and ",e.jsx("code",{children:"??"}),", update arrays/objects immutably, and handle async/JSON without surprises."]})]}),e.jsxs(e.Fragment,{children:[e.jsx(a,{}),e.jsx(h,{}),e.jsx(x,{}),e.jsx(p,{}),e.jsx(g,{}),e.jsx(b,{}),e.jsx(w,{}),e.jsx(k,{}),e.jsx(A,{}),e.jsx(O,{}),e.jsx(T,{}),e.jsx($,{}),e.jsx(E,{}),e.jsx(I,{}),e.jsx(B,{}),e.jsx(q,{}),e.jsx(L,{})]})]}),H={PageIntro:c.div`
        margin: 8px 0 16px;
        padding: 14px 16px;
        background: #0f0f12;
        border: 1px solid #1f1f1f;
        border-radius: 12px;
        color: #c9c9c9;
        line-height: 1.65;

        p { margin: 0 0 8px; }
        .outcome { color: #bfcfff; }
        strong { color: #e2e8ff; font-weight: 600; }
    `};export{z as default};
