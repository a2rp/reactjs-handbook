import React from "react";
import { Styled } from "../styled";

/**
 * Topic - children prop (slots-like)
 */
export default function ChildrenProp({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "children-prop";

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
                <span>children prop (slots-like)</span>
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
                The special prop <code>{'{children}'}</code> is the content placed between a component's opening
                and closing tags. Think of it as the <em>default slot</em>. You can also create "named slots"
                by accepting extra props like <code>header</code> / <code>footer</code>, or use compound
                components for more flexible composition.
            </p>

            <h3>A) Default slot: basic usage</h3>
            <Styled.Code>{`// Definition
export function Card({ title, children }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div className="card__body">{children}</div>
    </section>
  );
}

// Usage
<Card title="Hello">
  <p>This is inside the card body.</p>
</Card>`}</Styled.Code>

            <h3>B) Fallback when no children</h3>
            <p>Use a runtime check; prefer counting children so a valid <code>0</code> or empty string is respected.</p>
            <Styled.Code>{`export function Panel({ children }) {
  const hasKids = React.Children.count(children) > 0;
  return <div className="panel">{hasKids ? children : <em>Nothing here yet</em>}</div>;
}`}</Styled.Code>

            <h3>C) Named slots via props</h3>
            <p>Accept <code>header</code>/<code>footer</code>/<code>actions</code> props alongside <code>{'{children}'}</code>.</p>
            <Styled.Code>{`export function Modal({ header, children, footer }) {
  return (
    <div className="modal">
      <header className="modal__header">{header}</header>
      <section className="modal__body">{children}</section>
      <footer className="modal__footer">{footer}</footer>
    </div>
  );
}

// Usage
<Modal
  header={<h4>Confirm</h4>}
  footer={<button>Close</button>}
>
  <p>Are you sure?</p>
</Modal>`}</Styled.Code>

            <h3>D) Compound components (slots-like, but declarative)</h3>
            <p>
                Define subcomponents on the parent. Consumers compose them like HTML. Optionally share state via context.
            </p>
            <Styled.Code>{`function Card({ children }) {
  return <section className="card">{children}</section>;
}
Card.Header = function Header({ children }) {
  return <h3 className="card__header">{children}</h3>;
};
Card.Body = function Body({ children }) {
  return <div className="card__body">{children}</div>;
};
Card.Footer = function Footer({ children }) {
  return <div className="card__footer">{children}</div>;
};

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer><button>OK</button></Card.Footer>
</Card>`}</Styled.Code>

            <h3>E) Children can be a <em>function</em> (render prop)</h3>
            <p>When you want the parent to control rendering for each item, accept a function as <code>children</code>.</p>
            <Styled.Code>{`export function List({ items, children }) {
  // children: (item, index) => ReactNode
  return <ul>{items.map((it, i) => children(it, i))}</ul>;
}

// Usage
<List items={[{ id: 1, name: "A" }]}>
  {(it) => <li key={it.id}>{it.name}</li>}
</List>`}</Styled.Code>

            <h3>F) Inspecting/mapping children (advanced)</h3>
            <p>Use <code>React.Children</code> helpers to count/map, and <code>cloneElement</code> to inject props.</p>
            <Styled.Code>{`export function Nav({ children, activeId }) {
  return (
    <ul className="nav">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const isActive = child.props.itemId === activeId;
        return React.cloneElement(child, { className: isActive ? "active" : undefined });
      })}
    </ul>
  );
}

// Usage
<Nav activeId="home">
  <a itemId="home" href="/home">Home</a>
  <a itemId="about" href="/about">About</a>
</Nav>`}</Styled.Code>

            <h3>G) Accessibility & expectations</h3>
            <ul>
                <li>Document what can go in <code>{'{children}'}</code> (text only? any nodes? a function?).</li>
                <li>Keep DOM structure predictable so screen readers and CSS remain stable.</li>
                <li>Prefer composition over boolean props (e.g., pass a custom <code>footer</code> instead of <code>showClose</code> flags).</li>
            </ul>

            <h3>Common mistakes</h3>
            <ul>
                <li>Assuming <code>children</code> is always an array—handle single nodes with <code>React.Children</code> APIs.</li>
                <li>Forgetting keys when mapping children produced by a render prop.</li>
                <li>Overusing <code>cloneElement</code>—prefer simple composition unless you must inject props.</li>
            </ul>

            <h3>Mini-checklist</h3>
            <ul>
                <li><code>{'{children}'}</code> is the default slot; check for presence before showing a fallback.</li>
                <li>Use named slot props (e.g., <code>header</code>/<code>footer</code>) or compound components for flexible layouts.</li>
                <li>Render-prop pattern: accept a function as <code>children</code> when parent decides item rendering.</li>
                <li>Use <code>React.Children</code> utilities and <code>cloneElement</code> carefully.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
