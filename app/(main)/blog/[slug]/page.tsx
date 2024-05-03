import Post from "@/app/(main)/blog/[slug]/Post"
import { meta } from "@/lib/constants"
import { formatPost } from "@/lib/contentlayer"
import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const generateStaticParams = () => {
  return allPosts
    .filter((p) => p.status === "published")
    .map((p) => ({ slug: p.slug }))
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params?.slug)

  if (!post) {
    notFound()
  }

  const url = `/${post.slug}`

  return {
    title: post.title,
    alternates: { canonical: url }
  }
}

export default async function PostPage({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params?.slug)

  if (!post) {
    notFound()
  }

  const formattedPost = formatPost(post, allPosts)

  return <Post post={formattedPost} />
}
