import React, { lazy, Suspense, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import { Styled } from "./App.styled";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));
const About = lazy(() => import("./pages/about"));
const ComponentsAndProps = lazy(() => import("./pages/topics/componentsAndProps"));
const Es6IActuallyUseDaily = lazy(() => import("./pages/topics/es6IActuallyUseDaily"));
const JsxRulesAndPatterns = lazy(() => import("./pages/topics/jsxRulesAndPatterns"));
const SetupAndLocalDev = lazy(() => import("./pages/topics/setupAndLocalDev"));
const State = lazy(() => import("./pages/topics/state"));

const navItems = [
    ["/setup-and-local-dev", "Setup & Local Dev"],
    ["/es6-i-actually-use-daily", "ES6+ I actually use daily"],
    ["/jsx-rules-and-patterns", "JSX rules and patterns"],
    ["/components-and-props", "Components and Props"],
    ["/state", "State fundamentals"],
];

const App = () => {
    const [displayNav, setDisplayNav] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.NavLinkWrapper as="button" type="button" onClick={() => setDisplayNav((open) => !open)} aria-label="Toggle navigation" title="Toggle navigation">
                    <MdMenuOpen size={20} />
                </Styled.NavLinkWrapper>
                <Styled.Heading>
                    <NavLink to="/" aria-label="ReactJS Handbook home">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        <span>a2rp: ReactJS Handbook</span>
                    </NavLink>
                </Styled.Heading>
            </Styled.Header>
            <Styled.Main>
                <Styled.NavWrapper className={displayNav ? "active" : ""}>
                    <div className="navInner">
                        <NavLink to="/" title="Home">Home</NavLink>
                        {navItems.map(([path, label]) => <NavLink key={path} to={path} title={label}>{label}</NavLink>)}
                    </div>
                </Styled.NavWrapper>
                <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                    <Styled.RoutesWrapper>
                        <Suspense fallback={<div className="loading"><CircularProgress size={26} aria-label="Loading page" /></div>}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/setup-and-local-dev" element={<SetupAndLocalDev />} />
                                <Route path="/es6-i-actually-use-daily" element={<Es6IActuallyUseDaily />} />
                                <Route path="/jsx-rules-and-patterns" element={<JsxRulesAndPatterns />} />
                                <Route path="/components-and-props" element={<ComponentsAndProps />} />
                                <Route path="/state" element={<State />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Styled.RoutesWrapper>
                    <Styled.Footer><Footer /></Styled.Footer>
                </Styled.ContentWrapper>
            </Styled.Main>
            <ScrollToTop />
        </Styled.Wrapper>
    );
};

export default App;
