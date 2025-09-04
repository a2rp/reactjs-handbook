import * as React from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import { FaGit, FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <Styled.Wrapper>
            <h1>ReactJS Handbook</h1>

            {/* from wikipedia */}
            <fieldset style={{ padding: "15px", margin: "15px 0" }}>
                <legend style={{ padding: "0 15px" }}>From Wikipedia - last updated: Sep 02, 2025</legend>
                <p>
                    React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                </p>
                <br />
                <p>
                    React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.
                </p>
            </fieldset>


            {/* HERO */}
            <b style={{ color: "orangered", display: "flex", alignItems: "center", gap: 15 }}>
                Last Updated: September 05, 2025 <a href="https://github.com/a2rp/reactjs-handbook" target="_blank" style={{ color: "#fff", textDecoration: "none" }}><FaGithub size={20} /></a>
            </b>
            <Styled.Hero>
                <div>
                    <p>
                        A practical, no-nonsense guide I'm building while shipping real apps.
                        Topics are focused, opinionated, and production-ready-copy/paste and
                        use the same day.
                    </p>

                    <Styled.CTA>
                        <NavLink to="/setup-and-local-dev" className="btn primary">
                            Start with Setup →
                        </NavLink>
                    </Styled.CTA>
                </div>
            </Styled.Hero>

            {/* ABOUT PROJECT */}
            <Styled.Section>
                <h2>About the Project</h2>
                <p>
                    This handbook distills patterns I use across React + Node projects-so features
                    ship faster with fewer bugs and a consistent developer experience.
                    It's intentionally lightweight (Vite, React 18, styled-components, Router v6)
                    and deploy-friendly (GH-Pages/Netlify/Cloudflare).
                </p>

                <Styled.Grid cols="2">
                    <Styled.Card>
                        <h3>How to use</h3>
                        <ul>
                            <li>Pick a topic from the left → skim the TL;DR → study the examples.</li>
                            <li>All snippets are copy-pasteable and safe for prod.</li>
                            <li>Lazy routes + <code>Suspense</code>, error-aware patterns, and routing that works on GH-Pages refresh.</li>
                        </ul>
                    </Styled.Card>

                    <Styled.Card>
                        <h3>Principles</h3>
                        <ul>
                            <li><strong>Practical over perfect</strong> - ship, measure, iterate.</li>
                            <li><strong>Small focused topics</strong> - avoid mega tutorials.</li>
                            <li><strong>Deployment aware</strong> - every pattern survives real hosting.</li>
                            <li><strong>Readable code</strong> - Styled-Components with a consistent <code>Styled</code> API.</li>
                        </ul>
                    </Styled.Card>
                </Styled.Grid>
            </Styled.Section>

            {/* TECH STACK */}
            <Styled.Section>
                <h2>Tech Stack</h2>
                <Styled.Tags>
                    <span>React 18</span><span>Vite</span><span>React Router v6</span>
                    <span>styled-components</span><span>ESLint + Prettier</span>
                    <span>GH-Pages / Netlify / Cloudflare</span>
                </Styled.Tags>
            </Styled.Section>

            <Styled.Divider />

            {/* ABOUT ASHISH */}
            <Styled.Section>
                <h2>About Me - Ashish Ranjan</h2>
                <p>
                    Full-Stack JavaScript Engineer (MERN), Bengaluru/Remote. I build fast, stable,
                    SEO-friendly apps with clean, maintainable code-and I document everything so
                    teams move quickly.
                </p>

                <Styled.Grid cols="2">
                    <Styled.Card>
                        <h3>What I do</h3>
                        <ul>
                            <li><strong>Front-end</strong>: React (Vite), Router, styled-components, MUI, accessible UI.</li>
                            <li><strong>Back-end</strong>: Node/Express, MongoDB, JWT/roles, REST APIs, uploads (Cloudinary).</li>
                            <li><strong>Payments & Ops</strong>: Stripe/Razorpay, CI/CD, GH-Pages/Netlify/Cloudflare/Render.</li>
                            <li><strong>AI</strong>: small LLM apps/agents, cost-aware and practical.</li>
                        </ul>
                    </Styled.Card>
                </Styled.Grid>

                <Styled.Links>
                    <a href="https://www.ashishranjan.net" target="_blank">Portfolio</a>
                    <a href="https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf" target="_blank">Resume (PDF)</a>
                    <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank">LinkedIn</a>
                    <a href="mailto:ash.ranjan09@gmail.com">ash.ranjan09@gmail.com</a>
                </Styled.Links>

                <Styled.Note>
                    Open to MERN / React roles (full-time or contract). Happy to demo live or build a short PoC.
                </Styled.Note>
            </Styled.Section>
        </Styled.Wrapper>
    );
}
