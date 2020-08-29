import React from 'react';

class Home extends React.Component {
  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb10000';
    this.props.history.push(`/edit/${birbId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editBirbEvent}>Edit A Birb</button>
      </div>
    );
  }
}

export default Home;
