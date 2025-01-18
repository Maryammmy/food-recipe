import { baseAPI, baseAPIForm } from ".";
import { LoginNameInputs } from "../interfaces/authInputsInterface";

export const registerApi = (payload: FormData) => {
  const response = baseAPIForm.post("Users/Register", payload);
  return response;
};
export const loginApi = (payload: LoginNameInputs) => {
  const response = baseAPI.post("Users/Login", payload);
  return response;
};
