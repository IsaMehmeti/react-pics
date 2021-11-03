import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8vf2MOU0J1MgJOlM5UIWG68rEOtG4zB9elkQGySuwiQ",
  },
});
