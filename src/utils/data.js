const data = {
    existError: "password should exist",
    shortLengthError: "password should be longer than than 8 characters",
    lowerCaseError: "password should have at least one lowercase letter",
    upperCaseError: "password should have at least one uppercase letter",
    digitError: "password should at least have one digit",
    specialCharError: "password should have at least one special character",
    whitespaceError: "password should have at least one whitespace character",
    existTest: true,
    whitespaceTest: /\s/,
    shortLengthTest: /(?=.{8,})/,
    lowerCaseTest: /[a-z]/,
    upperCaseTest: /[A-Z]/,
    digitTest: /[0-9]/,
    specialCharTest: /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/
}

module.exports = data
