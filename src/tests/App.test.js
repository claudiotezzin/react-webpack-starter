import React from "react";
import { shallow, mount } from "enzyme";
import App from "../containers/App";

describe("<App />", () => {
  it("renders without crashing", () => {
    expect(shallow(<App />));
  });
});
