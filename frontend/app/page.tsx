'use client';

// import { Editor } from "./components/elements/Editor";
import Editor from 'react-monaco-editor';

// Home page as a playground for uml editor
export default function Home() {
    return (
        <div>
            <Editor
                width="800"
                height="600"
                language="plaintext"
                theme="vs-dark"
                value="@startuml\nBob -> Alice : hello\n@enduml\n"
                options={{
                    selectOnLineNumbers: true
                }}
                editorDidMount={(editor, monaco) => {
                    console.log('editorDidMount', editor)
                    editor.focus()
                }}
            />
        </div>
    )
}
