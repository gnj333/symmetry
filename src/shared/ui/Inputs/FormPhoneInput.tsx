import { FastField, FieldProps } from "formik";
import { PhoneInput } from "./PhoneInput";

export interface Props {
  name: string;
  placeholder?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const FormPhoneInput = (props: Props) => (
  <FastField name={props.name}>
    {({ field, form, meta }: FieldProps) => (
      <PhoneInput
        placeholder={props.placeholder}
        name={field.name}
        value={field.value}
        onChange={(e) => {
          const value = e.target.value;
          form.setFieldValue(field.name, value);
        }}
        errorMessage={(meta.touched && meta.error) || ""}
        {...props.inputProps}
      />
    )}
  </FastField>
);
