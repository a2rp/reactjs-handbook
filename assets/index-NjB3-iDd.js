import{R as d,j as e,d as o}from"./index-B46-zIwX.js";import{S as n}from"./styled-CjylpLiR.js";function c({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="jsx-syntax-rules";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"JSX syntax rules (one root, expressions)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(a,{})})})]})}function a(){return e.jsxs(n.Content,{children:[e.jsxs("div",{children:["JSX is syntax sugar for ",e.jsx("code",{children:"React.createElement"}),". It has two core rules:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:" (1) one root element"})," per JSX return, and"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"(2) curly braces hold expressions"})," (not statements)."]})]})]}),e.jsx("h3",{children:"A) One root element"}),e.jsxs("p",{children:["Each component’s ",e.jsx("code",{children:"return"})," must produce a single parent node. Use a wrapper element or a Fragment."]}),e.jsx(n.Code,{children:`// ❌ Not allowed: two siblings at top level
function Bad() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Wrap with a div
function GoodDiv() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Or prefer Fragment when you don't need an extra DOM element
function GoodFragment() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}`}),e.jsx("h3",{children:"B) Fragments (short & long form + keys)"}),e.jsxs("p",{children:["Shorthand ",e.jsx("code",{children:"<>...</>"})," is great for grouping. Use"," ",e.jsx("code",{children:"<React.Fragment>"})," if you need a ",e.jsx("code",{children:"key"}),"."]}),e.jsx(n.Code,{children:`const rows = [
  { id: 1, label: "A" },
  { id: 2, label: "B" },
];

function KeyedFragments() {
  return (
    <ul>
      {rows.map(row => (
        <React.Fragment key={row.id}>
          <li>{row.label}</li>
          <li className="divider" aria-hidden="true">—</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}),e.jsxs("h3",{children:["C) Curly braces are for ",e.jsx("em",{children:"expressions"})]}),e.jsxs("p",{children:["Inside JSX, ",e.jsx("code",{children:"{ ... }"})," must contain an expression (something that evaluates to a value): variables, function calls, math, array literals, ",e.jsx("em",{children:"ternary"})," conditionals, etc. Statements like ",e.jsx("code",{children:"if"}),"/",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"while"})," are not allowed directly in braces."]}),e.jsx(n.Code,{children:`// ✅ Valid (expressions)
const user = { first: "Ashish", last: "Ranjan" };
const n = 7;
function Demo() {
  return (
    <div>
      <p>Hello, {user.first + " " + user.last}!</p>
      <p>2 + 5 = {2 + 5}</p>
      <p>Lucky? {n > 5 ? "Yes" : "No"}</p>
      <ul>{["JSX","Rules","FTW"].map((w, i) => <li key={i}>{w}</li>)}</ul>
    </div>
  );
}

// ❌ Invalid (statements in braces)
// <div>{ if (ok) { "Yes" } else { "No" } }</div>

// ✅ Convert to expression using a ternary
// <div>{ ok ? "Yes" : "No" }</div>

// ✅ Or precompute above return
// let msg = "No";
// if (ok) msg = "Yes";
// return <div>{msg}</div>;`}),e.jsx("h3",{children:"D) Attributes: literal vs expression"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Quotes for string literals: ",e.jsx("code",{children:'<img alt="logo" />'})]}),e.jsxs("li",{children:["Braces for non-strings/variables: ",e.jsx("code",{children:"<img width={64} />"})]}),e.jsxs("li",{children:["Booleans: ",e.jsx("code",{children:"<Button primary />"})," ≡ ",e.jsx("code",{children:"<Button primary={true} />"})]}),e.jsxs("li",{children:["Objects/arrays need braces: ",e.jsx("code",{children:"<Box style={{ marginTop: 8 }} />"})]})]}),e.jsx(n.Code,{children:`function Attrs() {
  const size = 64;
  const styles = { marginTop: 8, borderRadius: 8 };

  return (
    <img
      alt="Logo"              // string literal -> quotes
      src="/logo.png"
      width={size}            // number -> braces
      height={size}
      style={styles}          // object -> braces
      draggable={false}       // boolean -> braces
    />
  );
}`}),e.jsx("h3",{children:"E) What renders vs what doesn't"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"undefined"}),", and ",e.jsx("code",{children:"false"})," render nothing."]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," ",e.jsx("em",{children:"does"})," render (common gotcha)."]}),e.jsxs("li",{children:["Arrays of nodes are fine: ",e.jsx("code",{children:'{[<li key="1">A</li>, <li key="2">B</li>]}'})]})]}),e.jsx(n.Code,{children:`function Visibility({ count }) {
  // || treats 0 as falsy -> will fall back; often not desired.
  // Prefer ?? so 0 stays 0.
  return <p>Count: {count ?? 0}</p>;
}`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix this return to have a single root (no extra DOM wrapper in the output):",e.jsx(n.Code,{children:`function X() {
  return (
    <h2>Hi</h2>
    <p>There</p>
  );
}`}),e.jsx("em",{children:"Hint:"})," Use a Fragment."]}),e.jsxs("li",{children:["Convert this statement into an expression:",e.jsx(n.Code,{children:`// Want: "Even" if n%2===0, else "Odd"
// <div>{ if (n % 2 === 0) { "Even" } else { "Odd" } }</div>`})]}),e.jsxs("li",{children:["Make this map render correctly with keys:",e.jsx(n.Code,{children:`<ul>
  {items.map(item => <li>{item.label}</li>)}
</ul>`})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Return exactly one root element (Fragment if no wrapper DOM is needed)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"{ ... }"})," only for expressions. Convert statements to a ternary or compute earlier."]}),e.jsx("li",{children:"Quotes for string literals, braces for variables/non-strings."}),e.jsxs("li",{children:["Remember: ",e.jsx("code",{children:"null/undefined/false"})," render nothing; ",e.jsx("code",{children:"0"})," renders."]})]}),e.jsx(n.Divider,{})]})}function h({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="html-vs-jsx";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"HTML vs JSX differences (className, htmlFor)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(x,{})})})]})}function x(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["JSX maps to DOM ",e.jsx("em",{children:"properties"})," (not raw HTML attributes). That’s why some names change (e.g., ",e.jsx("code",{children:"className"})," instead of ",e.jsx("code",{children:"class"}),", ",e.jsx("code",{children:"htmlFor"})," instead of ",e.jsx("code",{children:"for"}),") and most attributes are ",e.jsx("strong",{children:"camelCased"}),"."]}),e.jsxs("h3",{children:["A) ",e.jsx("code",{children:"class"})," → ",e.jsx("code",{children:"className"})]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"className"})," for CSS classes (JSX avoids the reserved keyword ",e.jsx("code",{children:"class"}),")."]}),e.jsx(n.Code,{children:`// HTML
<div class="card primary"></div>

// JSX
<div className="card primary"></div>

// Dynamic classes
const isPrimary = true;
<div className={isPrimary ? "card primary" : "card"} />`}),e.jsxs("h3",{children:["B) ",e.jsx("code",{children:"for"})," → ",e.jsx("code",{children:"htmlFor"})," (labels)"]}),e.jsxs("p",{children:["In JSX, the ",e.jsx("code",{children:"label"})," attribute is ",e.jsx("code",{children:"htmlFor"}),". It must match the target input’s ",e.jsx("code",{children:"id"}),"."]}),e.jsx(n.Code,{children:`// HTML
<label for="email">Email</label>
<input id="email" type="email" />

// JSX
<label htmlFor="email">Email</label>
<input id="email" type="email" />`}),e.jsxs("p",{children:["If the input is nested inside the label, ",e.jsx("code",{children:"htmlFor"})," is optional:"]}),e.jsx(n.Code,{children:`<label>
  Email
  <input type="email" />
</label>`}),e.jsxs("h3",{children:["C) Attribute naming: camelCase (except ",e.jsx("code",{children:"data-*"})," & ",e.jsx("code",{children:"aria-*"}),")"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"tabindex"})," → ",e.jsx("code",{children:"tabIndex"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"readonly"})," → ",e.jsx("code",{children:"readOnly"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"maxlength"})," → ",e.jsx("code",{children:"maxLength"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"autocomplete"})," → ",e.jsx("code",{children:"autoComplete"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"contenteditable"})," → ",e.jsx("code",{children:"contentEditable"})]}),e.jsxs("li",{children:["Images/media: ",e.jsx("code",{children:"srcset"})," → ",e.jsx("code",{children:"srcSet"}),", ",e.jsx("code",{children:"crossorigin"})," → ",e.jsx("code",{children:"crossOrigin"})]}),e.jsxs("li",{children:["Forms: ",e.jsx("code",{children:"accept-charset"})," → ",e.jsx("code",{children:"acceptCharset"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unchanged:"})," ",e.jsx("code",{children:"data-*"})," & ",e.jsx("code",{children:"aria-*"})," remain kebab-case."]})]}),e.jsx(n.Code,{children:`<img src="/hero.png" srcSet="/hero@2x.png 2x" crossOrigin="anonymous" />
<form acceptCharset="UTF-8" />`}),e.jsx("h3",{children:"D) Events: camelCase + pass functions"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"onClick"}),", ",e.jsx("code",{children:"onChange"}),", ",e.jsx("code",{children:"onSubmit"}),"… and pass a function, not a string."]}),e.jsx(n.Code,{children:`// HTML
<button onclick="doThing()">Run</button>

// JSX
<button onClick={doThing}>Run</button>
<button onClick={() => doThing("arg")}>Run with arg</button>`}),e.jsx("h3",{children:"E) Inline styles: object, not string"}),e.jsx("p",{children:"Provide a JS object with camelCased CSS properties. Numbers are pixels by default for most props."}),e.jsx(n.Code,{children:`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}),e.jsx("h3",{children:"F) Boolean attributes"}),e.jsxs("p",{children:["Presence implies ",e.jsx("code",{children:"true"}),". Use braces for dynamic booleans."]}),e.jsx(n.Code,{children:`// Static true
<input type="checkbox" checked />

// Dynamic
const disabled = isSubmitting;
<button disabled={disabled}>Save</button>`}),e.jsx("h3",{children:"G) SVG & special cases"}),e.jsx("p",{children:"Many SVG attributes are camelCased in JSX."}),e.jsx(n.Code,{children:`// HTML
<svg viewBox="0 0 100 100"><circle stroke-width="2" /></svg>

// JSX
<svg viewBox="0 0 100 100"><circle strokeWidth={2} /></svg>`}),e.jsxs("h3",{children:["H) Raw HTML: ",e.jsx("code",{children:"dangerouslySetInnerHTML"})]}),e.jsxs("p",{children:["Use sparingly—only with trusted content—to avoid XSS. Must pass an object with ",e.jsx("code",{children:"__html"}),"."]}),e.jsx(n.Code,{children:`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}),e.jsx("h3",{children:"I) Self-closing tags required"}),e.jsx("p",{children:"Tags with no children must be self-closed in JSX."}),e.jsx(n.Code,{children:`// HTML
<img src="/logo.png">

// JSX
<img src="/logo.png" />`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to valid JSX:",e.jsx(n.Code,{children:`<label for="name">Name</label>
<input id="name">`})]}),e.jsxs("li",{children:["Fix attribute names:",e.jsx(n.Code,{children:'<input maxlength="10" tabindex="0" readonly>'})]}),e.jsxs("li",{children:["Rewrite with inline styles (JS object) and an event:",e.jsx(n.Code,{children:'<button onclick="save()" style="background-color: #09f; padding: 8px 12px;">Save</button>'})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"className"})," for classes; ",e.jsx("code",{children:"htmlFor"})," for labels."]}),e.jsxs("li",{children:["Attributes & events are camelCase; ",e.jsx("code",{children:"data-*"}),"/",e.jsx("code",{children:"aria-*"})," stay kebab-case."]}),e.jsx("li",{children:"Styles use an object: camelCased props, numbers as px."}),e.jsxs("li",{children:["Boolean props: presence or ",e.jsx("code",{children:"{true}"}),"; use braces for dynamics."]}),e.jsxs("li",{children:["Self-close empty elements; be careful with ",e.jsx("code",{children:"dangerouslySetInnerHTML"}),"."]})]}),e.jsx(n.Divider,{})]})}function j({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="inline-styles";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Inline styles (style object)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(u,{})})})]})}function u(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["In JSX, the ",e.jsx("code",{children:"style"})," prop takes a ",e.jsx("strong",{children:"JS object"})," with"," ",e.jsx("em",{children:"camelCased"})," CSS properties. Numbers are treated as ",e.jsx("code",{children:"px"})," (for most props). Use strings for other units (",e.jsx("code",{children:'"%'}),", ",e.jsx("code",{children:'"rem"'}),", etc.)."]}),e.jsx("h3",{children:"A) Basics: object, camelCase, numbers → px"}),e.jsx(n.Code,{children:`// HTML
<div style="background-color: tomato; margin-top: 8px;"></div>

// JSX
<div style={{ backgroundColor: "tomato", marginTop: 8 }} />`}),e.jsx("h3",{children:"B) Units: number vs string"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Number"})," → pixels: ",e.jsx("code",{children:"{ width: 200 }"})," ⇒ ",e.jsx("code",{children:"width: 200px"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"String"})," for non-px: ",e.jsx("code",{children:'{ width: "50%" }'}),", ",e.jsx("code",{children:'{ fontSize: "1.25rem" }'})]}),e.jsxs("li",{children:["Unitless props (examples): ",e.jsx("code",{children:"lineHeight"}),", ",e.jsx("code",{children:"zIndex"}),", ",e.jsx("code",{children:"fontWeight"}),", ",e.jsx("code",{children:"opacity"}),", ",e.jsx("code",{children:"flexGrow"}),", ",e.jsx("code",{children:"flexShrink"}),"."]})]}),e.jsx(n.Code,{children:`<div
  style={{
    width: "50%",
    height: 120,             // 120px
    lineHeight: 1.4,         // unitless ok
    opacity: 0.9
  }}
/>`}),e.jsx("h3",{children:"C) Vendor prefixes & SVG"}),e.jsxs("p",{children:["Use camelCase with vendor prefixes: ",e.jsx("code",{children:"Webkit"}),", ",e.jsx("code",{children:"ms"}),", etc. Many SVG attrs are camelCased too."]}),e.jsx(n.Code,{children:`<div style={{ WebkitUserSelect: "none", msOverflowStyle: "none" }} />
<svg viewBox="0 0 100 10">
  <rect width="100" height="10" fill="tomato" />
</svg>`}),e.jsx("h3",{children:"D) Conditional & merged styles"}),e.jsx("p",{children:"Inline styles are just objects-combine with spreads and conditionals."}),e.jsx(n.Code,{children:`const base = { padding: 12, borderRadius: 8 };
const primary = { backgroundColor: "#0af", color: "#fff" };
const danger  = { backgroundColor: "#e11", color: "#fff" };

function Button({ kind = "primary", active }) {
  const tone = kind === "danger" ? danger : primary;
  return (
    <button
      style={{
        ...base,
        ...tone,
        ...(active && { boxShadow: "0 0 0 3px rgba(0,0,0,0.15)" })
      }}
    >
      Click
    </button>
  );
}`}),e.jsx("h3",{children:"E) Dynamic values & CSS variables"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Compute on the fly: strings for percent/other units, numbers for px."}),e.jsx("li",{children:"CSS variables work fine-supply as strings."})]}),e.jsx(n.Code,{children:`function Progress({ value }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ background: "var(--track,#eee)", height: 8, borderRadius: 4 }}>
      <div
        style={{
          width: pct + "%",              // string for %
          height: "100%",
          background: "var(--accent,#0af)",
          borderRadius: 4
        }}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
}`}),e.jsx("h3",{children:"F) Performance & patterns"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Objects are new each render; keep them small. For big/expensive objects, memoize."}),e.jsxs("li",{children:["Prefer CSS classes / styled-components for most styling, and inline styles for ",e.jsx("em",{children:"dynamic per-instance"})," values (e.g., width from props)."]}),e.jsxs("li",{children:["No support for pseudo-classes (",e.jsx("code",{children:":hover"}),") or media queries in inline styles-use CSS/styled-components for that."]}),e.jsxs("li",{children:[e.jsx("code",{children:"!important"})," isn't supported in inline styles."]})]}),e.jsx(n.Code,{children:`// Memoize a large dynamic style (rarely needed)
function Panel({ color, pad }) {
  const style = React.useMemo(() => ({
    background: color,
    padding: pad,
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(0,0,0,.08)"
  }), [color, pad]);

  return <section style={style} />;
}`}),e.jsx("h3",{children:"G) Common gotchas"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Hyphen-keys don't work: use ",e.jsx("code",{children:"backgroundColor"}),", not ",e.jsx("code",{children:"background-color"}),"."]}),e.jsxs("li",{children:["URLs must be strings: ",e.jsx("code",{children:"backgroundImage: `url(${src})`"}),"."]}),e.jsxs("li",{children:["Numbers become px-if you mean ",e.jsx("code",{children:"%"}),"/",e.jsx("code",{children:"rem"}),", pass a string."]})]}),e.jsx(n.Code,{children:`// ❌ Wrong keys and units
<div style={{ "background-color": "tomato", width: 50 + "%" }} />

