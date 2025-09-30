import Axios from "../Axios";

const USER_URL = "/user";

// this functio is for signin user
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

// this function is for signup user
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

// this function is for sending verification mail to user
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

// this function is for verifying email address during signup
export const verifyEmailAddressSignup = async ({ token }) => {
  try {
    const response = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
      token,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// this function is for sending forgot password mail to user
export const sendforgotMail = async ({ email }) => {
  try {
    const response = await Axios.post(`${USER_URL}/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// this function is for verifying email address during forgot password
export const verifyForgotToken = async ({ token }) => {
  try {
    const response = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
      token,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
