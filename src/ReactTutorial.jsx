import React from "react";
import styled from "styled-components";
import HowReactThinks from "./topics/HowReactThinks";
import ES6Daily from "./topics/ES6Daily";

export default function ReactTutorial() {
    return (
        <Styled.Wrapper>
            <HowReactThinks defaultOpen={false} />
            <ES6Daily defaultOpen={false} />
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
  `,
};
