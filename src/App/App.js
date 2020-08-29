import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import Navbar from '../javascripts/components/Navbar/Navbar';

import './App.scss';

connection();
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        return <h1>Authed</h1>;
      }
      return '';
    };

    return (
      <div className="App">
        <Navbar authed={authed}/>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
