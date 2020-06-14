import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {
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
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onClickSignIn = () => {
		this.auth.signIn();
	};

	onClickSignOut = () => {
		this.auth.signOut();
	};

	onAuthChange = (isSignedIn) => {
		isSignedIn ? this.props.signIn() : this.props.signOut();
	};

	renderAuthButton () {
		if (this.props.isSignedIn === null) {
			return <button className="ui  loading red button" />;
		} else if (this.props.isSignedIn) {
			return (
				<button
					onClick={this.onClickSignOut}
					className="ui google red button"
				>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					onClick={this.onClickSignIn}
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

const mapStateToProps = (state) => {
	return { isSignedIn: state.googleAuth.isSignedIn };
};

export default connect(mapStateToProps, {
	signIn,
	signOut
})(GoogleAuth);
