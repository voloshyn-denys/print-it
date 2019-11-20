import React, { useState } from "react";

const withSettingsItem = (View) => {
	
	return (props) => {
		const [openMode, toggleOpenMode] = useState(false);

		return (
			<div className="settings_item">
				<div className={`settings_head ${openMode && 'settings_head--open' || ' '}`} 
					onClick={()=> {toggleOpenMode(!openMode)}}
				>
					<span className="settings_head_title">{props.title || ' '}</span>
					{ openMode && (
						<svg className="icon icon-cross-out"><use xlinkHref="#icon-cross-out" /></svg> )
					}
				</div>
				{ openMode && (
					<div className="settings_area">
						<View {...props} />
					</div> )
				}
			</div>
		);
	}
}

export default withSettingsItem;