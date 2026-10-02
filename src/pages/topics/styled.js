import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from { box-shadow: 0 0 0 0 rgba(119, 119, 119, 0.3); }
  to   { box-shadow: 0 0 0 8px rgba(119, 119, 119, 0.0); }
`;

export const Styled = {
    Topic: styled.section`
        --card: #161616;
        --muted: #a2a2a2;
        --accent: #777777;
        --expose: #ddd;
        background: var(--card);
        border: 1px solid #232323;
        border-radius: 14px;
        margin: 10px 0 16px;
        overflow: hidden;
    `,

    Title: styled.button`
        all: unset;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 14px 16px;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.2px;
        background: linear-gradient(
            180deg,
            rgba(119, 119, 119, 0.08),
            transparent
        );
        border-bottom: 1px solid #212121;
        &:hover {
            background: rgba(119, 119, 119, 0.1);
        }
        &:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: -2px;
        }
    `,

    Arrow: styled.span`
        display: inline-block;
        width: 16px;
        text-align: center;
        color: var(--accent);
        transition: transform 180ms ease;
        transform: rotate(0deg);
        &[data-open="true"] {
            transform: rotate(90deg);
        }
    `,

    Panel: styled.div`
        /* Animated collapse using grid-row trick */
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 220ms ease;
        &[data-open="true"] {
            grid-template-rows: 1fr;
        }
        > div {
            overflow: hidden;
        }
    `,

    Content: styled.div`
        padding: 16px;
        font-size: 15px;
        h3 {
            /* margin: 15px 0 8px; */
            font-size: 16px;
            color: #d3d3d3;
        }
        p,
        li {
            color: #e7e7e7;
        }
        p {
            margin-bottom: 30px;
        }
        ul,
        ol {
            margin: 8px 0 14px 18px;
        }
        em {
            color: #d4d4d4;
        }
    `,

    Code: styled.pre`
        margin: 10px 0 16px;
        padding: 15px 16px;
        background: #0f0f0f;
        border: 1px solid #232323;
        border-radius: 12px;
        overflow: auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: 13px;
        line-height: 1.5;
        position: relative;

        &:before {
            content: "example";
            position: absolute;
            top: -0px;
            right: 10px;
            font-size: 11px;
            /* color: var(--muted); */
            color: var(--expose);
            background: #0f0f0f;
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid #232323;
            animation: ${pulse} 2s ease-out 1;
        }
    `,

    Kbd: styled.code`
        padding: 1px 6px;
        border-radius: 6px;
        background: #0f0f0f;
        border: 1px solid #232323;
        font-size: 0.9em;
    `,

    Divider: styled.hr`
        border: none;
        border-top: 1px dashed #303030;
        margin: 16px 0;
    `,
};
