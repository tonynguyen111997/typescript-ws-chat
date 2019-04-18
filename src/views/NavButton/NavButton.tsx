import React from 'react';

interface NavButtonStatelessProps {
	text: string,
	href: string
}

const NavButton: React.FunctionComponent<NavButtonStatelessProps> = ({ text, href }) => {
	return (
		<li className="nav-button">
			<a href={href}>{text}</a>
		</li>
	);
};

export default NavButton;