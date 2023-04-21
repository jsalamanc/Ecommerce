import { useEffect } from 'react';
import { setData } from '@/redux/reducer/GeneralConfig';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export default async (urlSet: string) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    try {
      // eslint-disable-next-line no-console
      console.log(router.asPath);
      fetch(`${process.env.NEXT_URL_PAGE}/api${urlSet}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('La respuesta de red no fue exitosa');
          }
          return res.json();
        })
        .then((responseData) => {
          dispatch(setData(responseData));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          setData({ message: 'Error!' });
        });
    } catch (error) {
      setData({
        message: 'Error!',
      });
    }
  }, [urlSet, dispatch, router]);
};