import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Employees from "./components/employees/Employees.jsx";
import EmployeePopup from "./components/employeePopup/EmployeePopup.jsx";
import DeletePopup from "./components/deletePopup/DeletePopup.jsx";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/features/employee/employee.thunk.js";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEmployees());
	}, []);
	return (
		<div className="min-h-screen flex flex-col">
			<EmployeePopup />
			<DeletePopup />
			<Navbar />
			<div className="flex-1">
				<Employees />
			</div>
			<Footer />
		</div>
	);
};

export default App;
