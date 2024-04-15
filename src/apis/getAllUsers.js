import axios from "axios";
import { backend_url } from "../constant";

export default axios.create({
  baseURL: backend_url,
});
