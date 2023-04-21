import React from 'react';

export const Footer = () => (
  <footer className='px-2 py-4 bg-black'>
    <div className='m-auto container flex'>
      <div>
        <span className='select-none font-light text-white'>
          Platzi Commerce
        </span>
        <div className='mt-3 flex gap-3 text-xl'>
          <i className='cursor-pointer text-white bi bi-instagram' />
          <i className='cursor-pointer text-white bi bi-linkedin' />
          <i className='cursor-pointer text-white bi bi-tiktok' />
          <i className='cursor-pointer text-white bi bi-youtube' />
        </div>
      </div>
      <div>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          INFORMACIÓN DEL SITIO
        </span>
        <div className='mt-3 flex gap-3 text-xl'>
          <ul>
            <li className='text-sm text-white'>erfger</li>
          </ul>
        </div>
      </div>
      <div>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          INFORMACIÓN DE LA EMPRESA
        </span>
        <div className='mt-3 flex gap-3 text-xl'>
          <ul>
            <li className='text-sm text-white'>erfger</li>
          </ul>
        </div>
      </div>
      <div>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          AYUDA
        </span>
        <div className='mt-3 flex gap-3 text-xl'>
          <ul>
            <li className='text-sm text-white'>erfger</li>
          </ul>
        </div>
      </div>
      <div>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          CATEGORÍAS
        </span>
        <div className='mt-3 flex gap-3 text-xl'>
          <ul>
            <li className='text-sm text-white'>erfger</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
