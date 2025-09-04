import{R as l,j as e,d as a}from"./index-7zjufw3g.js";import{S as n}from"./styled-Dxzvc5UJ.js";function c({defaultOpen:r=!1}){const[t,o]=l.useState(!!r),s="function-component-anatomy";return e.jsxs(n.Topic,{id:s,children:[e.jsxs(n.Title,{onClick:()=>o(i=>!i),"aria-expanded":t,"aria-controls":`${s}-panel`,id:`${s}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Function component anatomy"})]}),e.jsx(n.Panel,{id:`${s}-panel`,role:"region","aria-labelledby":`${s}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(d,{})})})]})}function d(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["A React function component is a plain JavaScript function that returns JSX. Name it in ",e.jsx("strong",{children:"PascalCase"}),", receive props as the first argument, call Hooks only at the top, and return exactly one root element (Fragment is fine)."]}),e.jsx("h3",{children:"A) Minimum viable component"}),e.jsx(n.Code,{children:`// File: src/components/Greeting.jsx
export default function Greeting() {
  return <p>Hello</p>;
}

// Usage:
// <Greeting />`}),e.jsx("h3",{children:"B) Props basics (destructure, defaults, rest)"}),e.jsx(n.Code,{children:`// Destructure props with defaults; collect the rest for DOM pass-through
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
}`}),e.jsx("h3",{children:"C) State, refs, effects - Hooks live at the top"}),e.jsx("p",{children:"Always call Hooks in the same order on every render (no conditional calls)."}),e.jsx(n.Code,{children:`export function Counter({ step = 1 }) {
  const [count, setCount] = React.useState(0);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };      // cleanup on unmount
  }, []);

  function inc() { setCount(c => c + step); }

  return <button onClick={inc}>Count: {count}</button>;
}`}),e.jsx("h3",{children:"D) Rendering - one root, fragments, early returns"}),e.jsx(n.Code,{children:`export function Profile({ user }) {
  if (!user) return null;                            // early return

  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
}`}),e.jsx("h3",{children:"E) Event handlers & synthetic events"}),e.jsx("p",{children:"Event props are camelCased and receive the React SyntheticEvent."}),e.jsx(n.Code,{children:`export function Form({ onSubmit }) {
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
}`}),e.jsx("h3",{children:"F) Derived values - compute outside JSX (memo if heavy)"}),e.jsx(n.Code,{children:`export function Price({ amount, discount = 0 }) {
  const final = React.useMemo(
    () => Math.max(0, Math.round(amount * (1 - discount))),
    [amount, discount]
  );
  return <span>₹{final}</span>;
}`}),e.jsx("h3",{children:"G) What belongs outside the component"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Static constants and helpers (do not recreate them on each render)."}),e.jsx("li",{children:"Pure utilities that don't need props or state."})]}),e.jsx(n.Code,{children:`// ✅ outside: stable across renders
const CURRENCY = new Intl.NumberFormat("en-IN");

export function Total({ value }) {
  return <strong>{CURRENCY.format(value)}</strong>;
}`}),e.jsx("h3",{children:"H) Export patterns & naming"}),e.jsxs("ul",{children:[e.jsx("li",{children:"One component per file (usually). File named after the component."}),e.jsx("li",{children:"Default export for primary component; named exports for small helpers."}),e.jsx("li",{children:"Capitalize component names; never call components like functions."})]}),e.jsx(n.Code,{children:`// ✅ correct usage
<MyCard />

// ❌ don't do this
// MyCard() // calling as a plain function bypasses React`}),e.jsx("h3",{children:"I) Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Calling Hooks conditionally or inside loops."}),e.jsx("li",{children:"Returning multiple top-level siblings without a Fragment."}),e.jsx("li",{children:"Passing random props down to DOM without filtering when they aren't valid DOM attributes."}),e.jsx("li",{children:"Creating heavy objects/functions inline every render without need (premature churn)."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert a lowercase function ",e.jsx("code",{children:"usercard"})," to a proper PascalCase component with a default prop for ",e.jsx("code",{children:"avatarSize"}),"."]}),e.jsxs("li",{children:["Build a ",e.jsx("code",{children:"<Tag>"})," that accepts ",e.jsx("code",{children:"children"}),", a ",e.jsx("code",{children:"tone"})," prop (",e.jsx("code",{children:"info"}),"/",e.jsx("code",{children:"warn"}),"/",e.jsx("code",{children:"danger"}),") and forwards ",e.jsx("code",{children:"...rest"})," to a ",e.jsx("code",{children:"span"}),"."]}),e.jsxs("li",{children:["Refactor a component that computes an expensive ",e.jsx("code",{children:"filtered"})," array on every render to use ",e.jsx("code",{children:"useMemo"}),"."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"PascalCase name; export from a same-named file."}),e.jsxs("li",{children:["Destructure props with sensible defaults; forward ",e.jsx("code",{children:"...rest"})," to the right element."]}),e.jsx("li",{children:"Hooks at the top; early return for guards."}),e.jsxs("li",{children:["Keep helpers/constants outside; compute heavy stuff with ",e.jsx("code",{children:"useMemo"})," only when needed."]}),e.jsx("li",{children:"Return a single root (Fragment ok); keep JSX readable."})]}),e.jsx(n.Divider,{})]})}function h({defaultOpen:r=!1}){const[t,o]=l.useState(!!r),s="default-fallback-props";return e.jsxs(n.Topic,{id:s,children:[e.jsxs(n.Title,{onClick:()=>o(i=>!i),"aria-expanded":t,"aria-controls":`${s}-panel`,id:`${s}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Default/fallback props"})]}),e.jsx(n.Panel,{id:`${s}-panel`,role:"region","aria-labelledby":`${s}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(u,{})})})]})}function u(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["Give sensible defaults so components are easy to drop in. Prefer ",e.jsx("strong",{children:"parameter defaults"})," and ",e.jsx("strong",{children:"destructuring defaults"}),". Use ",e.jsx("code",{children:"??"})," when you want a runtime fallback that treats ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),' as "missing". Avoid legacy ',e.jsx("code",{children:"defaultProps"})," on function components."]}),e.jsx("h3",{children:"A) Parameter & destructuring defaults (recommended)"}),e.jsx(n.Code,{children:`// 1) Parameter default
export function Avatar({ size = 40, src, alt = "Avatar" }) {
  const style = { width: size, height: size, borderRadius: "50%" };
  return <img src={src} alt={alt} style={style} />;
}

// 2) Destructure inside the body (same effect)
export function Button(props) {
  const { children, kind = "primary", disabled = false, ...rest } = props;
  return (
    <button
      className={"btn " + (kind === "primary" ? "btn--primary" : "btn--default")}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"undefined"})," vs ",e.jsx("code",{children:"null"})," (why ",e.jsx("code",{children:"??"})," matters)"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Parameter/destructure defaults run only when the prop is ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:["If a parent passes ",e.jsx("code",{children:"null"}),", the default ",e.jsx("em",{children:"won't"})," apply-use ",e.jsx("code",{children:"??"})," to coalesce."]})]}),e.jsx(n.Code,{children:`export function Price({ amount, currency }) {
  // If parent passes currency={null}, we still want "INR"
  const cur = currency ?? "INR";      // treats null/undefined as missing
  return <span>{cur} {amount}</span>;
}`}),e.jsxs("h3",{children:["C) Avoid ",e.jsx("code",{children:"||"})," for numeric or empty-string props"]}),e.jsxs("p",{children:["Logical OR treats many values as falsy (e.g., ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),"), which may wipe valid inputs."]}),e.jsx(n.Code,{children:`// ❌ 0 will fall back to 1 by accident
function Counter({ step }) {
  const s = step || 1;

  // ✅ keep valid 0 by using ??
  // const s = step ?? 1;
  return <span>step={s}</span>;
}`}),e.jsx("h3",{children:"D) Function defaults & optional chaining"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Prefer calling with ",e.jsx("code",{children:"?.()"})," rather than defaulting to a no-op."]}),e.jsx("li",{children:"Use defaults when you need a consistent signature."})]}),e.jsx(n.Code,{children:`export function Modal({ onClose }) {
  return <button onClick={() => onClose?.()}>Close</button>;
}

// Or default a callback:
export function Form({ onSubmit = () => {} }) {
  return <form onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); }}>
    <button>Save</button>
  </form>;
}`}),e.jsx("h3",{children:"E) Object/array defaults"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Default parameter expressions run on every call → a fresh object/array each time."}),e.jsx("li",{children:"Great for style/option bags; don't mutate them inside the component."})]}),e.jsx(n.Code,{children:`export function Panel({ title = "Untitled", options = {} }) {
  const { padded = true } = options;
  return (
    <section className={padded ? "padded" : ""}>
      <h3>{title}</h3>
    </section>
  );
}`}),e.jsx("h3",{children:"F) Normalize prop variants with defaults"}),e.jsx("p",{children:"Map multiple inputs to a single internal shape, then render from that."}),e.jsx(n.Code,{children:`export function Tag({ tone = "info" }) {
  const cls = {
    info: "tag tag--info",
    warn: "tag tag--warn",
    danger: "tag tag--danger",
  }[tone] ?? "tag tag--info";
  return <span className={cls} />;
}`}),e.jsxs("h3",{children:["G) Legacy: ",e.jsx("code",{children:"defaultProps"})," on function components"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Historically used on classes; works on functions but is ",e.jsx("strong",{children:"discouraged"}),"."]}),e.jsx("li",{children:"Prefer parameter/destructure defaults for clarity and TypeScript/IDE tooling."})]}),e.jsx(n.Code,{children:`// ⚠️ Not recommended for function components
function Legacy({ color }) {
  return <div style={{ color }}>Hi</div>;
}
Legacy.defaultProps = { color: "tomato" };`}),e.jsx("h3",{children:"H) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"||"})," and accidentally overriding valid ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'}),"."]}),e.jsxs("li",{children:["Assuming defaults apply when the parent passes ",e.jsx("code",{children:"null"})," (they don't-use ",e.jsx("code",{children:"??"}),")."]}),e.jsx("li",{children:"Mutating defaulted objects/arrays inside the component."}),e.jsx("li",{children:"Leaking unknown props to DOM instead of filtering/forwarding intentionally."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Make a ",e.jsx("code",{children:"<Badge>"})," with default ",e.jsx("code",{children:'tone="info"'})," and ensure ",e.jsxs("code",{children:["tone=",null]})," still becomes ",e.jsx("code",{children:'"info"'}),"."]}),e.jsxs("li",{children:["Fix a component that does ",e.jsx("code",{children:"const s = step || 1;"})," so that ",e.jsx("code",{children:"step=0"})," is respected."]}),e.jsxs("li",{children:["Build ",e.jsx("code",{children:"<Avatar size={number} alt={string} />"})," where missing/undefined values get sensible defaults without clobbering empty strings."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use parameter/destructure defaults for most cases."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"??"})," for runtime fallbacks that should treat ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," as missing."]}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"||"})," for numeric/string props that can be falsy."]}),e.jsx("li",{children:"Do not mutate defaulted objects/arrays."}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"defaultProps"})," on function components."]})]}),e.jsx(n.Divider,{})]})}function p({defaultOpen:r=!1}){const[t,o]=l.useState(!!r),s="children-prop";return e.jsxs(n.Topic,{id:s,children:[e.jsxs(n.Title,{onClick:()=>o(i=>!i),"aria-expanded":t,"aria-controls":`${s}-panel`,id:`${s}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"children prop (slots-like)"})]}),e.jsx(n.Panel,{id:`${s}-panel`,role:"region","aria-labelledby":`${s}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(x,{})})})]})}function x(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["The special prop ",e.jsx("code",{children:"{children}"})," is the content placed between a component's opening and closing tags. Think of it as the ",e.jsx("em",{children:"default slot"}),'. You can also create "named slots" by accepting extra props like ',e.jsx("code",{children:"header"})," / ",e.jsx("code",{children:"footer"}),", or use compound components for more flexible composition."]}),e.jsx("h3",{children:"A) Default slot: basic usage"}),e.jsx(n.Code,{children:`// Definition
export function Card({ title, children }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div className="card__body">{children}</div>
    </section>
  );
}

// Usage
<Card title="Hello">
  <p>This is inside the card body.</p>
</Card>`}),e.jsx("h3",{children:"B) Fallback when no children"}),e.jsxs("p",{children:["Use a runtime check; prefer counting children so a valid ",e.jsx("code",{children:"0"})," or empty string is respected."]}),e.jsx(n.Code,{children:`export function Panel({ children }) {
  const hasKids = React.Children.count(children) > 0;
  return <div className="panel">{hasKids ? children : <em>Nothing here yet</em>}</div>;
}`}),e.jsx("h3",{children:"C) Named slots via props"}),e.jsxs("p",{children:["Accept ",e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"}),"/",e.jsx("code",{children:"actions"})," props alongside ",e.jsx("code",{children:"{children}"}),"."]}),e.jsx(n.Code,{children:`export function Modal({ header, children, footer }) {
  return (
    <div className="modal">
      <header className="modal__header">{header}</header>
      <section className="modal__body">{children}</section>
      <footer className="modal__footer">{footer}</footer>
    </div>
  );
}

// Usage
<Modal
  header={<h4>Confirm</h4>}
  footer={<button>Close</button>}
>
  <p>Are you sure?</p>
</Modal>`}),e.jsx("h3",{children:"D) Compound components (slots-like, but declarative)"}),e.jsx("p",{children:"Define subcomponents on the parent. Consumers compose them like HTML. Optionally share state via context."}),e.jsx(n.Code,{children:`function Card({ children }) {
  return <section className="card">{children}</section>;
}
Card.Header = function Header({ children }) {
  return <h3 className="card__header">{children}</h3>;
};
Card.Body = function Body({ children }) {
  return <div className="card__body">{children}</div>;
};
Card.Footer = function Footer({ children }) {
  return <div className="card__footer">{children}</div>;
};

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer><button>OK</button></Card.Footer>
</Card>`}),e.jsxs("h3",{children:["E) Children can be a ",e.jsx("em",{children:"function"})," (render prop)"]}),e.jsxs("p",{children:["When you want the parent to control rendering for each item, accept a function as ",e.jsx("code",{children:"children"}),"."]}),e.jsx(n.Code,{children:`export function List({ items, children }) {
  // children: (item, index) => ReactNode
  return <ul>{items.map((it, i) => children(it, i))}</ul>;
}

// Usage
<List items={[{ id: 1, name: "A" }]}>
  {(it) => <li key={it.id}>{it.name}</li>}
</List>`}),e.jsx("h3",{children:"F) Inspecting/mapping children (advanced)"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"React.Children"})," helpers to count/map, and ",e.jsx("code",{children:"cloneElement"})," to inject props."]}),e.jsx(n.Code,{children:`export function Nav({ children, activeId }) {
  return (
    <ul className="nav">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const isActive = child.props.itemId === activeId;
        return React.cloneElement(child, { className: isActive ? "active" : undefined });
      })}
    </ul>
  );
}

