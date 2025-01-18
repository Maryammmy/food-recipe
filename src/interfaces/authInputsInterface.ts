import { ReactNode } from "react";

export interface IAuthInput {
  icon: ReactNode;
  type: string;
  placeholder?: string;
  name: keyof RegisterInputs;
}
export type RegisterInputs = {
  userName: string;
  email: string;
  country: string;
  phoneNumber: string;
  profileImage?: FileList;
  password: string;
  confirmPassword: string;
};
