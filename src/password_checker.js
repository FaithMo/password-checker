const data = require("./utils/data")
const logger = require("./utils/error");
const strength = require("./utils/strength")

const testCases = (testCase, password) => {
  return testCase.test(password);
};

const passwordIsValid = (password) => {
  const passwordOk = "User password is ok"
  const passwordNotOk = "User password is not ok"
  let isPasswordOk

  if (password === undefined || password === "") {
    logger.error(data.existError)
    isPasswordOk = passwordNotOk
    throw Error(data.existError)
  } else {
    if (testCases(data.shortLengthTest, password) === false) {
      logger.error(data.shortLengthError)
      isPasswordOk = passwordNotOk
    throw Error(data.shortLengthError)
    } else if (testCases(data.lowerCaseTest, password) === false) {
      logger.error(data.lowerCaseError)
      isPasswordOk = passwordNotOk
    throw Error(data.lowerCaseError)
    } else if (testCases(data.upperCaseTest, password) === false) {
      logger.error(data.upperCaseError)
      isPasswordOk = passwordNotOk
    throw Error(data.upperCaseError)
    } else if (testCases(data.digitTest, password) === false) {
      logger.error(data.digitError)
      isPasswordOk = passwordNotOk
      throw Error(data.digitError)
    } else if (testCases(data.specialCharTest, password) === false) {
      logger.error(data.specialCharError)
      isPasswordOk = passwordNotOk
    throw Error(data.specialCharError)
    } else if (testCases(data.whitespaceTest, password) === true) {
      logger.error(data.whitespaceError)
      isPasswordOk = passwordNotOk
    throw Error(data.whitespaceError)
    } else {
      isPasswordOk = passwordOk
    }
  }
  return isPasswordOk
};
const passwordStrength = (password) => {
  let counter = 0, passStrength

  if (password === undefined || password === ""){
    passStrength = strength.invalid
    logger.error(strength.invalid)
  }else if(data.whitespaceTest.test(password) === false) {
    counter++;
  }
  for (let i = 9; i < Object.values(data).length; i++) {
    if (testCases(Object.values(data)[i], password) === true) {
      counter++;
    }
  }
  if (counter >= 6) {
    logger.error(strength.strong)
    passStrength = strength.strong
  }
  if (counter === 4 || counter === 5) {
    logger.error(strength.medium)
    passStrength = strength.medium
  }
  if (counter === 3) {
    logger.error(strength.weak)
    passStrength = strength.weak
  }
};


module.exports = {passwordIsValid, passwordStrength}