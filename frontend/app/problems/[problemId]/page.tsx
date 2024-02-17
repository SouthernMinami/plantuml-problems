'use client'

import { useEffect, useState } from 'react'
import { Problem } from "@/app/types/types"
import { useSearchParams } from 'next/navigation'
import { Editor } from '@/app/components/elements/Editor'
import { Preview, SamplePreview } from '@/app/components/elements/Preview'
import { SampleCodeButton } from '@/app/components/elements/buttons/SampleCodeButton'

const ProblemPage = () => {
    // TODO: 問題データ取得処理を別ファイルに切り出して、コンポーネントとして事前にサーバーサイドで作成しておく
    const searchParams = useSearchParams()
    const problemId = searchParams.get('problemId')

    const [problem, setProblem] = useState<Problem>()
    const [editorValue, setEditorValue] = useState<string>(`@startuml\n    \n@enduml`)

    const renderSampleImage = (value: string): void => {
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
                const sampleImage = document.getElementById('sample-img') as HTMLImageElement
                sampleImage.src = data
            })
            .catch(error => console.error(error))
    }


    useEffect(() => {
        if (problemId) {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', '../problems.json', true)
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const res = JSON.parse(xhr.responseText)
                    const problems: Problem[] = res
                    setProblem(problems.find(problem => problem.id === Number(problemId)))
                } else {
                    console.error('問題データの取得に失敗しました。')
                }
            }
            xhr.send()
        }
    }, [problemId])

    renderSampleImage(problem?.answer!)

    return (
        <>
            <div className='flex py-6 justify-between'>
                <h1 className='text-xl'>問題{problemId}: {problem?.title}</h1>
                <SampleCodeButton sampleCode={problem?.answer!} />
            </div>
            <div className="flex justify-center h-full">
                <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
                <div className="preview-containers flex flex-col h-full w-full md:w-1/2 lg:w-1/3">
                    <div className="sample-code-container flex">
                        <pre id="sample-code-area"></pre>
                    </div>
                    <Preview />
                    <SamplePreview />
                </div >

            </div >
        </>

    )
}

export default ProblemPage