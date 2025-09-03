import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Passing props
 */
export default function PassingProps({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "passing-props";

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
                <span>Passing props</span>
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
                <strong>Props</strong> are inputs to components. They're read-only values you pass with JSX
                attributes. Strings use quotes; everything else goes in braces.
            </p>

            <h3>A) Basics - strings vs expressions</h3>
            <Styled.Code>{`// Usage
<Card title="Welcome" count={3} items={["a","b"]} onSelect={() => {}} />

// Definition
function Card({ title, count, items, onSelect }) {
  return (
    <>
      <h3>{title}</h3>
      <p>Count: {count}</p>
      <ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>
      <button onClick={onSelect}>Select</button>
    </>
  );
}`}</Styled.Code>

            <h3>B) Destructuring, renaming, rest</h3>
            <Styled.Code>{`// Destructure in the parameter; rename with :
function Button({ children, className, onClick: handleClick, ...rest }) {
  return (
    <button className={className} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}`}</Styled.Code>

            <h3>C) Boolean and conditional props</h3>
            <Styled.Code>{`// Presence implies true
<Button primary />

// Dynamic boolean and derived classes
<Button disabled={isSaving} className={isSaving ? "muted" : ""}>Save</Button>`}</Styled.Code>

            <h3>D) Pass-through props (DOM) and order of spreads</h3>
            <p>Forward unknown props to the underlying DOM node, but keep ordering in mind-later props win.</p>
            <Styled.Code>{`function Input({ className = "", ...rest }) {
  return <input className={"input " + className} {...rest} />;
}

// Later props override earlier ones
// type from spread can be overridden explicitly
<Input {...props} type="email" />`}</Styled.Code>

            <h3>E) Function props (callbacks)</h3>
            <Styled.Code>{`function Counter({ step, onChange }) {
  const [n, setN] = React.useState(0);
  function inc() {
    setN(v => {
      const next = v + step;
      onChange?.(next);   // optional chaining
      return next;
    });
  }
  return <button onClick={inc}>Count: {n}</button>;
}`}</Styled.Code>

            <h3>F) Don't mutate props</h3>
            <Styled.Code>{`// ❌ Never mutate incoming props
function Tag({ data }) {
  // data.label = data.label.toUpperCase() // don't do this
  const label = String(data.label).toUpperCase(); // ✅ derive
  return <span>{label}</span>;
}`}</Styled.Code>

            <h3>G) Valid DOM attributes, data-* and aria-*</h3>
            <ul>
                <li>Only pass <strong>valid DOM props</strong> to real elements.</li>
                <li>Custom info → use <code>data-*</code> or <code>aria-*</code> attributes.</li>
            </ul>
            <Styled.Code>{`// ✅ custom metadata
<li data-id={user.id} aria-current={active ? "page" : undefined}>{user.name}</li>

// ❌ random props on DOM will warn (e.g., <div foo="x" />)`}</Styled.Code>

            <h3>H) Prop names are case-sensitive; children is special</h3>
            <ul>
                <li>Use <code>camelCase</code> for event and DOM prop names (<code>onClick</code>, <code>tabIndex</code>).</li>
                <li><code>children</code> holds nested JSX. You can mix it with other props.</li>
            </ul>
            <Styled.Code>{`<Panel title="Docs">
  <p>Inside children</p>
</Panel>`}</Styled.Code>

            <h3>I) Spreading object props carefully</h3>
            <ul>
                <li>Great for "pass everything through", but avoid leaking invalid props to DOM.</li>
                <li>Prefer explicit props on public components; use spread mostly for internal adapters.</li>
            </ul>
            <Styled.Code>{`// Adapter pattern
function AnchorButton(props) {
  const { href, onClick, ...rest } = props;
  return href
    ? <a href={href} onClick={onClick} {...rest} />
    : <button onClick={onClick} {...rest} />;
}`}</Styled.Code>

            <h3>J) Quick patterns</h3>
            <Styled.Code>{`// 1) Compute className from props
function Badge({ tone = "info" }) {
  const cls = "badge " + (tone === "danger" ? "badge--danger" : "badge--info");
  return <span className={cls} />;
}

// 2) Forward ref + props (advanced, for inputs etc.)
const TextField = React.forwardRef(function TextField({ ...rest }, ref) {
  return <input ref={ref} {...rest} />;
});`}</Styled.Code>

            <h3>Common mistakes</h3>
            <ul>
                <li>Forgetting braces for non-strings (<code>{`count={3}`}</code>, not <code>count="3"</code>).</li>
                <li>Mutating props instead of deriving new values.</li>
                <li>Spreading unknown props onto DOM elements (invalid attribute warnings).</li>
                <li>Relying on spread order accidentally-be explicit for critical props.</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Build a <code>&lt;Button&gt;</code> that accepts <code>kind</code> (<code>primary</code>/<code>default</code>), forwards <code>...rest</code>, and uses <code>children</code> as label.
                </li>
                <li>
                    Create <code>&lt;Counter step={5} onChange={fn}/&gt;</code> that calls <code>onChange</code> with the next value after each increment.
                </li>
                <li>
                    Fix a component that passes an invalid prop (<code>foo</code>) to a <code>&lt;div&gt;</code>; convert it to <code>data-foo</code>.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Props are read-only; pass values via attributes, compute derived values inside.</li>
                <li>Destructure props; use rest (<code>...rest</code>) for pass-through when appropriate.</li>
                <li>Callbacks are just function props-use <code>onX</code> naming and optional chaining.</li>
                <li>Only pass valid DOM props; use <code>data-*</code>/<code>aria-*</code> for custom info.</li>
                <li>Watch spread order; later props override earlier ones.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
