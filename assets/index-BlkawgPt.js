import{R as o,j as e,d as c}from"./index-7zjufw3g.js";import{S as t}from"./styled-Dxzvc5UJ.js";function l({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="state-anti-patterns";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Anti-patterns (mutate, read before set)"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(d,{})})})]})}function d(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["Common state mistakes: ",e.jsx("strong",{children:"mutating"})," objects/arrays, ",e.jsx("strong",{children:"reading immediately after"})," a set, duplicating ",e.jsx("em",{children:"derived"})," values, and setting state during render. Here's what to avoid and how to fix it."]}),e.jsx("h3",{children:"A) Mutating objects/arrays in state"}),e.jsxs("p",{children:["React compares state by reference (",e.jsx("code",{children:"Object.is"}),"). Mutating the same object/array can skip re-renders and cause bugs."]}),e.jsx(t.Code,{children:`// ❌ mutation keeps the same reference
function Bad() {
  const [user, setUser] = React.useState({ name: "Ash", age: 20 });
  const wrong = () => { user.age++; setUser(user); }; // same object ref
  return <button onClick={wrong}>Age: {user.age}</button>;
}

// ✅ replace with a new object (copy the parts you keep)
function Good() {
  const [user, setUser] = React.useState({ name: "Ash", age: 20 });
  const birthday = () => setUser(prev => ({ ...prev, age: prev.age + 1 }));
  return <button onClick={birthday}>Age: {user.age}</button>;
}

// Arrays: use spread / map / filter (not push/splice/sort)
const add = title => setItems(prev => [...prev, { id: crypto.randomUUID(), title }]);
const remove = id => setItems(prev => prev.filter(t => t.id !== id));
const rename = (id, title) => setItems(prev => prev.map(t => t.id === id ? { ...t, title } : t));`}),e.jsx("h3",{children:"B) Reading state right after calling the setter"}),e.jsxs("p",{children:["State is a snapshot of the current render. After you call ",e.jsx("code",{children:"setX"}),", the variable ",e.jsx("code",{children:"x"})," won't change until the next render."]}),e.jsx(t.Code,{children:`function ReadAfterSet() {
  const [n, setN] = React.useState(0);
  function addTwoWrong() {
    setN(n + 1);
    setN(n + 1);
    console.log("still", n); // logs previous value
  }
  function addTwoRight() {
    setN(v => v + 1);
    setN(v => v + 1); // stacks to +2 safely
  }
  return (
    <>
      <button onClick={addTwoWrong}>Wrong +2</button>
      <button onClick={addTwoRight}>Right +2</button>
      <span> {n} </span>
    </>
  );
}`}),e.jsx("h3",{children:"C) Setting state during render (infinite loops)"}),e.jsx("p",{children:"Never call setters while rendering JSX. Do it in events/effects instead."}),e.jsx(t.Code,{children:`// ❌ bad: set during render based on a condition
function BadRenderSet({ value }) {
  const [n, setN] = React.useState(0);
  if (value > 0 && n === 0) setN(value); // will loop
  return <p>{n}</p>;
}

// ✅ move to an effect (runs after render)
function GoodRenderSet({ value }) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (value > 0 && n === 0) setN(value);
  }, [value, n]);
  return <p>{n}</p>;
}`}),e.jsx("h3",{children:"D) Duplicating derived state (sync effects smell)"}),e.jsx("p",{children:"If a value can be computed from props/state, don't mirror it in state using an effect."}),e.jsx(t.Code,{children:`// ❌ duplicate + sync effect
function Bad({ items }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => setCount(items.length), [items]);
  return <p>Count: {count}</p>;
}

// ✅ derive in render
function Good({ items }) {
  const count = items.length;
  return <p>Count: {count}</p>;
}`}),e.jsx("h3",{children:"E) Grouping unrelated fields in one object"}),e.jsx("p",{children:"Unrelated bits are simpler as separate states; you'll avoid spreads and accidental field drops."}),e.jsx(t.Code,{children:`// ✅ better
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(null);

// ❌ cramming everything into one 'state' object -> noisy spreads`}),e.jsx("h3",{children:"F) Non-functional updates in async callbacks"}),e.jsx("p",{children:"Async callbacks capture stale variables; use the functional form."}),e.jsx(t.Code,{children:`// ❌ may read stale 'count'
setTimeout(() => setCount(count + 1), 200);

// ✅ always uses latest
setTimeout(() => setCount(c => c + 1), 200);`}),e.jsx("h3",{children:"G) Expensive initial compute on every render"}),e.jsx("p",{children:"Heavy initializers should run once via lazy init."}),e.jsx(t.Code,{children:`// ❌ runs each render
const [value] = React.useState(expensiveCompute());

// ✅ lazy init (runs once)
const [value] = React.useState(() => expensiveCompute());`}),e.jsx("h3",{children:"H) Using state for values that shouldn't trigger renders"}),e.jsx("p",{children:"Use a ref for things like timer IDs, previous values, or mutable instance data."}),e.jsx(t.Code,{children:`function Timer() {
  const idRef = React.useRef(null); // not state
  const start = () => { idRef.current = setInterval(() => {}, 1000); };
  const stop  = () => { clearInterval(idRef.current); idRef.current = null; };
  return <button onClick={start} onDoubleClick={stop}>Start/Stop</button>;
}`}),e.jsx("h3",{children:"I) Mutating nested structures without copying each level"}),e.jsx("p",{children:"When updating a deep field, copy every level you change-or use Immer."}),e.jsx(t.Code,{children:`// With spreads
setForm(prev => ({
  ...prev,
  user: { ...prev.user, address: { ...prev.user.address, city: "Pune" } }
}));

