import React from 'react';

//images
import laptopImg from './assets/laptop.png'; 

//components
import RectangleBtn from '../RectangleBtn/RectangleBtn';

interface ILandingStatelessProps {}

const Landing: React.FunctionComponent<ILandingStatelessProps> = () => {
	return (
		<div className="landing">
			<p className="landing-big-text">Connect with others</p>
			<p className="landing-small-text">Make friends in a way you've never done before.</p>
			<RectangleBtn text="Join Now" />
			<img className="laptop-img" src={laptopImg} alt="laptop" />
		</div>
	);
};

export default Landing;