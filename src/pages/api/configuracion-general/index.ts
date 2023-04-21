// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPageBySlug } from '@/lib/provider/cosmic';
import {
  GeneralConfigProps,
  CleanDataProps,
} from '@/types/api/configuracion-general/GeneralConfig.types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CleanDataProps>
) {
  switch (req.method) {
    case 'GET':
      try {
        const data: GeneralConfigProps =
          (await getPageBySlug(
            'configuracion-general',
            `
          metadata,
        `,
            {}
          )) || {};
        const cleanData = {
          ...data.metadata,
        };
        res.status(200).json(cleanData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
      break;

    default:
      break;
  }
}
