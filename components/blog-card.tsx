import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"
import type { BlogPost } from "@/lib/types"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden border-0 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.id}`}>
        <CardHeader className="p-0">
          <div className="aspect-[3/2] relative overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-sm font-medium text-primary capitalize">{post.category}</div>
            <ArrowUpRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground text-sm">{post.description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">{post.author.name}</div>
              <div className="text-muted-foreground">{post.date}</div>
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}

