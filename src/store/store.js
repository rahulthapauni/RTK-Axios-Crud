import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popup/popup.slice.js";
import employeeReducer from "./features/employee/employee.slice.js";
const store = configureStore({
	reducer: {
		popup: popupReducer,
		employee: employeeReducer,
	},
});

export default store;
