import React from 'react';
import { Formik, Form, Field } from 'formik';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import {
  validate,
  submit,
} from '@/components/views/home/modules/Newsletter.module';

export const Newsletter = () => {
  const data = useSelector((state: RootState) => state?.dataHome?.newsletter);

  return (
    <>
      {data?.title && data.description && (
        <section className='py-32 px-3 bg-gray-100'>
          <div className='m-auto container flex flex-wrap lg:flex-nowrap justify-center gap-5 justify-beetwen'>
            <div className='mb-4 text-center lg:text-left lg:w-3/6'>
              <p className='font-semibold text-2xl'>{data.title}</p>
              <p className='text-md'>{data.description}</p>
            </div>
            <Formik
              initialValues={{
                email: '',
              }}
              validate={validate}
              onSubmit={submit}
            >
              {({ errors, touched }) => (
                <Form className='w-full lg:w-3/6'>
                  <div className='flex flex-col items-center lg:flex-row'>
                    <div className='w-full flex justify-center lg:block lg:w-[70%] relative mb-8 lg:mb-0'>
                      <Field
                        className='w-full md:w-96 lg:w-full p-3 border-2 border-gray-600 outline-none'
                        id='email'
                        name='email'
                        placeholder='Correo Electronico'
                      />
                      {errors.email && touched.email && (
                        <p className='absolute left-0 bottom-[-1.7rem]'>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <button
                      type='submit'
                      className='h-full border-2 border-black flex justify-center w-full md:w-96 lg:w-[30%] lg:w-auto p-3 bg-black uppercase text-white'
                    >
                      <p>{data.text_button}</p>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      )}
    </>
  );
};
