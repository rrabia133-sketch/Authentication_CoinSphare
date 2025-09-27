import Axios from "../Axios";

const USER_URL = "/user";

export const signinUser = async ({ password, email }) => {
  try {
    const response = await Axios.post(`${USER_URL}/signin`, {
      password,
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signupUser = async ({ password, email, firstName, lastName }) => {
  try {
    const response = await Axios.post(`${USER_URL}/signup`, {
      password,
      email,
      firstName,
      lastName,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const sendverificationMail = async ({ email }) => {
  try {
    const response = await Axios.post(`${USER_URL}/send-verification-mail`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
