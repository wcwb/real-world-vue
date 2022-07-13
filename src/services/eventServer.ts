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
  getEvents(perPage: number, page: number) {
    return apiClient.get("/events/?_limit=" + perPage + "&_page=" + page);
  },
  getEventById(id: number) {
    return apiClient.get("/events/" + id);
  },
};
