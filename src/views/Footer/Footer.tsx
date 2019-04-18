import React from 'react';

interface IFooterStatelessProps {}

const Footer: React.FunctionComponent<IFooterStatelessProps> = () => {
	return (
		<div className="footer">
			<ul className="footer-items">
				<li>Privacy</li>
				<li>Terms</li>
			</ul>
		</div>
	);
};

export default Footer;