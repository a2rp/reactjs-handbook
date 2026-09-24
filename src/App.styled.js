import styled from "styled-components";

const Wrapper = styled.div`position: relative;`;
const Header = styled.header`
    position: fixed;
    inset: 0 0 auto;
    z-index: 10000;
    height: 70px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 12px 15px;
    border-bottom: 1px solid #262626;
`;
const NavLinkWrapper = styled.button`
    box-shadow: 0 0 1px 1px #333 inset;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #080808;
    color: #eee;
    transition: border-color 180ms ease, box-shadow 180ms ease, color 180ms ease;
    &:hover, &:focus-visible { color: #fff; box-shadow: 0 0 14px rgba(255,255,255,.22), 0 0 1px 1px #777 inset; outline: none; }
`;
const Heading = styled.h1`
    margin: 0;
    font-size: 14px;
    a { display: flex; align-items: center; gap: 10px; color: #eee; text-decoration: none; }
    img { width: 34px; height: 34px; object-fit: contain; border: 1px solid #333; border-radius: 8px; }
    a:hover { text-shadow: 0 0 12px rgba(255,255,255,.42); }
`;
const Main = styled.main`
    height: 100vh;
    padding-top: 70px;
    display: flex;
    align-items: stretch;
    overflow: hidden;
`;
const NavWrapper = styled.nav`
    box-shadow: 0 0 1px 1px #333 inset;
    width: 0;
    flex: 0 0 0;
    transition: width 180ms ease, flex 180ms ease;
    overflow: hidden;
    z-index: 9999;
    background-color: #000;
    &.active { flex: 0 0 250px; width: 250px; }
    @media (max-width: 900px) { position: fixed; top: 70px; left: 0; height: calc(100vh - 70px); }
    .navInner { width: 250px; height: 100%; overflow-y: auto;
        a { display: flex; align-items: center; color: #777; text-decoration: none; min-height: 40px; padding: 0 15px; white-space: nowrap; transition: color 180ms ease, text-shadow 180ms ease, background 180ms ease;
            &:hover, &.active { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,.26); background: #101010; }
        }
    }
`;
const Tuts = styled.div``;
const ContentWrapper = styled.div`
    box-shadow: 0 0 1px 1px #333 inset;
    width: 100%;
    overflow: auto;
    padding: 15px;
    scroll-behavior: smooth !important;
`;
const RoutesWrapper = styled.div`min-height: 100vh;`;
const Footer = styled.div`padding: 15px;`;
export const Styled = { Wrapper, Header, NavLinkWrapper, Heading, Main, ContentWrapper, RoutesWrapper, NavWrapper, Tuts, Footer };
