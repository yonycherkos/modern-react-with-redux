import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID dfa38c5f453ae618d4443f0fd6d723520cc6719f0d0293de8db9b33ddff2e27b"
  }
});
