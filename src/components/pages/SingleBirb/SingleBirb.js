import React from 'react';
import birbsData from '../../../helpers/data/birbsData';
import BirbCards from '../../shared/BirbCards/BirbCards';

class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  getBirb = () => {
    const { birbId } = this.props.match.params;
    birbsData.getSingleBirb(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('get single birb failed', err));
  }

  componentDidMount() {
    this.getBirb();
  }

  deleteBirb = () => {
    const { birbId } = this.props.match.params;
    birbsData.deleteBirb(birbId)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch((err) => console.error('delete single birb failed', err));
  }

  render() {
    const { birb } = this.state;

    return (
      <BirbCards birb={birb} deleteBirb={this.deleteBirb}/>
    );
  }
}

export default SingleBirb;
