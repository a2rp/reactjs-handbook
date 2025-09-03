import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Expressions vs statements in JSX
 */
export default function ExpressionsVsStatements({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "expressions-vs-statements";

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
                <span>Expressions vs statements in JSX</span>
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
                Inside JSX, the curly braces <code>{`{ ... }`}</code> accept a <strong>JavaScript expression</strong> (something
                that produces a value). <strong>Statements</strong> (<code>if</code>, <code>for</code>, <code>switch</code>,
                <code>try/catch</code>, <code>return</code>, etc.) are <em>not</em> allowed directly inside JSX.
            </p>

            <h3>A) What counts as an expression?</h3>
            <ul>
                <li>Literals & variables: <code>{`42, "hi", user.name`}</code></li>
                <li>Operators & calls: <code>{`a + b, fn(), items.map(...)`}</code></li>
                <li>Ternary: <code>{`ok ? <A/> : <B/>`}</code></li>
                <li>Array/fragment of nodes: <code>{`[<li key="1">A</li>, <li key="2">B</li>]`}</code></li>
                <li>Logical <code>&&</code> (careful with <code>0</code>), <code>||</code>, <code>??</code></li>
            </ul>
            <Styled.Code>{`function Demo({ ok, items }) {
  return (
    <div>
      <p>Sum: {2 + 3}</p>
      <p>{ok ? "Yes" : "No"}</p>
      <ul>{items.map(it => <li key={it.id}>{it.label}</li>)}</ul>
    </div>
  );
}`}</Styled.Code>

            <h3>B) What is a statement (❌ not allowed in braces)?</h3>
            <ul>
                <li><code>if</code>, <code>for</code>, <code>while</code>, <code>switch</code></li>
                <li><code>try { } catch { }</code></li>
                <li><code>return</code>, <code>break</code>, <code>continue</code>, <code>throw</code></li>
                <li>Block scopes: <code>{`{ /* a new scope */ }`}</code> (not the same as JSX braces)</li>
            </ul>
            <Styled.Code>{`// ❌ Invalid
// <div>{ if (ok) { "Yes" } else { "No" } }</div>
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>`}</Styled.Code>

            <h3>C) Converting statements → expressions</h3>
            <ol>
                <li>
                    <strong>if/else → ternary</strong>
                    <Styled.Code>{`// ❌
// <div>{ if (n % 2) { "Odd" } else { "Even" } }</div>

// ✅
<div>{n % 2 ? "Odd" : "Even"}</div>`}</Styled.Code>
                </li>
                <li>
                    <strong>if-only → &&</strong> (shows right side when left is truthy; beware <code>0</code>)
                    <Styled.Code>{`// show a badge only if premium
{isPremium && <Badge/>}

// If the left can be 0, prefer a ternary:
{count > 0 ? <span>{count}</span> : null}`}</Styled.Code>
                </li>
                <li>
                    <strong>for/switch → array methods or lookups</strong>
                    <Styled.Code>{`// ❌ for loop in JSX
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>

// ✅ map + key
<ul>{xs.map(x => <li key={x.id}>{x.title}</li>)}</ul>

// ✅ switch alternative via lookup
const views = { list: <List/>, grid: <Grid/>, empty: <Empty/> };
<div>{views[mode] ?? <Empty/>}</div>`}</Styled.Code>
                </li>
                <li>
                    <strong>try/catch</strong>: precompute above return or call a helper that returns UI
                    <Styled.Code>{`function SafeJson({ text }) {
  let node;
  try {
    const obj = JSON.parse(text);
    node = <pre>{JSON.stringify(obj, null, 2)}</pre>;
  } catch {
    node = <p className="error">Invalid JSON</p>;
  }
  return <div>{node}</div>;
}`}</Styled.Code>
                </li>
            </ol>

            <h3>D) Precompute vs inline tricks</h3>
            <p>
                Prefer computing values <em>before</em> the <code>return</code> for readability. You can also call small
                helpers inside JSX (calls are expressions). IIFEs work but are harder to read—use sparingly.
            </p>
            <Styled.Code>{`// Precompute (clean)
function Card({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}

// Helper call (still an expression)
const format = n => Intl.NumberFormat("en-IN").format(n);
<p>Total: {format(total)}</p>

// IIFE (allowed, but avoid if not needed)
<div>{(() => { if (ok) return <A/>; return <B/>; })()}</div>`}</Styled.Code>

            <h3>E) Rendering "nothing" cleanly</h3>
            <ul>
                <li>Use <code>null</code> to render nothing: <code>{`{cond ? <X/> : null}`}</code></li>
                <li><code>false</code> and <code>undefined</code> also render nothing, but avoid returning raw non-UI values by accident.</li>
                <li><code>0</code> renders as text; don't use it to hide UI.</li>
            </ul>

            <h3>F) Quick patterns</h3>
            <Styled.Code>{`// Guarded block with early return pattern (outside JSX)
if (!data) return null;

// Inline pick-one
{type === "success" ? <Success/> : type === "error" ? <Error/> : <Idle/>}

// Compose lists
<ul>
  {items
    .filter(it => it.visible)
    .map(it => <li key={it.id}>{it.label}</li>)}
</ul>`}</Styled.Code>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Convert to valid JSX (use a ternary):
                    <Styled.Code>{`// <div>{ if (score >= 50) { "Pass" } else { "Fail" } }</div>`}</Styled.Code>
                </li>
                <li>
                    Render a list of tags (<code>tags: string[]</code>) with keys, without using a <code>for</code> loop.
                </li>
                <li>
                    Replace this <code>switch</code> with a lookup map:
                    <Styled.Code>{`// switch (status) { case "ok": <Ok/>; break; case "err": <Err/>; break; default: <Idle/>; }`}</Styled.Code>
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>JSX braces accept <strong>expressions</strong> only—no control-flow statements.</li>
                <li>Use <code>? :</code> for if/else, <code>&&</code> for simple "show if truthy".</li>
                <li>Use <code>map/filter</code> for lists; always add stable <code>key</code>s.</li>
                <li>Precompute complex logic above the return or call helpers.</li>
                <li>Use <code>null</code> to render nothing; don't rely on <code>0</code> for hiding.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
