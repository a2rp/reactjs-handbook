import JSXSyntaxRules from './JSXSyntaxRules'
import HTMLvsJSX from './HTMLvsJSX'
import InlineStyles from './InlineStyles'
import Fragments from './Fragments'
import CommentsInJSX from './CommentsInJSX'
import ExpressionsVsStatements from './ExpressionsVsStatements'
import ConditionalAnd from './ConditionalAnd'
import ConditionalTernary from './ConditionalTernary'
import EarlyReturn from './EarlyReturn'
import RenderingLists from './RenderingLists'
import KeysStableIdentity from './KeysStableIdentity'
import DangerousHTML from './DangerousHTML'
import styled from 'styled-components'

const JsxRulesAndPatterns = () => {
    return (
        <div style={{ padding: "15px" }}>
            <h3>JSX: Rules and Patterns</h3>
            <Styled.PageIntro>
                <p>
                    This section is about writing <em>readable, predictable</em> JSX.
                    We’ll use early returns to cut noise, choose the right conditional
                    pattern (ternary vs <code>&amp;&amp;</code> vs returning <code>null</code>),
                    render lists with stable keys, and keep complex logic <em>outside</em> the
                    JSX tree so renders stay pure and easy to scan.
                </p>
                <p className="outcome">
                    <strong>Outcome:</strong> smaller components, fewer nested ternaries,
                    correct keys, and JSX that’s simple to diff, test, and maintain.
                </p>
            </Styled.PageIntro>
            <>
                <JSXSyntaxRules />
                <HTMLvsJSX />
                <InlineStyles />
                <Fragments />
                <CommentsInJSX />
                <ExpressionsVsStatements />
                <ConditionalAnd />
                <ConditionalTernary />
                <EarlyReturn />
                <RenderingLists />
                <KeysStableIdentity />
                <DangerousHTML />
            </>
        </div>
    )
}

export default JsxRulesAndPatterns

const Styled = {
    PageIntro: styled.div`
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
    `,
};