const data = require("./utils/data");
const logger = require("./utils/error");

const undefinedPassword = undefined,
  emptyPassword = "";

const testCases = (testCase, password) => {
  return testCase.test(password);
};

const passwordIsValid = (password) => {
  if (password == undefinedPassword || password == emptyPassword) {
    logger.error(data.existError);
    return false
  } else {
    if (testCases(data.shortLengthTest, password) === false) {
      logger.error(data.shortLengthError)
      return false
    } else if (testCases(data.lowerCaseTest, password) === false) {
      logger.error(data.lowerCaseError)
      return false
    } else if (testCases(data.upperCaseTest, password) === false) {
      logger.error(data.upperCaseError)
      return false
    } else if (testCases(data.digitTest, password) === false) {
      logger.error(data.digitError)
      return false
    } else if (testCases(data.specialCharTest, password) === false) {
      logger.error(data.specialCharError)
      return false
    } else if (testCases(data.whitespaceTest, password) === true) {
      logger.error(data.whitespaceError)
      return false
    } else {
      return true
    }
  }
};
const passwordStrength = (password) => {
  let counter = 0;

  if (password === emptyPassword || password === undefined){
      return "invalid"
  }else if(data.whitespaceTest.test(password) == false) {
    counter++;
  }
  for (let i = 9; i < Object.values(data).length; i++) {
    if (testCases(Object.values(data)[i], password) === true) {
      counter++;
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
};
module.exports = {passwordIsValid, passwordStrength}