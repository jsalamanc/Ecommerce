import React from 'react';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const WhatsappBtn = () => {
  const data = useSelector((state: RootState) => state?.generalConfig.whatsapp);

  return (
    <>
      {data?.phone && (
        <div className='fixed bottom-8 right-8 w-14 h-14'>
          <div className='relative flex items-center justify-center h-full w-full'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75' />
            <a
              href={`https://wa.me/${`57${data?.phone}`}?text=${data?.message}`}
              target='_blank'
              role='button'
              className='relative flex items-center justify-center inline-flex rounded-full h-14 w-14 bg-[#25d366]'
              rel='noreferrer'
            >
              <i className='text-white text-2xl bi bi-whatsapp' />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