// Usage
<Nav activeId="home">
  <a itemId="home" href="/home">Home</a>
  <a itemId="about" href="/about">About</a>
</Nav>`}),e.jsx("h3",{children:"G) Accessibility & expectations"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Document what can go in ",e.jsx("code",{children:"{children}"})," (text only? any nodes? a function?)."]}),e.jsx("li",{children:"Keep DOM structure predictable so screen readers and CSS remain stable."}),e.jsxs("li",{children:["Prefer composition over boolean props (e.g., pass a custom ",e.jsx("code",{children:"footer"})," instead of ",e.jsx("code",{children:"showClose"})," flags)."]})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Assuming ",e.jsx("code",{children:"children"})," is always an array—handle single nodes with ",e.jsx("code",{children:"React.Children"})," APIs."]}),e.jsx("li",{children:"Forgetting keys when mapping children produced by a render prop."}),e.jsxs("li",{children:["Overusing ",e.jsx("code",{children:"cloneElement"}),"—prefer simple composition unless you must inject props."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"{children}"})," is the default slot; check for presence before showing a fallback."]}),e.jsxs("li",{children:["Use named slot props (e.g., ",e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"}),") or compound components for flexible layouts."]}),e.jsxs("li",{children:["Render-prop pattern: accept a function as ",e.jsx("code",{children:"children"})," when parent decides item rendering."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"React.Children"})," utilities and ",e.jsx("code",{children:"cloneElement"})," carefully."]})]}),e.jsx(n.Divider,{})]})}function j({defaultOpen:r=!1}){const[t,o]=l.useState(!!r),s="composition-over-inheritance";return e.jsxs(n.Topic,{id:s,children:[e.jsxs(n.Title,{onClick:()=>o(i=>!i),"aria-expanded":t,"aria-controls":`${s}-panel`,id:`${s}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Composition over inheritance"})]}),e.jsx(n.Panel,{id:`${s}-panel`,role:"region","aria-labelledby":`${s}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(m,{})})})]})}function m(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["React favors ",e.jsx("strong",{children:"composition"})," (building UIs by combining components) instead of class-based inheritance. You'll reuse UI via ",e.jsx("em",{children:"containment"}),", ",e.jsx("em",{children:"specialization"}),", and ",e.jsx("em",{children:"shared logic with hooks"}),"-not by extending components."]}),e.jsx("h3",{children:"A) Containment with children (default slot)"}),e.jsx(n.Code,{children:`// A generic layout that "contains" arbitrary children
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
</SidebarLayout>`}),e.jsx("h3",{children:"B) Specialization (component does one job)"}),e.jsxs("p",{children:["Build a generic base; make specialized versions ",e.jsx("em",{children:"by composing"}),", not subclassing."]}),e.jsx(n.Code,{children:`// Base
function Button({ kind = "default", ...rest }) {
  const cls = "btn " + (kind === "primary" ? "btn--primary" : "btn--default");
  return <button className={cls} {...rest} />;
}

