import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityField: 0
    };
  }

  quantityFieldChange = event => {
    this.setState({ quantityField: event.target.value });
  };

  render() {
    return (
      <div style={{ width: "530px" }} className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="poster" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={e => this.quantityFieldChange(e)}
                  value={this.state.quantityField}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.props.plusClickHandler}
                >
                  +
                </button>
              </div>
              <button
                className="button"
                style={{ backgroundColor: "red", margin: "0 5px" }}
                onClick={this.props.deleteClickHandler}
              >
                Delete
              </button>{" "}
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
