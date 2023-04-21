import React from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const HeroSection = () => {
  const data: any = useSelector(
    (state: RootState) => state?.dataHome?.principal_section
  );
  return (
    <>
      {data.background.imgix_url && data.background.url && (
        <section className='relative h-[90vh]'>
          <div className='absolute left-0 top-0 bottom-0 right-0 bg-yellow-900/[.20]'>
            <div className='m-auto container h-full flex items-center'>
              {data?.title && (
                <div className='z-10'>
                  <h1 className='font-bold text-white text-4xl md:text-5xl lg:text-7xl mb-5'>
                    {data?.title}
                  </h1>
                  <p className='text-white lg:text-2xl mb-5'>
                    {data?.descripction}
                  </p>
                  {data?.text_button_one || data?.text_button_two ? (
                    <div className='flex flex-wrap gap-5'>
                      {data?.text_button_one && (
                        <Link href={`/tienda?gender=${'example'}`}>
                          <button className='cursor-pointer transition py-3 border-2 border-white uppercase text-white w-56 hover:bg-white hover:text-black'>
                            {data?.text_button_one}
                          </button>
                        </Link>
                      )}
                      {data?.text_button_two && (
                        <Link href={`/tienda?gender=${'example'}`}>
                          <button className='cursor-pointer transition py-3 border-2 border-white uppercase text-white w-56 hover:bg-white hover:text-black'>
                            {data?.text_button_two}
                          </button>
                        </Link>
                      )}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
          {data?.background?.imgix_url && (
            <ReactPlayer
              className='ReactPlayer'
              url={data.background.url}
              width='100%'
              height='100%'
              playing
              loop
              style={{
                objectFit: 'cover',
              }}
            />
          )}
        </section>
      )}
    </>
  );
};
