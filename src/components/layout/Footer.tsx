import React from 'react';

export const Footer = () => (
  <footer className='px-2 py-16 bg-black'>
    <div className='m-auto container p-4 lg:p-0 flex flex-col lg:flex-row flex-wrap justify-start xl:justify-around gap-5'>
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
      <div className='mt-5 xl:m-0'>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          INFORMACIÓN DEL SITIO
        </span>
        <div className='mt-3 flex flex-col gap-4 text-xl'>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer text-sm text-white'>
              Política de Tratamiento de Datos Personales
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Políticas de Cambios y Garantías
            </li>
            <li className='cursor-pointer text-sm text-white'>
              SIC - Protección al Consumidor
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Términos y Condiciones
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Política de Privacidad
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Derecho de Retracto
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Reversión del Pago
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Políticas de Envíos
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-5 xl:m-0'>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          INFORMACIÓN DE LA EMPRESA
        </span>
        <div className='mt-3 flex gap-3 text-xl'>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer text-sm text-white'>
              Encuentra tu tienda Polo club
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Nuestra Historia - Polo club Colombia
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Línea de Ética y Transparencia
            </li>
            <li className='cursor-pointer text-sm text-white'>
              ¡Trabaja con Nosotros!
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Gobierno Corporativo
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-5 xl:m-0'>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          AYUDA
        </span>
        <div className='mt-3 flex gap-3 text-xl'>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer text-sm text-white'>
              Derecho de Retracto - Ley 1480 art. 47
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Reversión del Pago
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Solicita una garantía
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Solicita un cambio
            </li>
            <li className='cursor-pointer text-sm text-white'>
              ¿Cómo comprar?
            </li>
            <li className='cursor-pointer text-sm text-white'>
              Preguntas Frecuentes
            </li>
            <li className='cursor-pointer text-sm text-white'>
              PQR´s - Tratamiento de Datos
            </li>
            <li className='cursor-pointer text-sm text-white'>
              PQR´s - Ventas
            </li>
            <li className='cursor-pointer text-sm text-white'>Contáctenos</li>
          </ul>
        </div>
      </div>
      <div className='mt-5 xl:m-0'>
        <span className='select-none text-sm font-semibold uppercase text-white'>
          CATEGORÍAS
        </span>
        <div className='mt-3 text-xl'>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer text-sm font-light text-white'>
              Camisetas tipo polo
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Camisas para hombre
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Camisetas para hombre
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Jeans para hombre
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Pantalones para hombre
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Joggers para hombre
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Bermudas para hombre
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Correas y reatas
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Gorras polo
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Chaquetas y chalecos
            </li>
            <li className='cursor-pointer text-sm font-light text-white'>
              Boxer para hombre
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
