import React from "react";

export default function AccountSettings({name, phone, gender, email, createdAt}) {

	return (
		<div>
			<form>
				<h3>{name}</h3>
				<p className="text-muted">Joined at {createdAt.substring(0, 9).replace(/\-/g, "/")}</p>
				<button type="submit" className="btn btn-primary">Save</button>
			</form>
		</div>
	)
}