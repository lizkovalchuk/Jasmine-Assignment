// create nested functions within onSubmit function

//alert("helo");

var userName = "monkey";
var password = "banana";
var encryptedPass = "72b302bf297a228a75730123efef7c41";
var outputMessage = document.getElementById("getMD5__output");
var usernameInput = "";
var passwordInput = "";

	function submit_form(){

		var usernameInput = document.getElementById("loginForm__input_name").value.toLowerCase();
		var passwordInput = document.getElementById("loginForm__input_password").value;
		var result = checkLogin(usernameInput, passwordInput);

		if(result === true){
			outputMessage.innerHTML = "Welcome back!";
		}
		else if(result=="empty"){
			outputMessage.innerHTML = "Please enter the credentials";
		}
		else{
			outputMessage.innerHTML = "Incorrect login credentials";
		}

		return false;		
	}; // end of submit_form funtion



	function checkLogin(usernameInput, passwordInput){

		function md5Encrypt(passwordInput){
			var userPass = CryptoJS.MD5(passwordInput);
			return userPass;
		};

		var encrypt_key = md5Encrypt(passwordInput);

		if (usernameInput === "" || passwordInput === ""){
			return "empty";
		} 
		else if(usernameInput !== "" || passwordInput !== ""){
//			var encrypt_key = md5Encrypt(passwordInput);
	//		md5Encrypt(passwordInput);
			
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


