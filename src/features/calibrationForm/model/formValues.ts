export type FormValues = {
  name: string;
  lastName: string;
  email: string;
  telegram: string;
  patronymic: string;
  phone: string;
  address: string;
};

export const defaultFormValues: FormValues = {
  name: "",
  lastName: "",
  email: "",
  telegram: "",
  patronymic: "",
  phone: "",
  address: "",
};
