import React from 'react';
// import PropTypes from 'prop-types';
import birbShape from '../../../helpers/props/birbShape';

class BirbCards extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{birb.type}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Color: {birb.color} <br /> Size: {birb.size}</h6>
          <p className="card-text">Location: {birb.location} <br /> Notes: {birb.notes}</p>
        </div>
      </div>
    );
  }
}

export default BirbCards;
