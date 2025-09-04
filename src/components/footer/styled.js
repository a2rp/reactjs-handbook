import styled from "styled-components";

const maxw = "1180px";

export const Styled = {
    Wrapper: styled.footer`
        margin-top: 24px;
        border-top: 1px solid #1e1e1e;
        background: #0b0b0b;
        color: #dcdcdc;
    `,

    Inner: styled.div`
        display: grid;
        gap: 18px;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        max-width: ${maxw};
        margin: 0 auto;
        padding: 22px 24px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 620px) {
            grid-template-columns: 1fr;
        }
    `,

    Col: styled.div`
        h4 {
            margin: 0 0 8px;
            font-size: 18px;
            letter-spacing: 0.3px;
        }
        h5 {
            margin: 0 0 8px;
            font-size: 14px;
            color: #bdbdbd;
            font-weight: 600;
            letter-spacing: 0.2px;
            text-transform: uppercase;
        }
        p {
            margin: 0 0 10px;
            color: #bfbfbf;
        }
        .builtwith {
            color: #a9c6ff;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li {
            margin: 6px 0;
        }

        a {
            color: #cfe0ff;
            text-decoration: none;
            border-bottom: 1px dashed #2b4370;
            padding-bottom: 1px;
        }
        a:hover {
            border-bottom-style: solid;
        }

        .note {
            font-size: 13px;
            color: #a7a7a7;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
        }
        .chip {
            display: inline-block;
            padding: 6px 10px;
            border-radius: 999px;
            background: #151515;
            border: 1px solid #2a2a2a;
            font-size: 13px;
            color: #d7d7d7;
            text-decoration: none;
        }
        .chip:hover {
            background: #1d1d1d;
        }

        .top {
            display: inline-block;
            margin-top: 6px;
            font-size: 13px;
            color: #b8d1ff;
        }
    `,

    Bar: styled.div`
        border-top: 1px solid #151515;
        padding: 12px 24px;
        display: flex;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
        max-width: ${maxw};
        margin: 0 auto;

        span {
            color: #a5a5a5;
            font-size: 13px;
        }
        a {
            color: #a5a5a5;
            text-decoration: none;
        }
        @media (max-width: 620px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `,
};
