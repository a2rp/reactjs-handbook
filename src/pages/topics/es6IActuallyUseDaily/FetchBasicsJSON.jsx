import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Fetch basics + JSON
 */
export default function FetchBasicsJSON({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "fetch-basics-json";

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
                <span>Fetch basics + JSON (GET/POST, errors, timeout, retry)</span>
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
            <div>
                <ul>
                    <li><code>fetch()</code> returns a <strong>Promise&lt;Response&gt;</strong>.</li>
                    <li>Always check <code>res.ok</code> / <code>res.status</code>, then parse with <code>res.json()</code> (or <code>res.text()</code>).</li>
                    <li>Use <code>AbortController</code> for timeouts/cancel and wrap with small helpers.</li>
                </ul>
            </div>

            <h3>A) GET JSON - with query params</h3>
            <Styled.Code>{`// Build URL with search params
const params = new URLSearchParams({ page: "1", q: "react" });
const url = \`/api/posts?\${params}\`;

async function getJSON(u) {
  const res = await fetch(u, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}

// Example shape:
getJSON(url).then(data => {
  // data => { items: [...], total: 42 }
  console.log(Array.isArray(data.items), data.total); // true 42
});`}</Styled.Code>

            <h3>B) POST JSON - send body & read JSON</h3>
            <Styled.Code>{`async function postJSON(u, body) {
  const res = await fetch(u, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}

// Usage:
postJSON("/api/todos", { title: "Write handbook" })
  .then(todo => console.log(todo.id > 0))     // true
  .catch(e => console.error("create failed:", e.message));`}</Styled.Code>

            <h3>C) Errors: network vs HTTP vs invalid JSON</h3>
            <Styled.Code>{`async function safeJSON(u) {
  try {
    const res = await fetch(u);
    if (!res.ok) {
      // 4xx/5xx
      const msg = await res.text().catch(() => "");
      throw new Error(\`HTTP \${res.status} \${msg}\`.trim());
    }
    try {
      return await res.json();
    } catch (e) {
      // e.name === "SyntaxError" for bad JSON
      throw new Error("Invalid JSON");
    }
  } catch (e) {
    // e.name === "TypeError" often indicates a network error in browsers
    console.error("Request failed:", e.message);
    throw e;
  }
}`}</Styled.Code>

            <h3>D) Timeout / cancel with <code>AbortController</code></h3>
            <Styled.Code>{`async function getJSONWithTimeout(u, { timeout = 8000, ...opts } = {}) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(u, { ...opts, signal: ctrl.signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (e) {
    if (e.name === "AbortError") console.warn("Request aborted/timeout");
    throw e;
  } finally {
    clearTimeout(id);
  }
}

// getJSONWithTimeout("/api/slow", { timeout: 1500 }).catch(e => console.log(e.name));
// "AbortError"`}</Styled.Code>

            <h3>E) Simple retry with exponential backoff</h3>
            <Styled.Code>{`async function retry(fn, { tries = 3, baseMs = 300 } = {}) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); }
    catch (e) {
      lastErr = e;
      await new Promise(r => setTimeout(r, baseMs * 2 ** i));
    }
  }
  throw lastErr;
}

// Usage: retry a fetch
retry(() => getJSON("/api/flaky"), { tries: 3 })
  .then(() => console.log("ok"))
  .catch(e => console.log("failed:", e.message));`}</Styled.Code>

            <h3>F) Non-JSON responses (204, text, blobs)</h3>
            <Styled.Code>{`// 204 No Content: don't call res.json()
async function del(u) {
  const res = await fetch(u, { method: "DELETE" });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return; // nothing
}

// text()
fetch("/robots.txt")
  .then(r => r.text())
  .then(t => console.log(t.includes("User-agent"))); // true

// blob() (e.g., download)
fetch("/logo.png")
  .then(r => r.blob())
  .then(b => console.log(b.type.startsWith("image/"))); // true`}</Styled.Code>

            <h3>G) Credentials, headers, and base URL</h3>
            <Styled.Code>{`// Send cookies to same-site/another origin (if server allows it)
fetch("/api/me", { credentials: "include" });

// Common headers helper
const jsonHeaders = { "Content-Type": "application/json", Accept: "application/json" };

// Build base URL once
const API = (path) => \`\${import.meta.env.VITE_API_BASE}\${path}\`;
console.log(API("/health")); // e.g., "https://api.example.com/health"`}</Styled.Code>

            <h3>H) React pattern - effect with abort & state</h3>
            <Styled.Code>{`// Inside a component:
// const [data, setData] = React.useState(null);
// const [error, setError] = React.useState(null);
// const [loading, setLoading] = React.useState(false);

// React.useEffect(() => {
//   const ctrl = new AbortController();
//   setLoading(true);
//   (async () => {
//     try {
//       const res = await fetch(API("/posts"), { signal: ctrl.signal });
//       if (!res.ok) throw new Error("HTTP " + res.status);
//       setData(await res.json());
//     } catch (e) {
//       if (e.name !== "AbortError") setError(e);
//     } finally {
//       setLoading(false);
//     }
//   })();
//   return () => ctrl.abort();
// }, []);`}</Styled.Code>

            <h3>I) Node vs Browser (tiny note)</h3>
            <ul>
                <li>Browsers: <code>fetch</code> is built-in. CORS must be allowed by the server.</li>
                <li>Node: built-in from Node <strong>18+</strong>. Older Node needs a polyfill (e.g., <code>node-fetch</code>).</li>
            </ul>

            <h3>J) Pitfalls & tips</h3>
            <ul>
                <li><strong>Always check <code>res.ok</code></strong> before parsing JSON.</li>
                <li><strong>Don't <code>await res.json()</code> twice</strong> - the body stream is one-time.</li>
                <li><strong>POST JSON:</strong> remember <code>JSON.stringify</code> and the <code>Content-Type</code> header.</li>
                <li><strong>Timeouts:</strong> use <code>AbortController</code> or a <code>Promise.race</code> pattern.</li>
                <li><strong>Retries:</strong> only retry idempotent calls or ensure your API is retry-safe.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>GET/POST helpers that check <code>ok</code> and parse once.</li>
                <li>Abort on unmount; surface errors to UI.</li>
                <li>Backoff retries for flaky networks.</li>
                <li>Handle 204/text/blob paths, not just JSON.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
