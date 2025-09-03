import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Objects in state (immutability)
 */
export default function ObjectsInState({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "objects-in-state";

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
                <span>Objects in state (immutability)</span>
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
                In React, <strong>treat state as immutable</strong>. The state setter <em>replaces</em> the whole object; it
                doesn't merge like old class <code>setState</code>. Create a new object when changing fields, and copy
                the parts you keep.
            </p>

            <h3>A) Replace, don't mutate</h3>
            <Styled.Code>{`function Profile() {
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
}`}</Styled.Code>

            <h3>B) Nested fields: copy each level you change</h3>
            <Styled.Code>{`function AddressForm() {
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
}`}</Styled.Code>

            <h3>C) Partial updates with dynamic keys</h3>
            <Styled.Code>{`function Settings() {
  const [settings, setSettings] = React.useState({ theme: "light", lang: "en" });

  function setField(key, value) {
    setSettings(prev => ({ ...prev, [key]: value })); // dynamic prop name
  }

  // setField("theme", "dark")
  // setField("lang", "hi")
  return null;
}`}</Styled.Code>

            <h3>D) Replace vs merge (important)</h3>
            <p>
                Calling the setter with an object <em>replaces</em> state. To "merge", you must spread the previous state
                yourself.
            </p>
            <Styled.Code>{`const [prefs, setPrefs] = React.useState({ theme: "light", fontSize: 14 });

// ❌ Replaces the whole object; 'fontSize' disappears
setPrefs({ theme: "dark" });

// ✅ Merge manually
setPrefs(prev => ({ ...prev, theme: "dark" }));`}</Styled.Code>

            <h3>E) Complex updates: consider a helper (Immer) or useReducer</h3>
            <p>
                For deep/nested updates, libraries like <code>immer</code> let you write "mutating" code that produces
                an immutable copy, or switch to <code>useReducer</code> for clearer intent.
            </p>
            <Styled.Code>{`// npm i immer
import { produce } from "immer";

function FormWithImmer() {
  const [form, setForm] = React.useState({ user: { name: "", address: { city: "" } } });

  const setCity = (city) =>
    setForm(prev => produce(prev, draft => {
      draft.user.address.city = city;  // looks like mutation; produces a new object
    }));

  return null;
}`}</Styled.Code>

            <h3>F) Referential equality & memoization</h3>
            <ul>
                <li>React re-renders when the state reference changes. New objects create a new reference.</li>
                <li>Don't recreate <em>unrelated</em> objects unnecessarily; keep state <em>minimal</em> to reduce churn.</li>
                <li>Downstream components can use <code>React.memo</code> if their props keep the same references.</li>
            </ul>

            <h3>G) Common mistakes</h3>
            <ul>
                <li>Mutating then setting the <em>same</em> object reference (no re-render).</li>
                <li>Forgetting to copy each nested level you modify.</li>
                <li>Expecting automatic merge-function components don't merge object state.</li>
                <li>Putting many unrelated fields into one object and spreading them on every change.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>{`setX(prev => ({...prev, field}))`}</code> for object updates.</li>
                <li>Clone each level you change; don't mutate nested objects.</li>
                <li>Setter replaces the whole object-merge manually with spreads (or use Immer/reducer).</li>
                <li>Keep state minimal to stabilize references and ease memoization.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
