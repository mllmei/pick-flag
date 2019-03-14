import React, { Component } from "react";
import continents from "./continents.json";

class SearchBox extends Component {
  state = {
    input: "",
    flag: false,
    selected: "",
    selectflag: false
  };
  onchange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    console.log(continents);
    if (!this.props.countries) {
      return (
        <div>
          <h3>Select continent</h3>

          <input
            style={{
              borderStyle: "solid",
              borderColor: "lightgrey",
              borderWidth: "4px",
              width: "150px"
            }}
            value={this.state.input}
            list="continents_list"
            id="continents_id"
            name="continents"
            onChange={e => {
              this.onchange(e);
            }}
            onClick={() => {
              this.setState({ flag: true });
              this.props.clearflag();
            }}
          />
          <ul className="list-group" style={{ marginTop: "0px" }}>
            {continents
              .filter(element => {
                return (
                  element.continent.toLowerCase().indexOf(this.state.input) !==
                  -1
                );
              })
              .map(item => (
                <li
                  style={{
                    borderBottom: "solid",
                    backgroundColor: "white",
                    height: "50px",
                    textAlign: "center",
                    width: "150px",
                    paddingTop: "15px",
                    margin: "0px"
                  }}
                  className="borders"
                  hidden={this.state.flag === false ? true : false}
                  onClick={() => {
                    this.setState({
                      flag: false,
                      selected: item.continent,
                      selectflag: true
                    });
                    //console.log(item)
                    this.props.setContinent(item.continent);
                  }}
                  //
                  value={item.continent}
                  data-category={item}
                  key={item.continent}
                >
                  {item.continent}
                </li>
              ))}
          </ul>
          <p hidden={this.state.selectflag === true ? false : true}>
            <span>{this.state.selected}</span> Selected!!!
          </p>
        </div>
      );
    } else if (this.props.countries.length > 0) {
      return (
        <div>
          <h3>Select countries</h3>
          <input
            style={{
              borderStyle: "solid",
              borderColor: "lightgrey",
              borderWidth: "4px",
              width: "150px"
            }}
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
            {this.props.countries
              .filter(element => {
                return (
                  element.name.toLowerCase().indexOf(this.state.input) !== -1
                );
              })
              .map(item => (
                <label for={item.name}>
                  <li
                    style={{
                      height: "50px",
                      borderBottom: "solid",
                      backgroundColor: "white",
                      width: "150px",
                      paddingTop: item.name.includes("Papua") ? "5px" : "15px",
                      paddingLeft: "0px"
                    }}
                    hidden={this.state.flag === true ? false : true}
                    className="list-group-item"
                    value={item.continent}
                    data-category={item}
                    key={item.name}
                  >
                    <input
                      onClick={event => {
                        this.props.setCountries(
                          item.flag,
                          event.target.checked
                        );
                      }}
                      type="checkbox"
                      id={item.name}
                    />
                    {item.name}
                  </li>
                </label>
              ))}
          </ul>
        </div>
      );
    }
  }
}

export default SearchBox;
