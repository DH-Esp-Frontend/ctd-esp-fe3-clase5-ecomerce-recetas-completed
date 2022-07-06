import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from '../../data'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "POST") {
    const book = req.body
    const {name, image} = await JSON.parse(book)
    data.push({name, image, id: String(Math.random().toFixed())})
    res.status(200).json({ message: "Added!" })
  }
}
