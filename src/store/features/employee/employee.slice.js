import { createSlice } from "@reduxjs/toolkit";
import {
	getEmployees,
	postEmployees,
	updateEmployees,
} from "./employee.thunk.js";
const initialState = {
	employees: [],
	loading: false,
	error: null,
};

//for crud
export const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		highlightedOnly: (state, action) => {
			console.log("niccccc");
			state.employees = state.employees.filter(
				(item) => item.isHighlighted === true
			);
		},
	},
	extraReducers: (builder) => {
		//======getEmployee====
		builder.addCase(getEmployees.pending, (state, action) => {
			state.error = null;
			state.loading = true;
		});
		builder.addCase(getEmployees.fulfilled, (state, action) => {
			state.employees = action.payload;
			state.loading = false;
		});
		builder.addCase(getEmployees.rejected, (state, action) => {
			state.error = action?.payload;
			state.loading = false;
		});
		//======postEmployee====
		builder.addCase(postEmployees.pending, (state, action) => {
			state.error = null;
			state.loading = true;
		});
		builder.addCase(postEmployees.fulfilled, (state, action) => {
			state.loading = false;
		});
		builder.addCase(postEmployees.rejected, (state, action) => {
			state.loading = false;
			state.error = action?.payload;
		});
		//======updateEmployee====
		builder.addCase(updateEmployees.pending, (state, action) => {
			state.error = null;
			state.loading = true;
		});
		builder.addCase(updateEmployees.fulfilled, (state, action) => {
			state.loading = false;
		});
		builder.addCase(updateEmployees.rejected, (state, action) => {
			state.loading = false;
			state.error = action?.payload;
		});
	},
});

export const { highlightedOnly } = employeeSlice.actions;

export default employeeSlice.reducer;

//sab main kaam thunk me ho rha h toh slice ki need kyu h --> to change the state we need the slice

//how the slice will know ki thunk (async) operation ka kya result aaya
//extraReducers key ek method leta h jiske argument me ek builder object ata h jo helper hota h use to create the builder.addCase() and ye addCase  2 arguemnt leta h ek toh type ki thunk kya type generate kar rha h dusra sync function jisme arguemnt hote h ( state, action )
//state ka use karte h to make changes in the state
//action pass karta h payload ya error from the thunk
