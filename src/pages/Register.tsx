import RegisterIcon from "../assets/images/loginLogo.png";
import Image from "../components/ui/Image";
import { Link } from "react-router-dom";
import RegisterForm from "../components/register/RegisterForm";

export default function Register() {
  return (
    <div className="bg-no-repeat bg-cover h-screen w-full bg-image">
      <div className=" flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <div className="flex justify-center items-center">
            <Image
              imageUrl={RegisterIcon}
              alt="RegisterIcon"
              className="w-1/2"
            />
          </div>
          <div>
            <h1 className="text-[#494949] text-2xl font-bold">Register</h1>
            <p className="text-secondary font-medium py-2">
              Welcome Back! Please enter your details
            </p>
            <RegisterForm />
            <div className="flex justify-end items-center py-4">
              <Link className="text-primary font-medium" to="/login">
                Login Now?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
