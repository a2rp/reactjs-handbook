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
        @media (max-width: 980px) { grid-template-columns: 1fr 1fr; }
        @media (max-width: 620px) { grid-template-columns: 1fr; }
    `,
    Col: styled.div`
        h4 { margin: 0 0 8px; font-size: 18px; letter-spacing: .3px; }
        h5 { margin: 0 0 8px; font-size: 14px; color: #bdbdbd; font-weight: 600; letter-spacing: .2px; text-transform: uppercase; }
        p { margin: 0 0 10px; color: #bfbfbf; line-height: 1.55; }
        .builtwith { color: #a9c6ff; }
        .iconLinks { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
        .iconLinks a, .topButton { width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #2a2a2a; border-radius: 8px; background: #151515; color: #cfe0ff; text-decoration: none; cursor: pointer; transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, color 180ms ease; }
        .iconLinks a:hover, .iconLinks a:focus-visible, .topButton:hover, .topButton:focus-visible { background: #1d1d1d; border-color: #6c8fca; color: #fff; box-shadow: 0 0 16px rgba(108,143,202,.25); outline: none; }
        .topButton { margin-top: 12px; }
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
        span { color: #a5a5a5; font-size: 13px; }
        a { color: #dcdcdc; text-decoration: none; font-weight: 700; }
        a:hover { text-shadow: 0 0 10px rgba(255,255,255,.36); }
        @media (max-width: 620px) { flex-direction: column; align-items: flex-start; gap: 6px; }
    `,
};