// With immer (looks mutating but is immutable)
import { produce } from "immer";
setForm(prev => produce(prev, d => { d.user.address.city = "Pune"; }));`}),e.jsx("h3",{children:"J) Expecting many sets to cause many renders"}),e.jsx("p",{children:"React 18 batches updates (events, promises, timeouts). Use functional updates to stack changes safely."}),e.jsx(t.Code,{children:`setN(v => v + 1);
setN(v => v + 1); // one render, +2`}),e.jsx("h3",{children:"Checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Replace-don't mutate-objects/arrays in state."}),e.jsx("li",{children:"Don't read updated state in the same tick; use functional updates or the next render/effect."}),e.jsx("li",{children:"No setters during render; use events/effects."}),e.jsx("li",{children:"Compute derived values in render; avoid sync “mirroring” effects."}),e.jsx("li",{children:"Separate unrelated concerns into separate states; keep state minimal."}),e.jsx("li",{children:"Use refs for non-visual instance data (timer IDs, imperatives)."}),e.jsx("li",{children:"Copy each level for nested updates (or use Immer)."}),e.jsx("li",{children:"Remember: React 18 batches; write updates accordingly."})]}),e.jsx(t.Divider,{})]})}function u({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="batching-state-updates";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Batching state updates (React 18+)"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(h,{})})})]})}function h(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["In React 18+, ",e.jsx("strong",{children:"multiple state updates in the same tick are batched"})," into a single render - not only in React events, but also in timeouts, promises, and native event handlers. This improves performance and avoids unnecessary re-renders."]}),e.jsx("h3",{children:"A) Multiple setters → one render"}),e.jsx(t.Code,{children:`function Duo() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function bumpBoth() {
    setA(x => x + 1);
    setB(y => y + 1);
    // React 18 batches these -> one render
  }

  return <button onClick={bumpBoth}>a:{a} b:{b}</button>;
}`}),e.jsx("h3",{children:"B) Async boundaries are batched too (React 18)"}),e.jsx(t.Code,{children:`function AsyncBatch() {
  const [n, setN] = React.useState(0);

  function later() {
    setTimeout(() => {
      setN(v => v + 1);
      setN(v => v + 1);
      // Both updates inside the same timeout tick are batched -> +2 with one render
    }, 100);

    Promise.resolve().then(() => {
      setN(v => v + 1);
      setN(v => v + 1);
      // Updates inside a microtask (promise) are batched too
    });
  }

  return <button onClick={later}>n = {n}</button>;
}`}),e.jsx("h3",{children:"C) Reading state after set (same tick)"}),e.jsxs("p",{children:["After calling a setter, the variable in the current render doesn't change immediately. Compute the next value via the ",e.jsx("em",{children:"functional"})," form or move logic to the next render/effect."]}),e.jsx(t.Code,{children:`function Clicks() {
  const [n, setN] = React.useState(0);
  function addTwo() {
    setN(v => v + 1);
    setN(v => v + 1);
    // console.log(n) here still logs the previous value
  }
  return <button onClick={addTwo}>n = {n}</button>;
}`}),e.jsx("h3",{children:"D) Forcing sync flush (rare)"}),e.jsxs("p",{children:["If you must read the DOM right after an update in the ",e.jsx("em",{children:"same"})," tick (e.g., measure layout), you can break batching with ",e.jsx("code",{children:"flushSync"})," from ",e.jsx("code",{children:"react-dom"}),". Use sparingly - it forces an immediate render."]}),e.jsx(t.Code,{children:`import { flushSync } from "react-dom";

function Measure() {
  const [items, setItems] = React.useState([]);
  const listRef = React.useRef(null);

  function addAndMeasure() {
    flushSync(() => {
      setItems(prev => [...prev, { id: crypto.randomUUID() }]);
    });
    // At this point the DOM is updated; safe to measure
    const height = listRef.current?.getBoundingClientRect().height;
    console.log("height now:", height);
  }

  return (
    <ul ref={listRef}>
      {items.map(it => <li key={it.id}>row</li>)}
      <button onClick={addAndMeasure}>Add & measure</button>
    </ul>
  );
}`}),e.jsx("h3",{children:"E) React 17 vs 18 (what changed)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"React 17 and earlier:"})," only updates inside React event handlers were batched by default."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React 18:"})," batching is automatic across timeouts, promises, native events, and more."]})]}),e.jsx("h3",{children:"F) Practical tips"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prefer the functional setter form when stacking updates; it composes well with batching."}),e.jsx("li",{children:"Group related updates in the same tick - React will batch them for you."}),e.jsx("li",{children:"Avoid relying on immediate state reads after setters; use the next render or an effect."}),e.jsxs("li",{children:["Reach for ",e.jsx("code",{children:"flushSync"})," only when you must observe the DOM synchronously."]})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Expecting multiple setters in one handler to trigger multiple renders."}),e.jsx("li",{children:"Using non-functional updates repeatedly and hitting stale values."}),e.jsxs("li",{children:["Overusing ",e.jsx("code",{children:"flushSync"})," and hurting performance."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React 18 batches in events, timeouts, and promises."}),e.jsx("li",{children:"Use functional updates to stack changes safely."}),e.jsx("li",{children:"Don't read updated state in the same tick; render/effect will have the new value."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"flushSync"})," only for critical, synchronous DOM reads."]})]}),e.jsx(t.Divider,{})]})}function p({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="derived-state-vs-compute";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Derived state vs compute in render"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(m,{})})})]})}function m(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["Keep a ",e.jsx("strong",{children:"single source of truth"}),". If a value can be calculated from existing state/props,",e.jsx("em",{children:"don't store it in state"}),"-",e.jsx("strong",{children:"compute it during render"})," (use ",e.jsx("code",{children:"useMemo"})," only as a perf optimization). Store it in state only when users can edit it independently or it can't be derived."]}),e.jsx("h3",{children:"A) Compute in render (preferred)"}),e.jsx(t.Code,{children:`function Cart({ items }) {
  // items: [{ id, title, price, qty }]
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const count = items.reduce((sum, it) => sum + it.qty, 0);
  const empty = items.length === 0;     // derived boolean

  return (
    <>
      <p>Total: ₹{total}</p>
      <p>Items: {count}</p>
      {!empty && <button>Checkout</button>}
    </>
  );
}`}),e.jsx("h3",{children:"B) Don't duplicate derived values in state"}),e.jsx(t.Code,{children:`// ❌ Anti-pattern: duplicating derived state
function Bad({ items }) {
  const [count, setCount] = React.useState(0); // duplicate of items
  React.useEffect(() => { setCount(items.length); }, [items]); // sync effect smell
  return <p>Count: {count}</p>;
}

