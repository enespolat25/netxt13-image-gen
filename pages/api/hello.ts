// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  okul:string,
  dogum_tarihi:number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Enes Polat',okul:'Karadeniz Teknik Üniversitesi',dogum_tarihi:1985 })
}
