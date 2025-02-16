"use client"
import { useParams } from "next/navigation"
import { SAMPLE_POSTS } from "../../../lib/sample-data"
import Image from "next/image"
import { Button } from "@/components/ui/button" 
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPost() {
  const params = useParams()
  const post = SAMPLE_POSTS.find((p) => p.id === Number(params.id))

  if (!post) {
    return (
      <div className="container max-w-4xl py-12">
        <h1 className="text-2xl font-bold mb-4">Пост не знайдено</h1>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Повернутися на головну
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <article className="container max-w-4xl py-12">
      <Link href="/">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Повернутися на головну
        </Button>
      </Link>
      
      <div className="space-y-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">{post.date}</div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {post.description}
          </p>
        </div>

        <div className="flex justify-center">
          <Button 
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 py-2 hover:bg-primary/90 transition-colors"
          >
            <span className="relative z-10">Читати блог</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>
    </article>
  )
} 