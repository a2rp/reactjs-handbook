import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Function component anatomy
 */
export default function FunctionComponentAnatomy({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "function-component-anatomy";

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
                <span>Function component anatomy</span>
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
                A React function component is a plain JavaScript function that returns JSX.
                Name it in <strong>PascalCase</strong>, receive props as the first argument, call Hooks only at the top,
                and return exactly one root element (Fragment is fine).
            </p>

            <h3>A) Minimum viable component</h3>
            <Styled.Code>{`// File: src/components/Greeting.jsx
export default function Greeting() {
  return <p>Hello</p>;
}

// Usage:
// <Greeting />`}</Styled.Code>

            <h3>B) Props basics (destructure, defaults, rest)</h3>
            <Styled.Code>{`// Destructure props with defaults; collect the rest for DOM pass-through
export function Button({
  children,
  kind = "primary",          // default/fallback prop
  disabled = false,
  ...rest                     // className, onClick, etc.
}) {
  const cls = ["btn", kind === "primary" ? "btn--primary" : "btn--default"]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}`}</Styled.Code>

            <h3>C) State, refs, effects - Hooks live at the top</h3>
            <p>Always call Hooks in the same order on every render (no conditional calls).</p>
            <Styled.Code>{`export function Counter({ step = 1 }) {
  const [count, setCount] = React.useState(0);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };      // cleanup on unmount
  }, []);

  function inc() { setCount(c => c + step); }

  return <button onClick={inc}>Count: {count}</button>;
}`}</Styled.Code>

            <h3>D) Rendering - one root, fragments, early returns</h3>
            <Styled.Code>{`export function Profile({ user }) {
  if (!user) return null;                            // early return

  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
}`}</Styled.Code>

            <h3>E) Event handlers & synthetic events</h3>
            <p>Event props are camelCased and receive the React SyntheticEvent.</p>
            <Styled.Code>{`export function Form({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(new FormData(e.currentTarget));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <button>Save</button>
    </form>
  );
}`}</Styled.Code>

            <h3>F) Derived values - compute outside JSX (memo if heavy)</h3>
            <Styled.Code>{`export function Price({ amount, discount = 0 }) {
  const final = React.useMemo(
    () => Math.max(0, Math.round(amount * (1 - discount))),
    [amount, discount]
  );
  return <span>₹{final}</span>;
}`}</Styled.Code>

            <h3>G) What belongs outside the component</h3>
            <ul>
                <li>Static constants and helpers (do not recreate them on each render).</li>
                <li>Pure utilities that don't need props or state.</li>
            </ul>
            <Styled.Code>{`// ✅ outside: stable across renders
const CURRENCY = new Intl.NumberFormat("en-IN");

export function Total({ value }) {
  return <strong>{CURRENCY.format(value)}</strong>;
}`}</Styled.Code>

            <h3>H) Export patterns & naming</h3>
            <ul>
                <li>One component per file (usually). File named after the component.</li>
                <li>Default export for primary component; named exports for small helpers.</li>
                <li>Capitalize component names; never call components like functions.</li>
            </ul>
            <Styled.Code>{`// ✅ correct usage
<MyCard />

// ❌ don't do this
// MyCard() // calling as a plain function bypasses React`}</Styled.Code>

            <h3>I) Common mistakes</h3>
            <ul>
                <li>Calling Hooks conditionally or inside loops.</li>
                <li>Returning multiple top-level siblings without a Fragment.</li>
                <li>Passing random props down to DOM without filtering when they aren't valid DOM attributes.</li>
                <li>Creating heavy objects/functions inline every render without need (premature churn).</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Convert a lowercase function <code>usercard</code> to a proper PascalCase component with a default prop for <code>avatarSize</code>.
                </li>
                <li>
                    Build a <code>&lt;Tag&gt;</code> that accepts <code>children</code>, a <code>tone</code> prop (<code>info</code>/<code>warn</code>/<code>danger</code>) and forwards <code>...rest</code> to a <code>span</code>.
                </li>
                <li>
                    Refactor a component that computes an expensive <code>filtered</code> array on every render to use <code>useMemo</code>.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>PascalCase name; export from a same-named file.</li>
                <li>Destructure props with sensible defaults; forward <code>...rest</code> to the right element.</li>
                <li>Hooks at the top; early return for guards.</li>
                <li>Keep helpers/constants outside; compute heavy stuff with <code>useMemo</code> only when needed.</li>
                <li>Return a single root (Fragment ok); keep JSX readable.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
