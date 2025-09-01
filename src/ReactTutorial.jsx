import styled from "styled-components";
import ReactDefinition from "./topics/ReactDefinition";

export default function ReactTutorial() {
    return (
        <Styled.Wrapper>
            <fieldset
                style={{ padding: "0 15px 15px 30px", marginBottom: 15 }}
            >
                <legend style={{ padding: 15 }}>From Wikipedia - last updated: Sep 01, 2025</legend>
                <p>
                    React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                </p>
                <br />
                <p>
                    React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.
                </p>
            </fieldset>

            <ReactDefinition />
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
  `,
};