// ✅ Compute from source each render
function Good({ items }) {
  const count = items.length;
  return <p>Count: {count}</p>;
}`}),e.jsx("h3",{children:"C) Filtering/sorting: derive, don't store"}),e.jsx(t.Code,{children:`function Search({ items }) {
  const [q, setQ] = React.useState("");

  // Derive on render (fast enough for typical lists)
  const visible = items.filter(x =>
    x.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search" />
      <ul>{visible.map(it => <li key={it.id}>{it.title}</li>)}</ul>
    </>
  );
}`}),e.jsx("h3",{children:"D) Heavy derivations → memoize (perf only)"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"useMemo"})," to avoid recomputing expensive results when inputs haven't changed. It doesn't change correctness."]}),e.jsx(t.Code,{children:`function Report({ rows }) {
  const total = React.useMemo(() => {
    // expensive loop
    let sum = 0;
    for (const r of rows) sum += r.amount;
    return sum;
  }, [rows]);

  return <strong>₹{total}</strong>;
}`}),e.jsx("h3",{children:"E) Initial value from props vs always-derived"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Editable local copy?"})," Initialize from a prop ",e.jsx("em",{children:"once"})," then let users edit."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always mirrors props?"})," Don't store-compute from props every render."]})]}),e.jsx(t.Code,{children:`// 1) Editable local copy (initialized once, then user edits)
function Editor({ initialText }) {
  const [text, setText] = React.useState(() => initialText);
  // If the parent changes initialText later and you want to reflect it:
  // React.useEffect(() => setText(initialText), [initialText]);
  return <textarea value={text} onChange={e => setText(e.target.value)} />;
}

// 2) Always mirrors props -> compute, no state
function Price({ amount, discount = 0 }) {
  const final = amount * (1 - discount);
  return <span>₹{final}</span>;
}`}),e.jsx("h3",{children:`F) Don't set state to keep another state "in sync"`}),e.jsx("p",{children:"Sync effects that mirror one state into another are a code smell and risk infinite loops."}),e.jsx(t.Code,{children:`// ❌ Smell: mirroring
const [first, setFirst] = React.useState("");
const [full, setFull]   = React.useState("");
React.useEffect(() => { setFull(first + " Khan"); }, [first]); // unnecessary

// ✅ Compute during render
const fullName = first + " Khan";`}),e.jsx("h3",{children:"G) Formatting is derived"}),e.jsx("p",{children:"Display-ready strings (e.g., currency, dates) are derived from raw values-don't store both."}),e.jsx(t.Code,{children:`const nf = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
function Amount({ value }) {
  return <span>{nf.format(value)}</span>;
}`}),e.jsx("h3",{children:"H) When storing derived data is acceptable"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["When you need to ",e.jsx("strong",{children:"edit"})," it independently (local draft separate from source)."]}),e.jsxs("li",{children:["When the derived value is ",e.jsx("strong",{children:"asynchronous and cached"})," (server results; use a cache/store)."]}),e.jsxs("li",{children:["When you must ",e.jsx("strong",{children:"persist"})," a snapshot (e.g., export, undo stack)."]})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Storing ",e.jsx("code",{children:"isEmpty"}),", ",e.jsx("code",{children:"fullName"}),", or ",e.jsx("code",{children:"filtered"})," in state instead of deriving."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"useEffect"}),' to "sync" duplicates-causes drift and extra renders.']}),e.jsxs("li",{children:["Relying on ",e.jsx("code",{children:"useMemo"})," for correctness; it's a performance hint only."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Single source of truth: compute everything else during render."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"useMemo"})," only for heavy calculations."]}),e.jsx("li",{children:"Store only truly independent, user-editable, or persisted values."}),e.jsx("li",{children:"Avoid sync effects that mirror state; derive instead."})]}),e.jsx(t.Divider,{})]})}function x({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="arrays-in-state";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Arrays in state (immutability)"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(j,{})})})]})}function j(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["Arrays in React state must be treated ",e.jsx("strong",{children:"immutably"}),". Don't mutate with",e.jsx("code",{children:"push"}),"/",e.jsx("code",{children:"splice"}),"/",e.jsx("code",{children:"sort"}),"; instead return ",e.jsx("em",{children:"new arrays"}),"using spread, ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),", or the newer",e.jsx("code",{children:"toSorted"}),"/",e.jsx("code",{children:"toReversed"}),"/",e.jsx("code",{children:"toSpliced"}),"."]}),e.jsx("h3",{children:"A) Add / remove / update by id"}),e.jsx(t.Code,{children:`function Todos() {
  const [items, setItems] = React.useState([
    { id: "a", title: "JSX" },
    { id: "b", title: "State" },
  ]);

  // Add
  const add = (title) =>
    setItems(prev => [...prev, { id: crypto.randomUUID(), title }]);

  // Remove
  const remove = (id) =>
    setItems(prev => prev.filter(t => t.id !== id));

  // Update
  const rename = (id, title) =>
    setItems(prev => prev.map(t => (t.id === id ? { ...t, title } : t)));

  return (
    <>
      <ul>{items.map(t => <li key={t.id}>{t.title}</li>)}</ul>
      <button onClick={() => add("New")}>Add</button>
      <button onClick={() => rename("a", "JSX ✅")}>Rename first</button>
      <button onClick={() => remove("b")}>Remove second</button>
    </>
  );
}`}),e.jsx("h3",{children:"B) Don't mutate: push/splice/sort vs immutable forms"}),e.jsx(t.Code,{children:`const [nums, setNums] = React.useState([3,1,2]);

