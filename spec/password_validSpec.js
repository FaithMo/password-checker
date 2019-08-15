describe("Validate password", function(){

    it("should check whether a password has 8 characters, at least 1 upper and lower case and a number", function(){
        var result1 = password_is_valid(password);
        expect(result1).toBe(false);
    });

    it("should check if password passes three conditions.", function(){
        var result2 = password_is_ok(password);
        expect(result2).toBe(true);
    });
});