import Axios from "../Axios";

export const FetchExample = async () => {
  try {
    const { data } = Axios.get("/");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
