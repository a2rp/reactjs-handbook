import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Derived state vs compute in render
 */
export default function DerivedStateVsCompute({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "derived-state-vs-compute";

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
                <span>Derived state vs compute in render</span>
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
                Keep a <strong>single source of truth</strong>. If a value can be calculated from existing state/props,
                <em>don't store it in state</em>-<strong>compute it during render</strong> (use <code>useMemo</code> only as a perf optimization).
                Store it in state only when users can edit it independently or it can't be derived.
            </p>

            <h3>A) Compute in render (preferred)</h3>
            <Styled.Code>{`function Cart({ items }) {
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
}`}</Styled.Code>

            <h3>B) Don't duplicate derived values in state</h3>
            <Styled.Code>{`// ❌ Anti-pattern: duplicating derived state
function Bad({ items }) {
  const [count, setCount] = React.useState(0); // duplicate of items
  React.useEffect(() => { setCount(items.length); }, [items]); // sync effect smell
  return <p>Count: {count}</p>;
}

// ✅ Compute from source each render
function Good({ items }) {
  const count = items.length;
  return <p>Count: {count}</p>;
}`}</Styled.Code>

            <h3>C) Filtering/sorting: derive, don't store</h3>
            <Styled.Code>{`function Search({ items }) {
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
}`}</Styled.Code>

            <h3>D) Heavy derivations → memoize (perf only)</h3>
            <p>Use <code>useMemo</code> to avoid recomputing expensive results when inputs haven't changed. It doesn't change correctness.</p>
            <Styled.Code>{`function Report({ rows }) {
  const total = React.useMemo(() => {
    // expensive loop
    let sum = 0;
    for (const r of rows) sum += r.amount;
    return sum;
  }, [rows]);

  return <strong>₹{total}</strong>;
}`}</Styled.Code>

            <h3>E) Initial value from props vs always-derived</h3>
            <ul>
                <li><strong>Editable local copy?</strong> Initialize from a prop <em>once</em> then let users edit.</li>
                <li><strong>Always mirrors props?</strong> Don't store-compute from props every render.</li>
            </ul>
            <Styled.Code>{`// 1) Editable local copy (initialized once, then user edits)
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
}`}</Styled.Code>

            <h3>F) Don't set state to keep another state "in sync"</h3>
            <p>Sync effects that mirror one state into another are a code smell and risk infinite loops.</p>
            <Styled.Code>{`// ❌ Smell: mirroring
const [first, setFirst] = React.useState("");
const [full, setFull]   = React.useState("");
React.useEffect(() => { setFull(first + " Khan"); }, [first]); // unnecessary

// ✅ Compute during render
const fullName = first + " Khan";`}</Styled.Code>

            <h3>G) Formatting is derived</h3>
            <p>Display-ready strings (e.g., currency, dates) are derived from raw values-don't store both.</p>
            <Styled.Code>{`const nf = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
function Amount({ value }) {
  return <span>{nf.format(value)}</span>;
}`}</Styled.Code>

            <h3>H) When storing derived data is acceptable</h3>
            <ul>
                <li>When you need to <strong>edit</strong> it independently (local draft separate from source).</li>
                <li>When the derived value is <strong>asynchronous and cached</strong> (server results; use a cache/store).</li>
                <li>When you must <strong>persist</strong> a snapshot (e.g., export, undo stack).</li>
            </ul>

            <h3>Common mistakes</h3>
            <ul>
                <li>Storing <code>isEmpty</code>, <code>fullName</code>, or <code>filtered</code> in state instead of deriving.</li>
                <li>Using <code>useEffect</code> to "sync" duplicates-causes drift and extra renders.</li>
                <li>Relying on <code>useMemo</code> for correctness; it's a performance hint only.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Single source of truth: compute everything else during render.</li>
                <li>Use <code>useMemo</code> only for heavy calculations.</li>
                <li>Store only truly independent, user-editable, or persisted values.</li>
                <li>Avoid sync effects that mirror state; derive instead.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
