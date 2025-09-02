import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import styled from "styled-components";

export default function ScrollToTop({ threshold = 50 }) {
    const [visible, setVisible] = React.useState(false);
    const prefersReduced = React.useMemo(
        () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
        []
    );

    React.useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setVisible(window.scrollY > threshold);
                    ticking = false;
                });
                ticking = true;
            }
        };
        onScroll(); // run once on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    };

    return (
        <Btn
            type="button"
            aria-label="Scroll to top"
            onClick={handleClick}
            data-visible={visible}
            title="Back to top"
        >
            <FaAngleDoubleUp />
        </Btn>
    );
}

const Btn = styled.button`
    position: fixed;
    right: 18px;
    bottom: 18px;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid #1c2333;
    background: radial-gradient(120% 120% at 30% 20%, #1b2235 0%, #0f1524 100%);
    color: #c7d2fe;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    cursor: pointer;

    display: grid;
    place-items: center;
    font-size: 16px;
    line-height: 1;

    opacity: 0;
    transform: translateY(10px) scale(0.96);
    pointer-events: none;
    transition: opacity 160ms ease, transform 160ms ease, box-shadow 160ms ease;

    &[data-visible="true"] {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
    }

    &:hover {
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
    }
    &:focus-visible {
        outline: 2px solid #6366f1;
        outline-offset: 2px;
    }

    @media (max-width: 480px) {
        right: 12px;
        bottom: 12px;
        width: 40px;
        height: 40px;
    }
`;
