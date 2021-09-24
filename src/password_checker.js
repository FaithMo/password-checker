const { whitespaceTest } = require("./objects");
let data = require("./objects");

const testCases = (testCase, password) => {
  return testCase.test(password);
}

const passwordIsValid = (password) => {
  let passwordChecker;
  if (password == undefined || password == "") {
    passwordChecker = false;
    throw data.existError;
  } else {
    passwordChecker = false;
    if (testCases(data.shortLengthTest, password) === false) {
      passwordChecker = false;
      throw data.shortLengthError;
    } else if (testCases(data.lowerCaseTest, password) === false) {
      passwordChecker = false;
      throw data.lowerCaseError;
    } else if (testCases(data.upperCaseTest, password) === false) {
      passwordChecker = false;
      throw data.upperCaseError;
    } else if (testCases(data.digitTest, password) === false) {
      passwordChecker = false;
      throw data.digitError;
    } else if (testCases(data.specialCharTest, password) === false) {
      passwordChecker = false;
      throw data.specialCharError;
    } else if (testCases(data.whitespaceTest, password) === true) {
      passwordChecker = false;
      throw data.whitespaceError;
    } else {
      passwordChecker = true;
    }
  }
  return passwordChecker;
}
const passwordStrength = (password) => {
  let counter = 0,
    passwordExists,
    whitespace;
  if (password !== undefined || password !== "") {
    passwordExists == true;
  }
  if (/\s/.test(password) == false) {
    whitespace = true;
  }

  for (let i = 7; i < Object.values(data).length; i++) {
    if (testCases(Object.values(data)[i], password) === true) {
      counter = counter + 1;
      if (testCases(whitespaceTest, password) === false) {
        counter = counter + 1;
      }
    }
  }
  if (counter >= 6) {
    return "strong";
  }
  if (counter >= 4) {
    return "medium";
  }
  if (counter == 3) {
    return "weak";
  }
  if (password == undefined || password == "") {
    return "invalid";
  }
};
