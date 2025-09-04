import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Reusable component API design
 */
export default function ReusableComponentAPIDesign({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "reusable-component-api-design";

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
                <span>Reusable component API design</span>
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
                Great component APIs are <strong>predictable</strong>, <strong>minimal</strong>, and <strong>composable</strong>.
                Favor clear names, sensible defaults, and patterns that scale (composition, slots, controlled/uncontrolled).
            </p>

            <h3>A) Keep the surface small & focused</h3>
            <ul>
                <li>One responsibility per component. If props feel unrelated, split the component.</li>
                <li>Start with a minimal set, add only when real use-cases appear.</li>
            </ul>

            <h3>B) Naming conventions</h3>
            <ul>
                <li>Components in <strong>PascalCase</strong>, props in <strong>camelCase</strong>.</li>
                <li>Use <code>variant</code> and <code>size</code> enums instead of many booleans.</li>
                <li>Boolean prop names read as facts: <code>disabled</code>, <code>busy</code>, <code>selected</code>.</li>
                <li>Callback props start with <code>on</code>: <code>onClick</code>, <code>onClose</code>, <code>onChange</code>.</li>
            </ul>

            <h3>C) Variant & size over flag explosion</h3>
            <Styled.Code>{`export function Button({
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
}`}</Styled.Code>

            <h3>D) Polymorphic "as" prop + pass-through</h3>
            <p>Let callers choose the underlying element while preserving accessibility and types.</p>
            <Styled.Code>{`export function ButtonLike({ as: Comp = "button", children, ...rest }) {
  return <Comp {...rest}>{children}</Comp>;
}

// Usage
// <ButtonLike onClick={save}>Save</ButtonLike>
// <ButtonLike as="a" href="/docs">Docs</ButtonLike>`}</Styled.Code>

            <h3>E) Controlled & uncontrolled inputs</h3>
            <p>Support both patterns when building input-like components.</p>
            <Styled.Code>{`export const TextField = React.forwardRef(function TextField(
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
});`}</Styled.Code>

            <h3>F) Slots/children over boolean UI toggles</h3>
            <p>Accept structural pieces via props or compound components instead of <em>showX</em> flags.</p>
            <Styled.Code>{`export function Card({ header, children, footer }) {
  return (
    <section className="card">
      {header && <header className="card__header">{header}</header>}
      <div className="card__body">{children}</div>
      {footer && <footer className="card__footer">{footer}</footer>}
    </section>
  );
}`}</Styled.Code>

            <h3>G) Accessibility by design</h3>
            <ul>
                <li>Mirror native semantics: e.g., a toggle should expose <code>aria-pressed</code> or use a real <code>button</code>.</li>
                <li>Expose id/label hooks where relevant (e.g., <code>id</code> + <code>aria-labelledby</code>).</li>
                <li>Forward <code>aria-*</code> / <code>data-*</code> props via <code>...rest</code> and don't strip them.</li>
            </ul>
            <Styled.Code>{`export function Toggle({ pressed = false, onPressedChange, ...rest }) {
  return (
    <button
      role="button"
      aria-pressed={pressed}
      onClick={() => onPressedChange?.(!pressed)}
      {...rest}
    />
  );
}`}</Styled.Code>

            <h3>H) Refs & imperative handles (when needed)</h3>
            <p>Forward refs for focus/measure/scroll. Expose a small imperative API sparingly.</p>
            <Styled.Code>{`export const Modal = React.forwardRef(function Modal(props, ref) {
  const dialogRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    focusClose: () => dialogRef.current?.querySelector("button")?.focus(),
  }));
  return <div ref={dialogRef} role="dialog" aria-modal="true">{props.children}</div>;
});`}</Styled.Code>

            <h3>I) Stable defaults & safe fallbacks</h3>
            <ul>
                <li>Use parameter/destructure defaults; coalesce with <code>??</code> when <code>null</code> should also fall back.</li>
                <li>
                    Keep defaulted objects immutable inside (don't mutate a default
                    <code>{"options = {}"}</code>).
                </li>

            </ul>

            <h3>J) Don't leak invalid DOM props</h3>
            <p>Filter or map custom props before reaching the DOM; pass only valid attributes.</p>
            <Styled.Code>{`export function Box({ inset, ...rest }) {
  const style = inset ? { padding: 12, ...rest.style } : rest.style;
  // Strip custom prop 'inset' and pass only valid DOM props
  const { inset: _omit, ...dom } = rest;
  return <div style={style} {...dom} />;
}`}</Styled.Code>

            <h3>K) Data/logic separation</h3>
            <ul>
                <li>Reusable visual components shouldn't fetch data; containers do and pass props down.</li>
                <li>Share logic with custom hooks; keep components thin.</li>
            </ul>

            <h3>L) Versioning & extension points</h3>
            <ul>
                <li>Prefer additive changes (new variants/slots) over breaking renames.</li>
                <li>Document supported values for enums; validate in dev (PropTypes or TS) if possible.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Small, focused API with clear names and defaults.</li>
                <li>Use <code>variant</code>/<code>size</code> enums; avoid boolean flag explosions.</li>
                <li>Support composition: children/slots/compound components.</li>
                <li>Consider <code>as</code> + <code>...rest</code> for flexibility.</li>
                <li>Design for a11y from day one; forward <code>aria-*</code>/<code>data-*</code>.</li>
                <li>Forward refs; expose imperative handles only when necessary.</li>
                <li>Filter invalid DOM props; keep data fetching out of reusable visuals.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
