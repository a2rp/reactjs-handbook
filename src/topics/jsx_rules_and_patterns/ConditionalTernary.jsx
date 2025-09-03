import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Conditional render: ternary
 */
export default function ConditionalTernary({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "conditional-ternary";

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
                <span>Conditional render: ternary</span>
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
                The <strong>ternary operator</strong> (<code>cond ? A : B</code>) is the clearest way to render
                one of two branches in JSX. It's an <em>expression</em>, so it works inside braces.
            </p>

            <h3>A) Basics</h3>
            <Styled.Code>{`// Render Dashboard if authenticated, otherwise Login
<div>{isAuth ? <Dashboard /> : <Login />}</div>

// Text or element branches both work
<p>{score >= 50 ? "Pass" : "Fail"}</p>`}</Styled.Code>

            <h3>B) "Else nothing" → use null</h3>
            <Styled.Code>{`// Show <Promo/> only if eligible; otherwise render nothing
{eligible ? <Promo /> : null}

// Equivalent with &&
{eligible && <Promo />}
// (Use ternary when you need an explicit else branch.)`}</Styled.Code>

            <h3>C) Multiple conditions (avoid deep nesting)</h3>
            <p>
                You can chain ternaries, but keep them readable. For more than two branches, prefer a lookup map.
            </p>
            <Styled.Code>{`// 1) Light nesting with parentheses (OK if short)
{status === "loading" ? (
  <Spinner />
) : status === "error" ? (
  <Error />
) : (
  <Content />
)}

// 2) Cleaner with a map (recommended beyond 2 branches)
const views = { loading: <Spinner/>, error: <Error/>, ready: <Content/> };
{views[status] ?? <Idle/>}`}</Styled.Code>

            <h3>D) Conditional props/variants</h3>
            <Styled.Code>{`// Choose component variant
<Button kind={primary ? "primary" : "default"} />

// Choose class token
const cx = (...xs) => xs.filter(Boolean).join(" ");
<button className={cx("btn", primary ? "btn--primary" : "btn--default")}>Save</button>

// Choose inline style value
<div style={{ opacity: disabled ? 0.5 : 1 }} />`}</Styled.Code>

            <h3>E) Ternary vs && and ||</h3>
            <ul>
                <li><strong>Ternary</strong>: has both branches (A/else B) → best for "this or that".</li>
                <li><strong>&amp;&amp;</strong>: show-only-if-truthy; beware rendering <code>0</code> by accident.</li>
                <li><strong>||</strong>: fallback for <em>falsy</em> values; don't use it as an else-render unless you understand the truthiness.</li>
            </ul>
            <Styled.Code>{`// ⚠️ Using || as else can be surprising if left side is ""
{title || "Untitled"}
// If empty string is valid and should show "", use ?? to only catch null/undefined:
{title ?? "Untitled"}`}</Styled.Code>

            <h3>F) Parentheses & formatting</h3>
            <p>Wrap multiline branches in parentheses for readability and to avoid precedence issues.</p>
            <Styled.Code>{`{cond ? (
  <header><Logo/><Nav/></header>
) : (
  <header><Logo/></header>
)}`}</Styled.Code>

            <h3>G) Precompute for clarity</h3>
            <Styled.Code>{`function Price({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}`}</Styled.Code>

            <h3>Common mistakes</h3>
            <ul>
                <li>Over-nesting ternaries-prefer maps or precomputed variables.</li>
                <li>Forgetting <code>null</code> for "render nothing" in the else branch.</li>
                <li>Using <code>||</code> as a faux-else and accidentally hiding valid falsy values (like <code>0</code> or <code>""</code>).</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Convert to a ternary:
                    <Styled.Code>{`// {isReady && <Ready/> || <Loading/>}`}</Styled.Code>
                </li>
                <li>
                    Render <code>&lt;GoldBadge/&gt;</code> for <code>plan === "gold"</code>, <code>&lt;SilverBadge/&gt;</code> otherwise.
                </li>
                <li>
                    Replace the nested ternary with a lookup:
                    <Styled.Code>{`// {role === "admin" ? <Admin/> : role === "user" ? <User/> : <Guest/>}`}</Styled.Code>
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use <code>cond ? A : B</code> for clear two-branch rendering.</li>
                <li>Return <code>null</code> for "else nothing".</li>
                <li>Keep branches readable (parentheses, format lines).</li>
                <li>For 3+ branches, prefer a lookup map instead of deep nesting.</li>
                <li>Don't misuse <code>||</code>; consider <code>??</code> when only null/undefined need fallback.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
