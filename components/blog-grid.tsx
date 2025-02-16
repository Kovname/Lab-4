import { BlogCard } from "@/components/blog-card"
import { NewsletterCard } from "@/components/newsletter-card"
import type { BlogPost } from "@/lib/types"

export function BlogGrid({ posts }: { posts: BlogPost[] }) {

  const postsWithNewsletter = [...posts]
  postsWithNewsletter.splice(3, 0, "newsletter")

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {postsWithNewsletter.map((post, index) =>
        post === "newsletter" ? (
          <NewsletterCard key="newsletter" />
        ) : (
          <BlogCard key={post.id} post={post as BlogPost} />
        ),
      )}
    </div>
  )
}