// ❌ Mutates in place
// setNums(nums); nums.push(4);
// setNums(nums); nums.sort(); // mutates

// ✅ Immutable add
setNums(prev => [...prev, 4]);

// ✅ Immutable remove-at (index i)
setNums(prev => prev.filter((_, i) => i !== 1));

// ✅ Immutable replace-at
setNums(prev => prev.map((n, i) => (i === 0 ? 99 : n)));

// ✅ Sort without mutating (copy first)
setNums(prev => [...prev].sort((a,b) => a - b));

// ✅ Modern non-mutating helpers (where supported)
setNums(prev => prev.toSorted((a,b) => a - b));   // copy + sort
setNums(prev => prev.toReversed());               // copy + reverse
setNums(prev => prev.toSpliced(1, 1, 42));        // copy + splice
`}),e.jsx("h3",{children:"C) Insert at a position"}),e.jsx(t.Code,{children:`const insertAt = (arr, index, item) => [
  ...arr.slice(0, index),
  item,
  ...arr.slice(index),
];

// Usage
setItems(prev => insertAt(prev, 1, { id: "x", title: "Inserted" }));
// or with toSpliced: setItems(prev => prev.toSpliced(1, 0, newItem));`}),e.jsx("h3",{children:"D) Toggle membership (ids) without mutation"}),e.jsx(t.Code,{children:`const [selected, setSelected] = React.useState([]); // array of ids

function toggle(id) {
  setSelected(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );
}`}),e.jsx("h3",{children:"E) Avoid reusing the same array reference"}),e.jsxs("p",{children:["React compares state with ",e.jsx("code",{children:"Object.is"}),". If you mutate and pass the same array reference back, React may skip re-render. Always return a ",e.jsx("em",{children:"new array"}),"."]}),e.jsx(t.Code,{children:`// ❌ Wrong: in-place push then set the same ref
// items.push(newItem); setItems(items);

// ✅ Right: create a new array
setItems(prev => [...prev, newItem]);`}),e.jsx("h3",{children:"F) Nested arrays (copy each level you change)"}),e.jsx(t.Code,{children:`function Board() {
  const [lists, setLists] = React.useState([
    { id: "L1", cards: [{ id: "c1", text: "A" }] },
  ]);

  // Move a card to the end of the same list
  const move = (listId, cardId) => {
    setLists(prev => prev.map(list => {
      if (list.id !== listId) return list;
      const cards = list.cards;
      const idx = cards.findIndex(c => c.id === cardId);
      if (idx < 0) return list;
      const card = cards[idx];
      // copy each level we change
      const nextCards = [...cards.slice(0, idx), ...cards.slice(idx + 1), card];
      return { ...list, cards: nextCards };
    }));
  };

  return null;
}`}),e.jsx("h3",{children:"G) Keys & identity (quick reminder)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"stable id"})," for ",e.jsx("code",{children:"key"})," when mapping arrays. Avoid index keys if items can reorder."]}),e.jsx("li",{children:"When duplicating/updating items, keep their ids stable so component state doesn't “jump”."})]}),e.jsx("h3",{children:"H) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Calling mutating methods (",e.jsx("code",{children:"push"}),", ",e.jsx("code",{children:"splice"}),", ",e.jsx("code",{children:"sort"}),") directly on state arrays."]}),e.jsxs("li",{children:["Setting the same mutated reference (",e.jsx("code",{children:"setItems(items)"}),") and wondering why nothing re-rendered."]}),e.jsx("li",{children:"Forgetting to copy nested arrays/objects at each modified level."}),e.jsx("li",{children:"Using index as key in lists that change order or have stateful children."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"map"}),"/",e.jsx("code",{children:"filter"}),"/",e.jsx("code",{children:"[...prev]"})," (or ",e.jsx("code",{children:"toSorted"}),"/",e.jsx("code",{children:"toReversed"}),"/",e.jsx("code",{children:"toSpliced"}),") for immutable updates."]}),e.jsxs("li",{children:["Return a ",e.jsx("strong",{children:"new array"})," from setters; never mutate in place."]}),e.jsx("li",{children:"Copy each level you modify for nested structures."}),e.jsx("li",{children:"Prefer stable ids for list keys; avoid index when reordering."})]}),e.jsx(t.Divider,{})]})}function f({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="objects-in-state";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Objects in state (immutability)"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(v,{})})})]})}function v(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["In React, ",e.jsx("strong",{children:"treat state as immutable"}),". The state setter ",e.jsx("em",{children:"replaces"})," the whole object; it doesn't merge like old class ",e.jsx("code",{children:"setState"}),". Create a new object when changing fields, and copy the parts you keep."]}),e.jsx("h3",{children:"A) Replace, don't mutate"}),e.jsx(t.Code,{children:`function Profile() {
  const [user, setUser] = React.useState({ name: "Ash", age: 20 });

  // ❌ Mutation: same reference; React may bail out (Object.is)
  function birthdayWrong() {
    user.age += 1;
    setUser(user); // same object ref -> may not re-render
  }

  // ✅ Immutability: new object with updated field
  function birthdayRight() {
    setUser(prev => ({ ...prev, age: prev.age + 1 }));
  }

  return (
    <>
      <p>{user.name} – {user.age}</p>
      <button onClick={birthdayWrong}>Wrong</button>
      <button onClick={birthdayRight}>Right</button>
    </>
  );
}`}),e.jsx("h3",{children:"B) Nested fields: copy each level you change"}),e.jsx(t.Code,{children:`function AddressForm() {
  const [form, setForm] = React.useState({
    user: { name: "", address: { city: "", pin: "" } },
    meta: { dirty: false }
  });

  function onCity(e) {
    const city = e.target.value;
    setForm(prev => ({
      ...prev,
      user: {
        ...prev.user,
        address: { ...prev.user.address, city }
      },
      meta: { ...prev.meta, dirty: true }
    }));
  }

  return (
    <>
      <input
        value={form.user.address.city}
        onChange={onCity}
        placeholder="City"
      />
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  );
}`}),e.jsx("h3",{children:"C) Partial updates with dynamic keys"}),e.jsx(t.Code,{children:`function Settings() {
  const [settings, setSettings] = React.useState({ theme: "light", lang: "en" });

  function setField(key, value) {
    setSettings(prev => ({ ...prev, [key]: value })); // dynamic prop name
  }

  // setField("theme", "dark")
  // setField("lang", "hi")
  return null;
}`}),e.jsx("h3",{children:"D) Replace vs merge (important)"}),e.jsxs("p",{children:["Calling the setter with an object ",e.jsx("em",{children:"replaces"}),' state. To "merge", you must spread the previous state yourself.']}),e.jsx(t.Code,{children:`const [prefs, setPrefs] = React.useState({ theme: "light", fontSize: 14 });

