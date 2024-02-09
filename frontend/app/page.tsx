'use client';

// import { Editor } from "./components/elements/Editor";
import Editor from 'react-monaco-editor';

export default function Home() {
    return (
        <div>
            <h1>aaaa</h1>
            <Editor
                width="800"
                height="600"
                language="plaintext"
                theme="vs-dark"
                value="console.log('Hello, world!');"
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
