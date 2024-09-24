import { API_Base_Url, API_Auth, API_Register_Url } from "../constants";
import { authFetch } from "../authFetch";

export const register = async (name, email, password, profileImgUrl) => {
  const bodyData = {
    name,
    email,
    password,
  };

  if (profileImgUrl) {
    bodyData.avatar = { url: profileImgUrl };
  }

  const response = await authFetch(API_Base_Url + API_Auth + API_Register_Url, {
    method: "POST",
    body: JSON.stringify(bodyData),
  });

  if (response.ok) {
    return await response.json();
  }

  const errorResponse = await response.json();
  console.error("API Error Response:", errorResponse);

  throw new Error(
    errorResponse.errors[0].message || "Could not register the account",
  );
};
