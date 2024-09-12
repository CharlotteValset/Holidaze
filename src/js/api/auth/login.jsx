import { API_Base_Url, API_Auth, API_Login_Url } from "../constants";
import { save } from "../../storage/save";
import { authFetch } from "../fetch";

export const login = async (email, password) => {
  const response = await authFetch(API_Base_Url + API_Auth + API_Login_Url, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("accessToken", accessToken);
    save("profile", profile);
    return profile;
  }

  throw new Error("Could not log in");
};
