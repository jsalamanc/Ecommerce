import { useEffect } from 'react';
import { setData } from '@/redux/reducer/GeneralConfig';
import { useDispatch } from 'react-redux';

/**
 * Usage:
 * useDataFetch('/api/url_send);
 */
export default async (urlSet: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const domainName = window.location.hostname.includes('localhost')
        ? `http://localhost:${window.location.port}`
        : `https://${window.location.hostname}`;
      // eslint-disable-next-line no-console
      fetch(`${domainName}${urlSet}`)
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
  }, [urlSet, dispatch]);
};
