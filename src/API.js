import axios from "axios";
const url = "";
export const Content = async () => {
  try {
    let response = await axios.get(`${url}/home`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPosts API ", error);
  }
};
