import axios from "axios";

const API_URL = "http://localhost:4285/user/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password, rememberMe) => {
  return axios
    .post(API_URL + "authenticate", { username, password, rememberMe})
    .then((response) => {
      console.log(response);
      if (response.data.AccessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout
};

export default authService;