// import React from 'react'
// import dynamic from 'next/dynamic'
// const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false })

// interface EditorProps {
//     value: string
//     language: string
//     theme: string
// }

// export const Editor: React.FC<EditorProps> = ({ value, language, theme }) => {


//     return (
//         <MonacoEditor
//             width="800"
//             height="600"
//             language={language}
//             theme={theme}
//             value={value}
//             options={{
//                 selectOnLineNumbers: true
//             }}
//             editorDidMount={(editor, monaco) => {
//                 console.log('editorDidMount', editor)
//                 editor.focus()
//             }
//             }
//         />
//     )
// }