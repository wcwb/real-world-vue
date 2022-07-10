import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/wcwb/real-world-vue",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEventById(id: number) {
    return apiClient.get("/events/" + id);
  },
};
