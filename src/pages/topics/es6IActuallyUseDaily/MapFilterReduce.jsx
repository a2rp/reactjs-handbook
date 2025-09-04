import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Map / Filter / Reduce
 */
export default function MapFilterReduce({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "map-filter-reduce";

    return (
        <Styled.Topic>
            <Styled.Title
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                data-open={open}
            >
                <Styled.Arrow data-open={open}>▸</Styled.Arrow>
                <span>Map / Filter / Reduce (transform, select, aggregate)</span>
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
            <div style={{ marginBottom: "30px" }}>
                Three array workhorses:
                <ul>
                    <li><strong>map</strong> transforms each item,</li>
                    <li><strong>filter</strong> keeps matching items, and </li>
                    <li><strong>reduce</strong> folds many values into one (sum, object, etc.).</li>
                </ul>
                All return <em> new arrays/values</em> and do not mutate the original.
            </div>

            <h3>A) map - transform each item</h3>
            <Styled.Code>{`const nums = [1, 2, 3];
const squares = nums.map(n => n * 2);
console.log(squares);                         // [2, 4, 6]
console.log(nums);                            // [1, 2, 3] (unchanged)

// index & array are available
const withIndex = nums.map((n, i) => n + i);
console.log(withIndex);                       // [1, 3, 5]

// Map objects
const users = [{ id: 1, name: "Ash" }, { id: 2, name: "Riya" }];
const names = users.map(u => u.name);
console.log(names);                           // ["Ash", "Riya"]

// parseInt pitfall: map passes (value, index) → index becomes radix!
console.log(["10","11","12"].map(parseInt));  // [10, NaN, 1]  (wrong)
console.log(["10","11","12"].map(x => parseInt(x, 10))); // [10, 11, 12]
console.log(["10","11","12"].map(Number));    // [10, 11, 12]`}</Styled.Code>

            <h3>B) filter - keep items that pass the test</h3>
            <Styled.Code>{`const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(n => n % 2 === 0);
console.log(evens);                           // [2, 4, 6]

// Remove null/undefined quickly
const messy = [0, null, "hi", undefined, false];
console.log(messy.filter(Boolean));           // ["hi"] (drops 0/false too!)
console.log(messy.filter(v => v != null));    // [0, "hi", false] (keeps 0/false)

// Unique with filter + indexOf
const dups = [2,2,3,3,3,1];
const unique = dups.filter((n, i, a) => a.indexOf(n) === i);
console.log(unique);                          // [2, 3, 1]`}</Styled.Code>

            <h3>C) reduce - fold into a single value</h3>
            <Styled.Code>{`const nums = [5, 2, 7];

// sum
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);                             // 14

// max
const max = nums.reduce((m, n) => n > m ? n : m, -Infinity);
console.log(max);                             // 7

// build an object (index by id)
const list = [{id: 1, name: "Ash"}, {id: 2, name: "Riya"}];
const byId = list.reduce((acc, u) => { acc[u.id] = u; return acc; }, {});
console.log(byId);                            // { '1': {...}, '2': {...} }

// count occurrences (frequency map)
const letters = ["a","b","a","c","b","a"];
const freq = letters.reduce((acc, ch) => (acc[ch] = (acc[ch]||0)+1, acc), {});
console.log(freq);                            // { a: 3, b: 2, c: 1 }

// groupBy
const people = [
  { team: "A", name: "Ash" },
  { team: "B", name: "Riya" },
  { team: "A", name: "Dev" },
];
const groups = people.reduce((acc, p) => {
  (acc[p.team] ||= []).push(p);
  return acc;
}, {});
console.log(Object.keys(groups));             // ["A", "B"]`}</Styled.Code>

            <h3>D) Chain them - readable pipelines</h3>
            <Styled.Code>{`const nums = [1,2,3,4,5,6];
const result = nums
  .filter(n => n % 2 === 0)   // keep evens → [2,4,6]
  .map(n => n * n)            // square     → [4,16,36]
  .reduce((a, n) => a + n, 0);// sum        → 56
console.log(result);                          // 56`}</Styled.Code>

            <h3>E) Immutability & side-effects</h3>
            <Styled.Code>{`const a = [1,2,3];

// Do NOT mutate the same array while mapping/filtering
// Bad:
const bad = a.map(n => { a.push(99); return n; });
console.log(a.length, bad.length);            // 6 3 (weird bugs)

// Good: treat callbacks as pure functions
const good = a.map(n => n * 10);
console.log(good);                            // [10, 20, 30]`}</Styled.Code>

            <h3>F) Practical React patterns</h3>
            <Styled.Code>{`// 1) Render lists
const items = ["Home","Docs","Blog"];
// items.map((t) => <li key={t}>{t}</li>)

// 2) Derive totals
const cart = [{price: 100, qty: 2}, {price: 50, qty: 1}];
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(total);                           // 250

// 3) Update state immutably (map to replace one item)
const toggle = (todos, id) =>
  todos.map(t => t.id === id ? { ...t, done: !t.done } : t);

// 4) Keys: prefer stable ids over array index
// <li key={todo.id}>...</li>`}</Styled.Code>

            <h3>G) Pitfalls & tips</h3>
            <ul>
                <li><strong>map</strong> must return a value each time; forgetting a return gives an array of undefined.</li>
                <li><strong>filter</strong> expects a boolean; return the condition directly.</li>
                <li><strong>reduce</strong>: always provide an initial value (especially for empty arrays).</li>
                <li>For deep transforms, consider <code>flatMap</code> or a single well-named <code>reduce</code> for clarity.</li>
                <li>Don't mutate items inside callbacks; return new objects/arrays.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Transform → <strong>map</strong>; select → <strong>filter</strong>; aggregate → <strong>reduce</strong>.</li>
                <li>Keep callbacks pure; no side-effects.</li>
                <li>Give <code>reduce</code> an initial accumulator.</li>
                <li>Prefer pipeline readability over micro-optimizing chains.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
