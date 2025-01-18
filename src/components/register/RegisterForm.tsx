import { SubmitHandler, useForm } from "react-hook-form";
import { registerInputs } from "../../data/registerData";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { RegisterInputs } from "../../interfaces/authInputsInterface";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation/registerSchema";
import InputErrorMessage from "../ui/InputErrorMessage";
import { registerApi } from "../../services/authService";
import { convertToFormData } from "../../utils/convertToFormData";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      const formData = convertToFormData(data);
      const response = await registerApi(formData);
      console.log(response);
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row flex-wrap gap-3">
        {registerInputs.map((input, index) => (
          <div
            key={index}
            className={`${
              input.type === "file" ? "w-full" : "md:flex-[0_0_49%]  "
            }`}
          >
            <div
              className={`flex flex-col md:flex-row items-center rounded-md py-3 gap-2  px-2 focus-within:border focus-within:border-primary ${
                input.type === "file"
                  ? "bg-[#f1fff0] border border-dashed border-primary"
                  : "bg-gray-100"
              }`}
            >
              {input.type === "file" ? (
                <label
                  htmlFor={input.name}
                  className="w-full py-1 cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    {input.icon}
                    <p className="text-[#494949] font-medium">
                      Drag & Drop or choose an image to upload
                    </p>
                  </div>
                  <Input
                    id={input.name}
                    {...register(input.name)}
                    type="file"
                    className="hidden"
                  />
                </label>
              ) : (
                <>
                  <span>{input.icon}</span>
                  <Input
                    {...register(input.name)}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full bg-transparent outline-none"
                  />
                </>
              )}
            </div>
            {errors[input.name] && (
              <InputErrorMessage msg={errors[input.name]?.message} />
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full bg-primary py-3 rounded-md text-white font-bold"
        >
          Register
        </Button>
      </div>
    </form>
  );
}
