import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Flat / FlatMap
 */
export default function FlatAndFlatMap({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "flat-and-flatmap";

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
                <span>Flat / FlatMap (flatten arrays & map+flatten)</span>
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
                <code>flat</code> removes one or more levels of nesting and returns a <strong>new array</strong>.
                <code> flatMap</code> = <code>map</code> then <code>flat(1)</code> in a single pass.
            </p>

            <h3>A) <code>flat</code> - basics &amp; depth</h3>
            <Styled.Code>{`const a = [1, [2, 3], [4, [5]]];

console.log(a.flat());                 // [1, 2, 3, 4, [5]]       (default depth = 1)
console.log(a.flat(2));                // [1, 2, 3, 4, 5]
console.log(a.flat(Infinity));         // [1, 2, 3, 4, 5]         (flatten all levels)

// Original is unchanged:
console.log(a);                        // [1, [2,3], [4, [5]]]`}</Styled.Code>

            <h3>B) Holes (sparse arrays) are removed</h3>
            <Styled.Code>{`const sparse = [1, , 3, [ , 4 ]];
// flat removes empty slots
console.log(sparse.flat());            // [1, 3, 4]`}</Styled.Code>

            <h3>C) <code>flatMap</code> - map then flatten once</h3>
            <Styled.Code>{`const sentences = ["hi there", "good day"];
// split words from each sentence and flatten
const words = sentences.flatMap(s => s.split(" "));
console.log(words);                    // ["hi", "there", "good", "day"]

// Equivalent two-step:
console.log(sentences.map(s => s.split(" ")).flat());
// [["hi","there"],["good","day"]] → ["hi","there","good","day"]

// Remove nulls while mapping:
const items = [1, null, 2, null];
const cleaned = items.flatMap(x => (x == null ? [] : [x]));
console.log(cleaned);                  // [1, 2]`}</Styled.Code>

            <h3>D) API pagination → flatten pages</h3>
            <Styled.Code>{`const pages = [
  { items: [1, 2] },
  { items: [3] },
  { items: [] },
];
const all = pages.flatMap(p => p.items);
console.log(all);                      // [1, 2, 3]`}</Styled.Code>

            <h3>E) Nested mapping patterns</h3>
            <Styled.Code>{`// turn groups -> list of user ids
const groups = [
  { team: "A", users: [{id:1},{id:2}] },
  { team: "B", users: [{id:3}] },
];
const userIds = groups.flatMap(g => g.users.map(u => u.id));
console.log(userIds);                  // [1, 2, 3]

// one level only! deeper arrays need an extra flat:
const deep = [ [ [1] ], [ [2, 3] ] ];
console.log(deep.flatMap(x => x).flat()); // [[1], [2, 3]] → [1, 2, 3]`}</Styled.Code>

            <h3>F) React-friendly patterns</h3>
            <Styled.Code>{`// 1) Flatten sectioned menu items before rendering
const sections = [
  { title: "A", items: ["Home", "Docs"] },
  { title: "B", items: ["Blog"] },
];
const flatItems = sections.flatMap(s => s.items);
console.log(flatItems);                // ["Home","Docs","Blog"]
// flatItems.map(label => <li key={label}>{label}</li>)

// 2) Build props from nested sources
const sources = [{ props: [{k:"a",v:1},{k:"b",v:2}] }, { props: [{k:"c",v:3}] }];
const propsObj = Object.fromEntries(
  sources.flatMap(s => s.props.map(p => [p.k, p.v]))
);
console.log(propsObj);                 // { a:1, b:2, c:3 }`}</Styled.Code>

            <h3>G) Performance tips</h3>
            <ul>
                <li><strong>flat</strong> returns a copy; heavy flattening (<code>Infinity</code>) can allocate big arrays.</li>
                <li>Prefer <code>flatMap</code> over <code>map().flat()</code> for one-level cases (fewer passes).</li>
                <li>Keep mapping callbacks pure; avoid pushing into outer arrays inside the callback.</li>
            </ul>

            <h3>H) Pitfalls &amp; gotchas</h3>
            <ul>
                <li><strong>Depth:</strong> default is 1. If your output is still nested, pass a deeper depth or add another <code>flat</code>.</li>
                <li><strong>Not deep merge:</strong> flattening arrays of objects doesn't merge objects-just removes array nesting.</li>
                <li><strong>Sparse arrays:</strong> empty slots are removed by <code>flat</code>; don't rely on their indexes later.</li>
                <li><strong>Legacy runtimes:</strong> very old environments may lack <code>flat/flatMap</code>; consider a polyfill if needed.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Need to remove one nesting level? → <strong>flat()</strong> (or set <em>depth</em>).</li>
                <li>Need map + flatten(1) in one go? → <strong>flatMap(fn)</strong>.</li>
                <li>Watch out for sparse arrays-they collapse.</li>
                <li>Avoid <code>Infinity</code> unless you really need full flattening.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
