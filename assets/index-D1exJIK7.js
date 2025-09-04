import{d as a,G as i,j as e,N as t}from"./index-B46-zIwX.js";const n="1080px",r={Wrapper:a.div`
        color: var(--text, #e9e9e9);
        padding: 24px;
    `,Hero:a.section`
        margin: 0 auto 28px;
        max-width: ${n};
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
    `,CTA:a.div`
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
    `,Section:a.section`
        margin: 28px auto;
        max-width: ${n};

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
    `,Grid:a.div`
        display: grid;
        grid-template-columns: repeat(
            ${({cols:s})=>s||2},
            minmax(0, 1fr)
        );
        gap: 14px;
        @media (max-width: 920px) {
            grid-template-columns: 1fr;
        }
    `,Card:a.div`
        background: #0e0e0e;
        border: 1px solid #242424;
        border-radius: 14px;
        padding: 16px;
    `,Tags:a.div`
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
    `,Divider:a.hr`
        border: none;
        border-top: 1px solid #222;
        margin: 24px auto;
        max-width: ${n};
    `,Links:a.div`
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
    `,Note:a.div`
        margin-top: 30px;
        color: #bdbdbd;
    `};function o(s){return i({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function l(){return e.jsxs(r.Wrapper,{children:[e.jsx("h1",{children:"ReactJS Handbook"}),e.jsxs("fieldset",{style:{padding:"15px",margin:"15px 0"},children:[e.jsx("legend",{style:{padding:"0 15px"},children:"From Wikipedia - last updated: Sep 02, 2025"}),e.jsx("p",{children:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'}),e.jsx("br",{}),e.jsx("p",{children:"React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements."})]}),e.jsxs("b",{style:{color:"orangered",display:"flex",alignItems:"center",gap:15},children:["Last Updated: September 05, 2025 ",e.jsx("a",{href:"https://github.com/a2rp/reactjs-handbook",target:"_blank",style:{color:"#fff",textDecoration:"none"},children:e.jsx(o,{size:20})})]}),e.jsx(r.Hero,{children:e.jsxs("div",{children:[e.jsx("p",{children:"A practical, no-nonsense guide I'm building while shipping real apps. Topics are focused, opinionated, and production-ready-copy/paste and use the same day."}),e.jsx(r.CTA,{children:e.jsx(t,{to:"/setup-and-local-dev",className:"btn primary",children:"Start with Setup →"})})]})}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"About the Project"}),e.jsx("p",{children:"This handbook distills patterns I use across React + Node projects-so features ship faster with fewer bugs and a consistent developer experience. It's intentionally lightweight (Vite, React 18, styled-components, Router v6) and deploy-friendly (GH-Pages/Netlify/Cloudflare)."}),e.jsxs(r.Grid,{cols:"2",children:[e.jsxs(r.Card,{children:[e.jsx("h3",{children:"How to use"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pick a topic from the left → skim the TL;DR → study the examples."}),e.jsx("li",{children:"All snippets are copy-pasteable and safe for prod."}),e.jsxs("li",{children:["Lazy routes + ",e.jsx("code",{children:"Suspense"}),", error-aware patterns, and routing that works on GH-Pages refresh."]})]})]}),e.jsxs(r.Card,{children:[e.jsx("h3",{children:"Principles"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Practical over perfect"})," - ship, measure, iterate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Small focused topics"})," - avoid mega tutorials."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deployment aware"})," - every pattern survives real hosting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readable code"})," - Styled-Components with a consistent ",e.jsx("code",{children:"Styled"})," API."]})]})]})]})]}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"Tech Stack"}),e.jsxs(r.Tags,{children:[e.jsx("span",{children:"React 18"}),e.jsx("span",{children:"Vite"}),e.jsx("span",{children:"React Router v6"}),e.jsx("span",{children:"styled-components"}),e.jsx("span",{children:"ESLint + Prettier"}),e.jsx("span",{children:"GH-Pages / Netlify / Cloudflare"})]})]}),e.jsx(r.Divider,{}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"About Me - Ashish Ranjan"}),e.jsx("p",{children:"Full-Stack JavaScript Engineer (MERN), Bengaluru/Remote. I build fast, stable, SEO-friendly apps with clean, maintainable code-and I document everything so teams move quickly."}),e.jsx(r.Grid,{cols:"2",children:e.jsxs(r.Card,{children:[e.jsx("h3",{children:"What I do"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Front-end"}),": React (Vite), Router, styled-components, MUI, accessible UI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Back-end"}),": Node/Express, MongoDB, JWT/roles, REST APIs, uploads (Cloudinary)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payments & Ops"}),": Stripe/Razorpay, CI/CD, GH-Pages/Netlify/Cloudflare/Render."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"AI"}),": small LLM apps/agents, cost-aware and practical."]})]})]})}),e.jsxs(r.Links,{children:[e.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",children:"Portfolio"}),e.jsx("a",{href:"https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf",target:"_blank",children:"Resume (PDF)"}),e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",children:"LinkedIn"}),e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"})]}),e.jsx(r.Note,{children:"Open to MERN / React roles (full-time or contract). Happy to demo live or build a short PoC."})]})]})}export{l as default};
