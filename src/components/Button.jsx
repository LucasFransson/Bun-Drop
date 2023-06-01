import React from 'react';
function Button({ onClick, text, type = 'button', styleClass }) {
	return (
		<button type={type} onClick={onClick} className={styleClass}>
			{text}
		</button>
	);
}
export default Button;
