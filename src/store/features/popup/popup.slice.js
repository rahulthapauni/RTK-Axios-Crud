import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	employeePopup: false,
	deletePopup: false,
};
export const popupSlice = createSlice({
	name: "popup",
	initialState,
	reducers: {
		openEmployeePopup: (state, action) => {
			//open form popup for creating and updating
			//agar updating kar rhe h toh apan detail pass karenge payload me and woh detail wala formPopup open hoga warna empty form popup open hoga for new user

			state.employeePopup = action.payload ?? true;
		},
		closeEmployeePopup: (state, action) => {
      state.employeePopup = false;
      
		},
		openDeletePopup: (state, action) => {
			state.deletePopup = action.payload ?? true;
		},
		closeDeletePopup: (state, action) => {
			state.deletePopup = false;
		},
	},
});

export const {
	openEmployeePopup,
	closeEmployeePopup,
	openDeletePopup,
	closeDeletePopup,
} = popupSlice.actions;

export default popupSlice.reducer;
