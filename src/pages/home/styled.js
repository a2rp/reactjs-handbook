import styled from "styled-components";

const maxw = "1080px";

export const Styled = {
    Wrapper: styled.div`
        color: var(--text, #e9e9e9);
        padding: 24px;
    `,

    Hero: styled.section`
        margin: 0 auto 28px;
        max-width: ${maxw};
        display: grid;
        align-items: center;
        margin-top: 15px;

        h1 {
            font-size: clamp(28px, 4vw, 40px);
            margin: 0 0 10px;
            letter-spacing: 0.3px;
        }
        p {
            margin: 0 0 16px;
            color: #bdbdbd;
        }
    `,

    CTA: styled.div`
        display: flex;
        gap: 12px;
        margin-top: 8px;

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            border-radius: 10px;
            border: 1px solid #3b3b3b;
            text-decoration: none;
            color: #eaeaea;
            transition: transform 120ms ease, background 120ms ease,
                border-color 120ms ease;
            will-change: transform;
        }
        .btn.primary {
            background: #1f6feb20;
            border-color: #1f6feb60;
        }
        .btn.ghost:hover {
            background: #2a2a2a;
        }
        .btn:hover {
            transform: translateY(-1px);
        }
    `,

    Section: styled.section`
        margin: 28px auto;
        max-width: ${maxw};

        h2 {
            font-size: clamp(20px, 3vw, 26px);
            margin: 0 0 12px;
        }
        h3 {
            margin: 0 0 8px;
            font-weight: 600;
        }
        p {
            margin: 0 0 12px;
            color: #c6c6c6;
        }
        ul {
            margin: 0;
            padding-left: 18px;
        }
        li {
            margin: 6px 0;
        }
        code {
            background: #222;
            padding: 2px 6px;
            border-radius: 6px;
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(
            ${({ cols }) => cols || 2},
            minmax(0, 1fr)
        );
        gap: 14px;
        @media (max-width: 920px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.div`
        background: #0e0e0e;
        border: 1px solid #242424;
        border-radius: 14px;
        padding: 16px;
    `,

    Tags: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        span {
            font-size: 13px;
            background: #151515;
            border: 1px solid #2b2b2b;
            padding: 6px 10px;
            border-radius: 999px;
            color: #cfcfcf;
        }
    `,

    Divider: styled.hr`
        border: none;
        border-top: 1px solid #222;
        margin: 24px auto;
        max-width: ${maxw};
    `,

    Links: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 30px;

        a {
            color: #b8d1ff;
            text-decoration: none;
            border-bottom: 1px dashed #2c4370;
            padding-bottom: 2px;
        }
        a:hover {
            border-bottom-style: solid;
        }
    `,

    Note: styled.div`
        margin-top: 30px;
        color: #bdbdbd;
    `,
};
