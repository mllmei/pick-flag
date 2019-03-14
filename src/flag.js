import React, { Component } from "react";

class Flag extends Component {
  render() {
    if (this.props.flag.length > 0)
      return (
        <div>
          <h3>Selected flag</h3>
          <div style={{ height: "100px" }}>{this.props.flag}</div>
          <div>
            <button
              style={{
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                padding: "20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px",
                cursor: "pointer",
                borderRadius: "50%"
              }}
              onClick={() => {
                this.props.clearflag();
              }}
            >
              Clear flags
            </button>
          </div>
        </div>
      );
    else {
      return <div />;
    }
  }
}

export default Flag;
