import { VercelRequest, VercelResponse } from '@vercel/node'
import { renderImage } from '../images'

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    const result = await renderImage(String(req.query.name))
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
    res.send(result)
  } catch (error) {
    res.send('Error')
    console.error(error)
  }
}
