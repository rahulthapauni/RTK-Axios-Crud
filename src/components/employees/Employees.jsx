import React from "react";
import Layout from "../Layout.jsx";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import EmployeePopup from "../employeePopup/EmployeePopup.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
	openDeletePopup,
	openEmployeePopup,
} from "@/store/features/popup/popup.slice.js";
import { updateEmployees } from "@/store/features/employee/employee.thunk.js";
const Employees = () => {
	const employeeDetails = useSelector((state) => state.employee.employees);
	console.log("ce", employeeDetails);

	return (
		<div>
			<Layout>
				{employeeDetails.length === 0 && (
					<h1 className="text-2xl text-center mt-10 fontsemi">
						No Employee Found
					</h1>
				)}
				<ul className="list bg-base-100 rounded-box shadow-md">
					{employeeDetails.map((item) => (
						<EmployeeCard
							key={item.id}
							details={item}
						/>
					))}
				</ul>
			</Layout>
		</div>
	);
};
const EmployeeCard = ({ details }) => {
	const dispatch = useDispatch();
	const defaultImage = `https://cdn-icons-png.flaticon.com/128/10412/10412528.png`;

	const handleHighlight = (details) => {
		dispatch(
			updateEmployees({
				...details,
				isHighlighted: !details.isHighlighted,
			})
		);
	};
	return (
		<li className="list-row">
			<div>
				<img
					className="size-10 rounded-box"
					src={details.avatar ?? defaultImage}
				/>
			</div>
			<div>
				<div>{details.name}</div>
				<div className="text-xs uppercase font-semibold opacity-60">
					{details.email}
				</div>
			</div>
			<p className="list-col-wrap text-xs">{details.bio}</p>
			<div className="flex gap-2">
				{/* edit button */}
				<button
					className="btn btn-square btn-ghost"
					onClick={() => {
						dispatch(openEmployeePopup(details));
					}}
				>
					<CiEdit className="text-xl" />
				</button>
				{/* delete button */}
				<button
					className="btn btn-square btn-ghost"
					onClick={() => dispatch(openDeletePopup(details.id))}
				>
					<MdDeleteOutline className="text-xl" />
				</button>
				{/* heart */}
				<button
					className="btn btn-square btn-ghost"
					onClick={() => {
						handleHighlight(details);
					}}
				>
					<svg
						className="size-[1.2em]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g
							strokeLinejoin="round"
							strokeLinecap="round"
							strokeWidth="2"
							fill={details.isHighlighted ? "white" : "none"}
							stroke="currentColor"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
						</g>
					</svg>
				</button>
			</div>
		</li>
	);
};

export default Employees;
