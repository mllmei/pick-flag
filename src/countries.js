//import Continents from "./continents.js";
import React, { Component } from "react";
import continents from "./continents.json";
import { connect } from "react-redux";
import * as actions from "./store/action.js";

class Countries extends Component {
  state = { input: "", flag: false };
  onchange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    console.log(
      continents.filter(element => {
        return element.continent === this.props.continentSelect;
      })[0]
    );
    console.log(this.props.continentSelect);
    return this.props.countryFlag === false ? (
      <div />
    ) : (
      <div>
        <h3>Select countries</h3>
        <input
          value={this.state.input}
          list="continents_list"
          id="continents_id"
          name="continents"
          onChange={e => {
            this.onchange(e);
          }}
          onClick={() => {
            this.setState({ flag: true });
          }}
        />
        <ul className="list-group">
          {continents
            .filter(element => {
              return element.continent === this.props.continentSelect;
            })[0]
            .countries.filter(element => {
              return element.name.includes(this.state.input);
            })
            .map(item => (
              <li
                hidden={this.state.flag === true ? false : true}
                className="list-group-item"
                value={item.continent}
                data-category={item}
                key={item.name}
              >
                <input
                  onClick={event => {
                    event.target.checked === true
                      ? this.props.countrySelect(item.flag)
                      : this.props.remove(item.flag);
                  }}
                  type="checkbox"
                />
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    continentSelect: state.continentSelect,
    countryFlag: state.countryFlag
  };
};
const mapDispatchToProps = dispatch => {
  return {
    countrySelect: item => {
      dispatch(actions.countrySelect(item));
    },
    remove: item => {
      dispatch(actions.remove(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
