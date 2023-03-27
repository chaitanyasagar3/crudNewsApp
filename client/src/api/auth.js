import axios from "./axios";

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

export const updatePreferences = async (userId,preferences) => {
  const response = await axios.post("/update-preferences", {userId,preferences},{
    headers: { "Content-Type": "application/JSON" },
  });
  console.log(response.data);
  return response.data;
}