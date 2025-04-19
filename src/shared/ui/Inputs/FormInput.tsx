import { FastField, FieldProps } from "formik";
import { Input } from "./Input";

export interface Props {
  name: string;
  placeholder?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const FormInput = (props: Props) => (
  <FastField name={props.name}>
    {({ field, meta }: FieldProps) => (
      <Input
        placeholder={props.placeholder}
        inputProps={{ ...props.inputProps, name: field.name }}
        value={field.value}
        onChange={field.onChange}
        errorMessage={(meta.touched && meta.error) || ""}
      />
    )}
  </FastField>
);
