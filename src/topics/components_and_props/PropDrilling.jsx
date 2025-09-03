import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Prop drilling (and why it hurts)
 */
export default function PropDrilling({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "prop-drilling";

    return (
        <Styled.Topic id={id}>
            <Styled.Title
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                data-open={open}
            >
                <Styled.Arrow data-open={open}>▸</Styled.Arrow>
                <span>Prop drilling (and why it hurts)</span>
            </Styled.Title>

            <Styled.Panel
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-button`}
                data-open={open}
            >
                <div><Content /></div>
            </Styled.Panel>
        </Styled.Topic>
    );
}

function Content() {
    return (
        <Styled.Content>
            <p>
                <strong>Prop drilling</strong> is passing a prop through layers of components that
                don't use it-just to reach a deep child. This couples distant parts of the tree and
                creates noisy, brittle code.
            </p>

            <h3>A) What it looks like</h3>
            <Styled.Code>{`// App wants Button deep down to get user + onLogout
function App() {
  const [user, setUser] = React.useState({ name: "Ashish" });
  const onLogout = () => setUser(null);
  return <Page user={user} onLogout={onLogout} />;
}

function Page(props) {
  // doesn't need user/onLogout but passes them
  return <Toolbar {...props} />;
}

function Toolbar({ user, onLogout }) {
  return <UserButton user={user} onLogout={onLogout} />;
}

function UserButton({ user, onLogout }) {
  return user ? <button onClick={onLogout}>Logout {user.name}</button> : null;
}`}</Styled.Code>

            <h3>B) Why it hurts</h3>
            <ul>
                <li><strong>Brittle refactors:</strong> rename or move a leaf and many pass-through signatures change.</li>
                <li><strong>Noise:</strong> “prop soup” in components that don't use the values.</li>
                <li><strong>Re-renders:</strong> parents re-render when drilling values change, even if unused.</li>
                <li><strong>Tight coupling:</strong> upper layers must know lower-layer needs.</li>
            </ul>

            <h3>C) When it's fine</h3>
            <ul>
                <li>Very shallow trees, or one-off props passed a level or two.</li>
                <li>Leaf-only data where parents genuinely use the values too.</li>
            </ul>

            <h3>D) Better patterns</h3>
            <h4>1) Co-locate state near its consumers</h4>
            <Styled.Code>{`// Put state where it's used; lift up only when multiple siblings need it
function SearchBox() {
  const [q, setQ] = React.useState("");
  return <input value={q} onChange={e => setQ(e.target.value)} />;
}`}</Styled.Code>

            <h4>2) React Context for ambient concerns</h4>
            <p>Great for auth, theme, i18n, current user-data many levels down need.</p>
            <Styled.Code>{`// auth-context.js
const AuthCtx = React.createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = React.useState({ name: "Ashish" });
  const value = React.useMemo(() => ({ user, logout: () => setUser(null) }), [user]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
export function useAuth() {
  const ctx = React.useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}

// Anywhere deep:
function UserButton() {
  const { user, logout } = useAuth();
  return user ? <button onClick={logout}>Logout {user.name}</button> : null;
}

// App root:
function App() {
  return <AuthProvider><Page /></AuthProvider>;
}`}</Styled.Code>

            <h4>3) Custom hooks to share logic (not props)</h4>
            <Styled.Code>{`// useTheme.js
const ThemeCtx = React.createContext("light");
export const ThemeProvider = ({ value = "light", children }) =>
  <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
export const useTheme = () => React.useContext(ThemeCtx);

function Title({ children }) {
  const theme = useTheme();
  return <h3 className={theme === "dark" ? "title--dark" : "title"}>{children}</h3>;
}`}</Styled.Code>

            <h4>4) Composition & slots instead of boolean flags</h4>
            <Styled.Code>{`function Modal({ header, children, footer }) {
  return (
    <div className="modal">
      <header>{header}</header>
      <section>{children}</section>
      <footer>{footer}</footer>
    </div>
  );
}

// Callers inject pieces instead of toggling many props:
<Modal header={<h4>Confirm</h4>} footer={<button>Close</button>}>
  <p>Are you sure?</p>
</Modal>`}</Styled.Code>

            <h4>5) State libraries for app-wide stores</h4>
            <p>
                For large apps, use a lightweight store (e.g., Zustand) or Redux/Recoil/Jotai to avoid deep drilling and
                to select only the slices components need.
            </p>

            <h3>E) Performance notes</h3>
            <ul>
                <li>With Context, <strong>split providers</strong> (e.g., Auth vs Theme) so updates don't fan out unnecessarily.</li>
                <li><strong>Memoize provider values</strong> to keep referential stability.</li>
                <li>For heavy trees, prefer <strong>selectors</strong> (store libs) or split contexts by field.</li>
                <li>Use <code>React.memo</code> on pass-through components when needed, but fix architecture first.</li>
            </ul>

            <h3>F) Quick checklist</h3>
            <ul>
                <li>Passing through 3+ layers? Consider Context or a store.</li>
                <li>Co-locate state; lift only when multiple peers need it.</li>
                <li>Prefer composition/slots to boolean-prop bloat.</li>
                <li>Memoize context values and split providers by concern.</li>
            </ul>

            <Styled.Divider />
        </Styled.Content>
    );
}
