import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from "@/lib/constants"
import clsx from "clsx"
import Link from "next/link"

export const SiteFooter = () => {
  return (
    <div className="mt-24 pb-24 text-base">
      <div className="text-rose-100/50">
        <div className="flex flex-col justify-between font-medium lg:flex-row">
          <div className="flex space-x-5">
            <a
              href="https://github.com/user28111999"
              className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              GitHub
            </a>
            <a
              href="mailto:28111999@protonmail.com"
              className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              E-Mail
            </a>
          </div>
        </div>
      </div>

      <p className="mt-8 text-rose-200/30">
        Site realisé avec{" "}
        <a
          href="https://nextjs.org"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://mdxjs.com"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          MDX
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Tailwind
        </a>{" "}
        &{" "}
        <a
          href="https://vercel.com"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Vercel
        </a>
      </p>
    </div>
  )
}
