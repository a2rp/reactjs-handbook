import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Dangerous HTML (when/why)
 */
export default function DangerousHTML({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "dangerous-html";

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
                <span>Dangerous HTML (when/why)</span>
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
                React <strong>escapes</strong> text by default to prevent XSS. If you must inject raw HTML,
                use <code>dangerouslySetInnerHTML</code> - but only with <strong>trusted/sanitized</strong> content.
            </p>

            <h3>A) Basic usage</h3>
            <Styled.Code>{`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}</Styled.Code>

            <p>
                The prop expects an object with a <code>__html</code> key. This bypasses React's escaping,
                so any scripts/handlers inside will execute if the browser allows them.
            </p>

            <h3>B) When should you use it?</h3>
            <ul>
                <li>Rendering <strong>sanitized CMS/Markdown</strong> output.</li>
                <li>Server-rendered fragments you <strong>control</strong> and sanitize.</li>
                <li>Embedding <strong>trusted</strong> vendor widgets/snippets (or prefer iframes).</li>
            </ul>

            <h3>C) XSS risk demo (do NOT do this)</h3>
            <Styled.Code>{`// ❌ Never inject user input directly
function Bad({ userInputHTML }) {
  return <div dangerouslySetInnerHTML={{ __html: userInputHTML }} />;
}

// An attacker could send: '<img src=x onerror="alert("hacked")">'
// or '<script>...</script>'`}</Styled.Code>

            <h3>D) Sanitize first (recommended)</h3>
            <p>
                Prefer sanitizing on the <strong>server</strong>. If you must sanitize on the client, use a
                well-tested library (e.g., <code>dompurify</code>).
            </p>
            <Styled.Code>{`// npm i dompurify
import DOMPurify from "dompurify";

function SafeHTML({ html }) {
  const clean = React.useMemo(() => DOMPurify.sanitize(html), [html]);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}`}</Styled.Code>

            <h3>E) Notes & limitations</h3>
            <ul>
                <li>Elements injected this way are <strong>not React-managed</strong>; no React event handlers inside.</li>
                <li>Prefer plain JSX whenever possible; raw HTML is a last resort.</li>
                <li>Consider <strong>CSP</strong> headers to reduce script injection impact (not a replacement for sanitization).</li>
                <li>Don't “roll your own” sanitizer - easy to miss edge cases.</li>
            </ul>

            <h3>F) Markdown workflow (safe pattern)</h3>
            <Styled.Code>{`// 1) Convert Markdown -> HTML (on server or trusted parser).
// 2) Sanitize the HTML.
// 3) Inject sanitized HTML.
<SafeHTML html={sanitizedHtml} />`}</Styled.Code>

            <h3>Common mistakes</h3>
            <ul>
                <li>Passing user-generated HTML without sanitization.</li>
                <li>Using <code>dangerouslySetInnerHTML</code> where JSX would work fine.</li>
                <li>
                    Forgetting the <code>__html</code> key: it must be{" "}
                    <code>{`{{ __html: htmlString }}`}</code>.
                </li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Convert to safe rendering using <code>DOMPurify</code>:
                    <Styled.Code>{`function Article({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}`}</Styled.Code>
                </li>
                <li>
                    Spot the vulnerability and fix it:
                    <Styled.Code>{`// Comments come from users
<CommentBody html={comment.rawHtml} />`}</Styled.Code>
                </li>
                <li>
                    Wire a <code>&lt;SafeHTML/&gt;</code> component that memo-sanitizes and renders an empty state when <code>html</code> is missing.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Only inject <strong>sanitized, trusted</strong> HTML.</li>
                <li>Prefer JSX or iframes for third-party embeds.</li>
                <li>Remember: React won't attach events inside injected HTML.</li>
                <li>Server-side sanitize whenever possible; client-side with <code>dompurify</code> if needed.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
