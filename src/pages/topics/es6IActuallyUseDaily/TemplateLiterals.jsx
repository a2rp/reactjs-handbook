import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Template literals (string interpolation & multiline)
 */
export default function TemplateLiterals({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "template-literals";

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
                <span>Template literals (interpolation, multiline, tags)</span>
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
            Template literals use backticks <code>`</code> to make strings easier:
            <ul>
                <li><strong> interpolation </strong> with <code>${"{ ... }"}</code>,</li>
                <li><strong> multiline </strong> strings, and <strong> tagged templates</strong>.</li>
            </ul>

            <h3>A) Basics - interpolation & multiline</h3>
            <Styled.Code>{`const name = "Ash";
const score = 42;

const msg = \`Hello, \${name}! Your score is \${score}.\`;
console.log(msg);                            // "Hello, Ash! Your score is 42."

// Multiline without \\n escapes:
const lines = \`
First line
Second line
Third line
\`;
console.log(lines.trim());
// First line
// Second line
// Third line

// Expressions allowed inside \${...}
const taxed = (amt) => amt * 1.18;
console.log(\`Total: \${taxed(100)}\`);       // "Total: 118"`}</Styled.Code>

            <h3>B) Expressions inside <code>${"{ ... }"}</code></h3>
            <Styled.Code>{`const a = 3, b = 5;
console.log(\`\${a} + \${b} = \${a + b}\`);   // "3 + 5 = 8"

const ok = true;
console.log(\`Status: \${ok ? "OK" : "FAIL"}\`); // "Status: OK"

// Formatting inside template
const price = 12345.678;
console.log(\`₹\${price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}\`);
// "₹12,345.68"

// Safely stringify objects
const user = { id: 1, name: "Ash" };
console.log(\`user=\${JSON.stringify(user)}\`);
// 'user={"id":1,"name":"Ash"}'`}</Styled.Code>

            <h3>C) Escaping backticks & <code>${"{ ... }"}</code></h3>
            <Styled.Code>{`// Escape a backtick inside a template with \\\`
const s = \`Use a backtick like: \\\`this\\\`\`;
console.log(s);                              // "Use a backtick like: \`this\`"

// To show \${...} literally, escape the '$' or wrap in a normal string
console.log(\`Show \\\${x} literally\`);      // "Show \${x} literally"`}</Styled.Code>

            <h3>D) Tagged templates (advanced but useful)</h3>
            <p>
                A <em>tag</em> is a function that receives the string parts and the evaluated values.
                You can format, sanitize, or highlight values.
            </p>
            <Styled.Code>{`// Simple highlight tag: wrap values in [brackets]
function highlight(strings, ...values) {
  return strings.reduce((out, str, i) => out + str + (i < values.length ? \`[\${values[i]}]\` : ""), "");
}
const lang = "JS", topic = "templates";
console.log(highlight\`Learning \${lang} \${topic}!\`);
// "Learning [JS] [templates]!"

// Inspect raw strings (preserves escapes)
function showRaw(strings) {
  console.log(strings.raw[0]); // first raw chunk
}
showRaw\`line1\\nline2\`;                      // prints "line1\\nline2"`}</Styled.Code>

            <h3>E) <code>String.raw</code> (keep backslashes)</h3>
            <Styled.Code>{`// Useful for regex, paths, or copy-paste snippets
const raw = String.raw\`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(raw);                              // "C:\\Users\\Ash\\nNewLine"

// Compare with normal template:
const normal = \`C:\\\\Users\\\\Ash\\nNewLine\`;
console.log(normal);
// "C:\\Users\\Ash
// NewLine"`}</Styled.Code>

            <h3>F) Practical patterns</h3>
            <Styled.Code>{`// 1) Build URLs safely with encodeURIComponent
const params = { q: "react hooks", page: 2 };
const url = \`/search?q=\${encodeURIComponent(params.q)}&page=\${params.page}\`;
console.log(url);                              // "/search?q=react%20hooks&page=2"

// 2) Generate small blocks of text (emails/logs)
const to = "recruiter@company.com";
const body = \`Hi,
I'm sharing my ReactJS handbook link.
Thanks,
Ash\`;
console.log(body.split("\\n").length);         // 4

// 3) Inline templates for labels
const label = (n) => \`\${n} \${n === 1 ? "item" : "items"}\`;
console.log(label(1));                         // "1 item"
console.log(label(3));                         // "3 items"`}</Styled.Code>

            <h3>G) Pitfalls & tips</h3>
            <ul>
                <li><strong>Don't over-nest logic</strong> inside <code>${"{ ... }"}</code>; extract helpers for readability.</li>
                <li><strong>Escape backticks</strong> with <code>\\`</code> when you must include them literally.</li>
                <li><strong>Use <code>JSON.stringify</code></strong> to embed objects safely.</li>
                <li><strong>Beware of whitespace</strong>: multiline templates keep your indentation/spaces.</li>
                <li><strong>For raw backslashes</strong>, prefer <code>String.raw</code> or a tag.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use backticks for interpolation and multiline strings.</li>
                <li>Keep complex logic out of templates-call helpers instead.</li>
                <li>Escape backticks and <code>$</code> when showing them literally.</li>
                <li>Use <code>String.raw</code> or tagged templates for special formatting.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
