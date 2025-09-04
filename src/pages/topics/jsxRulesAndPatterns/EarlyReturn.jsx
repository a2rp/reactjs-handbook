import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Early return pattern
 */
export default function EarlyReturn({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "early-return";

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
                <span>Early return pattern</span>
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
                <strong>Early return</strong> = return from a component <em>as soon as</em> a guard condition is met.
                It removes deep nesting, keeps JSX flat, and makes loading/empty/error states clearer.
            </p>

            <h3>A) Basics - flatten your branches</h3>
            <Styled.Code>{`// ❌ Nested, harder to scan
function Profile({ user }) {
  if (user) {
    return <Card user={user} />;
  } else {
    return <Empty />;
  }
}

// ✅ Early returns keep it flat
function Profile({ user }) {
  if (!user) return <Empty />;
  return <Card user={user} />;
}`}</Styled.Code>

            <h3>B) Loading / error / auth guards</h3>
            <p>Call hooks first (top-level), then gate the UI with early returns.</p>
            <Styled.Code>{`function ProductView({ id }) {
  const { data, loading, error } = useProduct(id);  // ✅ hooks at top level, always called

  if (loading) return <Spinner />;
  if (error)   return <ErrorBox error={error} />;
  if (!data)   return <Empty state="no-data" />;

  return <ProductCard product={data} />;
}`}</Styled.Code>

            <h3>C) ⚠️ Hooks + early return - the rule</h3>
            <p>
                <strong>Never call Hooks conditionally.</strong> Put all Hooks at the top of the component,
                then do your early returns. If you must guard before any Hooks, split into a tiny wrapper.
            </p>
            <Styled.Code>{`// ❌ Risky: hook is skipped when visible === false
function Panel({ visible }) {
  if (!visible) return null;          // hook below is conditionally called -> breaks the rule
  const [open, setOpen] = React.useState(false);
  return open ? "Open" : "Closed";
}

// ✅ Safe: wrapper guards visibility; inner can use hooks freely
function Panel({ visible }) {
  if (!visible) return null;          // no hooks here
  return <PanelInner />;              // hooks live inside inner component
}
function PanelInner() {
  const [open, setOpen] = React.useState(false);
  return open ? "Open" : "Closed";
}`}</Styled.Code>

            <h3>D) Early return vs && / ternary</h3>
            <ul>
                <li><strong>Early return</strong> = best when a whole branch should short-circuit (loading, error, auth).</li>
                <li><strong>&amp;&amp;</strong> = show-only-if-truthy for small inline bits.</li>
                <li><strong>Ternary</strong> = choose exactly one of two UI branches.</li>
            </ul>
            <Styled.Code>{`// Early return (whole component)
if (!isAuth) return <Login/>;

// Inline && (tiny fragment)
{isPremium && <Badge/>}

// Ternary (this or that)
{ready ? <Dashboard/> : <Loading/>}`}</Styled.Code>

            <h3>E) Event handlers: bail out early</h3>
            <p>Same idea inside functions-avoid deep <code>if</code> ladders.</p>
            <Styled.Code>{`async function onSubmit(e) {
  e.preventDefault();
  if (submitting) return;           // guard
  if (!form.valid) return;          // guard
  setSubmitting(true);
  await save(form.value);
  setSubmitting(false);
}`}</Styled.Code>

            <h3>F) Empty states & feature flags</h3>
            <Styled.Code>{`function List({ items }) {
  if (!items?.length) return <Empty message="No items yet" />;
  return (
    <ul>{items.map(it => <li key={it.id}>{it.title}</li>)}</ul>
  );
}

function Experimental({ flags }) {
  if (!flags?.newUI) return <LegacyUI />;
  return <NewUI />;
}`}</Styled.Code>

            <h3>G) Multiple early returns - order matters</h3>
            <p>Put the most common/cheapest checks first. Keep each guard tiny and obvious.</p>
            <Styled.Code>{`function Report({ user, data, loading, error }) {
  if (!user)    return <LoginPrompt />;
  if (loading)  return <Spinner />;
  if (error)    return <ErrorBox error={error} />;
  if (!data)    return <Empty />;

  return <ReportBody data={data} />;
}`}</Styled.Code>

            <h3>Common mistakes</h3>
            <ul>
                <li>Placing early returns <em>before</em> Hooks and then calling Hooks only on some renders.</li>
                <li>Building complicated multi-line conditions-precompute a <code>const</code> like <code>canShow</code>.</li>
                <li>Returning an empty string instead of <code>null</code> to "hide" UI (empty string still renders text).</li>
            </ul>

            <h3>Mini-exercises</h3>
            <ol>
                <li>
                    Convert nested if/else into early returns:
                    <Styled.Code>{`function View({ user, loading }) {
  if (loading) {
    return <Spinner/>;
  } else {
    if (user) {
      return <Dashboard/>;
    } else {
      return <Login/>;
    }
  }
}`}</Styled.Code>
                </li>
                <li>
                    Split a component so that a visibility guard does <em>not</em> sit above any Hooks.
                </li>
                <li>
                    Reorder guards in a component to check <code>!user</code> → <code>loading</code> → <code>error</code> → <code>!data</code>.
                </li>
            </ol>

            <h3>Mini-checklist</h3>
            <ul>
                <li>Use early returns for clear loading/error/auth/empty branches.</li>
                <li>Call Hooks first; if you must guard earlier, split into a wrapper and an "Inner" component.</li>
                <li>Prefer small, ordered guards over one giant condition.</li>
                <li>Return <code>null</code> to render nothing.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
