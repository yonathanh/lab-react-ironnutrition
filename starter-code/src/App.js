import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import foods from "./foods.json";

//Example
// "name": "Pizza",
// "calories": 400,
// "image": "https://i.imgur.com/eTmWoAN.png",
// "quantity": 0

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      toggleAddFood: false,
      searchField: "",
      searchedFoods: foods
    };
  }

  showFoodBox = () => {
    return this.state.searchedFoods.map((onefood, index) => {
      return (
        <FoodBox
          key={index}
          name={onefood.name}
          calories={onefood.calories}
          image={onefood.image}
          plusClickHandler={() => this.plusFood(index)}
          deleteClickHandler={() => this.deleteFood(index)}
        />
      );
    });
  };

  toggleFoodForm = () => {
    this.setState({ toggleAddFood: !this.state.toggleAddFood });
  };

  addNewFood = (e, newThingToAdd) => {
    e.preventDefault();

    const newFood = {
      name: newThingToAdd.nameField,
      calories: newThingToAdd.caloriesField,
      image: newThingToAdd.imageField,
      quantity: newThingToAdd.imageField
    };

    const allThefoods = [...this.state.foods];
    // const allThefoods = this.state.foods.slice()
    // either of these works, they each simply make a duplicate of this.state.foods

    allThefoods.unshift(newFood);

    this.setState({
      foods: allThefoods,
      searchedFoods: allThefoods
    });
    this.toggleFoodForm();
  };

  searchFieldChange = theEventObject => {
    let tempfoods = [...this.state.foods];
    this.setState({
      searchField: theEventObject.target.value,
      searchedFoods: tempfoods.filter(food =>
        new RegExp(theEventObject.target.value, "i").exec(food.name)
      )
    });
    // this.search();
  };

  search = () => {
    let tempfoods = [...this.state.foods]; // using the spread operater to actually make a copy

    tempfoods = tempfoods.filter(food => {
      return new RegExp(this.state.searchField, "i").exec(food.name);
    });
    console.log(tempfoods);
    this.setState({
      searchedFoods: tempfoods
    });
  };

  plusFood = whichFoodToAdd => {
    const tempCount = whichFoodToAdd.quantity;
    const tempName = whichFoodToAdd.name;
    const tempCalories = whichFoodToAdd.calories;
    return <li>{tempName}</li>, <p>Total Calories {tempCalories}</p>;
  };

  deleteFood = whichFoodToDelete => {
    const tempFoods = [...this.state.foods];
    tempFoods.splice(whichFoodToDelete, 1);

    this.setState({
      foods: tempFoods,
      searchedFoods: tempFoods
    });
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="columns">
          <div className="column">
            <input
              className="input"
              type="text"
              onChange={e => this.searchFieldChange(e)}
              value={this.state.searchField}
              placeholder="Search"
            />
            <div>{this.showFoodBox()}</div>
          </div>
          <div className="column">
            <span style={{ margin: "0 30px" }}>Today's Foods</span>
            {/* {this.state.togglePlusFood && <PlusFood />} */}
            <button
              onClick={() => this.toggleFoodForm()}
              className="button is-info"
            >
              Add new food
            </button>
            {/* whay don't we use '()' in a function i a react tag??| */}
            {this.state.toggleAddFood && <AddFood addNew={this.addNewFood} />}
          </div>
          {/* <div class="column">Third column</div> */}
        </div>
      </div>
    );
  }
}

export default App;
