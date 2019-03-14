import React, { Component } from "react";
import "./App.css";

import Flag from "./flag.js";
import continents from "./continents.json";
import SearchBox from "./searchbox.js";
class App extends Component {
  state = {
    countries: null,
    flag: [],
    continents: continents,
    clearflag: false
  };

  render() {
    console.log(this.state.continents);
    return (
      <div>
        <div
          style={{
            height: "200px",
            marginTop: "0px",
            /* The image used */
            backgroundImage: `url('https://image.freepik.com/free-vector/american-flag-logo-collecti_1370-130.jpg')`,
            /* Full height */
            backgroundSize: "750px"
            /* Center and scale the image nicely */
          }}
        >
          <h1 style={{ textAlign: "center", fontStyle: "normal" }}>
            Flag Picker
          </h1>

          <p
            style={{
              textAlign: "center",
              fontStyle: "oblique",
              marginTop: "140px"
            }}
          >
            The app will help you to learn flags around the world in 3 steps
          </p>
        </div>
        <div class="row">
          <div class="column">
            <td>
              <SearchBox
                clearflag={() => {
                  this.setState({ flag: [] });
                  this.setState({ clearflag: true });
                }}
                continents={this.state.continents}
                setContinent={continent => {
                  this.setState({
                    countries: this.state.continents.filter(element => {
                      return element.continent === continent;
                    })[0].countries
                  });
                }}
              />
            </td>
          </div>
          <div class="column">
            <td>
              {this.state.countries ? (
                <SearchBox
                  clearflag={this.state.clearflag}
                  countries={this.state.countries}
                  setCountries={(data, check) => {
                    if (check === true) {
                      this.setState({ flag: [...this.state.flag, data] });
                    } else {
                      this.setState({
                        flag: this.state.flag.filter(element => {
                          return element !== data;
                        })
                      });
                    }
                  }}
                />
              ) : (
                <div />
              )}
            </td>
          </div>
          <div class="column">
            <Flag
              clearflag={() => {
                this.setState({ flag: [] });
                this.setState({ clearflag: true });
              }}
              flag={this.state.flag}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
