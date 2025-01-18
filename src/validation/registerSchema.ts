import * as Yup from "yup";

export const registerSchema = Yup.object({
  userName: Yup.string()
    .min(4, "The userName must be at least 4 characters.")
    .max(8, "The userName may not be greater than 8 characters.")
    .matches(
      /^[a-zA-Z]+\d+$/,
      "The userName must contain characters and end with numbers without spaces."
    )
    .required("UserName is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required."),
  country: Yup.string().required("Country is required."),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "The phone number must contain only digits.")
    .required("Phone number is required."),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "The password must include at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long."
    )
    .required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "The confirmPassword and password fields must match."
    )
    .required("Confirm password is required."),
  profileImage: Yup.mixed(),
});
