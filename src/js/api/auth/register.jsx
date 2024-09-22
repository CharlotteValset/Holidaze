import { API_Base_Url, API_Auth, API_Register_Url } from "../constants";
import { authFetch } from "../authFetch";

export const register = async (name, email, password, profileImg) => {
  const response = await authFetch(API_Base_Url + API_Auth + API_Register_Url, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      avatar: profileImg,
    }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Could not register the account");
};
