import React from 'react';

//components
import NavButton from '../NavButton/NavButton';

interface NavButtonListStatelessProps {}

const NavButtonList: React.FunctionComponent<NavButtonListStatelessProps> = (props) => {
	return (
		<ul className="nav-button-list">
			<NavButton href="#" text="Sign In" />
			<NavButton href="#" text="Register" />
		</ul>
	);
};

export default NavButtonList;