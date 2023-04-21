import {
  ErrorProps,
  ValuesFormProps,
} from '@/types/components/layout/newsletter.types';
import { FormikHelpers } from 'formik';

export const validate = (values: ValuesFormProps) => {
  const errors: ErrorProps = {};
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Correo invalido!';
  }
  return errors;
};

export const submit = async (
  values: ValuesFormProps,
  actions: FormikHelpers<ValuesFormProps>
) => {
  setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));
  }, 11000);
  actions.setSubmitting(false);
};
