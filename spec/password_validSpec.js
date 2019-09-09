describe("Validate password", function(){

    it("should check whether a password has 8 characters", function(){
        var result1 = password_is_valid("ghee");
        expect(result1).toBe(false);
        var result11 = password_is_valid("ghe8gheE");
        expect(result11).toBe(true);
    });

    it("should check whether a password has at least 1 uppercase letter", function(){
        var result2 = password_is_valid("ghe8ghee");
        expect(result2).toBe(false);
        var result22 = password_is_valid("ghe8gheE");
        expect(result22).toBe(true);
    });

    it("should check whether a password has  at least 1 lowercase", function(){
        var result3 = password_is_valid("GHE8GHEE");
        expect(result3).toBe(false);
        var result33 = password_is_valid("ghe8gheE");
        expect(result33).toBe(true);
    });

    it("should check whether a password has at least 1 number", function(){
        var result4 = password_is_valid("gheegheE");
        expect(result4).toBe(false);
        var result44 = password_is_valid("ghe8gheE");
        expect(result44).toBe(true);
    });

});

describe("Checks for three conditions", function(){
    
    it("should check if password passes three conditions.", function(){
        var result2 = password_is_ok("ghe8gheE");
        expect(result2).toBe(true);
        var result2 = password_is_ok("");
        expect(result2).toBe(false);
        var result2 = password_is_ok("1gh");
        expect(result2).toBe(false);
    });
})