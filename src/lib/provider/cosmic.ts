import Cosmic from 'cosmicjs';

const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.COSMIC_SLUG,
  read_key: process.env.READ_KEY,
});

export function getPageBySlug(slug: string, props: string, others: any) {
  return new Promise((resolve, reject) => {
    bucket
      .getObjects({
        query: {
          slug,
        },
        props,
        ...others,
      })
      .then((res: any) => {
        resolve(res.objects[0]);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
