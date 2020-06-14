import React from 'react';

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };

	componentDidMount () {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId :
						'243290141274-g02ba5te26jsmvbq5mhgbh65q5i8n0qk.apps.googleusercontent.com',
					scope    : 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton () {
		if (this.state.isSignedIn === null) {
			return <button className="ui  loading red button" />;
		} else if (this.state.isSignedIn) {
			return (
				<button
					onClick={this.onSignOut}
					className="ui google red button"
				>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					onClick={this.onSignIn}
					className="ui google red button"
				>
					<i className="google icon" />
					Sign in with Google
				</button>
			);
		}
	}

	render () {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
