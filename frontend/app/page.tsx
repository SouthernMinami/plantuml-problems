'use client';

import { Editor } from "./components/elements/Editor";
import { Preview } from "./components/elements/Preview";
// import Editor from 'react-monaco-editor';

// Home page as a playground for uml editor
export default function Home() {
    return (
        <>
            <div>
                <h1 className="flex justify-center text-4xl font-bold text-black pb-2 pl-3 pr-2">
                    Playground
                </h1>
                <p className="flex justify-center">学んだUMLを練習してみましょう。<br />練習問題には「問題一覧」からチャレンジすることが出来ます。</p>
            </div>
            <div className="button-container flex justify-center">
            </div>
            <div className="flex">

                <Editor />
                <Preview />
            </div>
        </>
    )
}
