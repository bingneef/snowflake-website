import * as utility from "./utility";

describe("#calculateCurrentAge", () => {
  it("calculates the correct age", () => {
    const _Date = Date;

    let DATE_TO_USE = new Date("2020-jan-01");
    global.Date = jest.fn(time => (time ? new _Date(time) : DATE_TO_USE));
    expect(utility.calculateCurrentAge()).toEqual(31);

    DATE_TO_USE = new Date("2020-dec-05");
    global.Date = jest.fn(time => (time ? new _Date(time) : DATE_TO_USE));
    expect(utility.calculateCurrentAge()).toEqual(31);

    DATE_TO_USE = new Date("2020-dec-20");
    global.Date = jest.fn(time => (time ? new _Date(time) : DATE_TO_USE));
    expect(utility.calculateCurrentAge()).toEqual(32);
  });
});
