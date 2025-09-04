import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Comments in JSX
 */
export default function CommentsInJSX({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "comments-in-jsx";

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
                <span>Comments in JSX</span>
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
                In <strong>JavaScript regions</strong> (outside JSX), use normal <code>//</code> and <code>/* ... */</code>.
                Inside <strong>JSX</strong> (between tags), wrap comments in <code>{`{/* ... */}`}</code>.
            </p>

            <h3>A) Outside vs inside JSX</h3>
            <Styled.Code>{`// ✅ JS comments anywhere outside JSX
function Panel({ title }) {
  // compute something
  const big = title.length > 10; /* multi-line ok too */

  return (
    <section>
      {/* ✅ JSX comment: between elements/children */}
      <h3>{title}</h3>
      <p>Content</p>
    </section>
  );
}`}</Styled.Code>

            <h3>B) JSX comment syntax</h3>
            <p>Use curly braces with a JS block comment. Works single-line or multi-line.</p>
            <Styled.Code>{`<>
  {/* single-line */}
  <h4>Heading</h4>

  {/* 
    multi-line
    explains the section below 
  */}
  <p>Details...</p>
</>`}</Styled.Code>

            <h3>C) Comments near props & in attribute expressions</h3>
            <ul>
                <li>Between props (rarely needed) block comments may parse, but avoid-tooling can be inconsistent.</li>
                <li>Prefer commenting <em>inside</em> an expression or on its own line.</li>
            </ul>
            <Styled.Code>{`// ✅ comment inside a prop expression
<button title={/* i18n: tooltip for save */ "Save"}>Save</button>

// ✅ comment above the element/prop
// primary action button
<button className="primary">Go</button>

// ⚠️ Works in many setups but avoid for portability
// <button /* primary */ className="primary">Go</button>`}</Styled.Code>

            <h3>D) Commenting out blocks temporarily</h3>
            <p>
                To "disable" a block, wrap it in a JSX comment, or better, render <code>null</code> using a condition.
            </p>
            <Styled.Code>{`// 1) Comment out JSX
<div>
  {/* <Sidebar /> */}
  <Main />
</div>

// 2) Prefer conditional (more explicit)
{showSidebar ? <Sidebar /> : null}`}</Styled.Code>

            <h3>E) Comments inside lists & fragments</h3>
            <p>Comments can live anywhere children can.</p>
            <Styled.Code>{`<>
  {/* header */}
  <h2>Todos</h2>

  <ul>
    {items.map((t) => (
      <li key={t.id}>
        {t.title}
        {/* show meta only for debug */}
        {debug && <small className="muted">#{t.id}</small>}
      </li>
    ))}
  </ul>
</>`}</Styled.Code>

            <h3>F) Common mistakes</h3>
            <ul>
                <li>Using <code>//</code> directly inside JSX → ❌ (must be <code>{`{/* ... */}`}</code>).</li>
                <li>Placing comments inside string literals (they’ll render as text).</li>
                <li>Leaving big commented blocks permanently-prefer deleting or feature-flagging.</li>
            </ul>
            <Styled.Code>{`// ❌ Wrong (inside JSX)
// <div>// not a valid comment here</div>

// ✅ Right
<div>{/* comment inside JSX */}</div>`}</Styled.Code>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Fix the comments:
                    <Styled.Code>{`return (
  <div>
    // Title area
    <h3>Profile</h3>
    <p>Bio</p>
  </div>
);`}</Styled.Code>
                </li>
                <li>
                    Comment the tooltip prop without breaking JSX:
                    <Styled.Code>{`<button title="Delete">Delete</button>`}</Styled.Code>
                </li>
                <li>
                    Temporarily disable rendering of <code>&lt;Footer /&gt;</code> without deleting it.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>{`{/* ... */}`}</code> inside JSX; normal comments elsewhere.</li>
                <li>Comment inside prop expressions or above the element (avoid between-prop comments).</li>
                <li>For temporary removal, prefer conditional rendering (<code>{`cond ? <X/> : null`}</code>).</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
