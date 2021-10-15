const {passwordIsValid, passwordStrength} = require("../src/password_checker");
const data = require("../src/utils/data");

describe("Logging", function () {
  const logger = require("../src/utils/error");
  it("level should be an error", () => {
    expect(logger.level).toBe("error")
  });
  it("should check for the correct filename", () => {
    expect(logger.transports[1].filename).toBe('error.log')
  });
});

describe("password is valid", () => {
  it("should check whether a password has at least 1 special character", function () {
    expect(() => {
      passwordIsValid("ghe8gheE").toThrow(new Error(data.specialCharError))
    });
  });
  it("should check whether a password has at least 1 uppercase letter", function () {
    expect(() => {
      passwordIsValid("ghe8ghe%i").toThrow(new Error(data.upperCaseError))
    });
  });
  it("should check whether a password has at least 1 lowercase letter", function () {
    expect(() => {
      passwordIsValid("GHE%E8GHE").toThrow(new Error(data.lowerCaseError))
    });
  });
  it("should check whether a password has at least 1 digit", function () {
    expect(() => {
      passwordIsValid("ghe%gheE").toThrow(new Error(data.digitError))
    });
  });
});

describe("password strength", () => {
  it("return invalid if password is empty", () => {
    expect(passwordStrength("")).toBe("invalid")
  });
  it("return invalid if password is undefined", () => {
    expect(passwordStrength("")).toBe("invalid")
  });
  it("should return weak if only 3 conditions were met", () => {
    expect(passwordStrength("My")).toBe("weak")
  });it("should return medium if 4 or more conditions were met", () => {
    expect(passwordStrength("My0")).toBe("medium")
  });it("should return strong if 6 or more conditions were met", () => {
    expect(passwordStrength("My0$1nasme")).toBe("strong")
  });
});

