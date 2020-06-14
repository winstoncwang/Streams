import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './oauth/GoogleAuth';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Online Streamer
			</Link>
			<div className="right menu" />
			<Link to="/" className="item">
				All Streams
			</Link>
			<GoogleAuth />
		</div>
	);
};

export default Header;
