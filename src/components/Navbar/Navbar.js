import React from 'react';
import firebase from 'firebase/app';
// import Auth from '../pages/Auth/Auth';
import 'firebase/auth';

class Navbar extends React.Component {
  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <h1>Navbar</h1>
        <button className="btn btn-danger" onClick={this.logoutClickEvent}>Logout</button>
      </div>
    );
  }
}

export default Navbar;
