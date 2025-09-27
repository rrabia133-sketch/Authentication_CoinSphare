const USER_URL = "/user";

export const signinUser = async ({ password, emial }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signin`);
    console.log("data from backend", data);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
