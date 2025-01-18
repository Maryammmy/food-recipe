import { baseAPI, baseAPIForm } from ".";

export const registerApi = (payload: FormData) => {
  const response = baseAPIForm.post("Users/Register", payload);
  return response;
};
export const loginApi = (payload: FormData) => {
  const response = baseAPI.post("Users/Login", payload);
  return response;
};
