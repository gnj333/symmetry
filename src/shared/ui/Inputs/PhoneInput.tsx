import { ChangeEvent } from "react";
import { Error, Wrapper } from "./styled";
import styled from "styled-components";
import InputMask, { Props as InputMaskProps } from "react-input-mask";

const StyledInput = styled(InputMask)`
  background-color: white;
  width: 50%;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  color: black;
`;

export type PhoneInputProps = Omit<
  InputMaskProps,
  "mask" | "onChange" | "value" | "children"
> & {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  errorMessage?: string;
  placeholder?: string;
  name?: string;
};

export const PhoneInput = ({
  value,
  onChange,
  errorMessage = "",
  placeholder = "+7 (___) ___-__-__",
  name,
  ...inputProps
}: PhoneInputProps) => {
  return (
    <Wrapper>
      <StyledInput
        mask="+7 (999) 999-99-99"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e, e.target.value)}
        name={name}
        {...inputProps}
        autoComplete="off"
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </Wrapper>
  );
};
