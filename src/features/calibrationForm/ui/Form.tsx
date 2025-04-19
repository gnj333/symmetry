import { Formik } from "formik";
import { defaultFormValues, submitForm, validationSchema } from "../model";
import { FormView } from "./FormView";

type Props = {
  total?: number;
};

export const Form = ({ total }: Props) => {
  return (
    <Formik
      initialValues={defaultFormValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      <FormView total={total} />
    </Formik>
  );
};
