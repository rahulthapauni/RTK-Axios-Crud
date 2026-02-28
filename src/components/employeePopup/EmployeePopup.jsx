import {
	postEmployees,
	updateEmployees,
} from "@/store/features/employee/employee.thunk.js";
import { closeEmployeePopup } from "@/store/features/popup/popup.slice.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EmployeePopup = () => {
	const employeePopup = useSelector((state) => state.popup.employeePopup);
	if (!employeePopup) return null;
	else return <EmployeeForm />;
};

const EmployeeForm = () => {
	//for updating
	const employeePopup = useSelector((state) => state.popup.employeePopup);
	//for new employee
	const [formDetails, setFormDetails] = useState({
		avatar: "",
		name: "",
		email: "",
		bio: "",
		isHighlighted: false,
	});

	useEffect(() => {
		//agar iss employeePopup me id h toh matlab edit kar rhe h toh fomr data me ye set kar
		if (employeePopup.id) {
			setFormDetails(employeePopup);
		}
	}, [employeePopup]);
	console.log(formDetails);

	const dispatch = useDispatch();
	const handleChangeEvent = (e) => {
		//jaha event huya uske state me update karne ka
		const { name, value } = e.target;
		setFormDetails((p) => ({ ...p, [name]: value }));
	};

	const handleSubmit = async () => {
		if (employeePopup === true) {
			//new form wala
			dispatch(postEmployees(formDetails));
		} else {
			//employeePopup me object h
			dispatch(updateEmployees(formDetails));
		}
		dispatch(closeEmployeePopup());
	};
	console.log("employee", employeePopup);
	return (
		<div
			className="w-full h-full absolute left-0 top-0 bg-black/30 backdrop-blur-sm z-20 flex items-center justify-center"
			onMouseDown={() => dispatch(closeEmployeePopup())}
			// yaha pe jab bhi event yaha tak pahuchega ye close kar dega fir chahe field set me click karee ya button pe isko rok ne ke liye apan ko event ko spread hone se rokna h bole toh propogate nahi hone dena fieldset ke baahar
		>
			<fieldset
				className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
				//agar ko bhi event hoga fieldset me ya iske children me toh woh yaha pe aake stop ho jayega
				onMouseDown={(e) => e.stopPropagation()}
			>
				<legend className="fieldset-legend">Employee Details</legend>

				<label className="label">Profile Url</label>
				<input
					type="text"
					className="input"
					name="avatar"
					onChange={handleChangeEvent}
					value={formDetails.avatar}
					placeholder="Profile Url"
				/>
				<label className="label">Name</label>
				<input
					type="text"
					className="input"
					placeholder="Name"
					name="name"
					onChange={handleChangeEvent}
					value={formDetails.name}
				/>

				<label className="label">Email</label>
				<input
					type="email"
					className="input"
					placeholder="Email"
					name="email"
					onChange={handleChangeEvent}
					value={formDetails.email}
				/>
				<label
					htmlFor="bio"
					className="label"
				>
					Bio
				</label>
				<textarea
					placeholder="Bio"
					className="textarea "
					name="bio"
					onChange={handleChangeEvent}
					value={formDetails.bio}
				></textarea>

				<button
					className="btn btn-neutral mt-4"
					onClick={handleSubmit}
				>
					{employeePopup.id ? "Update" : "Submit"}
				</button>
			</fieldset>
		</div>
	);
};

export default EmployeePopup;
