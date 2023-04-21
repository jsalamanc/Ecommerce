import React from 'react';
import Link from 'next/link';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const MenSection = () => {
  const data: any = useSelector(
    (state: RootState) => state?.dataHome?.section_two?.banner_products
  );

  const fullWidth = (total: number | undefined, index: number) => {
    if (data?.length && total) {
      const result = total % 2 === 0;
      if (result === false && data?.length - 1 === index) {
        return true;
      }
    }
    return false;
  };
  return (
    <>
      {data?.length > 0 && (
        <section className='flex flex-wrap'>
          {data?.map((item: any, i: number) => (
            <div
              key={i}
              className={`${
                item?.background_img?.imgix_url ? 'block' : 'hidden'
              } ${
                fullWidth(data?.length, i) ? 'w-full' : 'w-full lg:w-2/4'
              } p-5 h-80 flex items-center bg-cover bg-no-repeat bg-center`}
              style={{
                backgroundImage: `url('${item?.background_img?.imgix_url}')`,
              }}
            >
              <div className='m-auto container'>
                <div>
                  <h1 className='select-none text-white uppercase font-semibold text-4xl md:text-5xl mb-5'>
                    {item?.title}
                  </h1>
                  <Link
                    href={`/tienda?categoria=${item.category}&gender=${item.gender}`}
                  >
                    <button className='cursor-pointer transition py-3 border-2 border-white uppercase text-white w-56 hover:bg-white hover:text-black'>
                      {item.text_button}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};
