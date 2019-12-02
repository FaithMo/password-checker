let  password_is_valid = require('../src/password_checker');
let password_is_ok = require('../src/password_checker');

describe("Validate password", function(){

    it("should check whether a password has 8 characters", function(){

        expect(password_is_valid("ghee")).toBe(false);
        expect(password_is_valid("ghe8gheE")).toBe(true);

    });

    it("should check whether a password has at least 1 uppercase letter", function(){

        expect(password_is_valid("ghe8gheE")).toBe(true);

    });

    it("should check whether a password has  at least 1 lowercase", function(){

        expect(password_is_valid("ghe8gheE")).toBe(true);
    });

    it("should check whether a password has at least 1 number", function(){

        expect(password_is_valid("ghe8gheE")).toBe(true);
    });

});

describe("Checks for three conditions", function(){
    
    it("should check if password passes three conditions.", function(){

        expect(password_is_ok("ghe8gheE")).toBe(true);
        expect(password_is_ok("")).toBe(false);
        expect(password_is_ok("1gh")).toBe(false);
        
    });
})