import { ReactNode } from "react";

export interface RegisterInput {
  icon: ReactNode;
  type: string;
  placeholder?: string;
  name: keyof RegisterNameInputs;
}
export interface LoginInput {
  icon: ReactNode;
  type: string;
  placeholder?: string;
  name: keyof LoginNameInputs;
}
export type RegisterNameInputs = {
  userName: string;
  email: string;
  country: string;
  phoneNumber: string;
  profileImage?: FileList;
  password: string;
  confirmPassword: string;
};
export type LoginNameInputs = {
  email: string;
  password: string;
};