// ❌ Replaces the whole object; 'fontSize' disappears
setPrefs({ theme: "dark" });

// ✅ Merge manually
setPrefs(prev => ({ ...prev, theme: "dark" }));`}),e.jsx("h3",{children:"E) Complex updates: consider a helper (Immer) or useReducer"}),e.jsxs("p",{children:["For deep/nested updates, libraries like ",e.jsx("code",{children:"immer"}),' let you write "mutating" code that produces an immutable copy, or switch to ',e.jsx("code",{children:"useReducer"})," for clearer intent."]}),e.jsx(t.Code,{children:`// npm i immer
import { produce } from "immer";

function FormWithImmer() {
  const [form, setForm] = React.useState({ user: { name: "", address: { city: "" } } });

  const setCity = (city) =>
    setForm(prev => produce(prev, draft => {
      draft.user.address.city = city;  // looks like mutation; produces a new object
    }));

  return null;
}`}),e.jsx("h3",{children:"F) Referential equality & memoization"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React re-renders when the state reference changes. New objects create a new reference."}),e.jsxs("li",{children:["Don't recreate ",e.jsx("em",{children:"unrelated"})," objects unnecessarily; keep state ",e.jsx("em",{children:"minimal"})," to reduce churn."]}),e.jsxs("li",{children:["Downstream components can use ",e.jsx("code",{children:"React.memo"})," if their props keep the same references."]})]}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Mutating then setting the ",e.jsx("em",{children:"same"})," object reference (no re-render)."]}),e.jsx("li",{children:"Forgetting to copy each nested level you modify."}),e.jsx("li",{children:"Expecting automatic merge-function components don't merge object state."}),e.jsx("li",{children:"Putting many unrelated fields into one object and spreading them on every change."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"setX(prev => ({...prev, field}))"})," for object updates."]}),e.jsx("li",{children:"Clone each level you change; don't mutate nested objects."}),e.jsx("li",{children:"Setter replaces the whole object-merge manually with spreads (or use Immer/reducer)."}),e.jsx("li",{children:"Keep state minimal to stabilize references and ease memoization."})]}),e.jsx(t.Divider,{})]})}function g({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="multiple-state-variables";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Multiple state variables"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(y,{})})})]})}function y(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["Use ",e.jsx("strong",{children:"one state variable per independent concern"}),". This keeps updates simple, avoids accidental overwrites, and makes code easier to read and test. Group fields into an object only when they naturally belong together and you always update them together (details in the next two topics)."]}),e.jsx("h3",{children:"A) Separate, independent concerns → separate state"}),e.jsx(t.Code,{children:`function Editor() {
  const [title, setTitle]   = React.useState("");
  const [body, setBody]     = React.useState("");
  const [saving, setSaving] = React.useState(false);

  async function save() {
    setSaving(true);
    await fakeSave({ title, body });
    setSaving(false);
  }

  return (
    <>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
      <button onClick={save} disabled={saving}>{saving ? "Saving…" : "Save"}</button>
    </>
  );
}`}),e.jsx("h3",{children:"B) When to group into an object (contrast)"}),e.jsxs("p",{children:["If fields are tightly coupled (e.g., a single ",e.jsx("em",{children:"form object"})," you validate/submit as a unit), grouping is fine. But remember immutability rules when updating objects (covered next)."]}),e.jsx(t.Code,{children:`// Grouped shape (ok if you treat it as one unit)
function ProfileForm() {
  const [form, setForm] = React.useState({ name: "", email: "" }); // one object

  const onName  = (e) => setForm(prev => ({ ...prev, name: e.target.value }));
  const onEmail = (e) => setForm(prev => ({ ...prev, email: e.target.value }));

  return (
    <>
      <input value={form.name}  onChange={onName}  />
      <input value={form.email} onChange={onEmail} />
    </>
  );
}`}),e.jsx("h3",{children:"C) Don't force unrelated things into one object"}),e.jsxs("p",{children:["Unrelated bits (like ",e.jsx("code",{children:"loading"}),", ",e.jsx("code",{children:"error"}),", ",e.jsx("code",{children:"filter"}),") are cleaner as separate state variables. You'll write fewer spread operations and avoid accidental field drops."]}),e.jsx(t.Code,{children:`// ✅ Clearer with separate state
const [loading, setLoading] = React.useState(false);
const [error,   setError]   = React.useState(null);
const [filter,  setFilter]  = React.useState("");

