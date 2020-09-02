import React from 'react';
import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import birbsData from '../../../helpers/data/birbsData';

class NewBirb extends React.Component {
  state= {
    type: '',
    color: '',
    size: '',
    seenAt: '',
    altColor: '',
    wasSleeping: true,
    location: '',
    notes: '',
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  saveBirb = (e) => {
    e.preventDefault();

    const keysIWant = ['type', 'color', 'size', 'seenAt', 'altColor', 'wasSleeping', 'location', 'notes'];

    const newBirb = _.pick(this.state, keysIWant);
    newBirb.uid = authData.getUid();

    birbsData.createBirb(newBirb)
      .then((res) => {
        this.props.history.push(`/birbs/${res.data.name}`);
      })
      .catch((err) => console.error('new birb broke', err));
  }

  render() {
    const { type } = this.state;
    return (
      <div className="NewBirb">
        <h1>NewBirb</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="">Type</label>
            <input
              type="text"
              className="form-control"
              id="birbType"
              placeholder="Enter Birb Type"
              value={type}
              onChange={this.changeTypeEvent}
              />
          </div>
          <button className="btn btn-warning" onClick={this.saveBirb}>Save Birb</button>
        </form>
      </div>
    );
  }
}

export default NewBirb;
