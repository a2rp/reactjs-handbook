import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Pure visual vs stateful components
 */
export default function PureVsStateful({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "pure-vs-stateful";

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
                <span>Pure visual vs stateful components</span>
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
                Think in two layers: <strong>pure visual (presentational)</strong> components that only render from props,
                and <strong>stateful (container)</strong> components that own state/side-effects and pass data down.
                Keeping this separation makes UIs easier to test, reuse, and reason about.
            </p>

            <h3>A) Pure visual components (presentational)</h3>
            <ul>
                <li>Render <em>only</em> from props; no local state or effects.</li>
                <li>Deterministic: same props ⇒ same UI. Easy to snapshot test and memoize.</li>
                <li>No data fetching, timers, subscriptions-just structure and styling.</li>
            </ul>
            <Styled.Code>{`// Badge.jsx (pure visual)
export function Badge({ tone = "info", children }) {
  const cls = "badge " + (tone === "danger" ? "badge--danger" : "badge--info");
  return <span className={cls}>{children}</span>;
}

// Avatar.jsx (pure visual)
export function Avatar({ src, alt = "Avatar", size = 40 }) {
  return <img src={src} alt={alt} style={{ width: size, height: size, borderRadius: "50%" }} />;
}

// Optional: memoize when inputs are stable and renders are hot
export const BadgeMemo = React.memo(Badge);`}</Styled.Code>

            <h3>B) Stateful components (containers)</h3>
            <ul>
                <li>Own <code>useState</code>, <code>useEffect</code>, and side-effects (fetching, subscriptions).</li>
                <li>Compose pure visual components; pass props/callbacks down.</li>
                <li>Lift state up only when multiple children need it; otherwise co-locate near usage.</li>
            </ul>
            <Styled.Code>{`// ToggleContainer.jsx (stateful)
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
}`}</Styled.Code>

            <h3>C) Container-presentational split (why it helps)</h3>
            <ul>
                <li><strong>Reusability:</strong> swap containers without touching visuals (e.g., local vs server data).</li>
                <li><strong>Testing:</strong> test visuals with props; test containers with mocks.</li>
                <li><strong>Performance:</strong> memo visual parts; containers update less often when state is colocated.</li>
            </ul>
            <Styled.Code>{`// Container computes derived props; visual stays dumb
function ProductPriceContainer({ product }) {
  const final = React.useMemo(
    () => Math.max(0, product.price - (product.discount ?? 0)),
    [product.price, product.discount]
  );
  return <ProductPrice amount={final} currency="INR" />;   // pass plain props
}

function ProductPrice({ amount, currency }) {
  return <strong>{currency} {amount}</strong>;
}`}</Styled.Code>

            <h3>D) Where should state live?</h3>
            <ul>
                <li><strong>Co-locate</strong> state with the component that uses it.</li>
                <li><strong>Lift</strong> state when multiple siblings need to coordinate.</li>
                <li>Avoid duplicating derived state-derive from props/state with <code>useMemo</code> or inline expressions.</li>
            </ul>
            <Styled.Code>{`// ❌ Duplicate derived state
// const [fullName, setFullName] = useState(first + " " + last);

// ✅ Derive instead
const fullName = first + " " + last;`}</Styled.Code>

            <h3>E) Controlled vs uncontrolled</h3>
            <ul>
                <li><strong>Controlled</strong>: parent owns value and passes <code>value</code>/<code>onChange</code>.</li>
                <li><strong>Uncontrolled</strong>: component keeps its own internal state via <code>defaultValue</code>/<code>ref</code>.</li>
            </ul>
            <Styled.Code>{`// Controlled input (stateful parent + pure input)
function NameField({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}

function ProfileForm() {
  const [name, setName] = React.useState("");
  return <NameField value={name} onChange={setName} />;
}`}</Styled.Code>

            <h3>F) Common mistakes</h3>
            <ul>
                <li>Putting fetch/effects inside a reusable visual component (hard to reuse/test).</li>
                <li>Over-lifting state to the app root, causing wide re-renders.</li>
                <li>Storing derivable values in state (risk of drift/bugs).</li>
                <li>Premature memoization everywhere-start simple; memo only hot paths.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Pure visuals: no state/effects; render from props; safe to memo.</li>
                <li>Stateful containers: own state/effects; pass props to visuals.</li>
                <li>Co-locate state; lift only when necessary.</li>
                <li>Prefer derived values over duplicating state.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
