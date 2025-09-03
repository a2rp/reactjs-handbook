import React from "react";
import { Styled } from "../styled";

/**
 * Topic - JSX syntax rules (one root, expressions)
 */
export default function JSXSyntaxRules({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "jsx-syntax-rules";

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
                <span>JSX syntax rules (one root, expressions)</span>
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
                JSX is syntax sugar for <code>React.createElement</code>. It has two core rules:
                <ul>
                    <li><strong> (1) one root element</strong> per JSX return, and</li>
                    <li><strong>(2) curly braces hold expressions</strong> (not statements).</li>
                </ul>
            </p>

            <h3>A) One root element</h3>
            <p>Each component’s <code>return</code> must produce a single parent node. Use a wrapper element or a Fragment.</p>
            <Styled.Code>{`// ❌ Not allowed: two siblings at top level
function Bad() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Wrap with a div
function GoodDiv() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Or prefer Fragment when you don't need an extra DOM element
function GoodFragment() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}`}</Styled.Code>

            <h3>B) Fragments (short & long form + keys)</h3>
            <p>
                Shorthand <code>&lt;&gt;...&lt;/&gt;</code> is great for grouping. Use{" "}
                <code>&lt;React.Fragment&gt;</code> if you need a <code>key</code>.
            </p>
            <Styled.Code>{`const rows = [
  { id: 1, label: "A" },
  { id: 2, label: "B" },
];

function KeyedFragments() {
  return (
    <ul>
      {rows.map(row => (
        <React.Fragment key={row.id}>
          <li>{row.label}</li>
          <li className="divider" aria-hidden="true">—</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}</Styled.Code>

            <h3>C) Curly braces are for <em>expressions</em></h3>
            <p>
                Inside JSX, <code>{`{ ... }`}</code> must contain an expression (something that evaluates to a value):
                variables, function calls, math, array literals, <em>ternary</em> conditionals, etc.
                Statements like <code>if</code>/<code>for</code>/<code>while</code> are not allowed directly in braces.
            </p>
            <Styled.Code>{`// ✅ Valid (expressions)
const user = { first: "Ashish", last: "Ranjan" };
const n = 7;
function Demo() {
  return (
    <div>
      <p>Hello, {user.first + " " + user.last}!</p>
      <p>2 + 5 = {2 + 5}</p>
      <p>Lucky? {n > 5 ? "Yes" : "No"}</p>
      <ul>{["JSX","Rules","FTW"].map((w, i) => <li key={i}>{w}</li>)}</ul>
    </div>
  );
}

// ❌ Invalid (statements in braces)
// <div>{ if (ok) { "Yes" } else { "No" } }</div>

// ✅ Convert to expression using a ternary
// <div>{ ok ? "Yes" : "No" }</div>

// ✅ Or precompute above return
// let msg = "No";
// if (ok) msg = "Yes";
// return <div>{msg}</div>;`}</Styled.Code>

            <h3>D) Attributes: literal vs expression</h3>
            <ul>
                <li>Quotes for string literals: <code>{`<img alt="logo" />`}</code></li>
                <li>Braces for non-strings/variables: <code>{`<img width={64} />`}</code></li>
                <li>Booleans: <code>{`<Button primary />`}</code> ≡ <code>{`<Button primary={true} />`}</code></li>
                <li>Objects/arrays need braces: <code>{`<Box style={{ marginTop: 8 }} />`}</code></li>
            </ul>
            <Styled.Code>{`function Attrs() {
  const size = 64;
  const styles = { marginTop: 8, borderRadius: 8 };

  return (
    <img
      alt="Logo"              // string literal -> quotes
      src="/logo.png"
      width={size}            // number -> braces
      height={size}
      style={styles}          // object -> braces
      draggable={false}       // boolean -> braces
    />
  );
}`}</Styled.Code>

            <h3>E) What renders vs what doesn't</h3>
            <ul>
                <li><code>null</code>, <code>undefined</code>, and <code>false</code> render nothing.</li>
                <li><code>0</code> <em>does</em> render (common gotcha).</li>
                <li>Arrays of nodes are fine: <code>{`{[<li key="1">A</li>, <li key="2">B</li>]}`}</code></li>
            </ul>
            <Styled.Code>{`function Visibility({ count }) {
  // || treats 0 as falsy -> will fall back; often not desired.
  // Prefer ?? so 0 stays 0.
  return <p>Count: {count ?? 0}</p>;
}`}</Styled.Code>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Fix this return to have a single root (no extra DOM wrapper in the output):
                    <Styled.Code>{`function X() {
  return (
    <h2>Hi</h2>
    <p>There</p>
  );
}`}</Styled.Code>
                    <em>Hint:</em> Use a Fragment.
                </li>
                <li>
                    Convert this statement into an expression:
                    <Styled.Code>{`// Want: "Even" if n%2===0, else "Odd"
// <div>{ if (n % 2 === 0) { "Even" } else { "Odd" } }</div>`}</Styled.Code>
                </li>
                <li>
                    Make this map render correctly with keys:
                    <Styled.Code>{`<ul>
  {items.map(item => <li>{item.label}</li>)}
</ul>`}</Styled.Code>
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Return exactly one root element (Fragment if no wrapper DOM is needed).</li>
                <li>Use <code>{`{ ... }`}</code> only for expressions. Convert statements to a ternary or compute earlier.</li>
                <li>Quotes for string literals, braces for variables/non-strings.</li>
                <li>Remember: <code>null/undefined/false</code> render nothing; <code>0</code> renders.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
