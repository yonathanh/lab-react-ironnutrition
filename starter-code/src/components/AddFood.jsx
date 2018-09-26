import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameField: "",
      caloriesField: "",
      imageField: ""
    };
  }
  // "name": "Pizza",
  // "calories": 400,
  // "image": "https://i.imgur.com/eTmWoAN.png",
  // "quantity": 0

  nameFieldChange = theEventObject => {
    this.setState({ nameField: theEventObject.target.value });
  };

  caloriesFieldChange = theEventObject => {
    this.setState({ caloriesField: theEventObject.target.value });
  };

  imageFieldChange = theEventObject => {
    this.setState({ imageField: theEventObject.target.value });
  };

  render() {
    return (
      <form onSubmit={e => this.props.addNew(e, this.state)}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <label>Name</label>
            <input
              className="input"
              type="text"
              onChange={e => this.nameFieldChange(e)}
              value={this.state.nameField}
              placeholder="Name"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <label>calories</label>
            <input
              className="input"
              type="number"
              onChange={e => this.caloriesFieldChange(e)}
              value={this.state.caloriesField}
              placeholder="calories"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <label>ImageUrl</label>
            <input
              className="input"
              type="text"
              onChange={e => this.imageFieldChange(e)}
              value={this.state.imageField}
              placeholder="url"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Submit</button>
          </p>
        </div>
      </form>
    );
  }
}

export default AddFood;
