// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPageBySlug } from '@/lib/provider/cosmic';
import { CleanDataProps, IndexDataProps } from '@/types/api/Home.types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CleanDataProps>
) {
  switch (req.method) {
    case 'GET':
      try {
        const data: IndexDataProps =
          (await getPageBySlug(
            'home',
            `
          slug,
          metadata,
        `,
            {}
          )) || {};
        const cleanData: CleanDataProps = {
          ...data.metadata,
        };
        res.status(200).json(cleanData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
      break;

    default:
      break;
  }
}
