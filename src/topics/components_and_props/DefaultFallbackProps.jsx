import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Default/fallback props
 */
export default function DefaultFallbackProps({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "default-fallback-props";

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
                <span>Default/fallback props</span>
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
                Give sensible defaults so components are easy to drop in. Prefer <strong>parameter
                    defaults</strong> and <strong>destructuring defaults</strong>. Use <code>??</code> when you want
                a runtime fallback that treats <code>null</code>/<code>undefined</code> as "missing".
                Avoid legacy <code>defaultProps</code> on function components.
            </p>

            <h3>A) Parameter & destructuring defaults (recommended)</h3>
            <Styled.Code>{`// 1) Parameter default
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
}`}</Styled.Code>

            <h3>B) <code>undefined</code> vs <code>null</code> (why <code>??</code> matters)</h3>
            <ul>
                <li>Parameter/destructure defaults run only when the prop is <code>undefined</code>.</li>
                <li>If a parent passes <code>null</code>, the default <em>won't</em> apply-use <code>??</code> to coalesce.</li>
            </ul>
            <Styled.Code>{`export function Price({ amount, currency }) {
  // If parent passes currency={null}, we still want "INR"
  const cur = currency ?? "INR";      // treats null/undefined as missing
  return <span>{cur} {amount}</span>;
}`}</Styled.Code>

            <h3>C) Avoid <code>||</code> for numeric or empty-string props</h3>
            <p>Logical OR treats many values as falsy (e.g., <code>0</code>, <code>""</code>), which may wipe valid inputs.</p>
            <Styled.Code>{`// ❌ 0 will fall back to 1 by accident
function Counter({ step }) {
  const s = step || 1;

  // ✅ keep valid 0 by using ??
  // const s = step ?? 1;
  return <span>step={s}</span>;
}`}</Styled.Code>

            <h3>D) Function defaults & optional chaining</h3>
            <ul>
                <li>Prefer calling with <code>?.()</code> rather than defaulting to a no-op.</li>
                <li>Use defaults when you need a consistent signature.</li>
            </ul>
            <Styled.Code>{`export function Modal({ onClose }) {
  return <button onClick={() => onClose?.()}>Close</button>;
}

// Or default a callback:
export function Form({ onSubmit = () => {} }) {
  return <form onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); }}>
    <button>Save</button>
  </form>;
}`}</Styled.Code>

            <h3>E) Object/array defaults</h3>
            <ul>
                <li>Default parameter expressions run on every call → a fresh object/array each time.</li>
                <li>Great for style/option bags; don't mutate them inside the component.</li>
            </ul>
            <Styled.Code>{`export function Panel({ title = "Untitled", options = {} }) {
  const { padded = true } = options;
  return (
    <section className={padded ? "padded" : ""}>
      <h3>{title}</h3>
    </section>
  );
}`}</Styled.Code>

            <h3>F) Normalize prop variants with defaults</h3>
            <p>Map multiple inputs to a single internal shape, then render from that.</p>
            <Styled.Code>{`export function Tag({ tone = "info" }) {
  const cls = {
    info: "tag tag--info",
    warn: "tag tag--warn",
    danger: "tag tag--danger",
  }[tone] ?? "tag tag--info";
  return <span className={cls} />;
}`}</Styled.Code>

            <h3>G) Legacy: <code>defaultProps</code> on function components</h3>
            <ul>
                <li>Historically used on classes; works on functions but is <strong>discouraged</strong>.</li>
                <li>Prefer parameter/destructure defaults for clarity and TypeScript/IDE tooling.</li>
            </ul>
            <Styled.Code>{`// ⚠️ Not recommended for function components
function Legacy({ color }) {
  return <div style={{ color }}>Hi</div>;
}
Legacy.defaultProps = { color: "tomato" };`}</Styled.Code>

            <h3>H) Common mistakes</h3>
            <ul>
                <li>Using <code>||</code> and accidentally overriding valid <code>0</code> or <code>""</code>.</li>
                <li>Assuming defaults apply when the parent passes <code>null</code> (they don't-use <code>??</code>).</li>
                <li>Mutating defaulted objects/arrays inside the component.</li>
                <li>Leaking unknown props to DOM instead of filtering/forwarding intentionally.</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Make a <code>&lt;Badge&gt;</code> with default <code>tone="info"</code> and ensure <code>tone={null}</code> still becomes <code>"info"</code>.
                </li>
                <li>
                    Fix a component that does <code>const s = step || 1;</code> so that <code>step=0</code> is respected.
                </li>
                <li>
                    Build <code>&lt;Avatar size=&#123;number&#125; alt=&#123;string&#125; /&gt;</code> where
                    missing/undefined values get sensible defaults without clobbering empty strings.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use parameter/destructure defaults for most cases.</li>
                <li>Use <code>??</code> for runtime fallbacks that should treat <code>null</code>/<code>undefined</code> as missing.</li>
                <li>Avoid <code>||</code> for numeric/string props that can be falsy.</li>
                <li>Do not mutate defaulted objects/arrays.</li>
                <li>Avoid <code>defaultProps</code> on function components.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
