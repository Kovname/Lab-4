"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Pagination } from "@/components/pagination"
import { NewsletterCard } from "@/components/newsletter-card"
import type { BlogPost, PostOrNewsletter } from "@/lib/types"
import { BlogCard } from "@/components/blog-card"
import Link from "next/link"
import { SAMPLE_POSTS } from "@/lib/sample-data"

const POSTS_PER_PAGE = 8

const CATEGORIES = [
  { id: "all", label: "Всі" },
  { id: "design", label: "Дизайн" },
  { id: "product", label: "Продукт" },
  { id: "engineering", label: "Розробка" },
  { id: "customer", label: "Підтримка" },
]

export default function HomePage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [page, setPage] = useState(1)


  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const handleCategory = (value: string) => {
    setCategory(value)
    setPage(1)
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    setPage(1)
  }


  const sortedPosts = [...SAMPLE_POSTS].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return a.title.localeCompare(b.title)
  })


  const filteredPosts = sortedPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "all" || post.category === category
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
  const postsWithNewsletter: PostOrNewsletter[] = [...paginatedPosts]
  postsWithNewsletter.splice(3, 0, { type: "newsletter" })

  return (
    <main className="min-h-screen py-12">
      <div className="container max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <div className="text-sm font-medium text-primary">Наш блог</div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Останні публікації нашої команди</h1>
          <p className="text-muted-foreground text-lg">Останні новини галузі, інтерв'ю, технології та ресурси.</p>
          <div className="max-w-md mx-auto relative">
            <Input
              type="search"
              placeholder="Пошук"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                variant={category === cat.id ? "default" : "ghost"}
                onClick={() => handleCategory(cat.id)}
                className={`
                  ${category === cat.id 
                    ? "bg-primary hover:bg-primary/90" 
                    : "hover:bg-accent text-muted-foreground hover:text-foreground"
                  }
                  transition-colors
                `}
              >
                {cat.label}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 border rounded-full p-1 border-border">
            <Button
              variant="ghost"
              onClick={() => handleSort("recent")}
              className={`
                rounded-full transition-colors
                ${sortBy === "recent" 
                  ? "bg-primary hover:bg-primary/90 text-white" 
                  : "hover:bg-accent text-muted-foreground hover:text-foreground"
                }
              `}
            >
              Найновіші
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSort("alpha")}
              className={`
                rounded-full transition-colors
                ${sortBy === "alpha" 
                  ? "bg-primary hover:bg-primary/90 text-white" 
                  : "hover:bg-accent text-muted-foreground hover:text-foreground"
                }
              `}
            >
              За алфавітом
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {postsWithNewsletter.map((item, index) =>
            'type' in item && item.type === "newsletter" ? (
              <NewsletterCard key={`newsletter-${index}`} />
            ) : (
              <BlogCard 
                key={`post-${index}`} 
                post={item as BlogPost} 
              />
            )
          )}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </main>
  )
}