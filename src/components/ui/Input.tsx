import { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement>;
export default function Input({ ...rest }: IProps) {
  return <input {...rest} />;
}
