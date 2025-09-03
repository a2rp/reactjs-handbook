import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Rendering lists
 */
export default function RenderingLists({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "rendering-lists";

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
                <span>Rendering lists</span>
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
                In JSX, render collections with array methods like <code>map()</code>, often after a{" "}
                <code>filter()</code> or <code>sort()</code>. Each rendered item must have a{" "}
                <strong>stable <code>key</code></strong> (deep dive in the next topic: <em>Keys (stable identity)</em>).
            </p>

            <h3>A) Basics - map to elements</h3>
            <Styled.Code>{`const items = [
  { id: 1, title: "JSX" },
  { id: 2, title: "Lists" },
  { id: 3, title: "Rendering" },
];

function Basics() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.title}</li>   {/* key required */}
      ))}
    </ul>
  );
}`}</Styled.Code>

            <h3>B) Filter → map → (optional) slice/sort</h3>
            <p>Compose readable pipelines. Keep logic outside JSX if it's long.</p>
            <Styled.Code>{`function VisibleTodos({ todos, query }) {
  const list = todos
    .filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 10);

  return (
    <ul>
      {list.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  );
}`}</Styled.Code>

            <h3>C) Empty state gracefully</h3>
            <Styled.Code>{`function List({ items }) {
  if (!items?.length) return <p className="muted">No items yet</p>;
  return <ul>{items.map(i => <li key={i.id}>{i.title}</li>)}</ul>;
}`}</Styled.Code>

            <h3>D) Multiple siblings per item → use a keyed Fragment</h3>
            <p>Return more than one node per item without extra DOM wrappers.</p>
            <Styled.Code>{`function Pairs({ pairs }) {
  return (
    <ul>
      {pairs.map(p => (
        <React.Fragment key={p.id}>
          <li>{p.left}</li>
          <li className="muted">{p.right}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}</Styled.Code>

            <h3>E) Tables - map rows (and cells)</h3>
            <Styled.Code>{`function UsersTable({ users }) {
  if (!users?.length) return <p>No users</p>;
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Email</th></tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}`}</Styled.Code>

            <h3>F) Nested lists</h3>
            <Styled.Code>{`function Categories({ data }) {
  return (
    <div>
      {data.map(cat => (
        <section key={cat.id}>
          <h4>{cat.name}</h4>
          <ul>
            {cat.items.map(it => <li key={it.id}>{it.label}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}`}</Styled.Code>

            <h3>G) Extract an item component (keeps JSX clean)</h3>
            <Styled.Code>{`function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.title}
      </label>
    </li>
  );
}

function TodoList({ todos, onToggle }) {
  return <ul>{todos.map(t => <TodoItem key={t.id} todo={t} onToggle={onToggle} />)}</ul>;
}`}</Styled.Code>

            <h3>H) Keys (quick note - full details next)</h3>
            <ul>
                <li>Use a <strong>stable id</strong> from your data as <code>key</code> (not array index).</li>
                <li>Keys live on the <em>array's direct children</em>.</li>
                <li>Reordering/removing items needs stable keys to preserve component state per item.</li>
            </ul>

            <h3>I) Performance tips</h3>
            <ul>
                <li>Precompute big pipelines (<code>filter/sort/map</code>) before <code>return</code> for readability.</li>
                <li>Memoize expensive derived arrays with <code>useMemo</code> if inputs rarely change.</li>
                <li>Prefer <code>id</code> keys; avoid re-creating arrays unnecessarily in parents to reduce re-renders.</li>
            </ul>
            <Styled.Code>{`function HeavyList({ data, query }) {
  const visible = React.useMemo(() => {
    const q = query.toLowerCase();
    return data
      .filter(x => x.title.toLowerCase().includes(q))
      .sort((a,b) => a.title.localeCompare(b.title));
  }, [data, query]);

  return <ul>{visible.map(x => <li key={x.id}>{x.title}</li>)}</ul>;
}`}</Styled.Code>

            <h3>Common mistakes</h3>
            <ul>
                <li>Forgetting <code>key</code> or putting it on the wrong element.</li>
                <li>Using <code>index</code> as key (can break state on reorders). More on this in the next topic.</li>
                <li>Performing expensive computations inside <code>map</code> on every render-precompute outside.</li>
                <li>Returning <code>undefined</code> by accident (missing <code>return</code> in curly-body arrow functions).</li>
            </ul>
            <Styled.Code>{`// ❌ Curly body needs an explicit return
items.map(i => { <li>{i.title}</li> }); // undefined

// ✅ Implicit return with parens
items.map(i => (<li key={i.id}>{i.title}</li>));

// ✅ Or explicit return
items.map(i => { return <li key={i.id}>{i.title}</li>; });`}</Styled.Code>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Render products as a list with name + price (₹), sorted by price asc, limited to top 5.
                </li>
                <li>
                    Build a table of users (<code>{`{ id, name, role }`}</code>) and show only <code>role === "admin"</code>.
                </li>
                <li>
                    From an array of categories with nested <code>items</code>, render a section per category and a list of item labels.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Compose <code>filter → sort → map</code>.</li>
                <li>Each item needs a <strong>stable <code>key</code></strong> (covered in the next topic).</li>
                <li>Use keyed Fragments when returning multiple siblings per item.</li>
                <li>Show an empty state when the list is blank.</li>
                <li>Extract an Item component for cleaner JSX and easier reuse.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
