import axios from "axios";

export const FetchExample = async () => {
  try {
    const { data } = Axios.get("/");
    return data;
  } catch (error) {
    //console.log(error);
  }
};
