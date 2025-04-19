import { Form } from "formik";
import {
  ButtonWrapper,
  FormCategory,
  FormWrapper,
  Label,
  Total,
  TotalPrice,
} from "./styled";
import { Button } from "../../../shared/ui/Button";
import { FormInput } from "../../../shared/ui/Inputs/FormInput";
import { FormPhoneInput } from "../../../shared/ui/Inputs/FormPhoneInput";
import { sendCheckoutFx } from "../../../shared/api";
import { useUnit } from "effector-react";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { scrollToSymmetry } from "../../../shared/refs/Refs";

type Props = {
  total?: number;
};

export const FormView = ({ total }: Props) => {
  const isLoading = useUnit(sendCheckoutFx.pending);
  return (
    <Form>
      <FormWrapper>
        <FormCategory>
          <Label>Имя</Label>
          <FormInput name="name" placeholder={"Введите ваше имя"} />
        </FormCategory>
        <FormCategory>
          <Label>Фамилия</Label>
          <FormInput name={"lastName"} placeholder={"Введите вашу фамилию"} />
        </FormCategory>
        <FormCategory>
          <Label>Отчество</Label>
          <FormInput
            name={"patronymic"}
            placeholder={"Введите ваше отчество"}
          />
        </FormCategory>
        <FormCategory>
          <Label>Никнейм в телеграм</Label>
          <FormInput
            name={"telegram"}
            placeholder={"Введите ваш никнейм в телеграме"}
          />
        </FormCategory>
        <FormCategory>
          <Label>Адрес</Label>
          <FormInput name={"address"} placeholder={"Введите ваш адрес"} />
        </FormCategory>
        <FormCategory>
          <Label>Номер телефона</Label>
          <FormPhoneInput name={"phone"} />
        </FormCategory>
        <FormCategory>
          <Label>Email</Label>
          <FormInput name={"email"} placeholder={"Введите ваш Email"} />
        </FormCategory>
        <ButtonWrapper>
          {!isLoading ? (
            <Button type="submit" onClick={() => scrollToSymmetry()}>
              заказать
            </Button>
          ) : (
            <Spinner />
          )}
          <TotalPrice>
            <Total>итого</Total>
            {total} руб
          </TotalPrice>
        </ButtonWrapper>
      </FormWrapper>
    </Form>
  );
};
