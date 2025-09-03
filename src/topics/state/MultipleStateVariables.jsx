import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Multiple state variables
 */
export default function MultipleStateVariables({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "multiple-state-variables";

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
                <span>Multiple state variables</span>
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
                Use <strong>one state variable per independent concern</strong>. This keeps updates simple, avoids accidental
                overwrites, and makes code easier to read and test. Group fields into an object only when they naturally belong
                together and you always update them together (details in the next two topics).
            </p>

            <h3>A) Separate, independent concerns → separate state</h3>
            <Styled.Code>{`function Editor() {
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
}`}</Styled.Code>

            <h3>B) When to group into an object (contrast)</h3>
            <p>
                If fields are tightly coupled (e.g., a single <em>form object</em> you validate/submit as a unit), grouping is fine.
                But remember immutability rules when updating objects (covered next).
            </p>
            <Styled.Code>{`// Grouped shape (ok if you treat it as one unit)
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
}`}</Styled.Code>

            <h3>C) Don't force unrelated things into one object</h3>
            <p>
                Unrelated bits (like <code>loading</code>, <code>error</code>, <code>filter</code>) are cleaner as separate
                state variables. You'll write fewer spread operations and avoid accidental field drops.
            </p>
            <Styled.Code>{`// ✅ Clearer with separate state
const [loading, setLoading] = React.useState(false);
const [error,   setError]   = React.useState(null);
const [filter,  setFilter]  = React.useState("");

// ❌ Forcing them into one object often leads to clumsy updates and bugs
// const [state, setState] = React.useState({ loading:false, error:null, filter:"" });
// setState({ ...state, loading:true }); // easy to forget props or make stale reads`}</Styled.Code>

            <h3>D) Batching & performance note</h3>
            <p>
                React 18+ batches multiple state updates in the same tick (from events, timeouts, promises). It's fine to have
                several state variables—updating any triggers a single re-render per tick.
            </p>
            <Styled.Code>{`function Filters() {
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
}`}</Styled.Code>

            <h3>E) Derive, don't duplicate</h3>
            <p>
                Compute values from state/props in render (or <code>useMemo</code> if heavy) instead of storing duplicates.
            </p>
            <Styled.Code>{`const [items, setItems] = React.useState([]);
const [query, setQuery] = React.useState("");

// ❌ don't store filtered in state
// const [filtered, setFiltered] = React.useState([]);

// ✅ derive in render
const filtered = items.filter(x => x.title.toLowerCase().includes(query.toLowerCase()));`}</Styled.Code>

            <h3>F) Group logic with custom hooks (optional)</h3>
            <p>
                If a set of states always travel together, bundle them into a <em>custom hook</em> and return a small API.
            </p>
            <Styled.Code>{`function useToggle(initial = false) {
  const [on, setOn] = React.useState(initial);
  const toggle = React.useCallback(() => setOn(o => !o), []);
  return { on, toggle, setOn };
}

// Usage
const { on, toggle } = useToggle();`}</Styled.Code>

            <h3>Common mistakes</h3>
            <ul>
                <li>Overloading a single object state for unrelated concerns.</li>
                <li>Storing derived values (duplicates) instead of computing in render.</li>
                <li>Forgetting that Hook order must stay fixed when adding/removing state variables.</li>
                <li>Expecting multiple setters in one handler to cause multiple renders (they're batched).</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Create one state variable per independent concern.</li>
                <li>Group into an object only when fields form a single unit updated together.</li>
                <li>Compute derived data in render; don't duplicate in state.</li>
                <li>Multiple setters in one tick are batched (React 18+).</li>
                <li>Hook order must be consistent across renders.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
