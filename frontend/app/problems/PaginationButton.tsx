
import { useState } from "react"
import { Problem } from "../types/types"

type Props = {
    problems: Problem[],
    currentPage: number,
    setCurrentPage: (value: number) => void
}

export const PaginationButton = async ({ problems, currentPage, setCurrentPage }: Props) => {
    const problemsPerPage: number = 5
    // const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastProblem: number = currentPage * problemsPerPage
    const indexOfFirstProblem: number = indexOfLastProblem - problemsPerPage
    const currentProblems: Problem[] = problems.slice(indexOfFirstProblem, indexOfLastProblem)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <div className="pagination px-2 py-10">
            {Array.from(Array(Math.ceil(problems.length / problemsPerPage)).keys()).map(number => {

                const isEdgeBtn = number === 0 || number === Math.ceil(problems.length / problemsPerPage) - 1 ? true : false
                const rounded = number === 0 ? 'rounded-l' : number === Math.ceil(problems.length / problemsPerPage) - 1 ? 'rounded-r' : ''
                const isCurrentPage = number + 1 === currentPage ? true : false
                const bgColor = isCurrentPage ? 'bg-blue-500' : 'bg-gray-500'

                return (
                    <button key={number} onClick={() => paginate(number)} className={`pagination-btn px-3 py-1 ${bgColor} text-white border border-gray ${isEdgeBtn ? rounded : ''}`}>
                        {number + 1}
                    </button>
                )
            })}
        </div>
    )

}
