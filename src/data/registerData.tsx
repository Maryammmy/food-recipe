import { Earth, Mail, Phone, User, Lock, Upload } from "lucide-react";
import { IAuthInput } from "../interfaces/authInputsInterface";

export const registerInputs: IAuthInput[] = [
  {
    type: "text",
    placeholder: "UserName",
    name: "userName",
    icon: <User size={20} className="text-secondary" />,
  },
  {
    type: "email",
    placeholder: "Enter your email",
    name: "email",
    icon: <Mail size={20} className="text-secondary" />,
  },
  {
    type: "text",
    placeholder: "Country",
    name: "country",
    icon: <Earth size={20} className="text-secondary" />,
  },
  {
    type: "tel",
    placeholder: "Phone Number",
    name: "phoneNumber",
    icon: <Phone size={20} className="text-secondary" />,
  },
  {
    type: "password",
    name: "password",
    icon: <Lock size={20} className="text-secondary" />,
    placeholder: "Password",
  },
  {
    type: "password",
    name: "confirmPassword",
    icon: <Lock size={20} className="text-secondary" />,
    placeholder: "Confirmpassword",
  },
  {
    type: "file",
    name: "profileImage",
    icon: <Upload className="text-secondary" />,
  },
];
