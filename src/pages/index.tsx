import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { IndexProps } from '@/types/page/index.types';
import { setData } from '@/redux/reducer';
import { useDispatch } from 'react-redux';
import { MenSection } from '@/components/views/home/MenSection';
import { HeroSection } from '@/components/views/home/HeroSection';
import { Newsletter } from '@/components/views/home/Newsletter';
import { GetServerSideProps } from 'next';

export default function Home(props: IndexProps) {
  const [data, setDataset] = useState<IndexProps>(undefined);

  const dispatch = useDispatch();
  useEffect(() => {
    setDataset(props);
    dispatch(setData(data));
  }, [props, data, dispatch]);
  if (data?.message === 'Error!') {
    return <div>Error Interno!</div>;
  }
  if (!data) {
    return <div>cargando...</div>;
  }
  return (
    <Container>
      <HeroSection />
      <MenSection />
      <section className='py-5 flex justify-center bg-gray-200'>
        <div>
          <p className='uppercase text-gray-500 text-sm mb-3'>
            SÍGUENOS EN REDES
          </p>
          <div className='flex justify-center gap-3'>
            <i className='cursor-pointer text-gray-800 bi bi-instagram' />
            <i className='cursor-pointer text-gray-800 bi bi-linkedin' />
            <i className='cursor-pointer text-gray-800 bi bi-tiktok' />
            <i className='cursor-pointer text-gray-800 bi bi-youtube' />
          </div>
        </div>
      </section>
      <Newsletter />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const domainName = context?.req?.headers?.host?.includes('localhost')
    ? `http://${context.req.headers.host}`
    : `https://${context.req.headers.host}`;
  try {
    const res = await fetch(`${domainName}/api`);
    const data = await res.json();
    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR: ', error);
    return {
      props: {
        message: 'Error!',
      },
    };
  }
};
