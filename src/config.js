import axios from "axios"

export const axiosInstance = axios.create({
  baseURL = "https://myblog-api-nine.vercel.app/"
})
