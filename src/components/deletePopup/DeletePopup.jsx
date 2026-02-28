import { deleteEmployees } from "@/store/features/employee/employee.thunk.js";
import { closeDeletePopup } from "@/store/features/popup/popup.slice.js";
import React from "react";
import { CiVolumeHigh } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const DeletePopup = () => {
	const dispatch = useDispatch();
	const deletePopup = useSelector((state) => state.popup.deletePopup);
	console.log(deletePopup);

	const handleConfirmDelete = () => {
		dispatch(deleteEmployees(deletePopup));
	};

	if (!deletePopup) return null;
	return (
		<div
			className="w-full h-full absolute left-0 top-0 bg-black/30 backdrop-blur-sm z-20 flex items-center justify-center"
			onClick={() => deletePopup && dispatch(closeDeletePopup())}
		>
			<div
				className="card w-96 bg-base-100 card-md shadow-sm"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="card-body ">
					<h2 className="card-title">Confirm Delete</h2>
					<p>Are you sure you want to delete ?</p>
					<div className="justify-end card-actions gap-4 mt-4 ">
						<button
							className="btn btn-error"
							onClick={handleConfirmDelete}
						>
							Delete
						</button>
						<button
							className="btn btn-primary"
							onClick={() => dispatch(closeDeletePopup())}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeletePopup;
