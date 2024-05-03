import { meta } from "@/lib/constants"
import { getPosts } from "@/lib/posts"
import { BlogPostPreview } from "@/ui/BlogPostPreview"
import { IntersectionSwap } from "@/ui/IntersectionSwap"
import { Nav } from "@/ui/Nav"
// import { NextMark } from "@/ui/NextMark"
// import { ProfileImageLarge } from "@/ui/ProfileImage"
import { SiteHeader } from "@/ui/SiteHeader"
// import { VercelMark } from "@/ui/VercelMark"
import { VideoPostPreview } from "@/ui/VideoPostPreview"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: meta.name,
  description: meta.description,
}

export default async function Page() {
  const { posts } = getPosts()

  return (
    <>
      <IntersectionSwap nav={<SiteHeader />}>
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <div className="mt-2">
              <h1 className="text-3xl font-semibold leading-none text-rose-100/90">
                Alain S
              </h1>
              <h2 className="mt-2 items-center space-y-2 text-lg font-medium leading-none text-rose-100/50 lg:mt-0 lg:flex lg:space-y-0 lg:space-x-2">
                <div className="whitespace-nowrap">Développeur Web</div>
              </h2>
            </div>
          </div>

          <div className="text-xl text-rose-100/90">{meta.description}</div>

          <Nav />
        </div>
      </IntersectionSwap>

      <div className="mt-24 space-y-10">
        {posts.map((post) => {
          if (post.type === "Post") {
            return <BlogPostPreview key={post.slug} {...post} />
          }
        })}
      </div>
    </>
  )
}