// ❌ Forcing them into one object often leads to clumsy updates and bugs
// const [state, setState] = React.useState({ loading:false, error:null, filter:"" });
// setState({ ...state, loading:true }); // easy to forget props or make stale reads`}),e.jsx("h3",{children:"D) Batching & performance note"}),e.jsx("p",{children:"React 18+ batches multiple state updates in the same tick (from events, timeouts, promises). It's fine to have several state variables—updating any triggers a single re-render per tick."}),e.jsx(t.Code,{children:`function Filters() {
  const [q, setQ] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("recent");

  function applyPreset() {
    // These updates are batched into one render in React 18+
    setQ("react");
    setPage(1);
    setSort("top");
  }

  return <button onClick={applyPreset}>Apply preset</button>;
}`}),e.jsx("h3",{children:"E) Derive, don't duplicate"}),e.jsxs("p",{children:["Compute values from state/props in render (or ",e.jsx("code",{children:"useMemo"})," if heavy) instead of storing duplicates."]}),e.jsx(t.Code,{children:`const [items, setItems] = React.useState([]);
const [query, setQuery] = React.useState("");

// ❌ don't store filtered in state
// const [filtered, setFiltered] = React.useState([]);

// ✅ derive in render
const filtered = items.filter(x => x.title.toLowerCase().includes(query.toLowerCase()));`}),e.jsx("h3",{children:"F) Group logic with custom hooks (optional)"}),e.jsxs("p",{children:["If a set of states always travel together, bundle them into a ",e.jsx("em",{children:"custom hook"})," and return a small API."]}),e.jsx(t.Code,{children:`function useToggle(initial = false) {
  const [on, setOn] = React.useState(initial);
  const toggle = React.useCallback(() => setOn(o => !o), []);
  return { on, toggle, setOn };
}

// Usage
const { on, toggle } = useToggle();`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Overloading a single object state for unrelated concerns."}),e.jsx("li",{children:"Storing derived values (duplicates) instead of computing in render."}),e.jsx("li",{children:"Forgetting that Hook order must stay fixed when adding/removing state variables."}),e.jsx("li",{children:"Expecting multiple setters in one handler to cause multiple renders (they're batched)."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Create one state variable per independent concern."}),e.jsx("li",{children:"Group into an object only when fields form a single unit updated together."}),e.jsx("li",{children:"Compute derived data in render; don't duplicate in state."}),e.jsx("li",{children:"Multiple setters in one tick are batched (React 18+)."}),e.jsx("li",{children:"Hook order must be consistent across renders."})]}),e.jsx(t.Divider,{})]})}function b({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="initial-state-function";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Initial state function (lazy init)"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(C,{})})})]})}function C(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["If computing the initial value is expensive or should happen only once, pass a ",e.jsx("strong",{children:"function"})," to"," ",e.jsx("code",{children:"useState"}),". React calls it on the first render and caches the result."]}),e.jsx("h3",{children:"A) The pattern"}),e.jsx(t.Code,{children:`// ❌ runs every render (bad for heavy work)
const [value, setValue] = React.useState(expensiveCompute());

// ✅ lazy init: function runs only for the initial render
const [value, setValue] = React.useState(() => expensiveCompute());`}),e.jsx("h3",{children:"B) Example: expensive calculation only once"}),e.jsx(t.Code,{children:`function heavyFibonacci(n) {
  // pretend: CPU-heavy loop
  let a = 0, b = 1;
  for (let i = 0; i < n * 30_000; i++) [a, b] = [b, a + b];
  return a;
}

export function FibDemo({ n = 35 }) {
  const [fib, setFib] = React.useState(() => heavyFibonacci(n)); // runs once
  return (
    <div>
      <p>fib({n}) = {fib}</p>
      <button onClick={() => setFib(f => f + 1)}>adjust</button>
    </div>
  );
}`}),e.jsx("h3",{children:"C) Example: read once from localStorage (or environment)"}),e.jsx(t.Code,{children:`export function ThemeInit() {
  const [theme, setTheme] = React.useState(() => {
    // read once; avoid doing this on every render
    return localStorage.getItem("theme") ?? "light";
  });

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>{theme}</button>;
}`}),e.jsx("h3",{children:"D) Initializing from props (and when props change)"}),e.jsxs("p",{children:["The initializer runs only for the first render. If you want to ",e.jsx("em",{children:"recompute when a prop changes"}),", either:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Don't store it."})," Just compute from props in render (or with ",e.jsx("code",{children:"useMemo"})," if heavy)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Or"})," watch the prop and update state in an effect."]})]}),e.jsx(t.Code,{children:`// 1) Prefer compute on render (no state)
function Price({ amount, discount = 0 }) {
  const final = amount * (1 - discount);
  return <span>₹{final}</span>;
}

