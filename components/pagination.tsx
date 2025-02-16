import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const pages = []

    // Always show first page
    pages.push(1)

    if (currentPage > 3) {
      pages.push("...")
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }

    if (currentPage < totalPages - 2) {
      pages.push("...")
    }


    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="flex items-center justify-between mt-12 text-sm text-gray-600">
      <Button
        variant="ghost"
        className="flex items-center gap-2 p-0 hover:bg-transparent hover:text-gray-100"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Button>

      <div className="flex items-center gap-4">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="text-gray-400">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`hover:text-gray-100 ${currentPage === page ? "text-gray-100" : "text-gray-500"}`}
              onClick={() => typeof page === "number" && onPageChange(page)}
            >
              {page}
            </button>
          ),
        )}
      </div>

      <Button
        variant="ghost"
        className="flex items-center gap-2 p-0 hover:bg-transparent hover:text-gray-100"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

