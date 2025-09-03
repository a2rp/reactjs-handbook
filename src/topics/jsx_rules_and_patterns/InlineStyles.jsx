import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Inline styles (style object)
 */
export default function InlineStyles({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "inline-styles";

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
                <span>Inline styles (style object)</span>
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
                In JSX, the <code>style</code> prop takes a <strong>JS object</strong> with{" "}
                <em>camelCased</em> CSS properties. Numbers are treated as <code>px</code> (for most props).
                Use strings for other units (<code>"%</code>, <code>"rem"</code>, etc.).
            </p>

            <h3>A) Basics: object, camelCase, numbers → px</h3>
            <Styled.Code>{`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}</Styled.Code>

            <h3>B) Units: number vs string</h3>
            <ul>
                <li><strong>Number</strong> → pixels: <code>{`{ width: 200 }`}</code> ⇒ <code>width: 200px</code></li>
                <li><strong>String</strong> for non-px: <code>{`{ width: "50%" }`}</code>, <code>{`{ fontSize: "1.25rem" }`}</code></li>
                <li>Unitless props (examples): <code>lineHeight</code>, <code>zIndex</code>, <code>fontWeight</code>, <code>opacity</code>, <code>flexGrow</code>, <code>flexShrink</code>.</li>
            </ul>
            <Styled.Code>{`<div
  style={{
    width: "50%",
    height: 120,             // 120px
    lineHeight: 1.4,         // unitless ok
    opacity: 0.9
  }}
/>`}</Styled.Code>

            <h3>C) Vendor prefixes & SVG</h3>
            <p>
                Use camelCase with vendor prefixes: <code>Webkit</code>, <code>ms</code>, etc. Many SVG attrs are camelCased too.
            </p>
            <Styled.Code>{`<div style={{ WebkitUserSelect: "none", msOverflowStyle: "none" }} />
<svg viewBox="0 0 100 10">
  <rect width="100" height="10" fill="tomato" />
</svg>`}</Styled.Code>

            <h3>D) Conditional & merged styles</h3>
            <p>Inline styles are just objects-combine with spreads and conditionals.</p>
            <Styled.Code>{`const base = { padding: 12, borderRadius: 8 };
const primary = { backgroundColor: "#0af", color: "#fff" };
const danger  = { backgroundColor: "#e11", color: "#fff" };

function Button({ kind = "primary", active }) {
  const tone = kind === "danger" ? danger : primary;
  return (
    <button
      style={{
        ...base,
        ...tone,
        ...(active && { boxShadow: "0 0 0 3px rgba(0,0,0,0.15)" })
      }}
    >
      Click
    </button>
  );
}`}</Styled.Code>

            <h3>E) Dynamic values & CSS variables</h3>
            <ul>
                <li>Compute on the fly: strings for percent/other units, numbers for px.</li>
                <li>CSS variables work fine-supply as strings.</li>
            </ul>
            <Styled.Code>{`function Progress({ value }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ background: "var(--track,#eee)", height: 8, borderRadius: 4 }}>
      <div
        style={{
          width: pct + "%",              // string for %
          height: "100%",
          background: "var(--accent,#0af)",
          borderRadius: 4
        }}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
}`}</Styled.Code>

            <h3>F) Performance & patterns</h3>
            <ul>
                <li>Objects are new each render; keep them small. For big/expensive objects, memoize.</li>
                <li>Prefer CSS classes / styled-components for most styling, and inline styles for <em>dynamic per-instance</em> values (e.g., width from props).</li>
                <li>No support for pseudo-classes (<code>:hover</code>) or media queries in inline styles-use CSS/styled-components for that.</li>
                <li><code>!important</code> isn't supported in inline styles.</li>
            </ul>
            <Styled.Code>{`// Memoize a large dynamic style (rarely needed)
function Panel({ color, pad }) {
  const style = React.useMemo(() => ({
    background: color,
    padding: pad,
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(0,0,0,.08)"
  }), [color, pad]);

  return <section style={style} />;
}`}</Styled.Code>

            <h3>G) Common gotchas</h3>
            <ul>
                <li>Hyphen-keys don't work: use <code>backgroundColor</code>, not <code>background-color</code>.</li>
                <li>URLs must be strings: <code>{`backgroundImage: \`url(\${src})\``}</code>.</li>
                <li>Numbers become px-if you mean <code>%</code>/<code>rem</code>, pass a string.</li>
            </ul>
            <Styled.Code>{`// ❌ Wrong keys and units
<div style={{ "background-color": "tomato", width: 50 + "%" }} />

// ✅ Correct
<div style={{ backgroundColor: "tomato", width: "50%" }} />`}</Styled.Code>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Convert to JSX style object:
                    <Styled.Code>{`<div style="border: 1px solid #ddd; border-radius: 8px; margin-top: 12px;"></div>`}</Styled.Code>
                </li>
                <li>
                    Make a dynamic square where <code>size</code> (number) controls both <code>width</code> and <code>height</code>:
                    <Styled.Code>{`// <Square size={48} color="#0af" />`}</Styled.Code>
                </li>
                <li>
                    Fix the mistakes:
                    <Styled.Code>{`<button style={{ "font-size": 14, padding: 8 + "px", backgroundImage: url(bg) }}>
  Save
</button>`}</Styled.Code>
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li><code>style</code> accepts an <strong>object</strong>; properties are <strong>camelCased</strong>.</li>
                <li>Numbers → <code>px</code>; use strings for <code>%</code>/<code>rem</code>/<code>em</code>/etc.</li>
                <li>Merge with object spreads; use classes/styled-components for pseudo-states & media queries.</li>
                <li>CSS variables allowed as strings (<code>var(--x)</code>).</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
