import * as yup from "yup";

const requiredString = "Обязательное поле";
const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validationSchema = yup.object({
  name: yup.string().required(requiredString),
  lastName: yup.string().required(requiredString),
  address: yup.string().required(requiredString),
  email: yup
    .string()
    .required(requiredString)
    .matches(emailRegex, "Введите корректный email"),
  telegram: yup.string().required(requiredString),
  patronymic: yup.string().required(requiredString),
  phone: yup
    .string()
    .required(requiredString)
    .matches(phoneRegex, "Введите корректный российский номер телефона"),
});
