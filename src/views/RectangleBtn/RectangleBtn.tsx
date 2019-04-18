import React from 'react';

interface IRectangleBtnStatelessProps {
	text: string
}

const RectangleBtn: React.FunctionComponent<IRectangleBtnStatelessProps> = ({ text }) => {
	return(
		<button className="rectangle-btn">
			{text}
		</button>
	);
};

export default RectangleBtn;