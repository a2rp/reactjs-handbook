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
            <h3>last updated: Sep 02, 2025</h3>

            <div className="divider"></div>
            <h3>0. Setup & Local Dev</h3>
            <ReactDefinition />
            <ViteInstall />
            <ProjectTree />
            <EditorSetup />
            <EnvFiles />
            <ImportExportBasics />

            <h3 style={{ marginTop: 50 }}>1. ES6+ I actually use daily</h3>
            <LetVsConst />
            <ArrowFunctions />
            <Destructuring />
            <RestAndSpread />
            <TemplateLiterals />

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
    padding: 20px;
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
