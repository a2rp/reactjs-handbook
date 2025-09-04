import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Promises & async/await
 */
export default function PromisesAsyncAwait({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "promises-async-await";

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
                <span>Promises &amp; async/await (patterns, errors, concurrency)</span>
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
                A <strong>Promise</strong> represents a value that will resolve later.
                <strong>async/await</strong> makes promise code read like sync code. Use <code>try/catch</code> for errors, and prefer <strong>concurrency</strong> helpers (<code>Promise.all</code>, etc.) for speed.
            </p>

            <h3>A) Make a Promise &amp; basic handlers</h3>
            <Styled.Code>{`// Create a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("OK"), 100);
});

p.then(v => console.log("then:", v))     // "then: OK"
 .catch(e => console.log("error:", e))
 .finally(() => console.log("done"));    // "done" (always runs)

// Shortcut: Promise.resolve / Promise.reject
Promise.resolve(42).then(x => console.log(x)); // 42`}</Styled.Code>

            <h3>B) Chain & propagate errors</h3>
            <Styled.Code>{`Promise.resolve(2)
  .then(x => x * 3)                        // 6
  .then(x => { throw new Error("boom"); })
  .then(() => "never")
  .catch(err => "handled: " + err.message)  // "handled: boom"
  .then(msg => console.log(msg));           // "handled: boom"`}</Styled.Code>

            <h3>C) async/await - sugar over promises</h3>
            <Styled.Code>{`async function work() {
  try {
    const a = await Promise.resolve(10);
    const b = await Promise.resolve(5);
    return a + b;
  } catch (e) {
    return -1; // or: throw e;
  } finally {
    // cleanup
  }
}

work().then(x => console.log(x));          // 15

// async functions always return a Promise
console.log(work() instanceof Promise);    // true`}</Styled.Code>

            <h3>D) Concurrent vs sequential (speed matters)</h3>
            <Styled.Code>{`// Slow (sequential): waits one by one
const t = () => new Promise(r => setTimeout(() => r(1), 100));
async function slow() {
  const a = await t();                     // ~100ms
  const b = await t();                     // ~200ms total
  return a + b;
}

// Fast (concurrent): start together, then await
async function fast() {
  const pa = t();                          // start
  const pb = t();                          // start
  const [a, b] = await Promise.all([pa, pb]); // ~100ms total
  return a + b;
}

slow().then(x => console.log("slow:", x)); // "slow: 2"
fast().then(x => console.log("fast:", x)); // "fast: 2"`}</Styled.Code>

            <h3>E) Promise helpers - all / allSettled / race / any</h3>
            <Styled.Code>{`const ok = (v, ms=50) => new Promise(r => setTimeout(() => r(v), ms));
const fail = (e, ms=50) => new Promise((_, rej) => setTimeout(() => rej(new Error(e)), ms));

// 1) all: fail-fast if any rejects
Promise.all([ok(1), ok(2)]).then(v => console.log(v));         // [1, 2]
// Promise.all([ok(1), fail("x")]).catch(e => console.log(e.message)); // "x"

// 2) allSettled: never rejects; gives statuses
Promise.allSettled([ok("A"), fail("B")]).then(r => console.log(r.map(x => x.status)));
// ["fulfilled", "rejected"]

// 3) race: first settled (resolve OR reject) wins
Promise.race([ok("first", 30), ok("second", 60)]).then(v => console.log(v)); // "first"

// 4) any: first fulfilled wins (ignores rejections until all reject)
// Promise.any([fail("X",30), ok("Y",40)]).then(v => console.log(v));        // "Y"`}</Styled.Code>

            <h3>F) Fetch JSON helper + timeout (AbortController)</h3>
            <Styled.Code>{`// NOTE: Full "Fetch basics + JSON" is its own topic.
// Minimal helper with timeout/abort:
async function fetchJSON(url, { timeout = 8000, ...opts } = {}) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, { ...opts, signal: ctrl.signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } finally {
    clearTimeout(id);
  }
}

// Example usage (won't run here):
// fetchJSON("/api/users").then(data => console.log(Array.isArray(data))); // true/false`}</Styled.Code>

            <h3>G) Loops: forEach pitfall, use for...of or Promise.all</h3>
            <Styled.Code>{`const delay = ms => new Promise(r => setTimeout(r, ms));

// ❌ forEach ignores async/await
async function bad(list) {
  list.forEach(async x => {
    await delay(50);
    console.log("done", x);   // runs later, bad control flow
  });
  console.log("returned");     // returns before items finish
}

// ✅ sequential
async function seq(list) {
  for (const x of list) {
    await delay(50);
    console.log("seq", x);    // "seq 1", "seq 2", ...
  }
}

// ✅ concurrent (start all then wait)
async function conc(list) {
  await Promise.all(list.map(async x => {
    await delay(50);
    return x * 2;
  }));
  console.log("all done");    // after ~50ms
}

bad([1,2]);    // "returned" (then logs later)
seq([1,2]);    // orderly
conc([1,2]);   // fast`}</Styled.Code>

            <h3>H) Microtasks vs macrotasks (timing)</h3>
            <Styled.Code>{`console.log("A");
Promise.resolve().then(() => console.log("B (microtask)"));
setTimeout(() => console.log("C (macrotask)"), 0);
console.log("D");
// Order: A, D, B (microtask), C (macrotask)`}</Styled.Code>

            <h3>I) Tiny promisify utility</h3>
            <Styled.Code>{`// Convert a callback API into a promise-based one
const promisify = (fn) => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

// Example (simulated):
function legacySum(a, b, cb) { setTimeout(() => cb(null, a + b), 20); }
const sumP = promisify(legacySum);
sumP(2,3).then(v => console.log(v));           // 5`}</Styled.Code>

            <h3>J) Practical React pattern (fetch in effect + abort)</h3>
            <Styled.Code>{`// inside a component:
// React.useEffect(() => {
//   const ctrl = new AbortController();
//   (async () => {
//     try {
//       const res = await fetch("/api/items", { signal: ctrl.signal });
//       if (!res.ok) throw new Error("HTTP " + res.status);
//       const data = await res.json();
//       // setState(data)
//     } catch (e) {
//       if (e.name !== "AbortError") {
//         // show error toast
//       }
//     }
//   })();
//   return () => ctrl.abort(); // cancel on unmount
// }, []);`}</Styled.Code>

            <h3>K) Pitfalls &amp; tips</h3>
            <ul>
                <li><strong>Always return/await</strong> promises you start; avoid unhandled rejections.</li>
                <li><strong>Don't mix styles</strong> unnecessarily: pick <em>either</em> <code>then/catch</code> or <code>async/await</code> in a block.</li>
                <li><strong>Concurrency</strong>: start promises first, then <code>await Promise.all</code>.</li>
                <li><strong>forEach + async</strong> is a trap - use <code>for...of</code> or <code>Promise.all(map())</code>.</li>
                <li><strong>Timeouts &amp; cancel</strong>: use <code>AbortController</code> or a <code>race</code> with a timeout promise.</li>
                <li><strong>async functions return Promises</strong>; throw to reject, return to resolve.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <strong>async/await</strong> + <code>try/catch</code> for readable async code.</li>
                <li>Batch work with <code>Promise.all</code> for speed; handle partials with <code>allSettled</code>.</li>
                <li>Guard fetches with <code>AbortController</code> (cleanup on unmount).</li>
                <li>Know the event loop: microtasks (promise callbacks) run before timeouts.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
