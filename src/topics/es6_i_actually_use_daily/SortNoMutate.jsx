import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Sort (without mutating)
 */
export default function SortNoMutate({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "sort-without-mutating";

    return (
        <Styled.Topic>
            <Styled.Title
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                data-open={open}
            >
                <Styled.Arrow data-open={open}>▸</Styled.Arrow>
                <span>Sort (without mutating) - <code>toSorted</code>, copy+sort</span>
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
                <code>Array.prototype.sort()</code> sorts <em>in place</em> (it <strong>mutates</strong> the array).
                For immutable code, use <code>toSorted()</code> (best) or clone first and then <code>sort()</code>.
            </p>

            <h3>A) The mutation gotcha</h3>
            <Styled.Code>{`const a = [3, 1, 2];
const b = a.sort();                 // MUTATES 'a'
console.log(a);                     // [1, 2, 3]
console.log(b);                     // [1, 2, 3] (same reference)
`}</Styled.Code>

            <h3>B) Safe patterns (no mutation)</h3>
            <Styled.Code>{`// 1) Modern: toSorted (returns a new array)
const nums = [3, 10, 2];
const asc = nums.toSorted((x, y) => x - y);
console.log(nums);                  // [3, 10, 2]  (unchanged)
console.log(asc);                   // [2, 3, 10]

// 2) Classic: copy then sort
const copyAsc = [...nums].sort((x, y) => x - y);
console.log(copyAsc);               // [2, 3, 10]
`}</Styled.Code>

            <h3>C) Numbers - ascending/descending</h3>
            <Styled.Code>{`const n = [10, 2, 5, 1];

// Default sort is lexicographic (strings) - wrong for numbers:
console.log([...n].sort());         // [1, 10, 2, 5]  (not numeric)

// Correct numeric comparators:
const asc = n.toSorted((a, b) => a - b);
console.log(asc);                   // [1, 2, 5, 10]

const desc = n.toSorted((a, b) => b - a);
console.log(desc);                  // [10, 5, 2, 1]
`}</Styled.Code>

            <h3>D) Strings - locale & case</h3>
            <Styled.Code>{`const cities = ["mumbai", "Delhi", "bengaluru"];

// ASCII compare (case-sensitive)
console.log([...cities].sort());    
// ["Delhi", "bengaluru", "mumbai"]

// Locale/case-insensitive + numeric aware
const nice = cities.toSorted((a, b) => 
  a.localeCompare(b, "en-IN", { sensitivity: "base", numeric: true })
);
console.log(nice);
// ["bengaluru", "Delhi", "mumbai"]
`}</Styled.Code>

            <h3>E) Dates - by timestamp</h3>
            <Styled.Code>{`const dates = [new Date("2025-01-01"), new Date("2024-12-31")];
const byTime = dates.toSorted((a, b) => a - b);
console.log(byTime.map(d => d.toISOString().slice(0,10)));
// ["2024-12-31", "2025-01-01"]
`}</Styled.Code>

            <h3>F) Objects - by field, with nulls-last</h3>
            <Styled.Code>{`const people = [
  { name: "Ash",  score: 7 },
  { name: "Riya", score: null },
  { name: "Dev",  score: 9 },
];

// Sort by score asc; put null/undefined at the end:
const nullsLast = (v) => (v == null ? Infinity : v);
const byScore = people.toSorted((a, b) => nullsLast(a.score) - nullsLast(b.score));
console.log(byScore.map(p => p.name));        // ["Ash", "Dev", "Riya"]

// Sort by name (case-insensitive)
const byName = people.toSorted((a, b) =>
  a.name.localeCompare(b.name, "en-IN", { sensitivity: "base" })
);
console.log(byName.map(p => p.name));         // ["Ash", "Dev", "Riya"]
`}</Styled.Code>

            <h3>G) Multi-key sort (tie-breakers)</h3>
            <Styled.Code>{`const rows = [
  { team: "A", points: 10, name: "Ash" },
  { team: "A", points: 10, name: "Dev" },
  { team: "B", points: 12, name: "Riya" },
];

// Primary: team asc; Secondary: points desc; Tertiary: name asc
const cmp = (a, b) =>
  a.team.localeCompare(b.team) ||
  (b.points - a.points) ||
  a.name.localeCompare(b.name);

const sorted = rows.toSorted(cmp);
console.log(sorted.map(r => \`\${r.team}-\${r.points}-\${r.name}\`));
// ["A-10-Ash", "A-10-Dev", "B-12-Riya"]
`}</Styled.Code>

            <h3>H) React-friendly patterns</h3>
            <Styled.Code>{`// 1) Never mutate props/state directly
// BAD: props.items.sort(...)
function SortedList({ items }) {
  const sorted = React.useMemo(
    () => items.toSorted((a, b) => a.label.localeCompare(b.label)),
    [items]
  );
  // return sorted.map(...)
}

// 2) Keep comparators pure and cheap; memoize heavy ones
const byLabel = (a, b) => a.label.localeCompare(b.label);
const sortedOnce = React.useMemo(() => data.toSorted(byLabel), [data]);

// 3) Avoid resorting on every render by precomputing in selectors/hooks
`}</Styled.Code>

            <h3>I) Pitfalls & tips</h3>
            <ul>
                <li><strong>Default sort is string-based.</strong> Always pass a comparator for numbers/dates.</li>
                <li><strong><code>sort()</code> mutates.</strong> Prefer <code>toSorted()</code> or clone before sorting.</li>
                <li><strong>Locale/case rules:</strong> use <code>localeCompare</code> with options for user-facing text.</li>
                <li><strong>Nulls/undefined:</strong> coerce to sentinel values (e.g., <code>Infinity</code>) or handle explicitly.</li>
                <li><strong>Multi-key:</strong> chain with <code>||</code> returning the first non-zero comparison.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Immutable? → <code>toSorted</code> (best) or <code>[...arr].sort(cmp)</code>.</li>
                <li>Numbers/dates → numeric comparator (<code>a-b</code>).</li>
                <li>Strings for UI → <code>localeCompare</code> with options.</li>
                <li>Define small, pure comparators; reuse them.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
