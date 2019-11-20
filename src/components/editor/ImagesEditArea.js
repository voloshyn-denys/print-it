import React from "react";
import withSettingsItem from "../hoc_helpers/withSettingsItem";

const Images = ({ onAddImage }) => {

	return (
		<>
		<input
			onChange={evt => { onAddImage(evt) }}
			name="myFile"
			type="file"
		/>
		</>
	);
  
}

export default withSettingsItem(Images);
