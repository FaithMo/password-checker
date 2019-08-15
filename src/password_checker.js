//PASSWORD CHECKER.

var password;

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
//password_is_valid("ASKh5");

//three consitions must be met in order for password_is_ok to return "valid password".
function password_is_ok(password) {

    let checkChars = /./g; //Avoids empty spaces in password
    let checkLength = /(?=.{8,})/g; 
    let checkUpperCase = /[A-Z]/g;
    let checkLowerCase = /[a-z]/g;
    let checkNumber = /[0-9]/g;

    let characters = checkChars.test(password);
    let upperCase = checkUpperCase.test(password);
    let lowerCase = checkLowerCase.test(password);
    let numberChecker = checkNumber.test(password);

    if (checkLength && characters)  {  //most essential conditions
        if (lowerCase || upperCase || numberChecker) {
            console.log("Password is valid");
            return true;
        } else{
            console.log("Password does not have a lowercase letter or uppercase letter or number.");
            return false;
        }
    }else{
        console.log("Password is empty");
        return false;
    }
}

//console.log(password_is_ok(password));

