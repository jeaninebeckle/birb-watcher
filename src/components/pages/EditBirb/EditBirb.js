import React from 'react';
import birbsData from '../../../helpers/data/birbsData';

class EditBirb extends React.Component {
  state= {
    birb: {
      type: '',
      color: '',
      size: '',
      seenAt: '',
      altColor: '',
      wasSleeping: true,
      location: '',
      notes: '',
    },
  }

  componentDidMount() {
    birbsData.getSingleBirb(this.props.match.params.birbId)
      .then((res) => {
        const birb = res.data;
        this.setState({ birb });
      })
      .catch((err) => console.error('get single birb err', err));
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.type = e.target.value;
    this.setState({ birb });
  }

  changeColorEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.color = e.target.value;
    this.setState({ birb });
  }

  updateBirb = (e) => {
    e.preventDefault();
    const { birbId } = this.props.match.params;

    birbsData
      .updateBirb(birbId, this.state.birb)
      .then(() => {
        this.props.history.push(`/birbs/${birbId}`);
      })
      .catch((err) => console.error('edit birb broke', err));
  }

  render() {
    const {
      type,
      color,
      // size,
      // seenAt,
      // altColor,
      // wasSleeping,
      // location,
      // notes,
    } = this.state.birb;

    return (
      <div className="EditBirb">
        <h1>Edit Birb</h1>
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
              <label htmlFor="">Color</label>
            <input
              type="text"
              className="form-control"
              id="birbType"
              placeholder="Enter Birb Color"
              value={color}
              onChange={this.changeColorEvent}
              />
          </div>
          <button className="btn btn-warning" onClick={this.updateBirb}>Save Birb</button>
        </form>
      </div>
    );
  }
}

export default EditBirb;
