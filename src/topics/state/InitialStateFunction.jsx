import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Initial state function (lazy init)
 */
export default function InitialStateFunction({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "initial-state-function";

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
                <span>Initial state function (lazy init)</span>
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
                If computing the initial value is expensive or should happen only once, pass a <strong>function</strong> to{" "}
                <code>useState</code>. React calls it on the first render and caches the result.
            </p>

            <h3>A) The pattern</h3>
            <Styled.Code>{`// ❌ runs every render (bad for heavy work)
const [value, setValue] = React.useState(expensiveCompute());

// ✅ lazy init: function runs only for the initial render
const [value, setValue] = React.useState(() => expensiveCompute());`}</Styled.Code>

            <h3>B) Example: expensive calculation only once</h3>
            <Styled.Code>{`function heavyFibonacci(n) {
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
}`}</Styled.Code>

            <h3>C) Example: read once from localStorage (or environment)</h3>
            <Styled.Code>{`export function ThemeInit() {
  const [theme, setTheme] = React.useState(() => {
    // read once; avoid doing this on every render
    return localStorage.getItem("theme") ?? "light";
  });

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>{theme}</button>;
}`}</Styled.Code>

            <h3>D) Initializing from props (and when props change)</h3>
            <p>
                The initializer runs only for the first render. If you want to <em>recompute when a prop changes</em>, either:
            </p>
            <ul>
                <li><strong>Don't store it.</strong> Just compute from props in render (or with <code>useMemo</code> if heavy).</li>
                <li><strong>Or</strong> watch the prop and update state in an effect.</li>
            </ul>
            <Styled.Code>{`// 1) Prefer compute on render (no state)
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
}`}</Styled.Code>

            <h3>E) Storing a function as state (don't confuse with updater)</h3>
            <p>
                Passing a function to the setter is treated as an <em>updater</em>. If your state value itself is a function,
                wrap it so React stores the function instead of calling it as an updater.
            </p>
            <Styled.Code>{`const [fn, setFn] = React.useState(() => () => console.log("hi"));
// Later, set to a new function value:
setFn(() => () => console.log("updated")); // wrap in another fn`}</Styled.Code>

            <h3>F) Strict Mode note (dev only)</h3>
            <ul>
                <li>In React 18's development <em>Strict Mode</em>, React may invoke render/initializers twice to detect side effects.</li>
                <li>Therefore: keep initializers <strong>pure</strong> (no network calls, no mutations). They should just compute and return a value.</li>
            </ul>

            <h3>G) Common mistakes</h3>
            <ul>
                <li>Calling the expensive initializer directly (runs every render) instead of passing a function.</li>
                <li>Expecting the initializer to run again when props change—use compute-on-render or an effect.</li>
                <li>Doing side effects in the initializer (it should be pure and may run twice in dev).</li>
                <li>Setting a function as state without wrapping, unintentionally triggering the updater form.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>useState(() =&gt; init())</code> for heavy or one-time reads (localStorage, parse, precompute).</li>
                <li>Derive from props in render unless you truly need editable local state.</li>
                <li>Keep the initializer pure; no side effects.</li>
                <li>To store a function value, wrap it: <code>setX(() =&gt; fn)</code>.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
