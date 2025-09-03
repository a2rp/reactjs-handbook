import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Composition over inheritance
 */
export default function CompositionOverInheritance({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "composition-over-inheritance";

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
                <span>Composition over inheritance</span>
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
                React favors <strong>composition</strong> (building UIs by combining components) instead of
                class-based inheritance. You'll reuse UI via <em>containment</em>, <em>specialization</em>,
                and <em>shared logic with hooks</em>-not by extending components.
            </p>

            <h3>A) Containment with children (default slot)</h3>
            <Styled.Code>{`// A generic layout that "contains" arbitrary children
export function SidebarLayout({ sidebar, children }) {
  return (
    <div className="layout">
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}

// Usage
<SidebarLayout sidebar={<Nav />}>
  <Article />
</SidebarLayout>`}</Styled.Code>

            <h3>B) Specialization (component does one job)</h3>
            <p>Build a generic base; make specialized versions <em>by composing</em>, not subclassing.</p>
            <Styled.Code>{`// Base
function Button({ kind = "default", ...rest }) {
  const cls = "btn " + (kind === "primary" ? "btn--primary" : "btn--default");
  return <button className={cls} {...rest} />;
}

// Specializations via composition
export const PrimaryButton = props => <Button kind="primary" {...props} />;
export const DefaultButton = props => <Button kind="default" {...props} />;`}</Styled.Code>

            <h3>C) Compound components (coordinated pieces)</h3>
            <p>
                Parent exposes subcomponents; they share state via context so consumers get a clean, HTML-like API.
            </p>
            <Styled.Code>{`const ToggleCtx = React.createContext(null);

export function Toggle({ defaultOn = false, children }) {
  const [on, setOn] = React.useState(defaultOn);
  const value = React.useMemo(() => ({ on, setOn }), [on]);
  return <ToggleCtx.Provider value={value}>{children}</ToggleCtx.Provider>;
}

Toggle.Button = function Button(props) {
  const ctx = React.useContext(ToggleCtx);
  return <button onClick={() => ctx.setOn(o => !o)} {...props} />;
};
Toggle.Panel = function Panel({ children }) {
  const ctx = React.useContext(ToggleCtx);
  return ctx.on ? <div>{children}</div> : null;
};

// Usage
<Toggle>
  <Toggle.Button>Toggle</Toggle.Button>
  <Toggle.Panel>Now you see me</Toggle.Panel>
</Toggle>`}</Styled.Code>

            <h3>D) Share behavior with custom hooks (not inheritance)</h3>
            <Styled.Code>{`// Logic is reusable via a hook
function useCounter(initial = 0, step = 1) {
  const [n, setN] = React.useState(initial);
  const inc = React.useCallback(() => setN(x => x + step), [step]);
  const dec = React.useCallback(() => setN(x => x - step), [step]);
  return { n, inc, dec };
}

// UI #1
export function CounterButton() {
  const { n, inc } = useCounter(0, 1);
  return <button onClick={inc}>Count: {n}</button>;
}

// UI #2
export function CounterDisplay() {
  const { n, inc, dec } = useCounter(10, 5);
  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{n}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}`}</Styled.Code>

            <h3>E) Component injection / render-as (flexible composition)</h3>
            <p>Accept a component to render "as" something, or inject parts via props.</p>
            <Styled.Code>{`export function ButtonLink({ as: Comp = "button", ...rest }) {
  return <Comp {...rest} />;
}

// Usage
<ButtonLink onClick={save}>Save</ButtonLink>
<ButtonLink as="a" href="/docs">Docs</ButtonLink>
<ButtonLink as={NavLink} to="/home">Home</ButtonLink>`}</Styled.Code>

            <h3>F) HOCs vs hooks vs composition</h3>
            <ul>
                <li><strong>Hooks</strong> are the modern way to share logic.</li>
                <li><strong>HOCs</strong> still exist but add wrapper components-use sparingly.</li>
                <li><strong>Composition</strong> arranges UI; hooks supply behavior.</li>
            </ul>
            <Styled.Code>{`// HOC (older pattern)
const withLoading = (Comp) => (props) =>
  props.loading ? <Spinner/> : <Comp {...props} />;

// Hook + composition (preferred)
function useLoadingData(fetcher) {
  const [state, setState] = React.useState({ loading: true, data: null });
  React.useEffect(() => { fetcher().then(d => setState({ loading: false, data: d })); }, [fetcher]);
  return state;
}
function View({ fetcher }) {
  const { loading, data } = useLoadingData(fetcher);
  if (loading) return <Spinner/>;
  return <List items={data}/>;
}`}</Styled.Code>

            <h3>G) Why not inheritance here?</h3>
            <ul>
                <li>React components are just functions-no need to subclass to reuse UI.</li>
                <li>Inheritance entangles concerns and makes component trees rigid.</li>
                <li>Composition keeps pieces small, testable, and swappable.</li>
            </ul>

            <h3>Common mistakes</h3>
            <ul>
                <li>Boolean-prop explosion (e.g., <code>Card showHeader showFooter ...</code>) instead of passing composed parts.</li>
                <li>Trying to "extend" a component to override small bits-prefer slots/children or an <code>as</code> prop.</li>
                <li>Stuffing business logic inside a UI component you wanted to reuse-extract a hook.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Prefer composition (children, slots, compound components) over inheritance.</li>
                <li>Share behavior with custom hooks; keep UI components thin.</li>
                <li>Allow customization via props like <code>header</code>/<code>footer</code> or an <code>as</code> prop.</li>
                <li>Document what goes in <code>{'{children}'}</code> and keep DOM structure predictable.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
