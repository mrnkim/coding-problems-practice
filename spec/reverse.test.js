const reverse = require("../Arrays/reverse");

describe("reverse", function () {
  it("is a function", function () {
    expect(typeof reverse).toEqual("function");
  });

  it("reverses 'Hi My name is Andrei'", function () {
    expect(reverse("Hi My name is Andrei")).toEqual("ierdnA si eman yM iH");
  });
});
