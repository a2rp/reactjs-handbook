import ReactDefinition from './ReactDefinition'
import ViteInstall from './ViteInstall'
import ProjectTree from './ProjectTree'
import EditorSetup from './EditorSetup'
import EnvFiles from './EnvFiles'
import ImportExportBasics from './ImportExportBasics'
import styled from 'styled-components'

const SetupAndLocalDev = () => {
    return (
        <div style={{ padding: "15px" }}>
            <h3>Setup & Local Dev</h3>
            <Styled.PageIntro>
                <p>
                    This section gets your machine ready to build React apps the same way I ship them.
                    We'll spin up a Vite project, understand the project tree, set up VS Code basics,
                    and configure environment files for dev/production. You'll also add deploy-ready
                    scripts (GH-Pages/Netlify/Cloudflare) with a working 404 fallback and safe routing
                    defaults. Finish this page and you can create a new repo, run locally, and deploy
                    with deep links working—consistently, every time.
                </p>
                <p className="outcome">
                    <strong>Outcome:</strong> a repeatable React starter with fast boot, clean lint/format,
                    and zero-surprise deploys.
                </p>
            </Styled.PageIntro>
            <>
                <ReactDefinition />
                <ViteInstall />
                <ProjectTree />
                <EditorSetup />
                <EnvFiles />
                <ImportExportBasics />
            </>
        </div>
    )
}

export default SetupAndLocalDev

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