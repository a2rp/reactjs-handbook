import styled from "styled-components";
import ReactDefinition from "./topics/setup_and_local_dev/ReactDefinition";

import ViteInstall from "./topics/setup_and_local_dev/ViteInstall";
import ProjectTree from "./topics/setup_and_local_dev/ProjectTree";
import EditorSetup from "./topics/setup_and_local_dev/EditorSetup";
import EnvFiles from "./topics/setup_and_local_dev/EnvFiles";
import ImportExportBasics from "./topics/setup_and_local_dev/ImportExportBasics";

import LetVsConst from "./topics/es6_i_actually_use_daily/LetVsConst";
import ArrowFunctions from "./topics/es6_i_actually_use_daily/ArrowFunctions";
import Destructuring from "./topics/es6_i_actually_use_daily/Destructuring";
import RestAndSpread from "./topics/es6_i_actually_use_daily/RestAndSpread";
import TemplateLiterals from "./topics/es6_i_actually_use_daily/TemplateLiterals";
import DefaultParameters from "./topics/es6_i_actually_use_daily/DefaultParameters";
import OptionalChaining from "./topics/es6_i_actually_use_daily/OptionalChaining";
import NullishCoalescing from "./topics/es6_i_actually_use_daily/NullishCoalescing";
import MapFilterReduce from "./topics/es6_i_actually_use_daily/MapFilterReduce";
import FindSomeEvery from "./topics/es6_i_actually_use_daily/FindSomeEvery";
import SortNoMutate from "./topics/es6_i_actually_use_daily/SortNoMutate";
import FlatAndFlatMap from "./topics/es6_i_actually_use_daily/FlatAndFlatMap";
import ObjectUtilities from "./topics/es6_i_actually_use_daily/ObjectUtilities";
import SetsAndMaps from "./topics/es6_i_actually_use_daily/SetsAndMaps";
import PromisesAsyncAwait from "./topics/es6_i_actually_use_daily/PromisesAsyncAwait";
import FetchBasicsJSON from "./topics/es6_i_actually_use_daily/FetchBasicsJSON";
import Timers from "./topics/es6_i_actually_use_daily/Timers";

import JSXSyntaxRules from "./topics/jsx_rules_and_patterns/JSXSyntaxRules";
import HTMLvsJSX from "./topics/jsx_rules_and_patterns/HTMLvsJSX";
import InlineStyles from "./topics/jsx_rules_and_patterns/InlineStyles";
import Fragments from "./topics/jsx_rules_and_patterns/Fragments";
import CommentsInJSX from "./topics/jsx_rules_and_patterns/CommentsInJSX";
import ExpressionsVsStatements from "./topics/jsx_rules_and_patterns/ExpressionsVsStatements";
import ConditionalAnd from "./topics/jsx_rules_and_patterns/ConditionalAnd";
import ConditionalTernary from "./topics/jsx_rules_and_patterns/ConditionalTernary";
import EarlyReturn from "./topics/jsx_rules_and_patterns/EarlyReturn";
import RenderingLists from "./topics/jsx_rules_and_patterns/RenderingLists";
import KeysStableIdentity from "./topics/jsx_rules_and_patterns/KeysStableIdentity";
import DangerousHTML from "./topics/jsx_rules_and_patterns/DangerousHTML";
import FunctionComponentAnatomy from "./topics/components_and_props/FunctionComponentAnatomy";
import DefaultFallbackProps from "./topics/components_and_props/DefaultFallbackProps";
import ChildrenProp from "./topics/components_and_props/ChildrenProp";
import CompositionOverInheritance from "./topics/components_and_props/CompositionOverInheritance";
import PropDrilling from "./topics/components_and_props/PropDrilling";
import PureVsStateful from "./topics/components_and_props/PureVsStateful";
import ReusableComponentAPIDesign from "./topics/components_and_props/ReusableComponentAPIDesign";
import UseStateBasics from "./topics/state/UseStateBasics";
import FunctionalUpdates from "./topics/state/FunctionalUpdates";
import InitialStateFunction from "./topics/state/InitialStateFunction";
import MultipleStateVariables from "./topics/state/MultipleStateVariables";
import ObjectsInState from "./topics/state/ObjectsInState";
import ArraysInState from "./topics/state/ArraysInState";
import DerivedStateVsCompute from "./topics/state/DerivedStateVsCompute";
import BatchingStateUpdates from "./topics/state/BatchingStateUpdates";
import AntiPatterns from "./topics/state/AntiPatterns";

export default function ReactTutorial() {
    return (
        <Styled.Wrapper>
            <h1>ReactJS Handbook</h1>
            <fieldset
                style={{ padding: "0 15px 15px 30px", marginBottom: 15 }}
            >
                <legend style={{ padding: 15 }}>From Wikipedia - last updated: Sep 02, 2025</legend>
                <p>
                    React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                </p>
                <br />
                <p>
                    React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.
                </p>
            </fieldset>

            <h1 style={{ marginTop: "30px" }}>My Notes</h1>
            <h3>last updated: Sep 03, 2025</h3>

            <div className="divider"></div>
            <h3>0. Setup & Local Dev</h3>
            <>
                <ReactDefinition />
                <ViteInstall />
                <ProjectTree />
                <EditorSetup />
                <EnvFiles />
                <ImportExportBasics />
            </>

            <h3 style={{ marginTop: 50 }}>1. ES6+ I actually use daily</h3>
            <>
                <LetVsConst />
                <ArrowFunctions />
                <Destructuring />
                <RestAndSpread />
                <TemplateLiterals />
                <DefaultParameters />
                <OptionalChaining />
                <NullishCoalescing />
                <MapFilterReduce />
                <FindSomeEvery />
                <SortNoMutate />
                <FlatAndFlatMap />
                <ObjectUtilities />
                <SetsAndMaps />
                <PromisesAsyncAwait />
                <FetchBasicsJSON />
                <Timers />
            </>

            <h3 style={{ marginTop: 50 }}>2. JSX: Rules and Patterns</h3>
            <>
                <JSXSyntaxRules />
                <HTMLvsJSX />
                <InlineStyles />
                <Fragments />
                <CommentsInJSX />
                <ExpressionsVsStatements />
                <ConditionalAnd />
                <ConditionalTernary />
                <EarlyReturn />
                <RenderingLists />
                <KeysStableIdentity />
                <DangerousHTML />
            </>

            <h3 style={{ marginTop: 50 }}>3. Components & Props</h3>
            <>
                <FunctionComponentAnatomy />
                <DefaultFallbackProps />
                <ChildrenProp />
                <CompositionOverInheritance />
                <PropDrilling />
                <PureVsStateful />
                <ReusableComponentAPIDesign />
            </>

            <h3 style={{ marginTop: 50 }}>4. State (useState) - fundamentals</h3>
            <>
                <UseStateBasics />
                <FunctionalUpdates />
                <InitialStateFunction />
                <MultipleStateVariables />
                <ObjectsInState />
                <ArraysInState />
                <DerivedStateVsCompute />
                <BatchingStateUpdates />
                <AntiPatterns />
            </>
        </Styled.Wrapper>
    );
}

const Styled = {
    Wrapper: styled.div`
    --bg: #0d0f14;
    --text: #e5e7eb;
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    padding: 10px;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
      "Segoe UI Emoji";
    line-height: 1.55;
    max-width: 900px;
    margin: auto;

    .divider {
        margin: 30px 15px;
        height: 1px;
        background-color: #333;
    }
  `,
};