// ✅ Correct
<div style={{ backgroundColor: "tomato", width: "50%" }} />`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to JSX style object:",e.jsx(n.Code,{children:'<div style="border: 1px solid #ddd; border-radius: 8px; margin-top: 12px;"></div>'})]}),e.jsxs("li",{children:["Make a dynamic square where ",e.jsx("code",{children:"size"})," (number) controls both ",e.jsx("code",{children:"width"})," and ",e.jsx("code",{children:"height"}),":",e.jsx(n.Code,{children:'// <Square size={48} color="#0af" />'})]}),e.jsxs("li",{children:["Fix the mistakes:",e.jsx(n.Code,{children:`<button style={{ "font-size": 14, padding: 8 + "px", backgroundImage: url(bg) }}>
  Save
</button>`})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"style"})," accepts an ",e.jsx("strong",{children:"object"}),"; properties are ",e.jsx("strong",{children:"camelCased"}),"."]}),e.jsxs("li",{children:["Numbers → ",e.jsx("code",{children:"px"}),"; use strings for ",e.jsx("code",{children:"%"}),"/",e.jsx("code",{children:"rem"}),"/",e.jsx("code",{children:"em"}),"/etc."]}),e.jsx("li",{children:"Merge with object spreads; use classes/styled-components for pseudo-states & media queries."}),e.jsxs("li",{children:["CSS variables allowed as strings (",e.jsx("code",{children:"var(--x)"}),")."]})]}),e.jsx(n.Divider,{})]})}function p({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="fragments";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Fragments (<>...</>, <React.Fragment>)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(m,{})})})]})}function m(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Fragment"})," lets you group multiple children without adding an extra DOM element.",e.jsx("br",{}),`It's an "invisible wrapper"-perfect when you must return one parent but don't want a real wrapper like `,e.jsx("code",{children:"<div>"})," to affect layout or styling."]}),e.jsx("h3",{children:"A) Why fragments?"}),e.jsx(n.Code,{children:`// ❌ Adds unwanted wrapper <div> to the DOM
function Card() {
  return (
    <div>
      <h3>Title</h3>
      <p>Details</p>
    </div>
  );
}

