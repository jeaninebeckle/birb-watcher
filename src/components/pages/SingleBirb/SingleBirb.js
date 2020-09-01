import React from 'react';
import birbsData from '../../../helpers/data/birbsData';

class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;

    birbsData.getSingleBirb(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('get single birb failed', err));
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

export default SingleBirb;
