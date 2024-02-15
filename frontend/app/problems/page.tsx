// import { fetchProblemsJSON } from "@/api/fetchProblemsJSON";
'use client';

import Link from "next/link";
import { Problem } from "../types/types";
import { useEffect, useState } from "react";

const Problems: React.FC = () => {
    const [problems, setProblems] = useState<Problem[]>([])

    useEffect(() => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'problems.json', true)
        xhr.onload = () => {
            if (xhr.status === 200) {
                setProblems(JSON.parse(xhr.responseText))
            } else {
                console.error('問題データの取得に失敗しました。')
            }
        }
        xhr.send()
    }, [])

    return (
        <>
            <div className="my-4">
                <h1 className="flex justify-center text-4xl font-bold text-black pb-2 pl-3 pr-2">
                    Excercise Problems
                </h1>
                <p className="flex justify-center">練習問題にチャレンジして、構文の理解を深めましょう。</p>
            </div>
            <div className="problems-table flex justify-center">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                問題ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                タイトル
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                難易度
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                カテゴリー
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {problems.map((problem, index) => {
                            return (
                                <tr className="hover:bg-gray-100" key={index}>
                                    <td className="px-6 py-4 w-1/4">
                                        <Link href={`problems/page/?problemId=${problem.id}`} className="">
                                            {problem.id}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 w-1/4">
                                        <Link href={`problems/page/?problemId=${problem.id}`} className="">
                                            {problem.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 w-1/4">
                                        <Link href={`problems/page/?problemId=${problem.id}`} className="">
                                            {problem.difficulty}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 w-1/4">
                                        <Link href={`problems/page/?problemId=${problem.id}`} className="">
                                            {problem.category}
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Problems;
