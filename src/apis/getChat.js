import axios from "./axios.js";

const getChat = async () => {
  try {
    const { data } = await axios.get("/test_data");
    return data;
  } catch (e) {
    alert(e.message);
  }
};

export default getChat;