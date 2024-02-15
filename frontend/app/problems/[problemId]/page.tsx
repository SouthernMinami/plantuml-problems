'use client'

import { useEffect, useState } from 'react'
import { Problem } from "@/app/types/types"
import { useSearchParams } from 'next/navigation'
import { Editor } from '@/app/components/elements/Editor'
import { Preview } from '@/app/components/elements/Preview'

const ProblemPage = () => {
    // TODO: problemIdを取得できるようにする
    const searchParams = useSearchParams()
    const problemId = searchParams.get('problemId')

    const [problem, setProblem] = useState<Problem>()
    const [editorValue, setEditorValue] = useState<string>(`@startuml\n    \n@enduml`)

    useEffect(() => {
        if (problemId) {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', '../problems.json', true)
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const res = JSON.parse(xhr.responseText)
                    const problems: Problem[] = res
                    console.log(problems)
                    setProblem(problems.find(problem => problem.id === Number(problemId)))
                } else {
                    console.error('問題データの取得に失敗しました。')
                }
            }
            xhr.send()
        }
    }, [problemId])

    return (
        <>
            <div>
                <h1 className='text-xl'>問題{problemId}: {problem?.title}</h1>
            </div>
            <div className="flex justify-center">
                <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
                <div className="flex flex-col">
                    <Preview />
                    <div className='answer-container'>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProblemPage