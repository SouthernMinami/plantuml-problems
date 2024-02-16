import { useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';

type Props = {
    editorValue: string,
    setEditorValue: (value: string) => void
}

export const Editor = ({ editorValue, setEditorValue }: Props) => {
    const handleChange = (value: string) => {
        setEditorValue(value)
        render(value)
    }

    const render = (value: string): void => {
        const reqJSON = {
            "code": value,
            "extension": "png"
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
        <div className='editor-container w-full md:w-1/2 lg:w-1/3'>
            <MonacoEditor
                className={'monaco-editor'}
                width="50vh"
                height="200vh"
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