// Specializations via composition
export const PrimaryButton = props => <Button kind="primary" {...props} />;
export const DefaultButton = props => <Button kind="default" {...props} />;`}),e.jsx("h3",{children:"C) Compound components (coordinated pieces)"}),e.jsx("p",{children:"Parent exposes subcomponents; they share state via context so consumers get a clean, HTML-like API."}),e.jsx(n.Code,{children:`const ToggleCtx = React.createContext(null);

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
</Toggle>`}),e.jsx("h3",{children:"D) Share behavior with custom hooks (not inheritance)"}),e.jsx(n.Code,{children:`// Logic is reusable via a hook
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
}`}),e.jsx("h3",{children:"E) Component injection / render-as (flexible composition)"}),e.jsx("p",{children:'Accept a component to render "as" something, or inject parts via props.'}),e.jsx(n.Code,{children:`export function ButtonLink({ as: Comp = "button", ...rest }) {
  return <Comp {...rest} />;
}

// Usage
<ButtonLink onClick={save}>Save</ButtonLink>
<ButtonLink as="a" href="/docs">Docs</ButtonLink>
<ButtonLink as={NavLink} to="/home">Home</ButtonLink>`}),e.jsx("h3",{children:"F) HOCs vs hooks vs composition"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Hooks"})," are the modern way to share logic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HOCs"})," still exist but add wrapper components-use sparingly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Composition"})," arranges UI; hooks supply behavior."]})]}),e.jsx(n.Code,{children:`// HOC (older pattern)
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
}`}),e.jsx("h3",{children:"G) Why not inheritance here?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React components are just functions-no need to subclass to reuse UI."}),e.jsx("li",{children:"Inheritance entangles concerns and makes component trees rigid."}),e.jsx("li",{children:"Composition keeps pieces small, testable, and swappable."})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Boolean-prop explosion (e.g., ",e.jsx("code",{children:"Card showHeader showFooter ..."}),") instead of passing composed parts."]}),e.jsxs("li",{children:['Trying to "extend" a component to override small bits-prefer slots/children or an ',e.jsx("code",{children:"as"})," prop."]}),e.jsx("li",{children:"Stuffing business logic inside a UI component you wanted to reuse-extract a hook."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prefer composition (children, slots, compound components) over inheritance."}),e.jsx("li",{children:"Share behavior with custom hooks; keep UI components thin."}),e.jsxs("li",{children:["Allow customization via props like ",e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"})," or an ",e.jsx("code",{children:"as"})," prop."]}),e.jsxs("li",{children:["Document what goes in ",e.jsx("code",{children:"{children}"})," and keep DOM structure predictable."]})]}),e.jsx(n.Divider,{})]})}function f({defaultOpen:r=!1}){const[t,o]=l.useState(!!r),s="prop-drilling";return e.jsxs(n.Topic,{id:s,children:[e.jsxs(n.Title,{onClick:()=>o(i=>!i),"aria-expanded":t,"aria-controls":`${s}-panel`,id:`${s}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Prop drilling (and why it hurts)"})]}),e.jsx(n.Panel,{id:`${s}-panel`,role:"region","aria-labelledby":`${s}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(g,{})})})]})}function g(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Prop drilling"})," is passing a prop through layers of components that don't use it-just to reach a deep child. This couples distant parts of the tree and creates noisy, brittle code."]}),e.jsx("h3",{children:"A) What it looks like"}),e.jsx(n.Code,{children:`// App wants Button deep down to get user + onLogout
function App() {
  const [user, setUser] = React.useState({ name: "Ashish" });
  const onLogout = () => setUser(null);
  return <Page user={user} onLogout={onLogout} />;
}

function Page(props) {
  // doesn't need user/onLogout but passes them
  return <Toolbar {...props} />;
}

function Toolbar({ user, onLogout }) {
  return <UserButton user={user} onLogout={onLogout} />;
}

function UserButton({ user, onLogout }) {
  return user ? <button onClick={onLogout}>Logout {user.name}</button> : null;
}`}),e.jsx("h3",{children:"B) Why it hurts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Brittle refactors:"})," rename or move a leaf and many pass-through signatures change."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Noise:"})," “prop soup” in components that don't use the values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Re-renders:"})," parents re-render when drilling values change, even if unused."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tight coupling:"})," upper layers must know lower-layer needs."]})]}),e.jsx("h3",{children:"C) When it's fine"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Very shallow trees, or one-off props passed a level or two."}),e.jsx("li",{children:"Leaf-only data where parents genuinely use the values too."})]}),e.jsx("h3",{children:"D) Better patterns"}),e.jsx("h4",{children:"1) Co-locate state near its consumers"}),e.jsx(n.Code,{children:`// Put state where it's used; lift up only when multiple siblings need it
function SearchBox() {
  const [q, setQ] = React.useState("");
  return <input value={q} onChange={e => setQ(e.target.value)} />;
}`}),e.jsx("h4",{children:"2) React Context for ambient concerns"}),e.jsx("p",{children:"Great for auth, theme, i18n, current user-data many levels down need."}),e.jsx(n.Code,{children:`// auth-context.js
const AuthCtx = React.createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = React.useState({ name: "Ashish" });
  const value = React.useMemo(() => ({ user, logout: () => setUser(null) }), [user]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
export function useAuth() {
  const ctx = React.useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}

// Anywhere deep:
function UserButton() {
  const { user, logout } = useAuth();
  return user ? <button onClick={logout}>Logout {user.name}</button> : null;
}

// App root:
function App() {
  return <AuthProvider><Page /></AuthProvider>;
}`}),e.jsx("h4",{children:"3) Custom hooks to share logic (not props)"}),e.jsx(n.Code,{children:`// useTheme.js
const ThemeCtx = React.createContext("light");
export const ThemeProvider = ({ value = "light", children }) =>
  <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
export const useTheme = () => React.useContext(ThemeCtx);

function Title({ children }) {
  const theme = useTheme();
  return <h3 className={theme === "dark" ? "title--dark" : "title"}>{children}</h3>;
}`}),e.jsx("h4",{children:"4) Composition & slots instead of boolean flags"}),e.jsx(n.Code,{children:`function Modal({ header, children, footer }) {
  return (
    <div className="modal">
      <header>{header}</header>
      <section>{children}</section>
      <footer>{footer}</footer>
    </div>
  );
}

// Callers inject pieces instead of toggling many props:
<Modal header={<h4>Confirm</h4>} footer={<button>Close</button>}>
  <p>Are you sure?</p>
</Modal>`}),e.jsx("h4",{children:"5) State libraries for app-wide stores"}),e.jsx("p",{children:"For large apps, use a lightweight store (e.g., Zustand) or Redux/Recoil/Jotai to avoid deep drilling and to select only the slices components need."}),e.jsx("h3",{children:"E) Performance notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["With Context, ",e.jsx("strong",{children:"split providers"})," (e.g., Auth vs Theme) so updates don't fan out unnecessarily."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memoize provider values"})," to keep referential stability."]}),e.jsxs("li",{children:["For heavy trees, prefer ",e.jsx("strong",{children:"selectors"})," (store libs) or split contexts by field."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"React.memo"})," on pass-through components when needed, but fix architecture first."]})]}),e.jsx("h3",{children:"F) Quick checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Passing through 3+ layers? Consider Context or a store."}),e.jsx("li",{children:"Co-locate state; lift only when multiple peers need it."}),e.jsx("li",{children:"Prefer composition/slots to boolean-prop bloat."}),e.jsx("li",{children:"Memoize context values and split providers by concern."})]}),e.jsx(n.Divider,{})]})}function b({defaultOpen:r=!1}){const[t,o]=l.useState(!!r),s="pure-vs-stateful";return e.jsxs(n.Topic,{id:s,children:[e.jsxs(n.Title,{onClick:()=>o(i=>!i),"aria-expanded":t,"aria-controls":`${s}-panel`,id:`${s}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Pure visual vs stateful components"})]}),e.jsx(n.Panel,{id:`${s}-panel`,role:"region","aria-labelledby":`${s}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(v,{})})})]})}function v(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["Think in two layers: ",e.jsx("strong",{children:"pure visual (presentational)"})," components that only render from props, and ",e.jsx("strong",{children:"stateful (container)"})," components that own state/side-effects and pass data down. Keeping this separation makes UIs easier to test, reuse, and reason about."]}),e.jsx("h3",{children:"A) Pure visual components (presentational)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Render ",e.jsx("em",{children:"only"})," from props; no local state or effects."]}),e.jsx("li",{children:"Deterministic: same props ⇒ same UI. Easy to snapshot test and memoize."}),e.jsx("li",{children:"No data fetching, timers, subscriptions-just structure and styling."})]}),e.jsx(n.Code,{children:`// Badge.jsx (pure visual)
export function Badge({ tone = "info", children }) {
  const cls = "badge " + (tone === "danger" ? "badge--danger" : "badge--info");
  return <span className={cls}>{children}</span>;
}

// Avatar.jsx (pure visual)
export function Avatar({ src, alt = "Avatar", size = 40 }) {
  return <img src={src} alt={alt} style={{ width: size, height: size, borderRadius: "50%" }} />;
}

// Optional: memoize when inputs are stable and renders are hot
export const BadgeMemo = React.memo(Badge);`}),e.jsx("h3",{children:"B) Stateful components (containers)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Own ",e.jsx("code",{children:"useState"}),", ",e.jsx("code",{children:"useEffect"}),", and side-effects (fetching, subscriptions)."]}),e.jsx("li",{children:"Compose pure visual components; pass props/callbacks down."}),e.jsx("li",{children:"Lift state up only when multiple children need it; otherwise co-locate near usage."})]}),e.jsx(n.Code,{children:`// ToggleContainer.jsx (stateful)
export function ToggleContainer() {
  const [on, setOn] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOn(o => !o)}>{on ? "On" : "Off"}</button>
      {on && <Badge tone="info">Enabled</Badge>}
    </div>
  );
}

