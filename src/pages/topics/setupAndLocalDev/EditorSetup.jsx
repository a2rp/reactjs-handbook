import React from "react";
import { Styled } from "../styled";

/**
 * Topic - Editor setup (VS Code, extensions)
 */
export default function EditorSetup({ defaultOpen = false }) {
    const [open, setOpen] = React.useState(!!defaultOpen);
    const id = "editor-setup";

    return (
        <Styled.Topic>
            <Styled.Title
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                data-open={open}
            >
                <Styled.Arrow data-open={open}>▸</Styled.Arrow>
                <span>Editor setup (VS Code, extensions)</span>
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
            <h3>Extensions I install</h3>
            <ul>
                <li><strong>ESLint</strong> - dbaeumer.vscode-eslint</li>
                <li><strong>Prettier - Code formatter</strong> - esbenp.prettier-vscode</li>
                <li><strong>Error Lens</strong> - usernamehw.errorlens</li>
                <li><strong>vscode-styled-components</strong> - styled-components.vscode-styled-components</li>
                <li><strong>Auto Rename Tag</strong> - formulahendry.auto-rename-tag</li>
                <li><strong>Auto Close Tag</strong> - formulahendry.auto-close-tag</li>
                <li><strong>Path Intellisense</strong> - christian-kohler.path-intellisense</li>
                <li><strong>ES7+ React/Redux snippets</strong> - dsznajder.es7-react-js-snippets</li>
                <li><strong>Git Graph</strong> - mhutchie.git-graph (nice to have)</li>
            </ul>

            <h3>Workspace recommendations</h3>
            <p>I add this file so VS Code suggests the right extensions to anyone opening the repo.</p>
            <Styled.Code aria-label=".vscode/extensions.json">
                {String.raw`{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "usernamehw.errorlens",
    "styled-components.vscode-styled-components",
    "formulahendry.auto-rename-tag",
    "formulahendry.auto-close-tag",
    "christian-kohler.path-intellisense",
    "dsznajder.es7-react-js-snippets",
    "mhutchie.git-graph"
  ]
}`}
            </Styled.Code>

            <h3>My VS Code settings</h3>
            <p>Format on save + ESLint fixes; tidy imports; good highlighting for styled-components.</p>
            <Styled.Code aria-label=".vscode/settings.json">
                {String.raw`{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.trailingComma": "all",
  "prettier.printWidth": 100,

  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",

  "files.associations": {
    "*.js": "javascript",
    "*.jsx": "javascriptreact"
  }
}`}
            </Styled.Code>

            <h3>Command palette shortcuts</h3>
            <Styled.Code aria-label="commands">
                {String.raw`Ctrl/Cmd + Shift + P →
> Format Document
> Restart ESLint Server
> Developer: Reload Window`}
            </Styled.Code>

            <h3>Notes</h3>
            <ul>
                <li>Prettier handles formatting; ESLint handles code quality/fixes. I run both on save.</li>
                <li>The styled-components extension improves syntax highlighting inside template literals.</li>
                <li>VS Code auto-updates imports when files move (with the settings above).</li>
            </ul>

            <Styled.Divider />
            <p>
                <em>PS:</em> My laptop is older, so I keep VS Code light - I install only essential
                extensions and prefer a minimal UI to save memory/CPU.
            </p>

        </Styled.Content>
    );
}
