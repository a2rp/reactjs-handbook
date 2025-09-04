import ReactTutorial from './ReactTutorial'
import ScrollToTop from './components/ScrollToTop'
import { Styled } from './App.styled'
import { NavLink, Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { CircularProgress } from '@mui/material'
import Footer from './components/footer'

const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));
const About = lazy(() => import('./pages/about'));

const ComponentsAndProps = lazy(() => import('./pages/topics/componentsAndProps'));
const Es6IActuallyUseDaily = lazy(() => import('./pages/topics/es6IActuallyUseDaily'));
const JsxRulesAndPatterns = lazy(() => import('./pages/topics/jsxRulesAndPatterns'));
const SetupAndLocalDev = lazy(() => import('./pages/topics/setupAndLocalDev'));
const State = lazy(() => import('./pages/topics/state'));

const App = () => {
    const [activeTuts, setActiveTuts] = useState("");
    const [displayNav, setDisplayNav] = useState(true);
    const handleDisplayNav = () => {
        setDisplayNav(prev => !prev);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.NavLinkWrapper onClick={handleDisplayNav}>
                        <MdMenuOpen size={20} />
                    </Styled.NavLinkWrapper>
                    <Styled.Heading><NavLink to="/">a2rp: ReactJS Handbook</NavLink></Styled.Heading>
                </Styled.Header>
                <Styled.Main>
                    <Styled.NavWrapper className={`${displayNav ? "active" : ""}`}>
                        <div className="navInner">
                            <NavLink to="/" title="Home">Home</NavLink>
                            <NavLink to="/setup-and-local-dev" title="Setup & Local Dev">Setup & Local Dev</NavLink>
                            <NavLink to="/es6-i-actually-use-daily" title="ES6+ I actually use daily">ES6+ I actually use daily</NavLink>
                            <NavLink to="/jsx-rules-and-patterns" title="JSX (rules & patterns)">JSX (rules & patterns)</NavLink>
                            <NavLink to="/components-and-props" title="Components & Props">Components & Props</NavLink>
                            <NavLink to="/state" title="State (useState) - fundamentals">State (useState) - fundamentals</NavLink>
                        </div>
                    </Styled.NavWrapper>

                    <Styled.ContentWrapper>
                        <Styled.RoutesWrapper>
                            <Suspense fallback={<CircularProgress />}>
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
                                    {/* <ReactTutorial /> */}
                                </Routes>
                            </Suspense>
                        </Styled.RoutesWrapper>

                        <Styled.Footer>
                            <Footer />
                        </Styled.Footer>
                    </Styled.ContentWrapper>
                </Styled.Main>
                <ScrollToTop />
            </Styled.Wrapper >
        </>
    )
}

export default App
