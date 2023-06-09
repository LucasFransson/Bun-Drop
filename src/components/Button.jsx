// This Button Component is NOT used as much as It should be in the project.
// If I have lots of time left: Go through the project and replace all the buttons/Links with this component and refactor it if necessary.

import React from 'react';
function Button({ onClick, text, textSub, type = 'button', styleClass }) {
	return (
		<button type={type} onClick={onClick} className={styleClass}>
			{text}
		</button>
	);
}
export default Button;
