import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-commerce-41fdd/us-central1/api", //api url
});

export default instance;
