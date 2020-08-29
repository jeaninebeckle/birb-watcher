import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';
import Navbar from '../components/Navbar/Navbar';
import EditBirb from '../components/pages/EditBirb/EditBirb';
import NewBirb from '../components/pages/NewBirb/NewBirb';
import Home from '../components/pages/Home/Home';
import SingleBirb from '../components/pages/SingleBirb/SingleBirb';

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
    return (
      <div className="App">
        <h1>Bird Watcher</h1>
          <Navbar />
          <Auth />

          <EditBirb />
          <Home />
          <NewBirb />
          <SingleBirb />
      </div>
    );
  }
}

export default App;
