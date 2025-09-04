import * as React from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper role="contentinfo">
            <Styled.Inner>
                {/* Brand */}
                <Styled.Col>
                    <h4>a2rp · ReactJS Handbook</h4>
                    <p>
                        Practical patterns, small focused topics, and production-ready
                        snippets. Built while shipping real apps.
                    </p>
                </Styled.Col>

                <Styled.Col>
                    <h5>Built with</h5>
                    <p className="builtwith">
                        Built with <strong>React 18</strong> + <strong>Vite</strong>, Router v6,
                        styled-components. GH-Pages/Netlify friendly.
                    </p>
                </Styled.Col>

                {/* Resources */}
                <Styled.Col>
                    <h5>Resources</h5>
                    <ul>
                        <li><a href="https://www.ashishranjan.net" target="_blank">Portfolio</a></li>
                        <li>
                            <a
                                href="https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf"
                                target="_blank"
                            >
                                Resume (PDF)
                            </a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/aashishranjan/" target="_blank">LinkedIn</a></li>
                        <li><a href="mailto:ash.ranjan09@gmail.com">ash.ranjan09@gmail.com</a></li>
                    </ul>
                    <p className="note">Open to MERN / React roles (Bengaluru/Remote). Happy to demo or build a short PoC.</p>
                </Styled.Col>

                {/* Quick jump */}
                <Styled.Col>
                    <h5>Quick Jump</h5>
                    <a
                        href="#top"
                        onClick={(e) => {
                            e.preventDefault();
                            const node = document.getElementById("scroll-root");
                            if (node) node.scrollTo({ top: 0, behavior: "smooth" });
                            else window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        ↑ Back to top
                    </a>

                </Styled.Col>
            </Styled.Inner>

            <Styled.Bar>
                <span>© {year} <a href="https://www.ashishranjan.net" target="_blank">Ashish Ranjan</a></span>
                <span>Content for learning.</span>
            </Styled.Bar>
        </Styled.Wrapper>
    );
}
