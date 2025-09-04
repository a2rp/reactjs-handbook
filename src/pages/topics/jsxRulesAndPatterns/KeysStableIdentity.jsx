import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Keys (stable identity)
 */
export default function KeysStableIdentity({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "keys-stable-identity";

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
                <span>Keys (stable identity)</span>
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
                A <strong>key</strong> tells React "which child is which" across renders. With <em>stable</em> keys,
                React preserves the correct DOM and component <em>state</em> when items move, insert, or delete.
            </p>

            <h3>A) The basic rule</h3>
            <ul>
                <li>Use a <strong>stable id from your data</strong> as the <code>key</code> (e.g., <code>user.id</code>).</li>
                <li>Keys go on the <em>elements returned by the array</em> (the direct children of the map).</li>
                <li>Keys must be <strong>unique among siblings</strong> (not globally unique).</li>
            </ul>
            <Styled.Code>{`const todos = [
  { id: "t1", title: "Learn JSX" },
  { id: "t2", title: "Practice keys" },
];

<ul>
  {todos.map(t => <li key={t.id}>{t.title}</li>)}
</ul>`}</Styled.Code>

            <h3>B) Why not index keys? (State sticks to positions)</h3>
            <p>
                Using array index as key ties state to the <em>position</em>, not the item. On reorders/inserts/removals,
                you'll see wrong items "remember" state (like a checked box moving to another row).
            </p>
            <Styled.Code>{`// ❌ Index key causes state bugs when list changes
function BadList({ items }) {
  const [checked, setChecked] = React.useState({});
  return (
    <ul>
      {items.map((it, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={!!checked[it.id]}
              onChange={() => setChecked(c => ({ ...c, [it.id]: !c[it.id] }))}
            />
            {it.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

// ✅ Use stable ids to keep identity attached to the item
function GoodList({ items }) {
  const [checked, setChecked] = React.useState({});
  return (
    <ul>
      {items.map(it => (
        <li key={it.id}>
          <label>
            <input
              type="checkbox"
              checked={!!checked[it.id]}
              onChange={() => setChecked(c => ({ ...c, [it.id]: !c[it.id] }))}
            />
            {it.label}
          </label>
        </li>
      ))}
    </ul>
  );
}`}</Styled.Code>

            <h3>C) Where to put the key (correct placement)</h3>
            <p>Put the key on the element returned from <code>map()</code>. If you extract an item component, put the key on the usage, not inside the child.</p>
            <Styled.Code>{`// ❌ Key inside child is ignored for the outer list
function TodoItem({ todo }) {
  return <li /* key={todo.id} - WRONG place */>{todo.title}</li>;
}
<ul>
  {todos.map(t => <TodoItem /* key should be here */ todo={t} />)}
</ul>

// ✅ Correct: key on the array's direct child
<ul>
  {todos.map(t => <TodoItem key={t.id} todo={t} />)}
</ul>`}</Styled.Code>

            <h3>D) Multiple siblings per item → keyed Fragment</h3>
            <p>When each item needs to render more than one sibling, wrap them in a <code>&lt;React.Fragment key=...&gt;</code>.</p>
            <Styled.Code>{`{rows.map(row => (
  <React.Fragment key={row.id}>
    <tr><th colSpan={2}>{row.title}</th></tr>
    <tr>
      <td>{row.left}</td>
      <td>{row.right}</td>
    </tr>
  </React.Fragment>
))}`}</Styled.Code>

            <h3>E) Composite keys (when no single id)</h3>
            <p>Create a stable composite key from stable parts (avoid <code>Math.random()</code> or timestamps).</p>
            <Styled.Code>{`// Grid cells: combine row + col ids
{grid.map(row => (
  <tr key={row.id}>
    {row.cells.map(col => (
      <td key={row.id + ":" + col.id}>{col.value}</td>
    ))}
  </tr>
))}`}</Styled.Code>

            <h3>F) When is using index "okay"?</h3>
            <ul>
                <li>List is <strong>static</strong> (no insert/reorder/remove) and purely presentational.</li>
                <li>No stateful child components inside the list items.</li>
                <li>Data has no stable id and you won't change the list order during the component's life.</li>
            </ul>
            <Styled.Code>{`// Mostly static icons row (no reorders) -> index is acceptable
const icons = [HomeIcon, SearchIcon, UserIcon];
<nav>
  {icons.map((Icon, i) => <Icon key={i} aria-hidden="true" />)}
</nav>`}</Styled.Code>

            <h3>G) Common mistakes</h3>
            <ul>
                <li><strong>Random keys</strong> (<code>Math.random()</code>) → change every render, forcing remounts.</li>
                <li>Using <strong>unstable derived values</strong> (like array index, or <code>JSON.stringify(obj)</code> when the object is recreated each time).</li>
                <li>Putting the key on a <em>descendant</em> instead of the mapped element.</li>
                <li>Duplicate keys among siblings → React warning; reconciliation becomes ambiguous.</li>
            </ul>
            <Styled.Code>{`// ❌ Bad: random key remounts every render
<li key={Math.random()}>{title}</li>

// ❌ Bad: object reference changes each render
<li key={item}>{item.title}</li> // key becomes "[object Object]" and is unstable

// ✅ Good: stable data id
<li key={item.id}>{item.title}</li>`}</Styled.Code>

            <h3>H) Demo: reordering with and without stable keys</h3>
            <Styled.Code>{`// Try moving the first item to the end; with index keys, a focused input may jump
function Row({ item }) {
  const [text, setText] = React.useState(item.label);
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function BadReorder({ items }) {
  return items.map((it, i) => <Row key={i} item={it} />);
}

function GoodReorder({ items }) {
  return items.map(it => <Row key={it.id} item={it} />);
}`}</Styled.Code>

            <h3>I) Checklist</h3>
            <ul>
                <li>Prefer <strong>stable ids</strong> from data as keys.</li>
                <li>Key the <em>direct child</em> returned from <code>map()</code>.</li>
                <li>Avoid index keys if items can be re-ordered/inserted/removed or contain state.</li>
                <li>Use keyed <code>React.Fragment</code> when returning multiple siblings per item.</li>
                <li>Composite keys are fine if built from stable parts.</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Fix the key placement:
                    <Styled.Code>{`function Item({ user }) { return <li>{user.name}</li>; }
<ul>
  {users.map(u => <Item user={u} />)}   // where should key go?
</ul>`}</Styled.Code>
                </li>
                <li>
                    Replace index keys with stable keys in a list where items can be deleted.
                </li>
                <li>
                    Build a 2D table from <code>{`rows: {id, cells: {id, value}[] }[]`}</code> using composite keys.
                </li>
            </ol>

            <Styled.Divider />
        </Styled.Content>
    );
}
