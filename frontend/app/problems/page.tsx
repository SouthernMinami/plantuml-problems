"use client"

import Link from "next/link";
import { Problem } from "../../../types/types";
import { useEffect, useState } from "react";

const Problems: React.FC = () => {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const problemsPerPage = 5;

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'problems.json', true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                setProblems(JSON.parse(xhr.responseText));
            } else {
                console.error('問題データの取得に失敗しました。');
            }
        };
        xhr.send();
    }, []);

    const indexOfLastProblem = currentPage * problemsPerPage;
    const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
    const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            問題ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            タイトル
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            難易度
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            カテゴリー
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {currentProblems.map((problem, index) => {
                        return (
                            <tr className="cursor-pointer hover:bg-gray-100" key={index} onClick={() => window.location.href = `problems/page/?problemId=${problem.id}`}>
                                <td className="px-6 py-4 w-1/4 border-b border-gray-200">
                                    {problem.id}
                                </td>
                                <td className="px-6 py-4 w-1/4 border-b border-gray-200">
                                    {problem.title}
                                </td>
                                <td className="px-6 py-4 w-1/4 border-b border-gray-200">
                                    {problem.difficulty}
                                </td>
                                <td className="px-6 py-4 w-1/4 border-b border-gray-200">
                                    {problem.category}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table >
            <div className="pagination px-2 py-10">
                {Array.from(Array(Math.ceil(problems.length / problemsPerPage)).keys()).map(number => {

                    const isEdgeBtn = number === 0 || number === Math.ceil(problems.length / problemsPerPage) - 1 ? true : false
                    const rounded = number === 0 ? 'rounded-l' : number === Math.ceil(problems.length / problemsPerPage) - 1 ? 'rounded-r' : ''
                    const isCurrentPage = number + 1 === currentPage ? true : false
                    const bgColor = isCurrentPage ? 'bg-blue-500' : 'bg-gray-500'

                    return (
                        <button key={number} onClick={() => paginate(number + 1)} className={`px-3 py-1 ${bgColor} text-white border border-gray ${isEdgeBtn ? rounded : ''}`}>
                            {number + 1}
                        </button>
                    );

                })}
            </div>
        </>
    )
}

export default Problems;