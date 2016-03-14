import React from 'react';
import Alert from './Alert';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loggingIn: false
    };
  }

  componentWillMount() {
  }

  submit(event) {
    event.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;

    if (username.length === 0 || password.length === 0) {
      return this.setState({
        errorCode: 'missingUsernameOrPassword'
      });
    }

    this.setState({
      loggingIn: true,
      errorCode: null
    });

    this.props.onLogin(username, password, (err) => {
      if (err) {
        return this.setState({
          error: err,
          loggingIn: false
        });
      }

      if (this.props.location.state && this.props.location.state.nextPathname) {
        window.location.href = this.props.location.state.nextPathname;
      } else {
        window.location.href = '/';
      }

      // if (this.props.history) {
      //   // Redirect to whatever URL the user was originally trying to access
      //   if (this.props.location.state && this.props.location.state.nextPathname) {
      //     this.props.history.push(this.props.location.state.nextPathname);
      //   } else {
      //     this.props.history.push('/');
      //   }
      // }
    });
  }

  renderLoginError() {
    if (!this.state.error) return null;

    let message = null;
    switch (this.state.error.code) {
    case 'invalidCredentials':
      message = 'Invalid credentials';
      break;
    case 'missingUsernameOrPassword':
      message = 'Please enter your username and password';
      break;
    default:
      message = 'Unknown sign-in error';
      break;
    }

    return <Alert type="danger"><strong>{message}</strong></Alert>;
  }

  render() {
    const signInIconClass = (this.state.loggingIn) ?
      this.props.spinnerIconClass : this.props.buttonIconClass;

    return (
      <div className="login-form">
        <h2>{this.props.heading}</h2>
        {this.renderLoginError()}
        <form onSubmit={this.submit.bind(this)} noValidate>
          <div className="form-group">
            <label className="sr-only" htmlFor="username">Username</label>
            <input className="form-control" autoCapitalize={false}
              ref="username" placeholder="Username" autoFocus disabled={this.loggingIn}/>
          </div>

          <div className="form-group">
            <label className="sr-only" htmlFor="password">Password</label>
            <input className="form-control" type="password"
              ref="password" placeholder="Password" disabled={this.loggingIn}/>
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit"
              disabled={this.state.loggingIn}>
              <span>Sign-In</span>
              <i className={signInIconClass} style={{marginLeft: 6}}/>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.defaultProps = {
  heading: React.PropTypes.string,
  spinnerIconClass: 'fa fa-spinner fa-spin',
  buttonIconClass: 'fa fa-sign-in'
};

LoginForm.propTypes = {
  location: React.PropTypes.object,
  header: React.PropTypes.string,
  spinnerIconClass: React.PropTypes.string,
  loginIconClass: React.PropTypes.string,
  onLogin: React.PropTypes.func.isRequired
};