// ✅ No extra node in the DOM (Fragment disappears at runtime)
function Card() {
  return (
    <>
      <h3>Title</h3>
      <p>Details</p>
    </>
  );
}`}),e.jsx("h3",{children:"B) Two forms"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Shorthand:"})," ",e.jsx("code",{children:"<>...</>"})," (can't take ",e.jsx("em",{children:"any"})," props)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Long form:"})," ",e.jsx("code",{children:"<React.Fragment>...</React.Fragment>"})," (can take a ",e.jsx("code",{children:"key"}),")."]})]}),e.jsx(n.Code,{children:`// Shorthand (no props, no key)
<>
  <Item />
  <Actions />
</>

// Long form (use when you need a key on the group)
<React.Fragment key={row.id}>
  <td>{row.name}</td>
  <td>{row.price}</td>
</React.Fragment>`}),e.jsx("h3",{children:"C) Lists: group multiple siblings and key the Fragment"}),e.jsxs("p",{children:["When mapping and you need to return ",e.jsx("em",{children:"multiple siblings"})," per item, wrap them in a keyed Fragment. The shorthand cannot accept a key, so use the long form."]}),e.jsx(n.Code,{children:`const data = [
  { id: 1, name: "A", note: "alpha" },
  { id: 2, name: "B", note: "beta" },
];

