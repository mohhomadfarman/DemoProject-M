import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_APP_API_BASE } from "../confige";
const apiBase = REACT_APP_API_BASE;

export const axiosInstance = axios.create({
  baseURL: apiBase,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstances = axios.create({
  baseURL: apiBase,
  headers: {
    "Content-Type": "application/json",
    type: "formData",
  },
});

export const acttractionAction = createAsyncThunk(
  "acttractionAction",
  async (payload) => {
    const response = await axiosInstance.get(
      `/attractions?populate=*`,
      payload
    );
    return response.data;
  }
);
export const acttractionActionsingle = createAsyncThunk(
  "acttractionActionsingle",
  async (payload) => {
    const response = await axiosInstance.get(
      `/attractions/${payload.id}?populate=*`
    );
    return response.data;
  }
);
