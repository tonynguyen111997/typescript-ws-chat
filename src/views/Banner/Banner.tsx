import React from 'react';

//images
import banner from './assets/Banner.png';

interface IBannerStatelessProps {}

const Banner: React.FunctionComponent<IBannerStatelessProps> = () => {
	return (
		<div className="banner-container">
			<img className="banner" src={banner} alt="ws-chat-banner" />
		</div>
	);
};

export default Banner;