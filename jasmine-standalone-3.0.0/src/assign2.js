//Assignment 2 Testing with Jasmine
var encryptedPass = "72b302bf297a228a75730123efef7c41";

function md5Encrypt(passwordInput){
	userPass = CryptoJS.MD5(passwordInput);
	return userPass;
};

function checkLogin(usernameInput, passwordInput){
		if (usernameInput === "" || passwordInput === ""){
			return "empty";
		} 
		else if(usernameInput !== "" || passwordInput !== ""){
			var encrypt_key = md5Encrypt(passwordInput);
			
			if (usernameInput === "monkey" && encrypt_key.toString(CryptoJS.enc.Base64) === encryptedPass){
				return true;
			} 
			else{
				return false;
			}
		} 
		else {
			return false;
		}
	};