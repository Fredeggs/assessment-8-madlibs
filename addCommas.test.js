const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("works with positive 3(or less) digit numbers", () => {
    expect(addCommas(352)).toBe("352");
  });

  test("works with positive 4(or more) digit numbers", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("works with negative 3(or less) digit numbers", () => {
    expect(addCommas(-352)).toBe("-352");
  });

  test("works with negative 4(or more) digit numbers", () => {
    expect(addCommas(-1000000)).toBe("-1,000,000");
  });
});
