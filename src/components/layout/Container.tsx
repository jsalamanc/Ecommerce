import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import useDataFetch from '@/hook/useDataFetch';
import { WhatsappBtn } from '@/components/layout/WhatsappBtn';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
};
export const Container = ({ children }: ContainerProps) => {
  useDataFetch('/configuracion-general');
  const data = useSelector(
    (state: RootState) => state?.generalConfig?.general_notification
  );
  return (
    <>
      <Head>
        <title>Platzi Commerce</title>
      </Head>
      <header className='bg-white'>
        {data?.is_active && (
          <div className='p-1 bg-slate-800 text-center text-slate-100'>
            {data.message}
          </div>
        )}
        <div className='m-auto container'>
          <div className='p-7 flex justify justify-between items-center'>
            <div className='bi bi-search text-xl' />
            <span className='font-semibold select-none'>Platzi Commerce</span>
            <div className='flex gap-3'>
              <div className='bi bi-bag text-xl' />
              <div className='bi bi-person-circle text-xl' />
            </div>
          </div>
          <nav className='pb-5 hidden lg:flex justify-center'>
            <ul className='flex gap-5'>
              <li>
                <Link href='/?category=polos'>Polos</Link>
              </li>
              <li>
                <Link href='/?category=camisas'>Camisas</Link>
              </li>
              <li>
                <Link href='/?category=camisetas'>Camisetas</Link>
              </li>
              <li>
                <Link href='/?category=jeans'>Jeans</Link>
              </li>
              <li>
                <Link href='/?category=pantalones'>Pantalones</Link>
              </li>
              <li>
                <Link href='/?category=buzos-y-chaquetas'>
                  Buzos y Chaquetas
                </Link>
              </li>
              <li>
                <Link href='/?category=jogger'>Jogger</Link>
              </li>
              <li>
                <Link href='/?category=bermudas'>Bermudas</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <WhatsappBtn />
    </>
  );
};
