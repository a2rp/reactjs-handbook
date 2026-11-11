import { NavLink } from "react-router-dom";
import { Styled } from "../home/styled";

const About = () => (
    <Styled.Wrapper>
        <Styled.Hero>
            <h1>About ReactJS Handbook</h1>
            <p>
                A compact, code-focused reference for learning React foundations
                and the JavaScript features commonly used alongside them.
            </p>
        </Styled.Hero>

        <Styled.Section>
            <h2>What you will find</h2>
            <ul>
                <li>Vite project setup, editor basics, environment files, and imports</li>
                <li>Modern JavaScript features, collections, async work, and fetch</li>
                <li>JSX syntax, conditional rendering, lists, keys, and safe HTML guidance</li>
                <li>Component design, props, composition, and React state patterns</li>
            </ul>
        </Styled.Section>

        <Styled.Section>
            <h2>How the notes are organized</h2>
            <p>
                Each section groups short explanations with code examples and common
                mistakes. Open a section from the navigation, then expand the topics
                you want to review.
            </p>
            <Styled.Links>
                <NavLink to="/setup-and-local-dev">Setup &amp; local development</NavLink>
                <NavLink to="/es6-i-actually-use-daily">JavaScript patterns</NavLink>
                <NavLink to="/jsx-rules-and-patterns">JSX patterns</NavLink>
                <NavLink to="/components-and-props">Components &amp; props</NavLink>
                <NavLink to="/state">State fundamentals</NavLink>
            </Styled.Links>
        </Styled.Section>

        <Styled.Section>
            <h2>Scope</h2>
            <p>
                This handbook currently focuses on setup, JavaScript, JSX, component
                composition, props, and state. It is a growing reference, so treat each
                example as a learning aid and adapt it to your project requirements.
            </p>
        </Styled.Section>
    </Styled.Wrapper>
);

export default About;
