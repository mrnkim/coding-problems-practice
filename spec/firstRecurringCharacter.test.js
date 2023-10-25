const firstRecurringCharacter = require("../HashTables/firstRecurringCharacter");

describe("firstRecurringCharacter", function () {
  it("is a function", function () {
    expect(typeof firstRecurringCharacter).toEqual("function");
  });

  it("returns the first recurring number of [2,5,1,2,3,5,1,2,4]", function () {
    expect(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });
  it("returns the first recurring number of [2,1,1,2,3,5,1,2,4]", function () {
    expect(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });
  it("returns the first recurring number of [2,3,4,5]", function () {
    expect(firstRecurringCharacter([2, 3, 4, 5])).toEqual(undefined);
  });
  it("returns the first recurring number of [1]", function () {
    expect(firstRecurringCharacter([1])).toEqual(undefined);
  });
  it("returns the first recurring number of []", function () {
    expect(firstRecurringCharacter([])).toEqual(undefined);
  });
});
