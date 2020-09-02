import React from 'react';
import { Link } from 'react-router-dom';
import BirbCards from '../../shared/BirbCards/BirbCards';
import birbsData from '../../../helpers/data/birbsData';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  getBirbs = () => {
    birbsData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error('get birbs broke', err));
  }

  componentDidMount() {
    this.getBirbs();
  }

  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb10000';
    this.props.history.push(`/edit/${birbId}`);
  }

  render() {
    const { birbs } = this.state;

    const birbCards = birbs.map((birb) => <BirbCards key={birb.id} birb={birb}/>);

    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editBirbEvent}>Edit A Birb</button>
        <Link to='/new'> New Birb</Link>
        <Link to='/birbs/birb1232'>Specific Birb</Link>
        <div className="card-columns m-3">
          { birbCards }
        </div>
      </div>
    );
  }
}

export default Home;
