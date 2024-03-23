export type SanityArticle = {
  title: string
  description: string
  slug: string & { current: string }
  createdAt: Date
  body: string
}
