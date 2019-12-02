//PASSWORD CHECKER.

function password_is_valid(password) {

   let valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

   let passwordChecker = valid.test(password);

    try {
        if (passwordChecker == false)
        throw "Password must have more than 8 characters, at least one lowercase letter, one uppercase letter and one digit";
    } catch (error) {
        console.log("Error: " + error);
    }
    return passwordChecker;
}

password_is_valid("222Gghhhhh");

//three consitions must be met in order for password_is_ok to return "valid password".
function password_is_ok(password) {
  let checkChars = /./;
  let checkLength = /(?=.{8,})/;
  let checkUpperCase = /[A-Z]/; 
  let checkLowerCase = /[a-z]/; 
  let checkNumber = /[0-9]/; 

  let chars = checkChars.test(password);
  let length = checkLength.test(password);
  let upperCase = checkUpperCase.test(password);
  let lowerCase = checkLowerCase.test(password);
  let number = checkNumber.test(password);

  if ( length && chars && (upperCase || lowerCase || number)) {
    console.log("Password okay!");
    return true;
  } else {
    console.log("Password is not okay!");
    return false;
  }
}

password_is_ok("222Gghhhhh");


module.exports =  password_is_valid;
module.exports = password_is_ok;