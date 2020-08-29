import React from 'react';
import firebase from 'firebase/app';
import Auth from '../pages/Auth/Auth';
import 'firebase/auth';

class Navbar extends React.Component {
  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1"></span>
          <div className="navbar-nav ml-auto">
        {
          authed ? (
            <button id="navbar-logout-button" type="button" className="navbar btn btn-outline-danger" onClick={this.logoutClickEvent}>Log Out</button>
          ) : (
            <Auth />
          )
        }
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
