export type BlogPost = {
  id: number
  title: string
  description: string
  category: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
}

export type NewsletterItem = {
  type: "newsletter"
}

export type PostOrNewsletter = BlogPost | NewsletterItem

