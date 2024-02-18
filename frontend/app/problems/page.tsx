import { ProblemsList } from "./ProblemsList"
import { Problem } from "../types/types"
import { PaginationButton } from "./PaginationButton"

const ProblemsPage: React.FC = () => {
    // const [currentPage, setCurrentPage] = useState(1)

    return (
        <>
            <ProblemsList />
        </>
    )
}

export default ProblemsPage