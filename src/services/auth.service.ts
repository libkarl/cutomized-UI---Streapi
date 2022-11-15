import axios from "axios";

const API_URL = "http://localhost:1337";

export const register = (
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password: string
) => {
  return axios
    .post(API_URL + "/api/auth/local/register", {
      username: username,
      email: email,
      password: password,
    })
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
};

export const login = (identifier: string, password: string) => {
  return axios
    .post(API_URL + "/api/auth/local", {
      identifier,
      password,
    })
    .then(async (response) => {
      const roleObject = await axios.get(
        API_URL + "/api/users/me?populate=deep",
        {
          headers: {
            authorization: `Bearer ${response.data.jwt}`,
          },
        }
      );
      response.data.user.jwt = response.data.jwt;
      response.data.user.roles = [roleObject.data.role.name];
      console.log(JSON.stringify(response.data));
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