function List() {
  return (
    <ul>
      {data.map(item => (
        <React.Fragment key={item.id}>
          <li>{item.name}</li>
          <li className="muted">{item.note}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}),e.jsx("h3",{children:"D) Tables: return multiple <tr> or multiple <td> cleanly"}),e.jsx("p",{children:"Fragments help keep valid table structure without inserting a div/spin wrapper that would break HTML."}),e.jsx(n.Code,{children:`// 1) Return multiple <tr> per item
<tbody>
  {groups.map(g => (
    <React.Fragment key={g.id}>
      <tr><th colSpan={2}>{g.title}</th></tr>
      {g.rows.map(r => (
        <tr key={r.id}>
          <td>{r.label}</td>
          <td>{r.value}</td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>

// 2) Return multiple <td> inside a single <tr>
<tr>
  {rows.map(r => (
    <React.Fragment key={r.id}>
      <td>{r.label}</td>
      <td>{r.value}</td>
    </React.Fragment>
  ))}
</tr>`}),e.jsx("h3",{children:"E) Conditional wrappers without extra DOM"}),e.jsx(n.Code,{children:`function TitleBlock({ showSubtitle }) {
  return (
    <>
      <h2>Dashboard</h2>
      {showSubtitle && <p className="muted">Welcome back</p>}
    </>
  );
}`}),e.jsx("h3",{children:"F) Fragment vs Array"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fragment:"})," more readable, no array brackets, no need to add keys unless mapping."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Array:"})," you can return ",e.jsx("code",{children:"[child1, child2]"})," directly-but every child needs a key."]})]}),e.jsx(n.Code,{children:`// Returning an array works, but needs keys
return [
  <li key="a">A</li>,
  <li key="b">B</li>,
];`}),e.jsx("h3",{children:"G) When NOT to use a Fragment"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["You need attributes (e.g., ",e.jsx("code",{children:"className"}),", ",e.jsx("code",{children:"style"}),", ",e.jsx("code",{children:"data-*"}),") on the wrapper."]}),e.jsx("li",{children:"You need to target the wrapper in CSS or with refs-use a real element instead."})]}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Trying to pass props to the shorthand ",e.jsx("code",{children:"<>"}),"-it can't take any."]}),e.jsxs("li",{children:["Forgetting a ",e.jsx("code",{children:"key"})," when mapping groups with a Fragment."]}),e.jsx("li",{children:"Wrapping where semantics matter-always keep valid HTML structure (Fragments won't break it)."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Replace the wrapper div with a Fragment (no DOM change):",e.jsx(n.Code,{children:`function Info() {
  return (
    <div>
      <strong>Total</strong>
      <span> ₹999 </span>
    </div>
  );
}`})]}),e.jsxs("li",{children:["Map items so each renders two ",e.jsx("code",{children:"<li>"})," siblings without an extra wrapper, with proper keys."]}),e.jsx("li",{children:"Build a table where each product renders a header row and a details row using a keyed Fragment."})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use Fragments to avoid extra DOM wrappers."}),e.jsxs("li",{children:["Shorthand ",e.jsx("code",{children:"<>"})," has no props; use ",e.jsx("code",{children:"<React.Fragment key=...>"})," when mapping."]}),e.jsx("li",{children:"Great for lists/tables and conditional grouping."}),e.jsx("li",{children:"If you need classes/styles/refs on the wrapper, use a real element instead."})]}),e.jsx(n.Divider,{})]})}function g({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="comments-in-jsx";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Comments in JSX"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(y,{})})})]})}function y(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["In ",e.jsx("strong",{children:"JavaScript regions"})," (outside JSX), use normal ",e.jsx("code",{children:"//"})," and ",e.jsx("code",{children:"/* ... */"}),". Inside ",e.jsx("strong",{children:"JSX"})," (between tags), wrap comments in ",e.jsx("code",{children:"{/* ... */}"}),"."]}),e.jsx("h3",{children:"A) Outside vs inside JSX"}),e.jsx(n.Code,{children:`// ✅ JS comments anywhere outside JSX
function Panel({ title }) {
  // compute something
  const big = title.length > 10; /* multi-line ok too */

  return (
    <section>
      {/* ✅ JSX comment: between elements/children */}
      <h3>{title}</h3>
      <p>Content</p>
    </section>
  );
}`}),e.jsx("h3",{children:"B) JSX comment syntax"}),e.jsx("p",{children:"Use curly braces with a JS block comment. Works single-line or multi-line."}),e.jsx(n.Code,{children:`<>
  {/* single-line */}
  <h4>Heading</h4>

  {/* 
    multi-line
    explains the section below 
  */}
  <p>Details...</p>
</>`}),e.jsx("h3",{children:"C) Comments near props & in attribute expressions"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Between props (rarely needed) block comments may parse, but avoid-tooling can be inconsistent."}),e.jsxs("li",{children:["Prefer commenting ",e.jsx("em",{children:"inside"})," an expression or on its own line."]})]}),e.jsx(n.Code,{children:`// ✅ comment inside a prop expression
<button title={/* i18n: tooltip for save */ "Save"}>Save</button>

// ✅ comment above the element/prop
// primary action button
<button className="primary">Go</button>

// ⚠️ Works in many setups but avoid for portability
// <button /* primary */ className="primary">Go</button>`}),e.jsx("h3",{children:"D) Commenting out blocks temporarily"}),e.jsxs("p",{children:['To "disable" a block, wrap it in a JSX comment, or better, render ',e.jsx("code",{children:"null"})," using a condition."]}),e.jsx(n.Code,{children:`// 1) Comment out JSX
<div>
  {/* <Sidebar /> */}
  <Main />
</div>

// 2) Prefer conditional (more explicit)
{showSidebar ? <Sidebar /> : null}`}),e.jsx("h3",{children:"E) Comments inside lists & fragments"}),e.jsx("p",{children:"Comments can live anywhere children can."}),e.jsx(n.Code,{children:`<>
  {/* header */}
  <h2>Todos</h2>

  <ul>
    {items.map((t) => (
      <li key={t.id}>
        {t.title}
        {/* show meta only for debug */}
        {debug && <small className="muted">#{t.id}</small>}
      </li>
    ))}
  </ul>
</>`}),e.jsx("h3",{children:"F) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"//"})," directly inside JSX → ❌ (must be ",e.jsx("code",{children:"{/* ... */}"}),")."]}),e.jsx("li",{children:"Placing comments inside string literals (they’ll render as text)."}),e.jsx("li",{children:"Leaving big commented blocks permanently-prefer deleting or feature-flagging."})]}),e.jsx(n.Code,{children:`// ❌ Wrong (inside JSX)
// <div>// not a valid comment here</div>

// ✅ Right
<div>{/* comment inside JSX */}</div>`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix the comments:",e.jsx(n.Code,{children:`return (
  <div>
    // Title area
    <h3>Profile</h3>
    <p>Bio</p>
  </div>
);`})]}),e.jsxs("li",{children:["Comment the tooltip prop without breaking JSX:",e.jsx(n.Code,{children:'<button title="Delete">Delete</button>'})]}),e.jsxs("li",{children:["Temporarily disable rendering of ",e.jsx("code",{children:"<Footer />"})," without deleting it."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"{/* ... */}"})," inside JSX; normal comments elsewhere."]}),e.jsx("li",{children:"Comment inside prop expressions or above the element (avoid between-prop comments)."}),e.jsxs("li",{children:["For temporary removal, prefer conditional rendering (",e.jsx("code",{children:"cond ? <X/> : null"}),")."]})]}),e.jsx(n.Divider,{})]})}function b({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="expressions-vs-statements";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Expressions vs statements in JSX"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(f,{})})})]})}function f(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["Inside JSX, the curly braces ",e.jsx("code",{children:"{ ... }"})," accept a ",e.jsx("strong",{children:"JavaScript expression"})," (something that produces a value). ",e.jsx("strong",{children:"Statements"})," (",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"switch"}),",",e.jsx("code",{children:"try/catch"}),", ",e.jsx("code",{children:"return"}),", etc.) are ",e.jsx("em",{children:"not"})," allowed directly inside JSX."]}),e.jsx("h3",{children:"A) What counts as an expression?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Literals & variables: ",e.jsx("code",{children:'42, "hi", user.name'})]}),e.jsxs("li",{children:["Operators & calls: ",e.jsx("code",{children:"a + b, fn(), items.map(...)"})]}),e.jsxs("li",{children:["Ternary: ",e.jsx("code",{children:"ok ? <A/> : <B/>"})]}),e.jsxs("li",{children:["Array/fragment of nodes: ",e.jsx("code",{children:'[<li key="1">A</li>, <li key="2">B</li>]'})]}),e.jsxs("li",{children:["Logical ",e.jsx("code",{children:"&&"})," (careful with ",e.jsx("code",{children:"0"}),"), ",e.jsx("code",{children:"||"}),", ",e.jsx("code",{children:"??"})]})]}),e.jsx(n.Code,{children:`function Demo({ ok, items }) {
  return (
    <div>
      <p>Sum: {2 + 3}</p>
      <p>{ok ? "Yes" : "No"}</p>
      <ul>{items.map(it => <li key={it.id}>{it.label}</li>)}</ul>
    </div>
  );
}`}),e.jsx("h3",{children:"B) What is a statement (❌ not allowed in braces)?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"while"}),", ",e.jsx("code",{children:"switch"})]}),e.jsx("li",{children:e.jsxs("code",{children:["try "," catch "]})}),e.jsxs("li",{children:[e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"continue"}),", ",e.jsx("code",{children:"throw"})]}),e.jsxs("li",{children:["Block scopes: ",e.jsx("code",{children:"{ /* a new scope */ }"})," (not the same as JSX braces)"]})]}),e.jsx(n.Code,{children:`// ❌ Invalid
// <div>{ if (ok) { "Yes" } else { "No" } }</div>
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>`}),e.jsx("h3",{children:"C) Converting statements → expressions"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"if/else → ternary"}),e.jsx(n.Code,{children:`// ❌
// <div>{ if (n % 2) { "Odd" } else { "Even" } }</div>

// ✅
<div>{n % 2 ? "Odd" : "Even"}</div>`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"if-only → &&"})," (shows right side when left is truthy; beware ",e.jsx("code",{children:"0"}),")",e.jsx(n.Code,{children:`// show a badge only if premium
{isPremium && <Badge/>}

// If the left can be 0, prefer a ternary:
{count > 0 ? <span>{count}</span> : null}`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for/switch → array methods or lookups"}),e.jsx(n.Code,{children:`// ❌ for loop in JSX
// <ul>{ for (const x of xs) { <li>{x}</li> } }</ul>

// ✅ map + key
<ul>{xs.map(x => <li key={x.id}>{x.title}</li>)}</ul>

// ✅ switch alternative via lookup
const views = { list: <List/>, grid: <Grid/>, empty: <Empty/> };
<div>{views[mode] ?? <Empty/>}</div>`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"try/catch"}),": precompute above return or call a helper that returns UI",e.jsx(n.Code,{children:`function SafeJson({ text }) {
  let node;
  try {
    const obj = JSON.parse(text);
    node = <pre>{JSON.stringify(obj, null, 2)}</pre>;
  } catch {
    node = <p className="error">Invalid JSON</p>;
  }
  return <div>{node}</div>;
}`})]})]}),e.jsx("h3",{children:"D) Precompute vs inline tricks"}),e.jsxs("p",{children:["Prefer computing values ",e.jsx("em",{children:"before"})," the ",e.jsx("code",{children:"return"})," for readability. You can also call small helpers inside JSX (calls are expressions). IIFEs work but are harder to read—use sparingly."]}),e.jsx(n.Code,{children:`// Precompute (clean)
function Card({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}

// Helper call (still an expression)
const format = n => Intl.NumberFormat("en-IN").format(n);
<p>Total: {format(total)}</p>

// IIFE (allowed, but avoid if not needed)
<div>{(() => { if (ok) return <A/>; return <B/>; })()}</div>`}),e.jsx("h3",{children:'E) Rendering "nothing" cleanly'}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"null"})," to render nothing: ",e.jsx("code",{children:"{cond ? <X/> : null}"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"false"})," and ",e.jsx("code",{children:"undefined"})," also render nothing, but avoid returning raw non-UI values by accident."]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," renders as text; don't use it to hide UI."]})]}),e.jsx("h3",{children:"F) Quick patterns"}),e.jsx(n.Code,{children:`// Guarded block with early return pattern (outside JSX)
if (!data) return null;

// Inline pick-one
{type === "success" ? <Success/> : type === "error" ? <Error/> : <Idle/>}

// Compose lists
<ul>
  {items
    .filter(it => it.visible)
    .map(it => <li key={it.id}>{it.label}</li>)}
</ul>`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to valid JSX (use a ternary):",e.jsx(n.Code,{children:'// <div>{ if (score >= 50) { "Pass" } else { "Fail" } }</div>'})]}),e.jsxs("li",{children:["Render a list of tags (",e.jsx("code",{children:"tags: string[]"}),") with keys, without using a ",e.jsx("code",{children:"for"})," loop."]}),e.jsxs("li",{children:["Replace this ",e.jsx("code",{children:"switch"})," with a lookup map:",e.jsx(n.Code,{children:'// switch (status) { case "ok": <Ok/>; break; case "err": <Err/>; break; default: <Idle/>; }'})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["JSX braces accept ",e.jsx("strong",{children:"expressions"})," only—no control-flow statements."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"? :"})," for if/else, ",e.jsx("code",{children:"&&"}),' for simple "show if truthy".']}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"map/filter"})," for lists; always add stable ",e.jsx("code",{children:"key"}),"s."]}),e.jsx("li",{children:"Precompute complex logic above the return or call helpers."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"null"})," to render nothing; don't rely on ",e.jsx("code",{children:"0"})," for hiding."]})]}),e.jsx(n.Divider,{})]})}function v({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="conditional-and";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Conditional render: &&"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(w,{})})})]})}function w(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["The logical-AND operator ",e.jsx("code",{children:"&&"})," is a concise way to ",e.jsx("strong",{children:"render something only if a condition is truthy"}),".",e.jsx("br",{}),"It returns the left side if it's falsy, otherwise the right side. In React, ",e.jsx("code",{children:"false"}),"/",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," render nothing."]}),e.jsx("h3",{children:"A) Show only when truthy"}),e.jsx(n.Code,{children:`// Show badge only if the user is premium
{isPremium && <Badge />}

// Show count only if > 0
{count > 0 && <span className="count">{count}</span>}`}),e.jsx("h3",{children:'B) Big gotcha: 0 will render "0"'}),e.jsxs("p",{children:["Because ",e.jsx("code",{children:"0 && <X/>"})," evaluates to ",e.jsx("code",{children:"0"}),", React will render the text ",e.jsx("code",{children:"0"}),". Use a strict comparison or coerce to boolean with ",e.jsx("code",{children:"!!"}),"."]}),e.jsx(n.Code,{children:`// ❌ Might render "0"
{items.length && <List items={items} />}

// ✅ Compare or coerce
{items.length > 0 && <List items={items} />}
{!!items.length && <List items={items} />}  // double-bang -> boolean`}),e.jsx("h3",{children:"C) Chain multiple conditions"}),e.jsx("p",{children:"All must be truthy to render the element."}),e.jsx(n.Code,{children:`// Render only when loaded, user exists, and feature is enabled
{loaded && user && flags.showWelcome && <Welcome user={user} />}`}),e.jsx("h3",{children:'D) Use ternary when you need an "else"'}),e.jsxs("p",{children:[e.jsx("code",{children:"&&"}),` has no "else". Don't abuse `,e.jsx("code",{children:"||"})," to fake it-prefer a ternary for clarity."]}),e.jsx(n.Code,{children:`// ⚠️ Works but less readable
{isReady && <Ready/> || <Loading/>}

// ✅ Clear
{isReady ? <Ready/> : <Loading/>}`}),e.jsx("h3",{children:"E) ClassName composition with &&"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"&&"})," to include a token conditionally, then filter falsy values."]}),e.jsx(n.Code,{children:`// Small utility pattern
const cx = (...xs) => xs.filter(Boolean).join(" ");

<li className={cx("item", active && "active", disabled && "muted")}>
  Row
</li>`}),e.jsx("h3",{children:"F) Combine with nullish coalescing carefully"}),e.jsxs("p",{children:[e.jsx("code",{children:"??"})," only checks ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),". For visibility gating, you usually just need ",e.jsx("code",{children:"&&"}),"."]}),e.jsx(n.Code,{children:`// Show price only if it exists; show 0 explicitly if 0 is valid
{price != null && <span>₹{price}</span>}`}),e.jsx("h3",{children:"G) Readability pattern: precompute"}),e.jsx("p",{children:"Complex conditions are easier to read if you compute them before the return."}),e.jsx(n.Code,{children:`function Card({ user, loading, error }) {
  const canShow = !loading && !error && user?.name;
  return <>{canShow && <Profile user={user} />}</>;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using a numeric left side (",e.jsx("code",{children:"count"}),", ",e.jsx("code",{children:"items.length"}),") → may render ",e.jsx("code",{children:"0"}),"."]}),e.jsx("li",{children:"Nesting heavy logic inline-prefer precomputation or helper functions."}),e.jsxs("li",{children:["Forgetting that only ",e.jsx("code",{children:"false/null/undefined"})," render nothing; ",e.jsx("code",{children:"0"})," and ",e.jsx("code",{children:'""'})," render."]})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix the 0-render bug:",e.jsx(n.Code,{children:"// <div>{notifications.length && <Bell count={notifications.length} />}</div>"})]}),e.jsxs("li",{children:["Rewrite this to a ternary (needs else):",e.jsx(n.Code,{children:"// {isAuth && <Dashboard/> || <Login/>}"})]}),e.jsxs("li",{children:["Chain conditions to render ",e.jsx("code",{children:"<Promo />"})," only when ",e.jsx("code",{children:'env === "prod"'})," and ",e.jsx("code",{children:'user?.role === "admin"'}),"."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"&&"}),' for simple "show if truthy".']}),e.jsxs("li",{children:["Guard numbers with comparisons or ",e.jsx("code",{children:"!!"})," to avoid rendering ",e.jsx("code",{children:"0"}),"."]}),e.jsx("li",{children:'Use a ternary when you need an "else".'}),e.jsx("li",{children:"Precompute complex conditions for readability."})]}),e.jsx(n.Divider,{})]})}function k({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="conditional-ternary";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Conditional render: ternary"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(C,{})})})]})}function C(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"ternary operator"})," (",e.jsx("code",{children:"cond ? A : B"}),") is the clearest way to render one of two branches in JSX. It's an ",e.jsx("em",{children:"expression"}),", so it works inside braces."]}),e.jsx("h3",{children:"A) Basics"}),e.jsx(n.Code,{children:`// Render Dashboard if authenticated, otherwise Login
<div>{isAuth ? <Dashboard /> : <Login />}</div>

// Text or element branches both work
<p>{score >= 50 ? "Pass" : "Fail"}</p>`}),e.jsx("h3",{children:'B) "Else nothing" → use null'}),e.jsx(n.Code,{children:`// Show <Promo/> only if eligible; otherwise render nothing
{eligible ? <Promo /> : null}

// Equivalent with &&
{eligible && <Promo />}
// (Use ternary when you need an explicit else branch.)`}),e.jsx("h3",{children:"C) Multiple conditions (avoid deep nesting)"}),e.jsx("p",{children:"You can chain ternaries, but keep them readable. For more than two branches, prefer a lookup map."}),e.jsx(n.Code,{children:`// 1) Light nesting with parentheses (OK if short)
{status === "loading" ? (
  <Spinner />
) : status === "error" ? (
  <Error />
) : (
  <Content />
)}

// 2) Cleaner with a map (recommended beyond 2 branches)
const views = { loading: <Spinner/>, error: <Error/>, ready: <Content/> };
{views[status] ?? <Idle/>}`}),e.jsx("h3",{children:"D) Conditional props/variants"}),e.jsx(n.Code,{children:`// Choose component variant
<Button kind={primary ? "primary" : "default"} />

// Choose class token
const cx = (...xs) => xs.filter(Boolean).join(" ");
<button className={cx("btn", primary ? "btn--primary" : "btn--default")}>Save</button>

// Choose inline style value
<div style={{ opacity: disabled ? 0.5 : 1 }} />`}),e.jsx("h3",{children:"E) Ternary vs && and ||"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ternary"}),': has both branches (A/else B) → best for "this or that".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"&&"}),": show-only-if-truthy; beware rendering ",e.jsx("code",{children:"0"})," by accident."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"||"}),": fallback for ",e.jsx("em",{children:"falsy"})," values; don't use it as an else-render unless you understand the truthiness."]})]}),e.jsx(n.Code,{children:`// ⚠️ Using || as else can be surprising if left side is ""
{title || "Untitled"}
// If empty string is valid and should show "", use ?? to only catch null/undefined:
{title ?? "Untitled"}`}),e.jsx("h3",{children:"F) Parentheses & formatting"}),e.jsx("p",{children:"Wrap multiline branches in parentheses for readability and to avoid precedence issues."}),e.jsx(n.Code,{children:`{cond ? (
  <header><Logo/><Nav/></header>
) : (
  <header><Logo/></header>
)}`}),e.jsx("h3",{children:"G) Precompute for clarity"}),e.jsx(n.Code,{children:`function Price({ price, discount }) {
  const final = discount ? price * (1 - discount) : price;
  return <p>₹{final}</p>;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Over-nesting ternaries-prefer maps or precomputed variables."}),e.jsxs("li",{children:["Forgetting ",e.jsx("code",{children:"null"}),' for "render nothing" in the else branch.']}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"||"})," as a faux-else and accidentally hiding valid falsy values (like ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'}),")."]})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to a ternary:",e.jsx(n.Code,{children:"// {isReady && <Ready/> || <Loading/>}"})]}),e.jsxs("li",{children:["Render ",e.jsx("code",{children:"<GoldBadge/>"})," for ",e.jsx("code",{children:'plan === "gold"'}),", ",e.jsx("code",{children:"<SilverBadge/>"})," otherwise."]}),e.jsxs("li",{children:["Replace the nested ternary with a lookup:",e.jsx(n.Code,{children:'// {role === "admin" ? <Admin/> : role === "user" ? <User/> : <Guest/>}'})]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"cond ? A : B"})," for clear two-branch rendering."]}),e.jsxs("li",{children:["Return ",e.jsx("code",{children:"null"}),' for "else nothing".']}),e.jsx("li",{children:"Keep branches readable (parentheses, format lines)."}),e.jsx("li",{children:"For 3+ branches, prefer a lookup map instead of deep nesting."}),e.jsxs("li",{children:["Don't misuse ",e.jsx("code",{children:"||"}),"; consider ",e.jsx("code",{children:"??"})," when only null/undefined need fallback."]})]}),e.jsx(n.Divider,{})]})}function S({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="early-return";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Early return pattern"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(T,{})})})]})}function T(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Early return"})," = return from a component ",e.jsx("em",{children:"as soon as"})," a guard condition is met. It removes deep nesting, keeps JSX flat, and makes loading/empty/error states clearer."]}),e.jsx("h3",{children:"A) Basics - flatten your branches"}),e.jsx(n.Code,{children:`// ❌ Nested, harder to scan
function Profile({ user }) {
  if (user) {
    return <Card user={user} />;
  } else {
    return <Empty />;
  }
}

// ✅ Early returns keep it flat
function Profile({ user }) {
  if (!user) return <Empty />;
  return <Card user={user} />;
}`}),e.jsx("h3",{children:"B) Loading / error / auth guards"}),e.jsx("p",{children:"Call hooks first (top-level), then gate the UI with early returns."}),e.jsx(n.Code,{children:`function ProductView({ id }) {
  const { data, loading, error } = useProduct(id);  // ✅ hooks at top level, always called

  if (loading) return <Spinner />;
  if (error)   return <ErrorBox error={error} />;
  if (!data)   return <Empty state="no-data" />;

  return <ProductCard product={data} />;
}`}),e.jsx("h3",{children:"C) ⚠️ Hooks + early return - the rule"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Never call Hooks conditionally."})," Put all Hooks at the top of the component, then do your early returns. If you must guard before any Hooks, split into a tiny wrapper."]}),e.jsx(n.Code,{children:`// ❌ Risky: hook is skipped when visible === false
function Panel({ visible }) {
  if (!visible) return null;          // hook below is conditionally called -> breaks the rule
  const [open, setOpen] = React.useState(false);
  return open ? "Open" : "Closed";
}

// ✅ Safe: wrapper guards visibility; inner can use hooks freely
function Panel({ visible }) {
  if (!visible) return null;          // no hooks here
  return <PanelInner />;              // hooks live inside inner component
}
function PanelInner() {
  const [open, setOpen] = React.useState(false);
  return open ? "Open" : "Closed";
}`}),e.jsx("h3",{children:"D) Early return vs && / ternary"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Early return"})," = best when a whole branch should short-circuit (loading, error, auth)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"&&"})," = show-only-if-truthy for small inline bits."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ternary"})," = choose exactly one of two UI branches."]})]}),e.jsx(n.Code,{children:`// Early return (whole component)
if (!isAuth) return <Login/>;

// Inline && (tiny fragment)
{isPremium && <Badge/>}

// Ternary (this or that)
{ready ? <Dashboard/> : <Loading/>}`}),e.jsx("h3",{children:"E) Event handlers: bail out early"}),e.jsxs("p",{children:["Same idea inside functions-avoid deep ",e.jsx("code",{children:"if"})," ladders."]}),e.jsx(n.Code,{children:`async function onSubmit(e) {
  e.preventDefault();
  if (submitting) return;           // guard
  if (!form.valid) return;          // guard
  setSubmitting(true);
  await save(form.value);
  setSubmitting(false);
}`}),e.jsx("h3",{children:"F) Empty states & feature flags"}),e.jsx(n.Code,{children:`function List({ items }) {
  if (!items?.length) return <Empty message="No items yet" />;
  return (
    <ul>{items.map(it => <li key={it.id}>{it.title}</li>)}</ul>
  );
}

function Experimental({ flags }) {
  if (!flags?.newUI) return <LegacyUI />;
  return <NewUI />;
}`}),e.jsx("h3",{children:"G) Multiple early returns - order matters"}),e.jsx("p",{children:"Put the most common/cheapest checks first. Keep each guard tiny and obvious."}),e.jsx(n.Code,{children:`function Report({ user, data, loading, error }) {
  if (!user)    return <LoginPrompt />;
  if (loading)  return <Spinner />;
  if (error)    return <ErrorBox error={error} />;
  if (!data)    return <Empty />;

  return <ReportBody data={data} />;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Placing early returns ",e.jsx("em",{children:"before"})," Hooks and then calling Hooks only on some renders."]}),e.jsxs("li",{children:["Building complicated multi-line conditions-precompute a ",e.jsx("code",{children:"const"})," like ",e.jsx("code",{children:"canShow"}),"."]}),e.jsxs("li",{children:["Returning an empty string instead of ",e.jsx("code",{children:"null"}),' to "hide" UI (empty string still renders text).']})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert nested if/else into early returns:",e.jsx(n.Code,{children:`function View({ user, loading }) {
  if (loading) {
    return <Spinner/>;
  } else {
    if (user) {
      return <Dashboard/>;
    } else {
      return <Login/>;
    }
  }
}`})]}),e.jsxs("li",{children:["Split a component so that a visibility guard does ",e.jsx("em",{children:"not"})," sit above any Hooks."]}),e.jsxs("li",{children:["Reorder guards in a component to check ",e.jsx("code",{children:"!user"})," → ",e.jsx("code",{children:"loading"})," → ",e.jsx("code",{children:"error"})," → ",e.jsx("code",{children:"!data"}),"."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use early returns for clear loading/error/auth/empty branches."}),e.jsx("li",{children:'Call Hooks first; if you must guard earlier, split into a wrapper and an "Inner" component.'}),e.jsx("li",{children:"Prefer small, ordered guards over one giant condition."}),e.jsxs("li",{children:["Return ",e.jsx("code",{children:"null"})," to render nothing."]})]}),e.jsx(n.Divider,{})]})}function R({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="rendering-lists";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Rendering lists"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(M,{})})})]})}function M(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["In JSX, render collections with array methods like ",e.jsx("code",{children:"map()"}),", often after a"," ",e.jsx("code",{children:"filter()"})," or ",e.jsx("code",{children:"sort()"}),". Each rendered item must have a"," ",e.jsxs("strong",{children:["stable ",e.jsx("code",{children:"key"})]})," (deep dive in the next topic: ",e.jsx("em",{children:"Keys (stable identity)"}),")."]}),e.jsx("h3",{children:"A) Basics - map to elements"}),e.jsx(n.Code,{children:`const items = [
  { id: 1, title: "JSX" },
  { id: 2, title: "Lists" },
  { id: 3, title: "Rendering" },
];

function Basics() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.title}</li>   {/* key required */}
      ))}
    </ul>
  );
}`}),e.jsx("h3",{children:"B) Filter → map → (optional) slice/sort"}),e.jsx("p",{children:"Compose readable pipelines. Keep logic outside JSX if it's long."}),e.jsx(n.Code,{children:`function VisibleTodos({ todos, query }) {
  const list = todos
    .filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 10);

  return (
    <ul>
      {list.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  );
}`}),e.jsx("h3",{children:"C) Empty state gracefully"}),e.jsx(n.Code,{children:`function List({ items }) {
  if (!items?.length) return <p className="muted">No items yet</p>;
  return <ul>{items.map(i => <li key={i.id}>{i.title}</li>)}</ul>;
}`}),e.jsx("h3",{children:"D) Multiple siblings per item → use a keyed Fragment"}),e.jsx("p",{children:"Return more than one node per item without extra DOM wrappers."}),e.jsx(n.Code,{children:`function Pairs({ pairs }) {
  return (
    <ul>
      {pairs.map(p => (
        <React.Fragment key={p.id}>
          <li>{p.left}</li>
          <li className="muted">{p.right}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}`}),e.jsx("h3",{children:"E) Tables - map rows (and cells)"}),e.jsx(n.Code,{children:`function UsersTable({ users }) {
  if (!users?.length) return <p>No users</p>;
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Email</th></tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}`}),e.jsx("h3",{children:"F) Nested lists"}),e.jsx(n.Code,{children:`function Categories({ data }) {
  return (
    <div>
      {data.map(cat => (
        <section key={cat.id}>
          <h4>{cat.name}</h4>
          <ul>
            {cat.items.map(it => <li key={it.id}>{it.label}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}`}),e.jsx("h3",{children:"G) Extract an item component (keeps JSX clean)"}),e.jsx(n.Code,{children:`function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.title}
      </label>
    </li>
  );
}

function TodoList({ todos, onToggle }) {
  return <ul>{todos.map(t => <TodoItem key={t.id} todo={t} onToggle={onToggle} />)}</ul>;
}`}),e.jsx("h3",{children:"H) Keys (quick note - full details next)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"stable id"})," from your data as ",e.jsx("code",{children:"key"})," (not array index)."]}),e.jsxs("li",{children:["Keys live on the ",e.jsx("em",{children:"array's direct children"}),"."]}),e.jsx("li",{children:"Reordering/removing items needs stable keys to preserve component state per item."})]}),e.jsx("h3",{children:"I) Performance tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Precompute big pipelines (",e.jsx("code",{children:"filter/sort/map"}),") before ",e.jsx("code",{children:"return"})," for readability."]}),e.jsxs("li",{children:["Memoize expensive derived arrays with ",e.jsx("code",{children:"useMemo"})," if inputs rarely change."]}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"id"})," keys; avoid re-creating arrays unnecessarily in parents to reduce re-renders."]})]}),e.jsx(n.Code,{children:`function HeavyList({ data, query }) {
  const visible = React.useMemo(() => {
    const q = query.toLowerCase();
    return data
      .filter(x => x.title.toLowerCase().includes(q))
      .sort((a,b) => a.title.localeCompare(b.title));
  }, [data, query]);

  return <ul>{visible.map(x => <li key={x.id}>{x.title}</li>)}</ul>;
}`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Forgetting ",e.jsx("code",{children:"key"})," or putting it on the wrong element."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"index"})," as key (can break state on reorders). More on this in the next topic."]}),e.jsxs("li",{children:["Performing expensive computations inside ",e.jsx("code",{children:"map"})," on every render-precompute outside."]}),e.jsxs("li",{children:["Returning ",e.jsx("code",{children:"undefined"})," by accident (missing ",e.jsx("code",{children:"return"})," in curly-body arrow functions)."]})]}),e.jsx(n.Code,{children:`// ❌ Curly body needs an explicit return
items.map(i => { <li>{i.title}</li> }); // undefined

// ✅ Implicit return with parens
items.map(i => (<li key={i.id}>{i.title}</li>));

// ✅ Or explicit return
items.map(i => { return <li key={i.id}>{i.title}</li>; });`}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Render products as a list with name + price (₹), sorted by price asc, limited to top 5."}),e.jsxs("li",{children:["Build a table of users (",e.jsx("code",{children:"{ id, name, role }"}),") and show only ",e.jsx("code",{children:'role === "admin"'}),"."]}),e.jsxs("li",{children:["From an array of categories with nested ",e.jsx("code",{children:"items"}),", render a section per category and a list of item labels."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Compose ",e.jsx("code",{children:"filter → sort → map"}),"."]}),e.jsxs("li",{children:["Each item needs a ",e.jsxs("strong",{children:["stable ",e.jsx("code",{children:"key"})]})," (covered in the next topic)."]}),e.jsx("li",{children:"Use keyed Fragments when returning multiple siblings per item."}),e.jsx("li",{children:"Show an empty state when the list is blank."}),e.jsx("li",{children:"Extract an Item component for cleaner JSX and easier reuse."})]}),e.jsx(n.Divider,{})]})}function I({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="keys-stable-identity";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Keys (stable identity)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(F,{})})})]})}function F(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"key"}),' tells React "which child is which" across renders. With ',e.jsx("em",{children:"stable"})," keys, React preserves the correct DOM and component ",e.jsx("em",{children:"state"})," when items move, insert, or delete."]}),e.jsx("h3",{children:"A) The basic rule"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"stable id from your data"})," as the ",e.jsx("code",{children:"key"})," (e.g., ",e.jsx("code",{children:"user.id"}),")."]}),e.jsxs("li",{children:["Keys go on the ",e.jsx("em",{children:"elements returned by the array"})," (the direct children of the map)."]}),e.jsxs("li",{children:["Keys must be ",e.jsx("strong",{children:"unique among siblings"})," (not globally unique)."]})]}),e.jsx(n.Code,{children:`const todos = [
  { id: "t1", title: "Learn JSX" },
  { id: "t2", title: "Practice keys" },
];

<ul>
  {todos.map(t => <li key={t.id}>{t.title}</li>)}
</ul>`}),e.jsx("h3",{children:"B) Why not index keys? (State sticks to positions)"}),e.jsxs("p",{children:["Using array index as key ties state to the ",e.jsx("em",{children:"position"}),`, not the item. On reorders/inserts/removals, you'll see wrong items "remember" state (like a checked box moving to another row).`]}),e.jsx(n.Code,{children:`// ❌ Index key causes state bugs when list changes
function BadList({ items }) {
  const [checked, setChecked] = React.useState({});
  return (
    <ul>
      {items.map((it, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={!!checked[it.id]}
              onChange={() => setChecked(c => ({ ...c, [it.id]: !c[it.id] }))}
            />
            {it.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

// ✅ Use stable ids to keep identity attached to the item
function GoodList({ items }) {
  const [checked, setChecked] = React.useState({});
  return (
    <ul>
      {items.map(it => (
        <li key={it.id}>
          <label>
            <input
              type="checkbox"
              checked={!!checked[it.id]}
              onChange={() => setChecked(c => ({ ...c, [it.id]: !c[it.id] }))}
            />
            {it.label}
          </label>
        </li>
      ))}
    </ul>
  );
}`}),e.jsx("h3",{children:"C) Where to put the key (correct placement)"}),e.jsxs("p",{children:["Put the key on the element returned from ",e.jsx("code",{children:"map()"}),". If you extract an item component, put the key on the usage, not inside the child."]}),e.jsx(n.Code,{children:`// ❌ Key inside child is ignored for the outer list
function TodoItem({ todo }) {
  return <li /* key={todo.id} - WRONG place */>{todo.title}</li>;
}
<ul>
  {todos.map(t => <TodoItem /* key should be here */ todo={t} />)}
</ul>

// ✅ Correct: key on the array's direct child
<ul>
  {todos.map(t => <TodoItem key={t.id} todo={t} />)}
</ul>`}),e.jsx("h3",{children:"D) Multiple siblings per item → keyed Fragment"}),e.jsxs("p",{children:["When each item needs to render more than one sibling, wrap them in a ",e.jsx("code",{children:"<React.Fragment key=...>"}),"."]}),e.jsx(n.Code,{children:`{rows.map(row => (
  <React.Fragment key={row.id}>
    <tr><th colSpan={2}>{row.title}</th></tr>
    <tr>
      <td>{row.left}</td>
      <td>{row.right}</td>
    </tr>
  </React.Fragment>
))}`}),e.jsx("h3",{children:"E) Composite keys (when no single id)"}),e.jsxs("p",{children:["Create a stable composite key from stable parts (avoid ",e.jsx("code",{children:"Math.random()"})," or timestamps)."]}),e.jsx(n.Code,{children:`// Grid cells: combine row + col ids
{grid.map(row => (
  <tr key={row.id}>
    {row.cells.map(col => (
      <td key={row.id + ":" + col.id}>{col.value}</td>
    ))}
  </tr>
))}`}),e.jsx("h3",{children:'F) When is using index "okay"?'}),e.jsxs("ul",{children:[e.jsxs("li",{children:["List is ",e.jsx("strong",{children:"static"})," (no insert/reorder/remove) and purely presentational."]}),e.jsx("li",{children:"No stateful child components inside the list items."}),e.jsx("li",{children:"Data has no stable id and you won't change the list order during the component's life."})]}),e.jsx(n.Code,{children:`// Mostly static icons row (no reorders) -> index is acceptable
const icons = [HomeIcon, SearchIcon, UserIcon];
<nav>
  {icons.map((Icon, i) => <Icon key={i} aria-hidden="true" />)}
</nav>`}),e.jsx("h3",{children:"G) Common mistakes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Random keys"})," (",e.jsx("code",{children:"Math.random()"}),") → change every render, forcing remounts."]}),e.jsxs("li",{children:["Using ",e.jsx("strong",{children:"unstable derived values"})," (like array index, or ",e.jsx("code",{children:"JSON.stringify(obj)"})," when the object is recreated each time)."]}),e.jsxs("li",{children:["Putting the key on a ",e.jsx("em",{children:"descendant"})," instead of the mapped element."]}),e.jsx("li",{children:"Duplicate keys among siblings → React warning; reconciliation becomes ambiguous."})]}),e.jsx(n.Code,{children:`// ❌ Bad: random key remounts every render
<li key={Math.random()}>{title}</li>

// ❌ Bad: object reference changes each render
<li key={item}>{item.title}</li> // key becomes "[object Object]" and is unstable

// ✅ Good: stable data id
<li key={item.id}>{item.title}</li>`}),e.jsx("h3",{children:"H) Demo: reordering with and without stable keys"}),e.jsx(n.Code,{children:`// Try moving the first item to the end; with index keys, a focused input may jump
function Row({ item }) {
  const [text, setText] = React.useState(item.label);
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function BadReorder({ items }) {
  return items.map((it, i) => <Row key={i} item={it} />);
}

function GoodReorder({ items }) {
  return items.map(it => <Row key={it.id} item={it} />);
}`}),e.jsx("h3",{children:"I) Checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Prefer ",e.jsx("strong",{children:"stable ids"})," from data as keys."]}),e.jsxs("li",{children:["Key the ",e.jsx("em",{children:"direct child"})," returned from ",e.jsx("code",{children:"map()"}),"."]}),e.jsx("li",{children:"Avoid index keys if items can be re-ordered/inserted/removed or contain state."}),e.jsxs("li",{children:["Use keyed ",e.jsx("code",{children:"React.Fragment"})," when returning multiple siblings per item."]}),e.jsx("li",{children:"Composite keys are fine if built from stable parts."})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Fix the key placement:",e.jsx(n.Code,{children:`function Item({ user }) { return <li>{user.name}</li>; }
<ul>
  {users.map(u => <Item user={u} />)}   // where should key go?
</ul>`})]}),e.jsx("li",{children:"Replace index keys with stable keys in a list where items can be deleted."}),e.jsxs("li",{children:["Build a 2D table from ",e.jsx("code",{children:"rows: {id, cells: {id, value}[] }[]"})," using composite keys."]})]}),e.jsx(n.Divider,{})]})}function P({defaultOpen:r=!1}){const[s,t]=d.useState(!!r),i="dangerous-html";return e.jsxs(n.Topic,{id:i,children:[e.jsxs(n.Title,{onClick:()=>t(l=>!l),"aria-expanded":s,"aria-controls":`${i}-panel`,id:`${i}-button`,"data-open":s,children:[e.jsx(n.Arrow,{"data-open":s,children:"▸"}),e.jsx("span",{children:"Dangerous HTML (when/why)"})]}),e.jsx(n.Panel,{id:`${i}-panel`,role:"region","aria-labelledby":`${i}-button`,"data-open":s,children:e.jsx("div",{children:e.jsx(L,{})})})]})}function L(){return e.jsxs(n.Content,{children:[e.jsxs("p",{children:["React ",e.jsx("strong",{children:"escapes"})," text by default to prevent XSS. If you must inject raw HTML, use ",e.jsx("code",{children:"dangerouslySetInnerHTML"})," - but only with ",e.jsx("strong",{children:"trusted/sanitized"})," content."]}),e.jsx("h3",{children:"A) Basic usage"}),e.jsx(n.Code,{children:`const html = "<strong>Trusted</strong> snippet";
<div dangerouslySetInnerHTML={{ __html: html }} />`}),e.jsxs("p",{children:["The prop expects an object with a ",e.jsx("code",{children:"__html"})," key. This bypasses React's escaping, so any scripts/handlers inside will execute if the browser allows them."]}),e.jsx("h3",{children:"B) When should you use it?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Rendering ",e.jsx("strong",{children:"sanitized CMS/Markdown"})," output."]}),e.jsxs("li",{children:["Server-rendered fragments you ",e.jsx("strong",{children:"control"})," and sanitize."]}),e.jsxs("li",{children:["Embedding ",e.jsx("strong",{children:"trusted"})," vendor widgets/snippets (or prefer iframes)."]})]}),e.jsx("h3",{children:"C) XSS risk demo (do NOT do this)"}),e.jsx(n.Code,{children:`// ❌ Never inject user input directly
function Bad({ userInputHTML }) {
  return <div dangerouslySetInnerHTML={{ __html: userInputHTML }} />;
}

// An attacker could send: '<img src=x onerror="alert("hacked")">'
// or '<script>...<\/script>'`}),e.jsx("h3",{children:"D) Sanitize first (recommended)"}),e.jsxs("p",{children:["Prefer sanitizing on the ",e.jsx("strong",{children:"server"}),". If you must sanitize on the client, use a well-tested library (e.g., ",e.jsx("code",{children:"dompurify"}),")."]}),e.jsx(n.Code,{children:`// npm i dompurify
import DOMPurify from "dompurify";

function SafeHTML({ html }) {
  const clean = React.useMemo(() => DOMPurify.sanitize(html), [html]);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}`}),e.jsx("h3",{children:"E) Notes & limitations"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Elements injected this way are ",e.jsx("strong",{children:"not React-managed"}),"; no React event handlers inside."]}),e.jsx("li",{children:"Prefer plain JSX whenever possible; raw HTML is a last resort."}),e.jsxs("li",{children:["Consider ",e.jsx("strong",{children:"CSP"})," headers to reduce script injection impact (not a replacement for sanitization)."]}),e.jsx("li",{children:"Don't “roll your own” sanitizer - easy to miss edge cases."})]}),e.jsx("h3",{children:"F) Markdown workflow (safe pattern)"}),e.jsx(n.Code,{children:`// 1) Convert Markdown -> HTML (on server or trusted parser).
// 2) Sanitize the HTML.
// 3) Inject sanitized HTML.
<SafeHTML html={sanitizedHtml} />`}),e.jsx("h3",{children:"Common mistakes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Passing user-generated HTML without sanitization."}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"dangerouslySetInnerHTML"})," where JSX would work fine."]}),e.jsxs("li",{children:["Forgetting the ",e.jsx("code",{children:"__html"})," key: it must be"," ",e.jsx("code",{children:"{{ __html: htmlString }}"}),"."]})]}),e.jsx("h3",{children:"Mini-exercises"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Convert to safe rendering using ",e.jsx("code",{children:"DOMPurify"}),":",e.jsx(n.Code,{children:`function Article({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}`})]}),e.jsxs("li",{children:["Spot the vulnerability and fix it:",e.jsx(n.Code,{children:`// Comments come from users
<CommentBody html={comment.rawHtml} />`})]}),e.jsxs("li",{children:["Wire a ",e.jsx("code",{children:"<SafeHTML/>"})," component that memo-sanitizes and renders an empty state when ",e.jsx("code",{children:"html"})," is missing."]})]}),e.jsx("h3",{children:"Mini-checklist"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Only inject ",e.jsx("strong",{children:"sanitized, trusted"})," HTML."]}),e.jsx("li",{children:"Prefer JSX or iframes for third-party embeds."}),e.jsx("li",{children:"Remember: React won't attach events inside injected HTML."}),e.jsxs("li",{children:["Server-side sanitize whenever possible; client-side with ",e.jsx("code",{children:"dompurify"})," if needed."]})]}),e.jsx(n.Divider,{})]})}const D=()=>e.jsxs("div",{style:{padding:"15px"},children:[e.jsx("h3",{children:"JSX: Rules and Patterns"}),e.jsxs(J.PageIntro,{children:[e.jsxs("p",{children:["This section is about writing ",e.jsx("em",{children:"readable, predictable"})," JSX. We’ll use early returns to cut noise, choose the right conditional pattern (ternary vs ",e.jsx("code",{children:"&&"})," vs returning ",e.jsx("code",{children:"null"}),"), render lists with stable keys, and keep complex logic ",e.jsx("em",{children:"outside"})," the JSX tree so renders stay pure and easy to scan."]}),e.jsxs("p",{className:"outcome",children:[e.jsx("strong",{children:"Outcome:"})," smaller components, fewer nested ternaries, correct keys, and JSX that’s simple to diff, test, and maintain."]})]}),e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(h,{}),e.jsx(j,{}),e.jsx(p,{}),e.jsx(g,{}),e.jsx(b,{}),e.jsx(v,{}),e.jsx(k,{}),e.jsx(S,{}),e.jsx(R,{}),e.jsx(I,{}),e.jsx(P,{})]})]}),J={PageIntro:o.div`
        margin: 8px 0 16px;
        padding: 14px 16px;
        background: #0f0f12;
        border: 1px solid #1f1f1f;
        border-radius: 12px;
        color: #c9c9c9;
        line-height: 1.65;

        p { margin: 0 0 8px; }
        .outcome { color: #bfcfff; }
        strong { color: #e2e8ff; font-weight: 600; }
        code { background: #1a1a1a; padding: 0 6px; border-radius: 6px; }
    `};export{D as default};
