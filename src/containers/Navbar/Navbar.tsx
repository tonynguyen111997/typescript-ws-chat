import React, { Component } from 'react';

//components
import Banner from '../../views/Banner/Banner';
import NavButtonList from '../../views/NavButtonList/NavButtonList';

interface INavBarProps {}

interface INavBarState {}

class Navbar extends Component<INavBarProps, INavBarState>{
	render(): JSX.Element {
		return(
			<nav>
				<Banner />
				<NavButtonList />
			</nav>
		);
	}
}

export default Navbar;