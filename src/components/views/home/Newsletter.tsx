import React from 'react';
import { Formik, Form, Field } from 'formik';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

type ErrorProps = {
  email?: string;
};
export const Newsletter = () => {
  const data = useSelector((state: RootState) => state?.dataHome?.newsletter);

  const validate = (values: any) => {
    const errors: ErrorProps = {};
    if (!values.email) {
      errors.email = 'Requerido';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Correo invalido!';
    }
    return errors;
  };
  return (
    <>
      {data?.title && data.description && (
        <section className='py-5 bg-gray-100'>
          <div className='m-auto container flex flex-wrap justify-beetwen'>
            <div>
              <p className='font-semibold text-xl'>{data.title}</p>
              <p className='text-sm'>{data.description}</p>
            </div>
            <Formik
              initialValues={{
                email: '',
              }}
              validate={validate}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                // eslint-disable-next-line no-alert
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className='flex flex-col lg:flex-row'>
                    <div className='relative mb-8'>
                      <Field
                        className='p-2 border-2 border-gray-600 outline-none'
                        id='email'
                        name='email'
                        placeholder='Correo Electronico'
                      />
                      {errors.email && touched.email && (
                        <p className='absolute'>{errors.email}</p>
                      )}
                    </div>
                    <button
                      type='submit'
                      className='w-4/5 lg:w-auto p-2 bg-black uppercase text-white'
                    >
                      {isSubmitting ? 'cargando..' : data.text_button}
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