// 2) If you truly need local state initialized from a prop:
function Editor({ initialText }) {
  const [text, setText] = React.useState(() => initialText);
  // When initialText changes later, opt-in to updating state:
  React.useEffect(() => { setText(initialText); }, [initialText]);
  return <textarea value={text} onChange={e => setText(e.target.value)} />;
}`}),e.jsx("h3",{children:"E) Storing a function as state (don't confuse with updater)"}),e.jsxs("p",{children:["Passing a function to the setter is treated as an ",e.jsx("em",{children:"updater"}),". If your state value itself is a function, wrap it so React stores the function instead of calling it as an updater."]}),e.jsx(t.Code,{children:`const [fn, setFn] = React.useState(() => () => console.log("hi"));
// Later, set to a new function value:
setFn(() => () => console.log("updated")); // wrap in another fn`}),e.jsx("h3",{children:"F) Strict Mode note (dev only)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["In React 18's development ",e.jsx("em",{children:"Strict Mode"}),", React may invoke render/initializers twice to detect side effects."]}),e.jsxs("li",{children:["Therefore: keep initializers ",e.jsx("strong",{children:"pure"})," (no network calls, no mutations). They should just compute and return a value."]})]}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Calling the expensive initializer directly (runs every render) instead of passing a function."}),e.jsx("li",{children:"Expecting the initializer to run again when props change—use compute-on-render or an effect."}),e.jsx("li",{children:"Doing side effects in the initializer (it should be pure and may run twice in dev)."}),e.jsx("li",{children:"Setting a function as state without wrapping, unintentionally triggering the updater form."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"useState(() => init())"})," for heavy or one-time reads (localStorage, parse, precompute)."]}),e.jsx("li",{children:"Derive from props in render unless you truly need editable local state."}),e.jsx("li",{children:"Keep the initializer pure; no side effects."}),e.jsxs("li",{children:["To store a function value, wrap it: ",e.jsx("code",{children:"setX(() => fn)"}),"."]})]}),e.jsx(t.Divider,{})]})}function S({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="functional-updates";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Functional updates (prev => ...)"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(R,{})})})]})}function R(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:["When the next state ",e.jsx("em",{children:"depends on the previous state"}),", pass a function to the setter:",e.jsx("code",{children:"setX(prev => next)"}),". React will call it with the latest value, even across batched/async updates."]}),e.jsx("h3",{children:"A) Basic counter: stale value vs functional update"}),e.jsx(t.Code,{children:`function Counter() {
  const [n, setN] = React.useState(0);

  // ❌ Might be stale if called multiple times in one tick
  function addOneBad() {
    setN(n + 1);
    setN(n + 1); // still uses the old n -> ends at +1
  }

  // ✅ Always based on latest value; queues to +2
  function addOneGood() {
    setN(prev => prev + 1);
    setN(prev => prev + 1); // ends at +2
  }

  return (
    <>
      <button onClick={addOneBad}>Bad +1</button>
      <button onClick={addOneGood}>Good +1</button>
      <span> {n} </span>
    </>
  );
}`}),e.jsx("h3",{children:"B) Async callbacks capture old state — fix with functional form"}),e.jsx(t.Code,{children:`function AsyncDemo() {
  const [count, setCount] = React.useState(0);

  function tickWrong() {
    setTimeout(() => setCount(count + 1), 100); // 'count' may be stale
  }

  function tickRight() {
    setTimeout(() => setCount(c => c + 1), 100); // uses latest value
  }

  return (
    <>
      <button onClick={tickWrong}>+1 (wrong)</button>
      <button onClick={tickRight}>+1 (right)</button>
      <span> {count} </span>
    </>
  );
}`}),e.jsx("h3",{children:"C) Objects in state: copy then change (using prev)"}),e.jsx(t.Code,{children:`function Form() {
  const [user, setUser] = React.useState({ name: "", age: 0 });

  const onName = (e) =>
    setUser(prev => ({ ...prev, name: e.target.value }));

  const birthday = () =>
    setUser(prev => ({ ...prev, age: prev.age + 1 }));

  return (
    <>
      <input value={user.name} onChange={onName} placeholder="Name" />
      <button onClick={birthday}>Happy Birthday</button>
      <p>{user.name} – {user.age}</p>
    </>
  );
}`}),e.jsx("h3",{children:"D) Arrays in state: append / remove / update by id"}),e.jsx(t.Code,{children:`function Todos() {
  const [items, setItems] = React.useState([]);

  const add = (title) =>
    setItems(prev => [...prev, { id: crypto.randomUUID(), title }]);

  const remove = (id) =>
    setItems(prev => prev.filter(t => t.id !== id));

  const rename = (id, title) =>
    setItems(prev => prev.map(t => t.id === id ? { ...t, title } : t));

  return (
    <ul>
      {items.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  );
}`}),e.jsx("h3",{children:"E) Multiple updates to different states stay consistent"}),e.jsx("p",{children:"Each setter's functional form receives the latest value from its own queue."}),e.jsx(t.Code,{children:`function Pair() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function bumpBoth() {
    setA(x => x + 1);
    setB(y => y + 1);
  }
  return <button onClick={bumpBoth}>a:{a} b:{b}</button>;
}`}),e.jsx("h3",{children:"F) When you don't need it"}),e.jsxs("ul",{children:[e.jsx("li",{children:"If the next value doesn't depend on the previous (e.g., set to a constant), you can pass the value directly."}),e.jsx("li",{children:"For derived values from props, prefer computing in render over storing in state (covered later)."})]}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Calling ",e.jsx("code",{children:"setX(x + 1)"})," multiple times in one handler expecting it to stack."]}),e.jsx("li",{children:"Using non-functional updates inside async callbacks (timers, promises, subscriptions)."}),e.jsx("li",{children:"Mutating objects/arrays in the updater instead of returning a new copy."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If next value depends on previous → use ",e.jsx("code",{children:"setX(prev => next)"}),"."]}),e.jsx("li",{children:"Prefer functional updates inside async work and when batching multiple updates."}),e.jsxs("li",{children:["Return new objects/arrays from the updater; never mutate ",e.jsx("code",{children:"prev"}),"."]})]}),e.jsx(t.Divider,{})]})}function w({defaultOpen:i=!1}){const[s,r]=o.useState(!!i),n="use-state-basics";return e.jsxs(t.Topic,{id:n,children:[e.jsxs(t.Title,{onClick:()=>r(a=>!a),"aria-expanded":s,"aria-controls":`${n}-panel`,id:`${n}-button`,"data-open":s,children:[e.jsx(t.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"useState basics"})]}),e.jsx(t.Panel,{id:`${n}-panel`,role:"region","aria-labelledby":`${n}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(k,{})})})]})}function k(){return e.jsxs(t.Content,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"useState"})," lets a function component remember a value between renders. You get a pair: ",e.jsx("em",{children:"state"})," and a ",e.jsx("em",{children:"setter"}),". Calling the setter schedules a re-render."]}),e.jsx("h3",{children:"A) Declaring state"}),e.jsx(t.Code,{children:`// [state, setState] = useState(initialValue)
function Counter() {
  const [count, setCount] = React.useState(0);   // number
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`}),e.jsx("h3",{children:"B) Any serializable value works"}),e.jsx(t.Code,{children:`function Examples() {
  const [open, setOpen] = React.useState(false);         // boolean
  const [text, setText] = React.useState("hello");       // string
  const [price, setPrice] = React.useState(99.99);       // number
  const [date, setDate] = React.useState(new Date());    // object (see immutability later)

  return (
    <>
      <button onClick={() => setOpen(o => !o)}>{open ? "Hide" : "Show"}</button>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>₹{price}</p>
      <p>{date.toLocaleDateString()}</p>
    </>
  );
}`}),e.jsx("h3",{children:"C) Reading state is a snapshot"}),e.jsxs("p",{children:["Inside an event, state reads the ",e.jsx("em",{children:"current"})," value for that render. After you call the setter, React re-renders with the new value."]}),e.jsx(t.Code,{children:`function LogDemo() {
  const [n, setN] = React.useState(0);
  function click() {
    console.log("before", n);     // e.g., 0
    setN(n + 1);                  // schedule update
    console.log("after", n);      // still 0 in this tick
  }
  return <button onClick={click}>n = {n}</button>;
}`}),e.jsx("h3",{children:"D) Controlled inputs (most common pattern)"}),e.jsx(t.Code,{children:`function NameField() {
  const [name, setName] = React.useState("");
  return <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />;
}`}),e.jsx("h3",{children:"E) Setting same value does not re-render"}),e.jsx(t.Code,{children:`function Stable() {
  const [mode, setMode] = React.useState("light");
  // Setting the same value is a no-op (React uses Object.is)
  return <button onClick={() => setMode("light")}>{mode}</button>;
}`}),e.jsx("h3",{children:"F) Rules of Hooks (must follow)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Call ",e.jsx("code",{children:"useState"})," at the ",e.jsx("strong",{children:"top level"})," of your component (not inside loops/ifs)."]}),e.jsxs("li",{children:["Call Hooks in the ",e.jsx("strong",{children:"same order"})," on every render."]}),e.jsx("li",{children:"Only call Hooks from React function components or custom Hooks."})]}),e.jsx("h3",{children:"G) Where to put event handlers & updates"}),e.jsx(t.Code,{children:`function Stepper({ step = 1 }) {
  const [n, setN] = React.useState(0);
  const inc = () => setN(n + step);     // basic update (next topic shows prev => prev + step)
  const reset = () => setN(0);
  return (
    <>
      <button onClick={inc}>+{step}</button>
      <button onClick={reset}>Reset</button>
      <span> {n} </span>
    </>
  );
}`}),e.jsx("h3",{children:"H) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Expecting the state variable to change ",e.jsx("em",{children:"immediately"})," after calling the setter in the same tick."]}),e.jsxs("li",{children:["Calling Hooks conditionally; wrap branches with early return ",e.jsx("em",{children:"after"})," Hooks."]}),e.jsx("li",{children:"Mutating objects/arrays in state (covered in later topics)."}),e.jsx("li",{children:"Using a single state object for unrelated fields-prefer multiple state variables."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const [x, setX] = useState(init)"})," for each independent concern."]}),e.jsx("li",{children:"Call setters from events/effects; React will re-render with the new snapshot."}),e.jsx("li",{children:"If the next value depends on the previous one, prefer the functional form (next topic)."}),e.jsxs("li",{children:["For forms, bind ",e.jsx("code",{children:"value"})," and ",e.jsx("code",{children:"onChange"})," (controlled inputs)."]})]}),e.jsx(t.Divider,{})]})}const N=()=>e.jsxs("div",{style:{padding:"15px"},children:[e.jsx("h3",{children:"State (useState) - fundamentals"}),e.jsxs(I.PageIntro,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"useState"})," is the simplest way to make UI reactive. We’ll cover the patterns you actually use daily: when to store state, how to update it without causing bugs, and how React batches updates in 18+. You’ll also see common traps (mutations, reading immediately after ",e.jsx("code",{children:"setState"}),", duplicated/derived data) and the safe alternatives."]}),e.jsxs("p",{className:"outcome",children:[e.jsx("strong",{children:"Outcome:"})," predictable updates, no accidental mutations, fewer re-renders, and components that stay easy to reason about."]})]}),e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx(S,{}),e.jsx(b,{}),e.jsx(g,{}),e.jsx(f,{}),e.jsx(x,{}),e.jsx(p,{}),e.jsx(u,{}),e.jsx(l,{})]})]}),I={PageIntro:c.div`
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
        code { background: #1a1a1a; padding: 0 6px; border-radius: 6px; }
    `};export{N as default};
