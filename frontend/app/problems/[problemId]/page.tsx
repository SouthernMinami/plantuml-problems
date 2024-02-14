'use client'

import { useEffect, useState } from 'react'
import { Problem } from "@/app/types/types"
import { useSearchParams } from 'next/navigation'

const ProblemPage = () => {
    // TODO: problemIdを取得できるようにする
    const searchParams = useSearchParams()
    const problemId = searchParams.get('problemId')
    console.log(problemId)

    const [problem, setProblem] = useState<Problem>()

    const fetchProblem = (currId: number) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'problems.json', true)
        xhr.onload = () => {
            if (xhr.status === 200) {
                const problems: Problem[] = JSON.parse(xhr.responseText)
                console.log(problems)
                setProblem(problems.find(problem => problem.id === currId))
            } else {
                console.error('問題データの取得に失敗しました。')
            }
        }
        xhr.send()
    }

    useEffect(() => {
        if (problemId) {
            fetchProblem(parseInt(problemId))
        }
    }, [problemId])

    return (
        <div>
            <h1>問題{problemId}:</h1>
        </div>
    )
}

export default ProblemPage