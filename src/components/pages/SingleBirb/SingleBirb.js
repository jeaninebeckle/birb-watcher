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
    return (
      <div className="SingleBirb">
        <h1>SingleBirb</h1>
      </div>
    );
  }
}

export default SingleBirb;
