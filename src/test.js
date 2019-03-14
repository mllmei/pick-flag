import React from "react";
import { shallow, mount, render } from "enzyme";

import SearchBox from "./searchbox.js";
import continents from "./continents.json";

describe("A suite", function() {
  it("should render without throwing an error", function() {
    expect(shallow(<SearchBox />).contains("Select continent")).toBe(true);
  });
  it("should mount in a full DOM", function() {
    expect(mount(<SearchBox />).find(".borders").length).toBe(
      continents.length
    );
  });
});
