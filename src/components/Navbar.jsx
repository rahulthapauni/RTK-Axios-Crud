import React from "react";
import Layout from "./Layout.jsx";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openEmployeePopup } from "@/store/features/popup/popup.slice.js";
import { highlightedOnly } from "@/store/features/employee/employee.slice.js";
export const Navbar = () => {
	const dispatch = useDispatch();

	return (
		<div className="bg-base-100 shadow-sm w-full sticky top-0 z-10">
			<Layout>
				<div className="navbar  shadow-sm">
					<div className="navbar-start">
						<a className="btn btn-ghost text-xl">Employees</a>
					</div>
					<div className="navbar-end">
						{/* add button */}
						<button
							className="btn btn-ghost btn-circle"
							onClick={() => dispatch(openEmployeePopup())}
						>
							<FaPlus />
						</button>

						{/* Like button */}
						<button
							className="btn btn-square btn-ghost"
							onClick={() => {
								dispatch(highlightedOnly());
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
									fill="none"
									stroke="currentColor"
								>
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
								</g>
							</svg>
						</button>
					</div>
				</div>
			</Layout>
		</div>
	);
};
