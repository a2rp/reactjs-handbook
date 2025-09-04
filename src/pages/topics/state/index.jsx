import React from 'react'
import AntiPatterns from './AntiPatterns'
import BatchingStateUpdates from './BatchingStateUpdates'
import DerivedStateVsCompute from './DerivedStateVsCompute'
import ArraysInState from './ArraysInState'
import ObjectsInState from './ObjectsInState'
import MultipleStateVariables from './MultipleStateVariables'
import InitialStateFunction from './InitialStateFunction'
import FunctionalUpdates from './FunctionalUpdates'
import UseStateBasics from './UseStateBasics'
import styled from 'styled-components'

const State = () => {
    return (
        <div style={{ padding: "15px" }}>
            <h3>State (useState) - fundamentals</h3>
            <Styled.PageIntro>
                <p>
                    <code>useState</code> is the simplest way to make UI reactive. We’ll cover the
                    patterns you actually use daily: when to store state, how to update it without
                    causing bugs, and how React batches updates in 18+. You’ll also see common traps
                    (mutations, reading immediately after <code>setState</code>, duplicated/derived data)
                    and the safe alternatives.
                </p>
                <p className="outcome">
                    <strong>Outcome:</strong> predictable updates, no accidental mutations, fewer re-renders,
                    and components that stay easy to reason about.
                </p>
            </Styled.PageIntro>
            <>
                <UseStateBasics />
                <FunctionalUpdates />
                <InitialStateFunction />
                <MultipleStateVariables />
                <ObjectsInState />
                <ArraysInState />
                <DerivedStateVsCompute />
                <BatchingStateUpdates />
                <AntiPatterns />
            </>
        </div>
    )
}

export default State

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


