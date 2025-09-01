import React from "react";
import { Styled } from "./styled";

/**
 * Topic 1 - How React thinks: rendering, reconciliation, mental model
 */
export default function HowReactThinks({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "how-react-thinks";

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
                <span>How React thinks: rendering, reconciliation, mental model</span>
            </Styled.Title>

            <Styled.Panel
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-button`}
                data-open={open}
            >
                <div>
                    <Content />
                </div>
            </Styled.Panel>
        </Styled.Topic>
    );
}

/* -------------------- Tutorial Content -------------------- */
function Content() {
    return (
        <Styled.Content>
            <h3>TL;DR — The Mental Model</h3>
            <ul>
                <li>
                    <strong>UI = f(state)</strong>: Your component returns JSX from the
                    current props/state—no side effects in render.
                </li>
                <li>
                    Two phases: <strong>render</strong> (compute the next tree) →{" "}
                    <strong>commit</strong> (apply DOM updates).
                </li>
                <li>
                    <strong>Reconciliation</strong>: diff previous tree vs next; identity
                    comes from element <Styled.Kbd>type</Styled.Kbd> +{" "}
                    <Styled.Kbd>key</Styled.Kbd>.
                </li>
                <li>
                    Renders can happen often (and be discarded). Keep render{" "}
                    <em>pure</em>; move side effects to <Styled.Kbd>useEffect</Styled.Kbd>.
                </li>
            </ul>

            <h3>Rendering — When does a component re-render?</h3>
            <ul>
                <li>State changes (`setState`), new props, changed context, parent render.</li>
                <li>Each render is just a function call—don’t mutate state directly.</li>
                <li>
                    <strong>Batching</strong>: multiple state updates in the same tick are
                    batched into one commit (React 18+).
                </li>
            </ul>

            <Styled.Code aria-label="Batching demo">
                {String.raw`function BatchingDemo() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  console.count("render");

  function handleClick() {
    // In React 18+, these updates are batched → typically one render/commit.
    setA((x) => x + 1);
    setB((y) => y + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Increment both</button>
      <p>a={a}, b={b}</p>
    </div>
  );
}`}
            </Styled.Code>

            <h3>Reconciliation — Identity & Keys</h3>
            <p>
                React keeps state when the element’s <Styled.Kbd>type</Styled.Kbd> and{" "}
                <Styled.Kbd>key</Styled.Kbd> are the same between renders; otherwise it
                recreates the node and resets its state. Don’t use array index as{" "}
                <Styled.Kbd>key</Styled.Kbd> if items can move.
            </p>

            <Styled.Code aria-label="Keys & state preservation">
                {String.raw`function ListExample() {
  const [items, setItems] = React.useState([
    { id: 1, label: "🍎 Apple" },
    { id: 2, label: "🍌 Banana" },
    { id: 3, label: "🍇 Grape" },
  ]);

  function moveLastToFront() {
    setItems((xs) => [xs.at(-1), ...xs.slice(0, -1)]);
  }

  return (
    <div>
      <button onClick={moveLastToFront}>Move last to front</button>

      {/* Good: stable keys → input state follows the item */}
      {items.map((it) => (
        <div key={it.id} style={{ display: "flex", gap: 8, margin: 6 }}>
          <span>{it.label}</span>
          <input placeholder="Type something; it should stick with the item" />
        </div>
      ))}

      {/* Bad: using index as key can shuffle input states on re-order */}
      {/* {items.map((it, index) => <div key={index}>...</div>)} */}
    </div>
  );
}`}
            </Styled.Code>

            <h3>Pure Render vs Side Effects</h3>
            <ul>
                <li>
                    Render: no timers, no subscriptions, no manual DOM. Just compute JSX.
                </li>
                <li>
                    Side effects after commit with <Styled.Kbd>useEffect</Styled.Kbd>;
                    always return a cleanup for subscriptions/listeners.
                </li>
            </ul>

            <Styled.Code aria-label="Effect + cleanup">
                {String.raw`function MouseFollower() {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    function onMove(e) { setPos({ x: e.clientX, y: e.clientY }); }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <p>({pos.x}, {pos.y})</p>;
}`}
            </Styled.Code>

            <h3>Performance: Memoize Expensive Work</h3>
            <p>
                If something heavy runs in render, memoize it with{" "}
                <Styled.Kbd>useMemo</Styled.Kbd> so it re-computes only when inputs
                change.
            </p>

            <Styled.Code aria-label="useMemo example">
                {String.raw`function ExpensiveTotal({ n }) {
  const total = React.useMemo(() => {
    let sum = 0;
    for (let i = 0; i < n * 5000; i++) sum += i % 10;
    return sum;
  }, [n]);

  return <p>Total: {total}</p>;
}`}
            </Styled.Code>

            <h3>Strict Mode & Concurrent Rendering (why extra renders?)</h3>
            <ul>
                <li>
                    In development, <strong>StrictMode</strong> may intentionally double-invoke
                    render to catch unsafe patterns.
                </li>
                <li>
                    Concurrent features let React start, pause, discard, and retry renders.
                    Write render logic that’s pure and idempotent.
                </li>
            </ul>

            <h3>Pin These</h3>
            <ul>
                <li>Keep render pure; effects go in <Styled.Kbd>useEffect</Styled.Kbd>.</li>
                <li>Never mutate state; create new arrays/objects.</li>
                <li>Use stable <Styled.Kbd>key</Styled.Kbd> for lists.</li>
                <li>Memoize heavy computations when profiling shows cost.</li>
                <li>Expect multiple renders—don’t rely on “runs once” in render.</li>
            </ul>

            <Styled.Divider />
            <p>
                Next topic suggestion: <strong>JSX syntax rules & patterns</strong>. I can
                deliver it as another self-contained toggle component.
            </p>
        </Styled.Content>
    );
}
