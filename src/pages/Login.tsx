import loginIcon from "../assets/images/loginLogo.png";
import LoginForm from "../components/login/loginForm";
import Image from "../components/ui/Image";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-no-repeat bg-cover h-screen w-full bg-image">
      <div className=" flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <div className="flex justify-center items-center">
            <Image imageUrl={loginIcon} alt="LoginIcon" className="w-1/2" />
          </div>
          <div>
            <h1 className="text-[#494949] text-2xl font-bold">login</h1>
            <p className="text-secondary font-medium py-2">
              Welcome Back! Please enter your details
            </p>
            <LoginForm />
            <div className="flex justify-between items-center py-4">
              <Link className="text-stone-700 font-medium" to="/register">
                Register Now?
              </Link>
              <Link className="text-primary font-medium" to="/forget-password">
                Forget Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
