import{d as a,j as e,F as i,N as t}from"./index-7zjufw3g.js";const s="1080px",r={Wrapper:a.div`
        color: var(--text, #e9e9e9);
        padding: 24px;
    `,Hero:a.section`
        margin: 0 auto 28px;
        max-width: ${s};
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
        max-width: ${s};

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
            ${({cols:n})=>n||2},
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
        max-width: ${s};
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
    `};function d(){return e.jsxs(r.Wrapper,{children:[e.jsx("h1",{children:"ReactJS Handbook"}),e.jsxs("fieldset",{style:{padding:"15px",margin:"15px 0"},children:[e.jsx("legend",{style:{padding:"0 15px"},children:"From Wikipedia - last updated: Sep 02, 2025"}),e.jsx("p",{children:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'}),e.jsx("br",{}),e.jsx("p",{children:"React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements."})]}),e.jsxs("b",{style:{color:"orangered",display:"flex",alignItems:"center",gap:15},children:["Last Updated: September 04, 2025 ",e.jsx("a",{href:"https://github.com/a2rp/reactjs-handbook",target:"_blank",style:{color:"#fff",textDecoration:"none"},children:e.jsx(i,{size:20})})]}),e.jsx(r.Hero,{children:e.jsxs("div",{children:[e.jsx("p",{children:"A practical, no-nonsense guide I'm building while shipping real apps. Topics are focused, opinionated, and production-ready-copy/paste and use the same day."}),e.jsx(r.CTA,{children:e.jsx(t,{to:"/setup-and-local-dev",className:"btn primary",children:"Start with Setup →"})})]})}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"About the Project"}),e.jsx("p",{children:"This handbook distills patterns I use across React + Node projects-so features ship faster with fewer bugs and a consistent developer experience. It's intentionally lightweight (Vite, React 18, styled-components, Router v6) and deploy-friendly (GH-Pages/Netlify/Cloudflare)."}),e.jsxs(r.Grid,{cols:"2",children:[e.jsxs(r.Card,{children:[e.jsx("h3",{children:"How to use"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pick a topic from the left → skim the TL;DR → study the examples."}),e.jsx("li",{children:"All snippets are copy-pasteable and safe for prod."}),e.jsxs("li",{children:["Lazy routes + ",e.jsx("code",{children:"Suspense"}),", error-aware patterns, and routing that works on GH-Pages refresh."]})]})]}),e.jsxs(r.Card,{children:[e.jsx("h3",{children:"Principles"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Practical over perfect"})," - ship, measure, iterate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Small focused topics"})," - avoid mega tutorials."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deployment aware"})," - every pattern survives real hosting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readable code"})," - Styled-Components with a consistent ",e.jsx("code",{children:"Styled"})," API."]})]})]})]})]}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"Tech Stack"}),e.jsxs(r.Tags,{children:[e.jsx("span",{children:"React 18"}),e.jsx("span",{children:"Vite"}),e.jsx("span",{children:"React Router v6"}),e.jsx("span",{children:"styled-components"}),e.jsx("span",{children:"ESLint + Prettier"}),e.jsx("span",{children:"GH-Pages / Netlify / Cloudflare"})]})]}),e.jsx(r.Divider,{}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"About Me - Ashish Ranjan"}),e.jsx("p",{children:"Full-Stack JavaScript Engineer (MERN), Bengaluru/Remote. I build fast, stable, SEO-friendly apps with clean, maintainable code-and I document everything so teams move quickly."}),e.jsx(r.Grid,{cols:"2",children:e.jsxs(r.Card,{children:[e.jsx("h3",{children:"What I do"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Front-end"}),": React (Vite), Router, styled-components, MUI, accessible UI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Back-end"}),": Node/Express, MongoDB, JWT/roles, REST APIs, uploads (Cloudinary)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payments & Ops"}),": Stripe/Razorpay, CI/CD, GH-Pages/Netlify/Cloudflare/Render."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"AI"}),": small LLM apps/agents, cost-aware and practical."]})]})]})}),e.jsxs(r.Links,{children:[e.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",children:"Portfolio"}),e.jsx("a",{href:"https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf",target:"_blank",children:"Resume (PDF)"}),e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",children:"LinkedIn"}),e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"})]}),e.jsx(r.Note,{children:"Open to MERN / React roles (full-time or contract). Happy to demo live or build a short PoC."})]})]})}export{d as default};
