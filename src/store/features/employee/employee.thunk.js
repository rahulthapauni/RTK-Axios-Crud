// all crud thunk
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/config/axios.js";
import { closeDeletePopup } from "../popup/popup.slice.js";
// employee/methodName
export const getEmployees = createAsyncThunk(
	"employee/getEmployees",
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get();
			// console.log(response.data);
			return response.data;
		} catch (err) {
			return rejectWithValue("something went wrong while fetching the users");
		}
	}
);
export const postEmployees = createAsyncThunk(
	"employee/postEmployees",
	async (details, { rejectWithValue, dispatch }) => {
		try {
			const response = await api.post("", details);
			// console.log(response.data);
			//%object me dispatch bhi ata h
			dispatch(getEmployees());
			return response.data;
		} catch (err) {
			return rejectWithValue("something went wrong while saving the employee");
		}
	}
);
//delete user
export const deleteEmployees = createAsyncThunk(
	"employee/deleteEmployees",
	async (id, { rejectWithValue, dispatch }) => {
		try {
			const response = await api.delete(`/${id}`);
			dispatch(closeDeletePopup());
			dispatch(getEmployees());
			return response.data;
		} catch (err) {
			return rejectWithValue("something went wrong while saving the employee");
		}
	}
);
//update user
export const updateEmployees = createAsyncThunk(
	"employee/updateEmployees",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const response = await api.put(`/${data.id}`, data);
			dispatch(closeDeletePopup());
			dispatch(getEmployees());
			return response.data;
		} catch (err) {
			return rejectWithValue("something went wrong while saving the employee");
		}
	}
);
