import React from "react";
import { Styled } from "../styled";

/**
 * Topic - HTML vs JSX differences (className, htmlFor)
 */
export default function HTMLvsJSX({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "html-vs-jsx";

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
                <span>HTML vs JSX differences (className, htmlFor)</span>
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
                JSX maps to DOM <em>properties</em> (not raw HTML attributes). That’s why some names change
                (e.g., <code>className</code> instead of <code>class</code>, <code>htmlFor</code> instead of <code>for</code>)
                and most attributes are <strong>camelCased</strong>.
            </p>

            <h3>A) <code>class</code> → <code>className</code></h3>
            <p>Use <code>className</code> for CSS classes (JSX avoids the reserved keyword <code>class</code>).</p>
            <Styled.Code>{`// HTML
<div class="card primary"></div>

// JSX
<div className="card primary"></div>

// Dynamic classes
const isPrimary = true;
<div className={isPrimary ? "card primary" : "card"} />`}</Styled.Code>

            <h3>B) <code>for</code> → <code>htmlFor</code> (labels)</h3>
            <p>
                In JSX, the <code>label</code> attribute is <code>htmlFor</code>. It must match the target
                input’s <code>id</code>.
            </p>
            <Styled.Code>{`// HTML
<label for="email">Email</label>
<input id="email" type="email" />

// JSX
<label htmlFor="email">Email</label>
<input id="email" type="email" />`}</Styled.Code>
            <p>
                If the input is nested inside the label, <code>htmlFor</code> is optional:
            </p>
            <Styled.Code>{`<label>
  Email
  <input type="email" />
</label>`}</Styled.Code>

            <h3>C) Attribute naming: camelCase (except <code>data-*</code> &amp; <code>aria-*</code>)</h3>
            <ul>
                <li><code>tabindex</code> → <code>tabIndex</code></li>
                <li><code>readonly</code> → <code>readOnly</code></li>
                <li><code>maxlength</code> → <code>maxLength</code></li>
                <li><code>autocomplete</code> → <code>autoComplete</code></li>
                <li><code>contenteditable</code> → <code>contentEditable</code></li>
                <li>Images/media: <code>srcset</code> → <code>srcSet</code>, <code>crossorigin</code> → <code>crossOrigin</code></li>
                <li>Forms: <code>accept-charset</code> → <code>acceptCharset</code></li>
                <li><strong>Unchanged:</strong> <code>data-*</code> &amp; <code>aria-*</code> remain kebab-case.</li>
            </ul>
            <Styled.Code>{`<img src="/hero.png" srcSet="/hero@2x.png 2x" crossOrigin="anonymous" />
<form acceptCharset="UTF-8" />`}</Styled.Code>

            <h3>D) Events: camelCase + pass functions</h3>
            <p>Use <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>… and pass a function, not a string.</p>
            <Styled.Code>{`// HTML
<button onclick="doThing()">Run</button>

// JSX
<button onClick={doThing}>Run</button>
<button onClick={() => doThing("arg")}>Run with arg</button>`}</Styled.Code>

            <h3>E) Inline styles: object, not string</h3>
            <p>Provide a JS object with camelCased CSS properties. Numbers are pixels by default for most props.</p>
            <Styled.Code>{`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}</Styled.Code>

            <h3>F) Boolean attributes</h3>
            <p>
                Presence implies <code>true</code>. Use braces for dynamic booleans.
            </p>
            <Styled.Code>{`// Static true
<input type="checkbox" checked />

// Dynamic
const disabled = isSubmitting;
<button disabled={disabled}>Save</button>`}</Styled.Code>

            <h3>G) SVG &amp; special cases</h3>
            <p>Many SVG attributes are camelCased in JSX.</p>
            <Styled.Code>{`// HTML
<svg viewBox="0 0 100 100"><circle stroke-width="2" /></svg>

// JSX
<svg viewBox="0 0 100 100"><circle strokeWidth={2} /></svg>`}</Styled.Code>

            <h3>H) Raw HTML: <code>dangerouslySetInnerHTML</code></h3>
            <p>
                Use sparingly—only with trusted content—to avoid XSS. Must pass an object with <code>__html</code>.
            </p>
            <Styled.Code>{`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}</Styled.Code>

            <h3>I) Self-closing tags required</h3>
            <p>Tags with no children must be self-closed in JSX.</p>
            <Styled.Code>{`// HTML
<img src="/logo.png">

// JSX
<img src="/logo.png" />`}</Styled.Code>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Convert to valid JSX:
                    <Styled.Code>{`<label for="name">Name</label>
<input id="name">`}</Styled.Code>
                </li>
                <li>
                    Fix attribute names:
                    <Styled.Code>{`<input maxlength="10" tabindex="0" readonly>`}</Styled.Code>
                </li>
                <li>
                    Rewrite with inline styles (JS object) and an event:
                    <Styled.Code>{`<button onclick="save()" style="background-color: #09f; padding: 8px 12px;">Save</button>`}</Styled.Code>
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li><code>className</code> for classes; <code>htmlFor</code> for labels.</li>
                <li>Attributes &amp; events are camelCase; <code>data-*</code>/<code>aria-*</code> stay kebab-case.</li>
                <li>Styles use an object: camelCased props, numbers as px.</li>
                <li>Boolean props: presence or <code>{`{true}`}</code>; use braces for dynamics.</li>
                <li>Self-close empty elements; be careful with <code>dangerouslySetInnerHTML</code>.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