// FetchContainer.jsx (stateful: effect + loading states)
export function FetchUser() {
  const [state, setState] = React.useState({ loading: true, user: null, error: null });

  React.useEffect(() => {
    let alive = true;
    fetch("/api/user")
      .then(r => r.json())
      .then(user => alive && setState({ loading: false, user, error: null }))
      .catch(err => alive && setState({ loading: false, user: null, error: err }));
    return () => { alive = false; }; // cleanup
  }, []);

  if (state.loading) return <p>Loading…</p>;
  if (state.error)   return <p className="error">Failed to load</p>;
  return <ProfileCard user={state.user} />; // pure visual
}

// ProfileCard.jsx (pure)
function ProfileCard({ user }) {
  return (
    <section className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </section>
  );
}`}),e.jsx("h3",{children:"C) Container-presentational split (why it helps)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," swap containers without touching visuals (e.g., local vs server data)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Testing:"})," test visuals with props; test containers with mocks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance:"})," memo visual parts; containers update less often when state is colocated."]})]}),e.jsx(n.Code,{children:`// Container computes derived props; visual stays dumb
function ProductPriceContainer({ product }) {
  const final = React.useMemo(
    () => Math.max(0, product.price - (product.discount ?? 0)),
    [product.price, product.discount]
  );
  return <ProductPrice amount={final} currency="INR" />;   // pass plain props
}

