import React from "react";
import { Styled } from "./styled";

/**
 * Topic — React: definition & inspiration
 */
export default function ReactDefinition({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "react-definition";

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
                <span>React: definition & inspiration</span>
            </Styled.Title>

            <Styled.Panel
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-button`}
                data-open={open}
            >
                <div>
                    <Content />
                </div>
            </Styled.Panel>
        </Styled.Topic>
    );
}

function Content() {
    return (
        <Styled.Content>
            <h3>What is React (how I define it)</h3>
            <p>
                React is a <strong>JavaScript library for building user interfaces</strong>. I use it to
                describe UI as a pure function of state: <em>UI = f(state)</em>. Instead of manually
                manipulating the DOM step-by-step, I declare how the UI should look for a given state and
                React takes care of updating the browser efficiently.
            </p>

            <p>
                It’s <strong>component-based</strong> (I build small, reusable components),{" "}
                <strong>declarative</strong> (I say “what”, not “how”), and it prefers{" "}
                <strong>one-way data flow</strong> (data goes down from parent to child).
            </p>

            <h3>Why React was created (the inspiration I keep in mind)</h3>
            <p>
                React originated to tame complex, interactive UIs where frequent state changes made
                imperative DOM code fragile. The big idea was: treat the DOM as a <em>result</em> of state,
                reconcile differences between the previous and next “virtual tree”, and update only what
                changed. This approach simplified mental load and reduced UI bugs caused by manual DOM ops.
            </p>

            <p>
                Composition over inheritance, predictable data flow, and a fast diffing strategy (keys +
                identity) are the core inspirations that shaped how I write React apps today.
            </p>

            <h3>Mini example (UI = f(state))</h3>
            <Styled.Code aria-label="UI = f(state)">
                {String.raw`function Hello() {
  const [name, setName] = React.useState("Ash");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
// I declare what the UI should be for the current 'name'.
// React handles the DOM updates when 'name' changes.`}
            </Styled.Code>

            <h3>Where I reach for React (and where I don't)</h3>
            <p>
                I reach for React when I’m building interactive dashboards, forms, and views with lots of
                dynamic state. If a page is mostly static content, plain HTML/CSS (or a lightweight
                templating setup) can be enough; I don’t force React where it doesn’t add value.
            </p>

            <p>
                That’s my short, practical mental picture: <strong>components + state → declarative UI</strong>,
                with React efficiently reconciling changes under the hood.
            </p>
        </Styled.Content>
    );
}
