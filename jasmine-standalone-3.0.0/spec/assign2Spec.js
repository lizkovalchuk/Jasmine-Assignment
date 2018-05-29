describe("Test md5Encrypt and checkLogin", function(){

	describe("md5Encrypt Test to Pass", function(){
		it("md5Encrypt function should return a string 32 characters long", function(){
			var passwordMd5 = "banana";
			var length = md5Encrypt(passwordMd5).toString(CryptoJS.enc.Base64).length;
			expect(length).toEqual(32);
		});
	});

	describe("md5Encrypt Test to Pass", function(){
		it("md5Encrypt function should not return a string of more 32 characters long", function(){
			var passwordMd5 = "banana";
			var length = md5Encrypt(passwordMd5).toString(CryptoJS.enc.Base64).length;
			expect(length).not.toEqual(33);
		});
	});

	describe("checkLogin Test to Pass", function(){
		it("The checkLogin function should return true if the username and the password match a known username and matching password.", function(){
			expect(checkLogin("monkey","banana")).toEqual(true);
		});
	});

	describe("checkLogin Test to Fail", function(){
		it("The checkLogin function should return Invalid Username or password", function(){
			expect(checkLogin("horse","banana")).toEqual(false);
		});
	});

	describe("checkLogin Test to Fass", function(){
		it("The checkLogin function should return Invalid Username or password.", function(){
			expect(checkLogin("monkey","steak")).toEqual(false);
		});
	});

	describe("checkLogin Test to Fass", function(){
		it("The checkLogin function should return No username entered", function(){
			expect(checkLogin("","banana")).toEqual("empty");
		});
	});

	describe("checkLogin Test to Fass", function(){
		it("The checkLogin function should return No password entered", function(){
			expect(checkLogin("monkey","")).toEqual("empty");
		});
	});
}); // end of suit