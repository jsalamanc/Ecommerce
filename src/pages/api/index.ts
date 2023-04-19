// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPageBySlug } from '@/lib/provider/cosmic';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      try {
        const data =
          (await getPageBySlug(
            'home',
            `
          slug,
          metadata,
        `,
            {}
          )) || {};
        console.log(data);
        const cleanData = {
          slug: data.slug,
          ...data.metadata
        };
        res.status(200).json(cleanData);
      } catch (error) {
        console.log(error);
      }
      break;

    default:
      break;
  }
}
