import { loginInputs } from "../../data/loginData";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginNameInputs } from "../../interfaces/authInputsInterface";
import { loginSchema } from "../../validation/loginSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import InputErrorMessage from "../ui/InputErrorMessage";
import { Fragment } from "react/jsx-runtime";
import { loginApi } from "../../services/authService";
import toast from "react-hot-toast";
import { ErrorResponse } from "../../interfaces";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginNameInputs>({
    resolver: yupResolver(loginSchema),
  });
  console.log(errors);
  const onSubmit: SubmitHandler<LoginNameInputs> = async (data) => {
    try {
      const response = await loginApi(data);
      toast.success(response?.data?.message);
    } catch (error) {
      const customError = error as ErrorResponse;
      const message = customError?.response?.data.message;
      if (message) {
        toast.error(message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        {loginInputs.map((input, index) => (
          <Fragment key={index}>
            <div className="flex items-center bg-gray-100 py-3 gap-2 rounded-md px-2 focus-within:border focus-within:border-primary">
              <span>{input.icon}</span>
              <Input
                {...register(input.name)}
                type={input.type}
                placeholder={input.placeholder}
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors[input.name] && (
              <InputErrorMessage msg={errors[input.name]?.message} />
            )}
          </Fragment>
        ))}
        <Button
          type="submit"
          className="w-full bg-primary py-3 rounded-md text-white font-bold"
        >
          Login
        </Button>
      </div>
    </form>
  );
}
