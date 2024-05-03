import { getParams, getPosts, type PostParams } from "@/lib/posts"
import { BlogPostPreview } from "@/ui/BlogPostPreview"
import { VideoPostPreview } from "@/ui/VideoPostPreview"
import YoutubeIcon from "@/ui/YoutubeIcon"

export const generateStaticParams = () => {
  return getParams()
}

export default async function Page({ params }: { params: PostParams }) {
  const { posts, filters } = getPosts(params)

  return (
    <div className="mt-8 space-y-10">
      <p>You shouldn't be here</p>
      {filters?.tag ? (
        <div className="flex space-x-2">
          <div className="rounded-full border border-rose-100/5 py-0.5 px-2 text-rose-100/90">
            {filters.tag}
          </div>
        </div>
      ) : null}

      {filters?.type === "videos" ? (
        <div className="flex">
          <a
            href="https://youtube.com/playlist?list=PLo9a4XFa98CBynQ0HE_UstByk_-KXg6eU"
            className="group flex items-center space-x-2"
          >
            <span className="text-lg text-rose-100/40 transition-colors group-hover:text-rose-100/80">
              YouTube Playlist
            </span>

            <YoutubeIcon className="w-5 text-rose-100/20 shadow-md transition-colors group-hover:text-red-500/70" />
          </a>
        </div>
      ) : null}

      {posts.map((post) => {
        if (post.type === "Video") {
          return <VideoPostPreview key={post.youtube.id} {...post} />
        }

        if (post.type === "Post") {
          return <BlogPostPreview key={post.slug} {...post} />
        }
      })}
    </div>
  )
}
