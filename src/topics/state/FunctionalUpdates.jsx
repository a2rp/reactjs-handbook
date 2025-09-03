import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Functional updates (prev => ...)
 */
export default function FunctionalUpdates({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "functional-updates";

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
                <span>Functional updates (prev =&gt; ...)</span>
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
                When the next state <em>depends on the previous state</em>, pass a function to the setter:
                <code>setX(prev =&gt; next)</code>. React will call it with the latest value, even across
                batched/async updates.
            </p>

            <h3>A) Basic counter: stale value vs functional update</h3>
            <Styled.Code>{`function Counter() {
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
}`}</Styled.Code>

            <h3>B) Async callbacks capture old state — fix with functional form</h3>
            <Styled.Code>{`function AsyncDemo() {
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
}`}</Styled.Code>

            <h3>C) Objects in state: copy then change (using prev)</h3>
            <Styled.Code>{`function Form() {
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
}`}</Styled.Code>

            <h3>D) Arrays in state: append / remove / update by id</h3>
            <Styled.Code>{`function Todos() {
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
}`}</Styled.Code>

            <h3>E) Multiple updates to different states stay consistent</h3>
            <p>Each setter's functional form receives the latest value from its own queue.</p>
            <Styled.Code>{`function Pair() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function bumpBoth() {
    setA(x => x + 1);
    setB(y => y + 1);
  }
  return <button onClick={bumpBoth}>a:{a} b:{b}</button>;
}`}</Styled.Code>

            <h3>F) When you don't need it</h3>
            <ul>
                <li>If the next value doesn't depend on the previous (e.g., set to a constant), you can pass the value directly.</li>
                <li>For derived values from props, prefer computing in render over storing in state (covered later).</li>
            </ul>

            <h3>G) Common mistakes</h3>
            <ul>
                <li>Calling <code>setX(x + 1)</code> multiple times in one handler expecting it to stack.</li>
                <li>Using non-functional updates inside async callbacks (timers, promises, subscriptions).</li>
                <li>Mutating objects/arrays in the updater instead of returning a new copy.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>If next value depends on previous → use <code>setX(prev =&gt; next)</code>.</li>
                <li>Prefer functional updates inside async work and when batching multiple updates.</li>
                <li>Return new objects/arrays from the updater; never mutate <code>prev</code>.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
