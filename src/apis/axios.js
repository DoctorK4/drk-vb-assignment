import axios from "axios";

const baseURL = "http://test.vanillabridge.com";

const Instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Instance;