function ProductPrice({ amount, currency }) {
  return <strong>{currency} {amount}</strong>;
}`}),e.jsx("h3",{children:"D) Where should state live?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Co-locate"})," state with the component that uses it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lift"})," state when multiple siblings need to coordinate."]}),e.jsxs("li",{children:["Avoid duplicating derived state-derive from props/state with ",e.jsx("code",{children:"useMemo"})," or inline expressions."]})]}),e.jsx(n.Code,{children:`// ❌ Duplicate derived state
// const [fullName, setFullName] = useState(first + " " + last);

// ✅ Derive instead
const fullName = first + " " + last;`}),e.jsx("h3",{children:"E) Controlled vs uncontrolled"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Controlled"}),": parent owns value and passes ",e.jsx("code",{children:"value"}),"/",e.jsx("code",{children:"onChange"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Uncontrolled"}),": component keeps its own internal state via ",e.jsx("code",{children:"defaultValue"}),"/",e.jsx("code",{children:"ref"}),"."]})]}),e.jsx(n.Code,{children:`// Controlled input (stateful parent + pure input)
function NameField({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}

function ProfileForm() {
  const [name, setName] = React.useState("");
  return <NameField value={name} onChange={setName} />;
}`}),e.jsx("h3",{children:"F) Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Putting fetch/effects inside a reusable visual component (hard to reuse/test)."}),e.jsx("li",{children:"Over-lifting state to the app root, causing wide re-renders."}),e.jsx("li",{children:"Storing derivable values in state (risk of drift/bugs)."}),e.jsx("li",{children:"Premature memoization everywhere-start simple; memo only hot paths."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pure visuals: no state/effects; render from props; safe to memo."}),e.jsx("li",{children:"Stateful containers: own state/effects; pass props to visuals."}),e.jsx("li",{children:"Co-locate state; lift only when necessary."}),e.jsx("li",{children:"Prefer derived values over duplicating state."})]}),e.jsx(n.Divider,{})]})}function C({defaultOpen:r=!1}){const[t,o]=l.useState(!!r),s="reusable-component-api-design";return e.jsxs(n.Topic,{id:s,children:[e.jsxs(n.Title,{onClick:()=>o(i=>!i),"aria-expanded":t,"aria-controls":`${s}-panel`,id:`${s}-button`,"data-open":t,children:[e.jsx(n.Arrow,{"data-open":t,children:"▸"}),e.jsx("span",{children:"Reusable component API design"})]}),e.jsx(n.Panel,{id:`${s}-panel`,role:"region","aria-labelledby":`${s}-button`,"data-open":t,children:e.jsx("div",{children:e.jsx(y,{})})})]})}function y(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["Great component APIs are ",e.jsx("strong",{children:"predictable"}),", ",e.jsx("strong",{children:"minimal"}),", and ",e.jsx("strong",{children:"composable"}),". Favor clear names, sensible defaults, and patterns that scale (composition, slots, controlled/uncontrolled)."]}),e.jsx("h3",{children:"A) Keep the surface small & focused"}),e.jsxs("ul",{children:[e.jsx("li",{children:"One responsibility per component. If props feel unrelated, split the component."}),e.jsx("li",{children:"Start with a minimal set, add only when real use-cases appear."})]}),e.jsx("h3",{children:"B) Naming conventions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Components in ",e.jsx("strong",{children:"PascalCase"}),", props in ",e.jsx("strong",{children:"camelCase"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"variant"})," and ",e.jsx("code",{children:"size"})," enums instead of many booleans."]}),e.jsxs("li",{children:["Boolean prop names read as facts: ",e.jsx("code",{children:"disabled"}),", ",e.jsx("code",{children:"busy"}),", ",e.jsx("code",{children:"selected"}),"."]}),e.jsxs("li",{children:["Callback props start with ",e.jsx("code",{children:"on"}),": ",e.jsx("code",{children:"onClick"}),", ",e.jsx("code",{children:"onClose"}),", ",e.jsx("code",{children:"onChange"}),"."]})]}),e.jsx("h3",{children:"C) Variant & size over flag explosion"}),e.jsx(n.Code,{children:`export function Button({
  variant = "primary",          // "primary" | "secondary" | "ghost"
  size = "md",                  // "sm" | "md" | "lg"
  disabled = false,
  children,
  ...rest
}) {
  const cls = [
    "btn",
    \`btn--\${variant}\`,
    \`btn--\${size}\`,
    disabled && "is-disabled",
  ].filter(Boolean).join(" ");

  return <button className={cls} disabled={disabled} {...rest}>{children}</button>;
}`}),e.jsx("h3",{children:'D) Polymorphic "as" prop + pass-through'}),e.jsx("p",{children:"Let callers choose the underlying element while preserving accessibility and types."}),e.jsx(n.Code,{children:`export function ButtonLike({ as: Comp = "button", children, ...rest }) {
  return <Comp {...rest}>{children}</Comp>;
}

// Usage
// <ButtonLike onClick={save}>Save</ButtonLike>
// <ButtonLike as="a" href="/docs">Docs</ButtonLike>`}),e.jsx("h3",{children:"E) Controlled & uncontrolled inputs"}),e.jsx("p",{children:"Support both patterns when building input-like components."}),e.jsx(n.Code,{children:`export const TextField = React.forwardRef(function TextField(
  { value, defaultValue = "", onChange, ...rest }, ref
) {
  const [inner, setInner] = React.useState(defaultValue);
  const isControlled = value != null;
  const val = isControlled ? value : inner;

  function handleChange(e) {
    onChange?.(e);
    if (!isControlled) setInner(e.target.value);
  }

  return <input ref={ref} value={val} onChange={handleChange} {...rest} />;
});`}),e.jsx("h3",{children:"F) Slots/children over boolean UI toggles"}),e.jsxs("p",{children:["Accept structural pieces via props or compound components instead of ",e.jsx("em",{children:"showX"})," flags."]}),e.jsx(n.Code,{children:`export function Card({ header, children, footer }) {
  return (
    <section className="card">
      {header && <header className="card__header">{header}</header>}
      <div className="card__body">{children}</div>
      {footer && <footer className="card__footer">{footer}</footer>}
    </section>
  );
}`}),e.jsx("h3",{children:"G) Accessibility by design"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Mirror native semantics: e.g., a toggle should expose ",e.jsx("code",{children:"aria-pressed"})," or use a real ",e.jsx("code",{children:"button"}),"."]}),e.jsxs("li",{children:["Expose id/label hooks where relevant (e.g., ",e.jsx("code",{children:"id"})," + ",e.jsx("code",{children:"aria-labelledby"}),")."]}),e.jsxs("li",{children:["Forward ",e.jsx("code",{children:"aria-*"})," / ",e.jsx("code",{children:"data-*"})," props via ",e.jsx("code",{children:"...rest"})," and don't strip them."]})]}),e.jsx(n.Code,{children:`export function Toggle({ pressed = false, onPressedChange, ...rest }) {
  return (
    <button
      role="button"
      aria-pressed={pressed}
      onClick={() => onPressedChange?.(!pressed)}
      {...rest}
    />
  );
}`}),e.jsx("h3",{children:"H) Refs & imperative handles (when needed)"}),e.jsx("p",{children:"Forward refs for focus/measure/scroll. Expose a small imperative API sparingly."}),e.jsx(n.Code,{children:`export const Modal = React.forwardRef(function Modal(props, ref) {
  const dialogRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    focusClose: () => dialogRef.current?.querySelector("button")?.focus(),
  }));
  return <div ref={dialogRef} role="dialog" aria-modal="true">{props.children}</div>;
});`}),e.jsx("h3",{children:"I) Stable defaults & safe fallbacks"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use parameter/destructure defaults; coalesce with ",e.jsx("code",{children:"??"})," when ",e.jsx("code",{children:"null"})," should also fall back."]}),e.jsxs("li",{children:["Keep defaulted objects immutable inside (don't mutate a default",e.jsx("code",{children:"options = {}"}),")."]})]}),e.jsx("h3",{children:"J) Don't leak invalid DOM props"}),e.jsx("p",{children:"Filter or map custom props before reaching the DOM; pass only valid attributes."}),e.jsx(n.Code,{children:`export function Box({ inset, ...rest }) {
  const style = inset ? { padding: 12, ...rest.style } : rest.style;
  // Strip custom prop 'inset' and pass only valid DOM props
  const { inset: _omit, ...dom } = rest;
  return <div style={style} {...dom} />;
}`}),e.jsx("h3",{children:"K) Data/logic separation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Reusable visual components shouldn't fetch data; containers do and pass props down."}),e.jsx("li",{children:"Share logic with custom hooks; keep components thin."})]}),e.jsx("h3",{children:"L) Versioning & extension points"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prefer additive changes (new variants/slots) over breaking renames."}),e.jsx("li",{children:"Document supported values for enums; validate in dev (PropTypes or TS) if possible."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Small, focused API with clear names and defaults."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"variant"}),"/",e.jsx("code",{children:"size"})," enums; avoid boolean flag explosions."]}),e.jsx("li",{children:"Support composition: children/slots/compound components."}),e.jsxs("li",{children:["Consider ",e.jsx("code",{children:"as"})," + ",e.jsx("code",{children:"...rest"})," for flexibility."]}),e.jsxs("li",{children:["Design for a11y from day one; forward ",e.jsx("code",{children:"aria-*"}),"/",e.jsx("code",{children:"data-*"}),"."]}),e.jsx("li",{children:"Forward refs; expose imperative handles only when necessary."}),e.jsx("li",{children:"Filter invalid DOM props; keep data fetching out of reusable visuals."})]}),e.jsx(n.Divider,{})]})}const R=()=>e.jsxs("div",{style:{padding:"15px"},children:[e.jsx("h3",{children:"Components & Props"}),e.jsxs(w.PageIntro,{children:[e.jsxs("p",{children:["React UIs are ",e.jsx("em",{children:"composed"})," from small components. Props are the only way data flows into them—so good APIs and composition patterns decide how clean your app feels. In this section we use the"," ",e.jsx("code",{children:"children"})," prop for slots, favor composition over inheritance, understand why prop drilling hurts, and design reusable components with clear, predictable props."]}),e.jsxs("p",{className:"outcome",children:[e.jsx("strong",{children:"Outcome:"})," you’ll ship components with stable public APIs, safe defaults, and flexible composition—without over-engineering."]})]}),e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(j,{}),e.jsx(f,{}),e.jsx(b,{}),e.jsx(C,{})]})]}),w={PageIntro:a.div`
        margin: 8px 0 16px;
        padding: 14px 16px;
        background: #0f0f12;
        border: 1px solid #1f1f1f;
        border-radius: 12px;
        color: #c9c9c9;
        line-height: 1.65;

        p { margin: 0 0 8px; }
        .outcome { color: #bfcfff; }
        strong { color: #e2e8ff; font-weight: 600; }
        code { background: #1a1a1a; padding: 0 6px; border-radius: 6px; }
    `};export{R as default};
