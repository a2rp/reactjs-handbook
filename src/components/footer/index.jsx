import * as React from "react";
import { FiCoffee, FiCode, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiYoutube, FiArrowUp } from "react-icons/fi";
import { Styled } from "./styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FiCode],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FiYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];
const supportLinks = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FiHeart],
];

const IconLinks = ({ items }) => <div className="iconLinks">{items.map(([label, href, Icon]) => (
    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
        {React.createElement(Icon, { "aria-hidden": true })}
    </a>
))}</div>;

export default function Footer() {
    return (
        <Styled.Wrapper role="contentinfo">
            <Styled.Inner>
                <Styled.Col><h4>a2rp: ReactJS Handbook</h4><p>Practical patterns, focused topics, and clear React references.</p></Styled.Col>
                <Styled.Col><h5>Built with</h5><p className="builtwith">React 18, Vite, Router v6, and styled-components.</p></Styled.Col>
                <Styled.Col><h5>Links</h5><IconLinks items={links} /></Styled.Col>
                <Styled.Col><h5>Support</h5><IconLinks items={supportLinks} /><button className="topButton" type="button" onClick={() => { const node = document.getElementById("scroll-root"); if (node) node.scrollTo({ top: 0, behavior: "smooth" }); else window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="Back to top" title="Back to top"><FiArrowUp /></button></Styled.Col>
            </Styled.Inner>
            <Styled.Bar><span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span><span>Content for learning.</span></Styled.Bar>
        </Styled.Wrapper>
    );
}
