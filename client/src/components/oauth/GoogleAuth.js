import React from 'react';

class GoogleAuth extends React.Component {
	componentDidMount () {
		window.gapi.load('client:auth2', () => {
			window.gapi.init({
				clientId :
					'243290141274-g02ba5te26jsmvbq5mhgbh65q5i8n0qk.apps.googleusercontent.com',
				scope    : 'email'
			});
		});
	}

	render () {
		return <div>GoogleAuth</div>;
	}
}

export default GoogleAuth;
