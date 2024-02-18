
import Link from "next/link"
import { Problem } from "../types/types"

export async function fetchProblems() {
    const res = await fetch('http://localhost:3000/problems.json')
    const problems: Problem[] = await res.json()
    return problems
}

export const ProblemsList = async () => {
    const problems: Problem[] = await fetchProblems()

    return (
        <>
            <div className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <div className="bg-gray-50 flex">
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                        問題ID
                    </div>
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                        タイトル
                    </div>
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                        難易度
                    </div>
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                        カテゴリー
                    </div>
                </div>
                <div className="bg-white divide-y divide-gray-200">
                    {problems.map((problem, index) => {
                        return (
                            <Link className="flex cursor-pointer hover:bg-gray-100" href={`/problems/${problem.id}`} key={index}>
                                <div className="px-6 py-4 w-1/4 bg-gray-500 text-white border-b border-gray-200">
                                    {problem.id}
                                </div>
                                <div className="px-6 py-4 w-1/4 border-b border-gray-200 ">
                                    {problem.title}
                                </div>
                                <div className="px-6 py-4 w-1/4 border-b border-gray-200">
                                    {problem.difficulty}
                                </div>
                                <div className="px-6 py-4 w-1/4 border-b border-gray-200">
                                    {problem.category}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            {/* <div className="pagination px-2 py-10">
                {Array.from(Array(Math.ceil(problems.length / problemsPerPage)).keys()).map(number => {

                    const isEdgeBtn = number === 0 || number === Math.ceil(problems.length / problemsPerPage) - 1 ? true : false
                    const rounded = number === 0 ? 'rounded-l' : number === Math.ceil(problems.length / problemsPerPage) - 1 ? 'rounded-r' : ''
                    const isCurrentPage = number + 1 === currentPage ? true : false
                    const bgColor = isCurrentPage ? 'bg-blue-500' : 'bg-gray-500'

                    return (
                        <button id="pagination-btn" key={number} className={`pagination-btn px-3 py-1 ${bgColor} text-white border border-gray ${isEdgeBtn ? rounded : ''}`}>
                            {number + 1}
                        </button>

                    )
                })}
            </div> */}
            {/* <PaginationButton problems={problems} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
        </>
    )
}