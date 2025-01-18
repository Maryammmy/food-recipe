import { LoginInput } from "../interfaces/authInputsInterface";
import { Mail, Lock } from "lucide-react";

export const loginInputs: LoginInput[] = [
  {
    type: "email",
    placeholder: "Enter your email",
    name: "email",
    icon: <Mail size={20} className="text-secondary" />,
  },
  {
    type: "password",
    placeholder: "Enter your password",
    name: "password",
    icon: <Lock size={20} className="text-secondary" />,
  },
];
