import { loginInputs } from "../../data/loginData";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function loginForm() {
  return (
    <form>
      <div className="flex flex-col gap-3">
        {loginInputs.map((input, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 py-3 gap-2 rounded-md px-2 focus-within:border focus-within:border-primary"
          >
            <span>{input.icon}</span>
            <Input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              className="w-full bg-transparent outline-none"
            />
          </div>
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
