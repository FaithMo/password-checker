const {passwordIsValid, passwordStrength} = require("../src/password_checker");
const strength = require("../src/utils/strength")


describe("password is valid", () => {
  it("should check whether password exists or not", () => {
    expect(() => {
      passwordIsValid("")
    }).toThrow(new Error("password should exist"))
  });
  it("should check whether a password has at least 1 special character", ()  => {
    expect(() => {
      passwordIsValid("ghe8gheE456d")
    }).toThrow( new Error("password should have at least one special character"))
  });
  it("should check whether a password has at least 1 uppercase letter", () => {
    expect(() => {
      passwordIsValid("ghe8ghe%i")
    }).toThrow(new Error("password should have at least one uppercase letter"))
  });
  it("should check whether a password has at least 1 lowercase letter", () => {
    expect(() => {
      passwordIsValid("GHE%E8GHE")
    }).toThrow(new Error("password should have at least one lowercase letter"))
  });
  it("should check whether a password has at least 1 digit", () => {
    expect(() => {
      passwordIsValid("ghe%gheE")
    }).toThrow(new Error("password should at least have one digit"))
  });
});

describe("password strength", () => {
  it("return invalid if password is empty", () => {
    expect(() => {
      passwordStrength("").toThrow( new Error("invalid"))
    })
  });
  it("return invalid if password is undefined", () => {
    expect(() => {
      passwordStrength().toThrow(new Error("invalid"))
    })
  });
  it("should return weak if only 3 conditions were met", () => {
    expect(() => {
      passwordStrength("My").toThrow(new Error("weak"))
    })
  });
  it("should return medium if 4 or more conditions were met", () => {
    expect(()=> {
      passwordStrength("My0").toThrow(new Error("medium"))
    })
  });
  it("should return strong if 6 or more conditions were met", () => {
    expect(()=> {
      passwordStrength("My0$1nasme").toThrow(new Error("strong"))
    })
  });
});

