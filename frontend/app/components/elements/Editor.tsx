import { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

export const Editor = () => {
    const [editorValue, setEditorValue] = useState<string>(`@startuml\n    Bob -> Alice : hello\n@enduml`)
    const handleChange = (value: string) => {
        setEditorValue(value)
        render(value)
    }

    const render = (value: string): void => {
        const reqJSON = {
            "text": value,
            "format": "png"
        }

        // fetch from /backend/api.php
        fetch('http://localhost:8003/api.php', {
            method: 'POST',
            body: JSON.stringify(reqJSON),
            headers: {
                'Content-Type': 'text/plain'
            },

        })
            .then(response => response.text())
            .then(data => {
                const previewImage = document.getElementById('preview-img') as HTMLImageElement
                previewImage.src = data
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        render(editorValue)
    }, [])

    return (
        <div className='editor-container'>
            <MonacoEditor
                width="800"
                height="600"
                language="plaintext"
                theme="vs-dark"
                value={editorValue}
                options={{
                    selectOnLineNumbers: true,
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    readOnly: false,
                    fontSize: 12,
                    automaticLayout: false
                }}
                onChange={value => handleChange(value)}
            />
        </div>
    )
}