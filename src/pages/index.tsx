import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Container } from '@/components/layout/Container';
import { IndexProps } from '@/types/page/index.types';
import Link from 'next/link';

export default function Home(data: IndexProps) {
  const [dataServe, setDataServe] = useState<IndexProps | null>(null);
  useEffect(() => {
    setDataServe(data);
  }, [data]);
  console.log(dataServe);
  if (!dataServe) {
    <div>cargando...</div>;
  }
  const fullWidth = (total: number, index: number) => {
    const result = total % 2 == 0;
    if (
      result === false &&
      dataServe?.section_two?.banner_products?.length - 1 === index
    ) {
      return true;
    }
    return false;
  };
  return (
    <Container>
      <section className="relative h-[90vh]">
        <div className="absolute left-0 top-0 bottom-0 right-0 bg-yellow-900/[.20]">
          <div className="m-auto container h-full flex items-center">
            {dataServe?.principal_section?.title && (
              <div className="z-10">
                <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-7xl mb-5">
                  {dataServe?.principal_section?.title}
                </h1>
                <p className="text-white lg:text-2xl mb-5">
                  {dataServe?.principal_section?.descripction}
                </p>
                {dataServe?.principal_section?.text_button_one ||
                dataServe?.principal_section?.text_button_two ? (
                  <div className="flex flex-wrap gap-5">
                    {dataServe?.principal_section?.text_button_one && (
                      <Link href={`/tienda?gender=${'example'}`}>
                        <button className="cursor-pointer transition py-3 border-2 border-white uppercase text-white w-56 hover:bg-white hover:text-black">
                          {dataServe?.principal_section?.text_button_one}
                        </button>
                      </Link>
                    )}
                    {dataServe?.principal_section?.text_button_two && (
                      <Link href={`/tienda?gender=${'example'}`}>
                        <button className="cursor-pointer transition py-3 border-2 border-white uppercase text-white w-56 hover:bg-white hover:text-black">
                          {dataServe?.principal_section?.text_button_two}
                        </button>
                      </Link>
                    )}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
        {dataServe?.principal_section?.background?.imgix_url && (
          <ReactPlayer
            className="ReactPlayer"
            url={dataServe.principal_section.background.url}
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover'
            }}
          />
        )}
      </section>
      <section className="flex flex-wrap">
        {dataServe?.section_two?.banner_products?.map(
          (item: any, i: number) => (
            <div
              key={i}
              className={`${
                item?.background_img?.imgix_url ? 'block' : 'hidden'
              } ${
                fullWidth(dataServe?.section_two?.banner_products?.length, i)
                  ? 'w-full'
                  : 'w-full lg:w-2/4'
              } p-5 h-80 flex items-center bg-cover bg-no-repeat bg-center`}
              style={{
                backgroundImage: `url('${item?.background_img?.imgix_url}')`
              }}
            >
              <div>
                <h1 className="select-none text-white uppercase font-semibold text-4xl md:text-5xl mb-5">
                  {item?.title}
                </h1>
                <Link
                  href={`/tienda?categoria=${item.category}&gender=${item.gender}`}
                >
                  <button className="cursor-pointer transition py-3 border-2 border-white uppercase text-white w-56 hover:bg-white hover:text-black">
                    {item.text_button}
                  </button>
                </Link>
              </div>
            </div>
          )
        )}
      </section>
      <section className="flex justify-center bg-gray-100">
        <div>
          <p>SÍGUENOS EN REDES</p>
          <div>wdsw</div>
        </div>
      </section>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch('http://localhost:3000/api');
  const data = await res.json();
  return {
    props: {
      ...data
    }
  };
}
