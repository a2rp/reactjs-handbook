import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Timers (setTimeout, setInterval)
 */
export default function Timers({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "timers";

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
                <span>Timers (setTimeout, setInterval)</span>
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
                <code>setTimeout</code> runs a callback once after a delay; <code>setInterval</code> runs
                repeatedly. Always keep the returned <em>id</em> and clear with <code>clearTimeout</code> /{" "}
                <code>clearInterval</code>. In React, start timers in effects and clean them up on unmount.
            </p>

            <h3>A) <code>setTimeout</code> basics (one-shot)</h3>
            <Styled.Code>{`console.log("sync 1");
const id = setTimeout(() => console.log("timeout fired"), 0);
console.log("sync 2");
// Output order:
// "sync 1"
// "sync 2"
// "timeout fired"   (timers are macrotasks, run after sync & microtasks)

// Passing arguments
setTimeout((a, b) => console.log(a + b), 10, 2, 3); // 5

// Cancel before it fires
const t = setTimeout(() => console.log("WON'T RUN"), 50);
clearTimeout(t);`}</Styled.Code>

            <h3>B) <code>setInterval</code> (repeating) + clear</h3>
            <Styled.Code>{`let count = 0;
const iv = setInterval(() => {
  count++;
  console.log("tick", count);
  // "tick 1", "tick 2", "tick 3"
  if (count === 3) clearInterval(iv); // stops after 3
}, 100);`}</Styled.Code>

            <h3>C) Drift &amp; accuracy: <em>recursive</em> timeout over interval</h3>
            <p>
                Long callbacks cause <code>setInterval</code> to drift. Prefer scheduling the next run yourself
                (recursive <code>setTimeout</code>) and adjust with timestamps.
            </p>
            <Styled.Code>{`const stepMs = 100;
let expected = Date.now() + stepMs;
function tick() {
  const drift = Date.now() - expected; // +ve = we're late
  console.log("drift(ms)~", drift >= 0 ? Math.round(drift) : 0);
  expected += stepMs;
  setTimeout(tick, Math.max(0, stepMs - drift)); // adjust next delay
}
setTimeout(tick, stepMs);
// logs small drift values, auto-correcting each step`}</Styled.Code>

            <h3>D) Debounce (wait for quiet period) &amp; Throttle (limit rate)</h3>
            <Styled.Code>{`// Debounce: call after N ms of inactivity
function debounce(fn, ms = 200) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms);
  };
}

// Throttle: call at most once per window
function throttle(fn, ms = 200) {
  let ready = true, lastArgs;
  return (...args) => {
    if (!ready) { lastArgs = args; return; }
    ready = false;
    fn(...args);
    setTimeout(() => {
      ready = true;
      if (lastArgs) { fn(...lastArgs); lastArgs = null; }
    }, ms);
  };
}

const log = debounce(v => console.log("debounced", v), 100);
log(1); log(2); log(3); // "debounced 3" (only last call runs)`}</Styled.Code>

            <h3>E) Promise-based sleep + <code>async/await</code></h3>
            <Styled.Code>{`const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const t0 = Date.now();
  await sleep(50);
  await sleep(50);
  console.log("elapsed~", Date.now() - t0 >= 100); // true (≈100ms)
})();`}</Styled.Code>

            <h3>F) Next tick &amp; animation</h3>
            <Styled.Code>{`// Next microtask (before timeouts)
Promise.resolve().then(() => console.log("microtask"));
// Next animation frame (~60fps)
requestAnimationFrame(() => console.log("raf"));`}</Styled.Code>

            <h3>G) React patterns — effects + cleanup</h3>
            <Styled.Code>{`// 1) One-shot timeout on mount with cleanup
// React.useEffect(() => {
//   const id = setTimeout(() => {
//     // setState("ready")
//   }, 300);
//   return () => clearTimeout(id);
// }, []);

// 2) Interval with cleanup
// React.useEffect(() => {
//   const id = setInterval(() => {
//     // setCount(c => c + 1)
//   }, 1000);
//   return () => clearInterval(id);
// }, []);

// 3) Store ids in refs (if you need to clear from handlers)
// const timeoutRef = React.useRef(null);
// function onCancel() {
//   if (timeoutRef.current) clearTimeout(timeoutRef.current);
// }`}</Styled.Code>

            <h3>H) Node vs Browser (notes)</h3>
            <ul>
                <li>Browsers may <strong>throttle</strong> timers in background tabs (e.g., clamped to ~1000ms).</li>
                <li>Node also has <code>setImmediate</code> and <code>process.nextTick</code> (microtask); timers API is otherwise similar.</li>
            </ul>

            <h3>I) Pitfalls &amp; tips</h3>
            <ul>
                <li><strong>Always clear</strong> timeouts/intervals you create (especially in React effects).</li>
                <li><strong>Don't rely on exact ms.</strong> Timers run “as soon as possible” after the delay.</li>
                <li><strong>Avoid piling work in intervals.</strong> If work may take longer than the interval, prefer recursive timeouts with drift correction.</li>
                <li><strong>Debounce for bursts</strong> (search input), <strong>throttle for steady rate</strong> (scroll/resize).</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>setTimeout</code> for one-shot; <code>setInterval</code> for repeats (but watch drift).</li>
                <li>Keep ids; clear them on unmount or when no longer needed.</li>
                <li>Use <code>sleep()</code> for readable async flows; pair timers with <code>Promise</code>s.</li>
                <li>Prefer debounce/throttle for high-frequency events.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
