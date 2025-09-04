import LetVsConst from "./LetVsConst";
import ArrowFunctions from "./ArrowFunctions";
import Destructuring from "./Destructuring";
import RestAndSpread from "./RestAndSpread";
import TemplateLiterals from "./TemplateLiterals";
import DefaultParameters from "./DefaultParameters";
import OptionalChaining from "./OptionalChaining";
import NullishCoalescing from "./NullishCoalescing";
import MapFilterReduce from "./MapFilterReduce";
import FindSomeEvery from "./FindSomeEvery";
import SortNoMutate from "./SortNoMutate";
import FlatAndFlatMap from "./FlatAndFlatMap";
import ObjectUtilities from "./ObjectUtilities";
import SetsAndMaps from "./SetsAndMaps";
import PromisesAsyncAwait from "./PromisesAsyncAwait";
import FetchBasicsJSON from "./FetchBasicsJSON";
import Timers from "./Timers";
import styled from "styled-components";

const Es6IActuallyUseDaily = () => {
    return (
        <div style={{ padding: "15px" }}>
            <h3>ES6+ I actually use daily</h3>
            <Styled.PageIntro>
                <p>
                    This section is a speed-run of the JavaScript features I reach for in
                    every React app. The goal is simple: write cleaner, safer code with
                    fewer bugs and fewer re-renders. Each topic is short, focused, and
                    shows the <em>production</em> way to use it with React (immutable
                    updates, safe access, predictable async).
                </p>
                <p className="outcome">
                    <strong>Outcome:</strong> you’ll use <code>let/const</code> correctly,
                    access data safely with <code>?.</code> and <code>??</code>, update
                    arrays/objects immutably, and handle async/JSON without surprises.
                </p>
            </Styled.PageIntro>
            <>
                <LetVsConst />
                <ArrowFunctions />
                <Destructuring />
                <RestAndSpread />
                <TemplateLiterals />
                <DefaultParameters />
                <OptionalChaining />
                <NullishCoalescing />
                <MapFilterReduce />
                <FindSomeEvery />
                <SortNoMutate />
                <FlatAndFlatMap />
                <ObjectUtilities />
                <SetsAndMaps />
                <PromisesAsyncAwait />
                <FetchBasicsJSON />
                <Timers />
            </>
        </div>
    )
}

export default Es6IActuallyUseDaily

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
    `,

};