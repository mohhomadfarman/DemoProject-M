import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CurrentApi } from "../../config/config";

const token=localStorage.getItem('token')
export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
    "Authorization":token
  },
});

export const axiosInstances = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "multipart/form-data",
    type: "formData",
    "Authorization":token
  },
});



// Login & Signup
export const login = createAsyncThunk("login", async (payload) => {
  const response = await axiosInstance.post(`auth/login`,payload);
  return response.data;
});

// Generet Chat 

export const createChate = createAsyncThunk("createChate", async (payload) => {
  const response = await axiosInstance.post(`createChat`,payload);
  return response.data;
});
export const getMessages = createAsyncThunk("getMessages", async (payload) => {
  const response = await axiosInstance.get(`getMessages/${payload}`);
  return response.data;
});

export const getAllChats = createAsyncThunk("getAllChats", async (payload) => {
  const response = await axiosInstance.get(`/getChats`);
  return response.data;
});

export const BusinessListings = createAsyncThunk("BusinessListings", async (payload) => {
  const response = await axiosInstance.get(`api/place-details/${payload}`);
  return response.data;
});
