'use client';

import { useState } from "react";
import { DownloadButton } from "./components/elements/buttons/DownloadButton";
import { Editor } from "./components/elements/Editor";
import { Preview } from "./components/elements/Preview";
import { FormatButton } from "./components/elements/buttons/FormatButton";

// Home page as a playground for uml editor
export default function Home() {
    const [editorValue, setEditorValue] = useState<string>(`@startuml\n    Bob -> Alice : hello\n@enduml`)
    const [extension, setExtension] = useState<string>("png")

    return (
        <>
            <div className="my-4">
                <h1 className="flex justify-center text-4xl font-bold text-black pb-2 pl-3 pr-2">
                    Playground
                </h1>
                <p className="flex justify-center">学んだUMLをこのエディタで練習してみましょう。<br />練習問題には「問題一覧」からチャレンジすることが出来ます。</p>
            </div>
            <div className="button-container flex justify-center my-4">
                <FormatButton code={editorValue} extension="svg" setExtension={setExtension} />
                <FormatButton code={editorValue} extension="png" setExtension={setExtension} />
                <FormatButton code={editorValue} extension="txt" setExtension={setExtension} />
                <DownloadButton code={editorValue} extension={extension} />
            </div>
            <div className="flex justify-center">

                <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
                <Preview />
            </div>
        </>
    )
}
