import { load } from "../storage/load";
import { API_Key } from "./constants";

export const headers = (hasBody = false) => {
  const headers = new Headers();

  const accessToken = load("accsessToken");

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  if (API_Key) {
    headers.append("X-Noroff-API-Key", API_Key);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
};
