import React from "react";
import { Styled } from "../styled";

/**
 * Topic – Arrays in state (immutability)
 */
export default function ArraysInState({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "arrays-in-state";

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
                <span>Arrays in state (immutability)</span>
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
                Arrays in React state must be treated <strong>immutably</strong>. Don't mutate with
                <code>push</code>/<code>splice</code>/<code>sort</code>; instead return <em>new arrays</em>
                using spread, <code>map</code>, <code>filter</code>, or the newer
                <code>toSorted</code>/<code>toReversed</code>/<code>toSpliced</code>.
            </p>

            <h3>A) Add / remove / update by id</h3>
            <Styled.Code>{`function Todos() {
  const [items, setItems] = React.useState([
    { id: "a", title: "JSX" },
    { id: "b", title: "State" },
  ]);

  // Add
  const add = (title) =>
    setItems(prev => [...prev, { id: crypto.randomUUID(), title }]);

  // Remove
  const remove = (id) =>
    setItems(prev => prev.filter(t => t.id !== id));

  // Update
  const rename = (id, title) =>
    setItems(prev => prev.map(t => (t.id === id ? { ...t, title } : t)));

  return (
    <>
      <ul>{items.map(t => <li key={t.id}>{t.title}</li>)}</ul>
      <button onClick={() => add("New")}>Add</button>
      <button onClick={() => rename("a", "JSX ✅")}>Rename first</button>
      <button onClick={() => remove("b")}>Remove second</button>
    </>
  );
}`}</Styled.Code>

            <h3>B) Don't mutate: push/splice/sort vs immutable forms</h3>
            <Styled.Code>{`const [nums, setNums] = React.useState([3,1,2]);

// ❌ Mutates in place
// setNums(nums); nums.push(4);
// setNums(nums); nums.sort(); // mutates

// ✅ Immutable add
setNums(prev => [...prev, 4]);

// ✅ Immutable remove-at (index i)
setNums(prev => prev.filter((_, i) => i !== 1));

// ✅ Immutable replace-at
setNums(prev => prev.map((n, i) => (i === 0 ? 99 : n)));

// ✅ Sort without mutating (copy first)
setNums(prev => [...prev].sort((a,b) => a - b));

// ✅ Modern non-mutating helpers (where supported)
setNums(prev => prev.toSorted((a,b) => a - b));   // copy + sort
setNums(prev => prev.toReversed());               // copy + reverse
setNums(prev => prev.toSpliced(1, 1, 42));        // copy + splice
`}</Styled.Code>

            <h3>C) Insert at a position</h3>
            <Styled.Code>{`const insertAt = (arr, index, item) => [
  ...arr.slice(0, index),
  item,
  ...arr.slice(index),
];

// Usage
setItems(prev => insertAt(prev, 1, { id: "x", title: "Inserted" }));
// or with toSpliced: setItems(prev => prev.toSpliced(1, 0, newItem));`}</Styled.Code>

            <h3>D) Toggle membership (ids) without mutation</h3>
            <Styled.Code>{`const [selected, setSelected] = React.useState([]); // array of ids

function toggle(id) {
  setSelected(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );
}`}</Styled.Code>

            <h3>E) Avoid reusing the same array reference</h3>
            <p>
                React compares state with <code>Object.is</code>. If you mutate and pass the same array reference back,
                React may skip re-render. Always return a <em>new array</em>.
            </p>
            <Styled.Code>{`// ❌ Wrong: in-place push then set the same ref
// items.push(newItem); setItems(items);

// ✅ Right: create a new array
setItems(prev => [...prev, newItem]);`}</Styled.Code>

            <h3>F) Nested arrays (copy each level you change)</h3>
            <Styled.Code>{`function Board() {
  const [lists, setLists] = React.useState([
    { id: "L1", cards: [{ id: "c1", text: "A" }] },
  ]);

  // Move a card to the end of the same list
  const move = (listId, cardId) => {
    setLists(prev => prev.map(list => {
      if (list.id !== listId) return list;
      const cards = list.cards;
      const idx = cards.findIndex(c => c.id === cardId);
      if (idx < 0) return list;
      const card = cards[idx];
      // copy each level we change
      const nextCards = [...cards.slice(0, idx), ...cards.slice(idx + 1), card];
      return { ...list, cards: nextCards };
    }));
  };

  return null;
}`}</Styled.Code>

            <h3>G) Keys & identity (quick reminder)</h3>
            <ul>
                <li>Use a <strong>stable id</strong> for <code>key</code> when mapping arrays. Avoid index keys if items can reorder.</li>
                <li>When duplicating/updating items, keep their ids stable so component state doesn't “jump”.</li>
            </ul>

            <h3>H) Common mistakes</h3>
            <ul>
                <li>Calling mutating methods (<code>push</code>, <code>splice</code>, <code>sort</code>) directly on state arrays.</li>
                <li>Setting the same mutated reference (<code>setItems(items)</code>) and wondering why nothing re-rendered.</li>
                <li>Forgetting to copy nested arrays/objects at each modified level.</li>
                <li>Using index as key in lists that change order or have stateful children.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>map</code>/<code>filter</code>/<code>[...prev]</code> (or <code>toSorted</code>/<code>toReversed</code>/<code>toSpliced</code>) for immutable updates.</li>
                <li>Return a <strong>new array</strong> from setters; never mutate in place.</li>
                <li>Copy each level you modify for nested structures.</li>
                <li>Prefer stable ids for list keys; avoid index when reordering.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
