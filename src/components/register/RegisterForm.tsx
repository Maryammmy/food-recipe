import { registerInputs } from "../../data/registerData";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function RegisterForm() {
  return (
    <form>
      <div className="flex flex-col md:flex-row flex-wrap gap-3">
        {registerInputs.map((input, index) => (
          <div
            key={index}
            className={`flex items-center bg-gray-100 py-3 gap-2 rounded-md px-2 focus-within:border focus-within:border-primary ${
              input.type === "file"
                ? "w-full bg-[#f1fff0] border border-dashed border-primary"
                : "md:flex-[0_0_49%]"
            }`}
          >
            {input.type === "file" ? (
              <label
                htmlFor={input.name}
                className="w-full py-1 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  {input.icon}
                  <p className="text-[#494949]  font-medium">
                    Drag & Drop or choose an image to upload
                  </p>
                </div>
                <input
                  id={input.name}
                  name={input.name}
                  type="file"
                  className="hidden"
                />
              </label>
            ) : (
              <>
                <span>{input.icon}</span>
                <Input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full bg-transparent outline-none"
                />
              </>
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
