import React from 'react'
import FunctionComponentAnatomy from './FunctionComponentAnatomy'
import DefaultFallbackProps from './DefaultFallbackProps'
import ChildrenProp from './ChildrenProp'
import CompositionOverInheritance from './CompositionOverInheritance'
import PropDrilling from './PropDrilling'
import PureVsStateful from './PureVsStateful'
import ReusableComponentAPIDesign from './ReusableComponentAPIDesign'
import styled from 'styled-components'

const ComponentsAndProps = () => {
    return (
        <div style={{ padding: "15px" }}>
            <h3>Components & Props</h3>
            <Styled.PageIntro>
                <p>
                    React UIs are <em>composed</em> from small components. Props are the
                    only way data flows into them—so good APIs and composition patterns
                    decide how clean your app feels. In this section we use the{" "}
                    <code>children</code> prop for slots, favor composition over inheritance,
                    understand why prop drilling hurts, and design reusable components with
                    clear, predictable props.
                </p>

                <p className="outcome">
                    <strong>Outcome:</strong> you’ll ship components with stable public APIs,
                    safe defaults, and flexible composition—without over-engineering.
                </p>
            </Styled.PageIntro>
            <>
                <FunctionComponentAnatomy />
                <DefaultFallbackProps />
                <ChildrenProp />
                <CompositionOverInheritance />
                <PropDrilling />
                <PureVsStateful />
                <ReusableComponentAPIDesign />
            </>
        </div>
    )
}

export default ComponentsAndProps

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
