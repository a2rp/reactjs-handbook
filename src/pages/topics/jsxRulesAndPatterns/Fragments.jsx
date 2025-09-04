import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Fragments (<>...</>, <React.Fragment>)
 */
export default function Fragments({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "fragments";

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
                <span>Fragments (&lt;&gt;...&lt;/&gt;, &lt;React.Fragment&gt;)</span>
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
                A <strong>Fragment</strong> lets you group multiple children without adding an extra DOM element.
                <br />
                It's an "invisible wrapper"-perfect when you must return one parent but don't want a real wrapper
                like <code>&lt;div&gt;</code> to affect layout or styling.
            </p>

            <h3>A) Why fragments?</h3>
            <Styled.Code>{`// ❌ Adds unwanted wrapper <div> to the DOM
function Card() {
  return (
    <div>
      <h3>Title</h3>
      <p>Details</p>
    </div>
  );
}

// ✅ No extra node in the DOM (Fragment disappears at runtime)
function Card() {
  return (
    <>
      <h3>Title</h3>
      <p>Details</p>
    </>
  );
}`}</Styled.Code>

            <h3>B) Two forms</h3>
            <ul>
                <li><strong>Shorthand:</strong> <code>&lt;&gt;...&lt;/&gt;</code> (can't take <em>any</em> props).</li>
                <li><strong>Long form:</strong> <code>&lt;React.Fragment&gt;...&lt;/React.Fragment&gt;</code> (can take a <code>key</code>).</li>
            </ul>
            <Styled.Code>{`// Shorthand (no props, no key)
<>
  <Item />
  <Actions />
</>

// Long form (use when you need a key on the group)
<React.Fragment key={row.id}>
  <td>{row.name}</td>
  <td>{row.price}</td>
</React.Fragment>`}</Styled.Code>

            <h3>C) Lists: group multiple siblings and key the Fragment</h3>
            <p>
                When mapping and you need to return <em>multiple siblings</em> per item, wrap them in a keyed Fragment.
                The shorthand cannot accept a key, so use the long form.
            </p>
            <Styled.Code>{`const data = [
  { id: 1, name: "A", note: "alpha" },
  { id: 2, name: "B", note: "beta" },
];

function List() {
  return (
    <ul>
      {data.map(item => (
        <React.Fragment key={item.id}>
          <li>{item.name}</li>
          <li className="muted">{item.note}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}</Styled.Code>

            <h3>D) Tables: return multiple &lt;tr&gt; or multiple &lt;td&gt; cleanly</h3>
            <p>
                Fragments help keep valid table structure without inserting a div/spin wrapper that would break HTML.
            </p>
            <Styled.Code>{`// 1) Return multiple <tr> per item
<tbody>
  {groups.map(g => (
    <React.Fragment key={g.id}>
      <tr><th colSpan={2}>{g.title}</th></tr>
      {g.rows.map(r => (
        <tr key={r.id}>
          <td>{r.label}</td>
          <td>{r.value}</td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>

// 2) Return multiple <td> inside a single <tr>
<tr>
  {rows.map(r => (
    <React.Fragment key={r.id}>
      <td>{r.label}</td>
      <td>{r.value}</td>
    </React.Fragment>
  ))}
</tr>`}</Styled.Code>

            <h3>E) Conditional wrappers without extra DOM</h3>
            <Styled.Code>{`function TitleBlock({ showSubtitle }) {
  return (
    <>
      <h2>Dashboard</h2>
      {showSubtitle && <p className="muted">Welcome back</p>}
    </>
  );
}`}</Styled.Code>

            <h3>F) Fragment vs Array</h3>
            <ul>
                <li><strong>Fragment:</strong> more readable, no array brackets, no need to add keys unless mapping.</li>
                <li><strong>Array:</strong> you can return <code>[child1, child2]</code> directly-but every child needs a key.</li>
            </ul>
            <Styled.Code>{`// Returning an array works, but needs keys
return [
  <li key="a">A</li>,
  <li key="b">B</li>,
];`}</Styled.Code>

            <h3>G) When NOT to use a Fragment</h3>
            <ul>
                <li>You need attributes (e.g., <code>className</code>, <code>style</code>, <code>data-*</code>) on the wrapper.</li>
                <li>You need to target the wrapper in CSS or with refs-use a real element instead.</li>
            </ul>

            <h3>Common mistakes</h3>
            <ul>
                <li>Trying to pass props to the shorthand <code>&lt;&gt;</code>-it can't take any.</li>
                <li>Forgetting a <code>key</code> when mapping groups with a Fragment.</li>
                <li>Wrapping where semantics matter-always keep valid HTML structure (Fragments won't break it).</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Replace the wrapper div with a Fragment (no DOM change):
                    <Styled.Code>{`function Info() {
  return (
    <div>
      <strong>Total</strong>
      <span> ₹999 </span>
    </div>
  );
}`}</Styled.Code>
                </li>
                <li>
                    Map items so each renders two <code>&lt;li&gt;</code> siblings without an extra wrapper, with proper keys.
                </li>
                <li>
                    Build a table where each product renders a header row and a details row using a keyed Fragment.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use Fragments to avoid extra DOM wrappers.</li>
                <li>Shorthand <code>&lt;&gt;</code> has no props; use <code>&lt;React.Fragment key=...&gt;</code> when mapping.</li>
                <li>Great for lists/tables and conditional grouping.</li>
                <li>If you need classes/styles/refs on the wrapper, use a real element instead.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
