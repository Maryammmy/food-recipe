import { RegisterInputs } from "../interfaces/authInputsInterface";

export const convertToFormData = (data: RegisterInputs): FormData => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key as keyof RegisterInputs];
    if (key === "profileImage" && value) {
      // Special handling for the file (profileImage)
      formData.append(key, (value as FileList)[0]); // Assuming it's a FileList
    } else if (value !== undefined && value !== null) {
      // For other fields
      formData.append(key, value as string);
    }
  });

  return formData;
};
