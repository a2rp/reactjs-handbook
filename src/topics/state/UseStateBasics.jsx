import React from "react";
import { Styled } from "../styled";

/**
 * Topic – useState basics
 */
export default function UseStateBasics({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "use-state-basics";

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
                <span>useState basics</span>
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
                <code>useState</code> lets a function component remember a value between renders.
                You get a pair: <em>state</em> and a <em>setter</em>. Calling the setter schedules a re-render.
            </p>

            <h3>A) Declaring state</h3>
            <Styled.Code>{`// [state, setState] = useState(initialValue)
function Counter() {
  const [count, setCount] = React.useState(0);   // number
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`}</Styled.Code>

            <h3>B) Any serializable value works</h3>
            <Styled.Code>{`function Examples() {
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
}`}</Styled.Code>

            <h3>C) Reading state is a snapshot</h3>
            <p>Inside an event, state reads the <em>current</em> value for that render. After you call the setter, React re-renders with the new value.</p>
            <Styled.Code>{`function LogDemo() {
  const [n, setN] = React.useState(0);
  function click() {
    console.log("before", n);     // e.g., 0
    setN(n + 1);                  // schedule update
    console.log("after", n);      // still 0 in this tick
  }
  return <button onClick={click}>n = {n}</button>;
}`}</Styled.Code>

            <h3>D) Controlled inputs (most common pattern)</h3>
            <Styled.Code>{`function NameField() {
  const [name, setName] = React.useState("");
  return <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />;
}`}</Styled.Code>

            <h3>E) Setting same value does not re-render</h3>
            <Styled.Code>{`function Stable() {
  const [mode, setMode] = React.useState("light");
  // Setting the same value is a no-op (React uses Object.is)
  return <button onClick={() => setMode("light")}>{mode}</button>;
}`}</Styled.Code>

            <h3>F) Rules of Hooks (must follow)</h3>
            <ul>
                <li>Call <code>useState</code> at the <strong>top level</strong> of your component (not inside loops/ifs).</li>
                <li>Call Hooks in the <strong>same order</strong> on every render.</li>
                <li>Only call Hooks from React function components or custom Hooks.</li>
            </ul>

            <h3>G) Where to put event handlers & updates</h3>
            <Styled.Code>{`function Stepper({ step = 1 }) {
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
}`}</Styled.Code>

            <h3>H) Common mistakes</h3>
            <ul>
                <li>Expecting the state variable to change <em>immediately</em> after calling the setter in the same tick.</li>
                <li>Calling Hooks conditionally; wrap branches with early return <em>after</em> Hooks.</li>
                <li>Mutating objects/arrays in state (covered in later topics).</li>
                <li>Using a single state object for unrelated fields-prefer multiple state variables.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>const [x, setX] = useState(init)</code> for each independent concern.</li>
                <li>Call setters from events/effects; React will re-render with the new snapshot.</li>
                <li>If the next value depends on the previous one, prefer the functional form (next topic).</li>
                <li>For forms, bind <code>value</code> and <code>onChange</code> (controlled inputs).</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
