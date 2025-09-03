import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Anti-patterns (mutate, read before set)
 */
export default function AntiPatterns({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "state-anti-patterns";

    return (
        <Styled.Topic id={id}>
            <Styled.Title
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                data-open={open}
            >
                <Styled.Arrow data-open={open}>▸</Styled.Arrow>
                <span>Anti-patterns (mutate, read before set)</span>
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
                Common state mistakes: <strong>mutating</strong> objects/arrays, <strong>reading immediately after</strong> a set,
                duplicating <em>derived</em> values, and setting state during render. Here's what to avoid and how to fix it.
            </p>

            <h3>A) Mutating objects/arrays in state</h3>
            <p>React compares state by reference (<code>Object.is</code>). Mutating the same object/array can skip re-renders and cause bugs.</p>
            <Styled.Code>{`// ❌ mutation keeps the same reference
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
const rename = (id, title) => setItems(prev => prev.map(t => t.id === id ? { ...t, title } : t));`}</Styled.Code>

            <h3>B) Reading state right after calling the setter</h3>
            <p>
                State is a snapshot of the current render. After you call <code>setX</code>, the variable <code>x</code> won't change
                until the next render.
            </p>
            <Styled.Code>{`function ReadAfterSet() {
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
}`}</Styled.Code>

            <h3>C) Setting state during render (infinite loops)</h3>
            <p>Never call setters while rendering JSX. Do it in events/effects instead.</p>
            <Styled.Code>{`// ❌ bad: set during render based on a condition
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
}`}</Styled.Code>

            <h3>D) Duplicating derived state (sync effects smell)</h3>
            <p>If a value can be computed from props/state, don't mirror it in state using an effect.</p>
            <Styled.Code>{`// ❌ duplicate + sync effect
function Bad({ items }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => setCount(items.length), [items]);
  return <p>Count: {count}</p>;
}

// ✅ derive in render
function Good({ items }) {
  const count = items.length;
  return <p>Count: {count}</p>;
}`}</Styled.Code>

            <h3>E) Grouping unrelated fields in one object</h3>
            <p>Unrelated bits are simpler as separate states; you'll avoid spreads and accidental field drops.</p>
            <Styled.Code>{`// ✅ better
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(null);

// ❌ cramming everything into one 'state' object -> noisy spreads`}</Styled.Code>

            <h3>F) Non-functional updates in async callbacks</h3>
            <p>Async callbacks capture stale variables; use the functional form.</p>
            <Styled.Code>{`// ❌ may read stale 'count'
setTimeout(() => setCount(count + 1), 200);

// ✅ always uses latest
setTimeout(() => setCount(c => c + 1), 200);`}</Styled.Code>

            <h3>G) Expensive initial compute on every render</h3>
            <p>Heavy initializers should run once via lazy init.</p>
            <Styled.Code>{`// ❌ runs each render
const [value] = React.useState(expensiveCompute());

// ✅ lazy init (runs once)
const [value] = React.useState(() => expensiveCompute());`}</Styled.Code>

            <h3>H) Using state for values that shouldn't trigger renders</h3>
            <p>Use a ref for things like timer IDs, previous values, or mutable instance data.</p>
            <Styled.Code>{`function Timer() {
  const idRef = React.useRef(null); // not state
  const start = () => { idRef.current = setInterval(() => {}, 1000); };
  const stop  = () => { clearInterval(idRef.current); idRef.current = null; };
  return <button onClick={start} onDoubleClick={stop}>Start/Stop</button>;
}`}</Styled.Code>

            <h3>I) Mutating nested structures without copying each level</h3>
            <p>When updating a deep field, copy every level you change-or use Immer.</p>
            <Styled.Code>{`// With spreads
setForm(prev => ({
  ...prev,
  user: { ...prev.user, address: { ...prev.user.address, city: "Pune" } }
}));

// With immer (looks mutating but is immutable)
import { produce } from "immer";
setForm(prev => produce(prev, d => { d.user.address.city = "Pune"; }));`}</Styled.Code>

            <h3>J) Expecting many sets to cause many renders</h3>
            <p>React 18 batches updates (events, promises, timeouts). Use functional updates to stack changes safely.</p>
            <Styled.Code>{`setN(v => v + 1);
setN(v => v + 1); // one render, +2`}</Styled.Code>

            <h3>Checklist</h3>
            <ul>
                <li>Replace-don't mutate-objects/arrays in state.</li>
                <li>Don't read updated state in the same tick; use functional updates or the next render/effect.</li>
                <li>No setters during render; use events/effects.</li>
                <li>Compute derived values in render; avoid sync “mirroring” effects.</li>
                <li>Separate unrelated concerns into separate states; keep state minimal.</li>
                <li>Use refs for non-visual instance data (timer IDs, imperatives).</li>
                <li>Copy each level for nested updates (or use Immer).</li>
                <li>Remember: React 18 batches; write updates accordingly.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
