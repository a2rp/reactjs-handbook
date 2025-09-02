import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Sets & Maps (when they help)
 */
export default function SetsAndMaps({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "sets-and-maps";

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
                <span>Sets &amp; Maps (when they help)</span>
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
                Use a <strong>Set</strong> for unique values + fast <code>has</code> checks.
                Use a <strong>Map</strong> for key→value where keys can be <em>any type</em> (objects, arrays, functions), with stable iteration order.
            </p>

            <h3>A) Set - unique values &amp; fast membership</h3>
            <Styled.Code>{`const s = new Set([1, 2, 2, 3]);
console.log([...s]);                       // [1, 2, 3] (deduped)
s.add(4).add(4);
console.log(s.has(2), s.size);             // true 3
s.delete(1);
console.log([...s]);                       // [2, 3, 4]

// SameValueZero equality → NaN equals NaN in Set
const z = new Set([NaN, NaN]);
console.log(z.size);                       // 1

// Convert array -> unique array
const unique = arr => [...new Set(arr)];
console.log(unique([2,2,3,1,3]));          // [2, 3, 1]`}</Styled.Code>

            <h3>B) Set operations - union, intersection, difference</h3>
            <Styled.Code>{`const A = new Set([1,2,3]);
const B = new Set([3,4]);

const union = new Set([...A, ...B]);
console.log([...union]);                   // [1,2,3,4]

const intersection = new Set([...A].filter(x => B.has(x)));
console.log([...intersection]);            // [3]

const difference = new Set([...A].filter(x => !B.has(x)));
console.log([...difference]);              // [1,2]`}</Styled.Code>

            <h3>C) Map - key→value with any key type</h3>
            <Styled.Code>{`const m = new Map([["id", 1], ["name", "Ash"]]);
console.log(m.get("id"), m.has("name"), m.size);  // 1 true 2
m.set("role", "dev").set("city", "BLR");
console.log([...m.keys()]);                        // ["id","name","role","city"]

// Object keys as keys (identity-based)
const objKey = { k: 1 };
m.set(objKey, "value for obj");
console.log(m.get(objKey));                       // "value for obj"
console.log(m.get({ k: 1 }));                     // undefined (different reference)

// Convert object ↔ Map
const o = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(o));
console.log(mapFromObj.get("a"));                 // 1
const objFromMap = Object.fromEntries(mapFromObj);
console.log(objFromMap);                          // { a: 1, b: 2 }`}</Styled.Code>

            <h3>D) When Sets/Maps help vs Arrays/Objects</h3>
            <ul>
                <li><strong>Set</strong>: quick dedupe; O(1) membership checks (e.g., selected IDs, visited nodes).</li>
                <li><strong>Map</strong>: non-string keys; predictable insertion order; avoids prototype pitfalls of objects.</li>
                <li><strong>Object</strong>: best for JSON, simple string-keyed records, and ergonomic literals.</li>
            </ul>

            <h3>E) WeakSet / WeakMap (lifetime tied to object keys)</h3>
            <Styled.Code>{`// WeakMap keys must be objects; entries are GC'd when keys are unreachable
const wm = new WeakMap();
let k = {};
wm.set(k, { meta: "cached" });
console.log(wm.has(k));                           // true
k = null; // after GC, entry may disappear (can't reliably log timing)`}</Styled.Code>

            <h3>F) Practical React patterns</h3>
            <Styled.Code>{`// 1) Selected IDs as a Set (immutable updates)
const toggle = (selected, id) => {
  const next = new Set(selected);
  next.has(id) ? next.delete(id) : next.add(id);
  return next;
};
console.log([...toggle(new Set([1]), 1)]);        // [] (removed)
console.log([...toggle(new Set([1]), 2)]);        // [1,2]

// 2) Fast lookup with Map (id → item)
const list = [{id:1,n:"A"},{id:2,n:"B"}];
const byId = new Map(list.map(x => [x.id, x]));
console.log(byId.get(2).n);                       // "B"

// 3) Memoized cache keyed by complex keys (Map)
const cache = new Map();
const getSum = (a, b) => {
  const key = JSON.stringify([a, b]); // or array as key if stable reference
  if (cache.has(key)) return cache.get(key);
  const val = a + b;
  cache.set(key, val);
  return val;
};
console.log(getSum(2,3), getSum(2,3));            // 5 5 (second from cache)`}</Styled.Code>

            <h3>G) Pitfalls & tips</h3>
            <ul>
                <li><strong>Not JSON-serializable:</strong> <code>Set</code>/<code>Map</code> need conversion (e.g., <code>[...set]</code>, <code>Object.fromEntries(map)</code>).</li>
                <li><strong>Reference identity:</strong> Map keys compare by reference; use the same object instance or a stable string key.</li>
                <li><strong>Iteration order:</strong> Set/Map iterate in insertion order; use this for deterministic UI.</li>
                <li><strong>Shallow semantics:</strong> Sets don't deep-compare objects; two equal-shaped objects are different keys.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Need uniqueness or fast membership? → <strong>Set</strong>.</li>
                <li>Need keys that aren't strings? → <strong>Map</strong>.</li>
                <li>Convert before JSON/storage; prefer objects for raw API payloads.</li>
                <li>For React state, clone Sets/Maps to new instances to trigger updates.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
