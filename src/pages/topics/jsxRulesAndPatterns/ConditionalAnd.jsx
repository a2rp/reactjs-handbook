import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Conditional render: &&
 */
export default function ConditionalAnd({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "conditional-and";

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
                <span>Conditional render: &&</span>
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
                The logical-AND operator <code>&amp;&amp;</code> is a concise way to <strong>render something only if a condition is truthy</strong>.
                <br />
                It returns the left side if it's falsy, otherwise the right side. In React, <code>false</code>/<code>null</code>/<code>undefined</code> render nothing.
            </p>

            <h3>A) Show only when truthy</h3>
            <Styled.Code>{`// Show badge only if the user is premium
{isPremium && <Badge />}

// Show count only if > 0
{count > 0 && <span className="count">{count}</span>}`}</Styled.Code>

            <h3>B) Big gotcha: 0 will render "0"</h3>
            <p>
                Because <code>0 &amp;&amp; &lt;X/&gt;</code> evaluates to <code>0</code>, React will render the text <code>0</code>.
                Use a strict comparison or coerce to boolean with <code>!!</code>.
            </p>
            <Styled.Code>{`// ❌ Might render "0"
{items.length && <List items={items} />}

// ✅ Compare or coerce
{items.length > 0 && <List items={items} />}
{!!items.length && <List items={items} />}  // double-bang -> boolean`}</Styled.Code>

            <h3>C) Chain multiple conditions</h3>
            <p>All must be truthy to render the element.</p>
            <Styled.Code>{`// Render only when loaded, user exists, and feature is enabled
{loaded && user && flags.showWelcome && <Welcome user={user} />}`}</Styled.Code>

            <h3>D) Use ternary when you need an "else"</h3>
            <p>
                <code>&amp;&amp;</code> has no "else". Don't abuse <code>||</code> to fake it-prefer a ternary for clarity.
            </p>
            <Styled.Code>{`// ⚠️ Works but less readable
{isReady && <Ready/> || <Loading/>}

// ✅ Clear
{isReady ? <Ready/> : <Loading/>}`}</Styled.Code>

            <h3>E) ClassName composition with &&</h3>
            <p>
                Use <code>&amp;&amp;</code> to include a token conditionally, then filter falsy values.
            </p>
            <Styled.Code>{`// Small utility pattern
const cx = (...xs) => xs.filter(Boolean).join(" ");

<li className={cx("item", active && "active", disabled && "muted")}>
  Row
</li>`}</Styled.Code>

            <h3>F) Combine with nullish coalescing carefully</h3>
            <p>
                <code>??</code> only checks <code>null</code>/<code>undefined</code>. For visibility gating, you usually just need <code>&amp;&amp;</code>.
            </p>
            <Styled.Code>{`// Show price only if it exists; show 0 explicitly if 0 is valid
{price != null && <span>₹{price}</span>}`}</Styled.Code>

            <h3>G) Readability pattern: precompute</h3>
            <p>Complex conditions are easier to read if you compute them before the return.</p>
            <Styled.Code>{`function Card({ user, loading, error }) {
  const canShow = !loading && !error && user?.name;
  return <>{canShow && <Profile user={user} />}</>;
}`}</Styled.Code>

            <h3>Common mistakes</h3>
            <ul>
                <li>Using a numeric left side (<code>count</code>, <code>items.length</code>) → may render <code>0</code>.</li>
                <li>Nesting heavy logic inline-prefer precomputation or helper functions.</li>
                <li>Forgetting that only <code>false/null/undefined</code> render nothing; <code>0</code> and <code>""</code> render.</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Fix the 0-render bug:
                    <Styled.Code>{`// <div>{notifications.length && <Bell count={notifications.length} />}</div>`}</Styled.Code>
                </li>
                <li>
                    Rewrite this to a ternary (needs else):
                    <Styled.Code>{`// {isAuth && <Dashboard/> || <Login/>}`}</Styled.Code>
                </li>
                <li>
                    Chain conditions to render <code>&lt;Promo /&gt;</code> only when <code>env === "prod"</code> and <code>user?.role === "admin"</code>.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>&amp;&amp;</code> for simple "show if truthy".</li>
                <li>Guard numbers with comparisons or <code>!!</code> to avoid rendering <code>0</code>.</li>
                <li>Use a ternary when you need an "else".</li>
                <li>Precompute complex conditions for readability.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
