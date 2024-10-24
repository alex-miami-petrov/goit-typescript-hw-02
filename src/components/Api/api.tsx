import axios from "axios";
import { UnsplashResponse } from "./api.types";

const API_KEY = "GSuz9ityvF_8tNnTGG9QC0qd31RnLO7SJT4XnO6OPnA";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async <T extends UnsplashResponse>(
  query: string,
  page: number = 1
): Promise<T> => {
  try {
    const response = await axios.get<T>(BASE_URL, {
      params: {
        query,
        per_page: 12,
        page,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
