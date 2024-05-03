// import type { NextApiRequest, NextApiResponse } from "next"

// // API route that revalidates the `/tweets` static page
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   // https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks
//   if (req.query.secret !== process.env.REVALIDATE_SECRET) {
//     return res.status(401).json({ message: "Invalid token" })
//   }

//   try {
//     await res.revalidate("/tweets")
//     return res.json({ revalidated: true })
//   } catch (err) {
//     // Note: Next.js will continue showing the last successfully generated page
//     return res.status(500).json({ message: "Error revalidating" })
//   }
// }
