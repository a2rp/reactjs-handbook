import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Styled } from "./styled";

export default function Home() {
    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <h1>ReactJS Handbook</h1>
                <p>
                    A practical reference for React fundamentals and the JavaScript
                    patterns used to build maintainable interfaces.
                </p>
                <Styled.CTA>
                    <NavLink to="/setup-and-local-dev" className="btn primary">
                        Start with setup
                    </NavLink>
                    <NavLink to="/state" className="btn ghost">
                        Explore state
                    </NavLink>
                </Styled.CTA>
            </Styled.Hero>

            <Styled.Section>
                <h2>About the handbook</h2>
                <p>
                    Notes are grouped into focused sections so you can find a concept,
                    read a short explanation, and study code examples without searching
                    through a long tutorial.
                </p>
                <Styled.Grid cols="2">
                    <Styled.Card>
                        <h3>Topics covered</h3>
                        <ul>
                            <li>Vite setup and local development</li>
                            <li>Modern JavaScript and async patterns</li>
                            <li>JSX, lists, conditions, and safe HTML rendering</li>
                            <li>Components, props, composition, and state</li>
                        </ul>
                    </Styled.Card>
                    <Styled.Card>
                        <h3>How to use it</h3>
                        <ul>
                            <li>Choose a section from the navigation.</li>
                            <li>Expand a topic to read its notes and examples.</li>
                            <li>Review the cautions before adapting snippets to an app.</li>
                        </ul>
                    </Styled.Card>
                </Styled.Grid>
            </Styled.Section>

            <Styled.Section>
                <h2>Built with</h2>
                <Styled.Tags>
                    <span>React</span>
                    <span>Vite</span>
                    <span>React Router</span>
                    <span>styled-components</span>
                    <span>Material UI</span>
                    <span>ESLint</span>
                </Styled.Tags>
            </Styled.Section>

            <Styled.Divider />

            <Styled.Section>
                <h2>About Ashish Ranjan</h2>
                <p>
                    I build JavaScript applications and keep practical notes on the
                    tools and patterns I use across frontend and full-stack projects.
                </p>
                <Styled.Links>
                    <a href="https://github.com/a2rp/reactjs-handbook" target="_blank" rel="noreferrer" aria-label="Open the ReactJS Handbook repository">
                        <FaGithub aria-hidden="true" /> Repository
                    </a>
                    <a href="https://www.ashishranjan.net" target="_blank" rel="noreferrer">Portfolio</a>
                    <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:ash.ranjan09@gmail.com">Email</a>
                </Styled.Links>
            </Styled.Section>
        </Styled.Wrapper>
    );
}
