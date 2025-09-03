import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Batching state updates (React 18+)
 */
export default function BatchingStateUpdates({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "batching-state-updates";

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
                <span>Batching state updates (React 18+)</span>
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
                In React 18+, <strong>multiple state updates in the same tick are batched</strong> into a single render -
                not only in React events, but also in timeouts, promises, and native event handlers. This improves performance
                and avoids unnecessary re-renders.
            </p>

            <h3>A) Multiple setters → one render</h3>
            <Styled.Code>{`function Duo() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function bumpBoth() {
    setA(x => x + 1);
    setB(y => y + 1);
    // React 18 batches these -> one render
  }

  return <button onClick={bumpBoth}>a:{a} b:{b}</button>;
}`}</Styled.Code>

            <h3>B) Async boundaries are batched too (React 18)</h3>
            <Styled.Code>{`function AsyncBatch() {
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
}`}</Styled.Code>

            <h3>C) Reading state after set (same tick)</h3>
            <p>
                After calling a setter, the variable in the current render doesn't change immediately. Compute the next value
                via the <em>functional</em> form or move logic to the next render/effect.
            </p>
            <Styled.Code>{`function Clicks() {
  const [n, setN] = React.useState(0);
  function addTwo() {
    setN(v => v + 1);
    setN(v => v + 1);
    // console.log(n) here still logs the previous value
  }
  return <button onClick={addTwo}>n = {n}</button>;
}`}</Styled.Code>

            <h3>D) Forcing sync flush (rare)</h3>
            <p>
                If you must read the DOM right after an update in the <em>same</em> tick (e.g., measure layout), you can break
                batching with <code>flushSync</code> from <code>react-dom</code>. Use sparingly - it forces an immediate render.
            </p>
            <Styled.Code>{`import { flushSync } from "react-dom";

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
}`}</Styled.Code>

            <h3>E) React 17 vs 18 (what changed)</h3>
            <ul>
                <li><strong>React 17 and earlier:</strong> only updates inside React event handlers were batched by default.</li>
                <li><strong>React 18:</strong> batching is automatic across timeouts, promises, native events, and more.</li>
            </ul>

            <h3>F) Practical tips</h3>
            <ul>
                <li>Prefer the functional setter form when stacking updates; it composes well with batching.</li>
                <li>Group related updates in the same tick - React will batch them for you.</li>
                <li>Avoid relying on immediate state reads after setters; use the next render or an effect.</li>
                <li>Reach for <code>flushSync</code> only when you must observe the DOM synchronously.</li>
            </ul>

            <h3>Common mistakes</h3>
            <ul>
                <li>Expecting multiple setters in one handler to trigger multiple renders.</li>
                <li>Using non-functional updates repeatedly and hitting stale values.</li>
                <li>Overusing <code>flushSync</code> and hurting performance.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>React 18 batches in events, timeouts, and promises.</li>
                <li>Use functional updates to stack changes safely.</li>
                <li>Don't read updated state in the same tick; render/effect will have the new value.</li>
                <li>Use <code>flushSync</code> only for critical, synchronous DOM reads.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
