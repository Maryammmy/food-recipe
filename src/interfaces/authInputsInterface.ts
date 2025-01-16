import { ReactNode } from "react";

export interface IAuthInput {
  icon: ReactNode;
  type: string;
  placeholder?: string;
  name: string;
}
