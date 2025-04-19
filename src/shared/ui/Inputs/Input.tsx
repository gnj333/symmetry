import { ChangeEvent } from "react";
import { Error, StyledInput, Wrapper } from "./styled";

export type InputProps = {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  errorMessage?: string;
  placeholder?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

export const Input = ({
  value,
  onChange,
  errorMessage = "",
  placeholder,
  inputProps,
}: InputProps) => (
  <Wrapper>
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e, e.target.value)}
      {...inputProps}
      autoComplete={"off"}
    />
    {errorMessage && <Error>{errorMessage}</Error>}
  </Wrapper>
);
