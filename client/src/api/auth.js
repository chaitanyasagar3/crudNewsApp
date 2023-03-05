import axios from "./axios";
import { SignInPage } from "../components/Authentication/SignInPage";
export const login = async (username, password) => {
  const response = await axios.post(
    "/login",
    { username, password },
    {
      headers: { "Content-Type": "application/JSON" },
    }
  );
  return response.data;
};

export const signup = async (username, password) => {
  const response = await axios.post(
    "/add-user",
    { username, password },
    {
      headers: { "Content-Type": "application/JSON" },
    }
  );
  return response.data;
};
