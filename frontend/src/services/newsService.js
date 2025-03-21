import axios from "axios";

export const fetchNews = async (filters) => {
  try {
    const response = await axios.post("http://localhost:5000/api/news/search", filters);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
