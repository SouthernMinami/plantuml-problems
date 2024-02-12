'use client';

import { DownloadPdfButton, DownloadPngButton, DownloadSvgButton, DownloadTxtButton } from "./components/elements/buttons/DownloadButton";
import { Editor } from "./components/elements/Editor";
import { Preview } from "./components/elements/Preview";

// Home page as a playground for uml editor
export default function Home() {
    return (
        <>
            <div className="my-4">
                <h1 className="flex justify-center text-4xl font-bold text-black pb-2 pl-3 pr-2">
                    Playground
                </h1>
                <p className="flex justify-center">学んだUMLをこのエディタで練習してみましょう。<br />練習問題には「問題一覧」からチャレンジすることが出来ます。</p>
            </div>
            <div className="button-container flex justify-center my-4">
                <DownloadSvgButton />
                <DownloadPngButton />
                <DownloadPdfButton />
                <DownloadTxtButton />
            </div>
            <div className="flex">

                <Editor />
                <Preview />
            </div>
        </>
    )
}
