import { useState } from "react"

type Props = {
    sampleCode: string
}

export const SampleCodeButton = ({ sampleCode }: Props) => {
    const showSampleCode = () => {
        const sampleCodeButton = document.getElementsByClassName('sample-code-btn')[0] as HTMLButtonElement
        const sampleCodeArea = document.getElementById('sample-code-area') as HTMLDivElement
        sampleCodeArea.innerHTML = `サンプルコード:\n\n${sampleCode}`
        if (sampleCodeButton.innerHTML === 'サンプルコードを表示する') {
            sampleCodeArea.style.display = 'block'
            sampleCodeButton.innerHTML = 'サンプルコードを非表示にする'
        } else {
            sampleCodeArea.style.display = 'none'
            sampleCodeButton.innerHTML = 'サンプルコードを表示する'
        }
    }


    return (
        <button
            className="sample-code-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => showSampleCode()}
        >
            サンプルコードを表示する
        </button>
    )
}