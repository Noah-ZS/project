var fnameerror = document.getElementById("fnameerror");
var lnameerror = document.getElementById("lnameerror");
var errornum = document.getElementById("numbererror");
var emailerror = document.getElementById("emailerror");
var NIC = document.getElementById("NICERROR");
var passerror = document.getElementById("passporte");
var dateerror = document.getElementById("dateerror");
var pwerror= document.getElementById("pwerror");
var pw2error= document.getElementById("pw2error");
	var tc = doucment.getElementById("tc");
var age = document.getElementById("errorage");
var submiterror = documentElement("se");

function validateFirstName(){
	
	var firstname=document.getElementById("fname").value;
	
	if (firstname.length==0){
		fnameerror.innerHTML="Field can't be empty";
		return false;
	}
	if (!firstname.match(/^[A-Za-z]+$/)){
		fnameerror.innerHTML="First Name must be written using letters only";
		return false;
	}
	fnameerror.innerHTML="<img src='check.png'>"
	return true;
	}
	
	/*------------------------------------------------------------------------------------------------------*/
	
	function validateLastName(){
	
	var lastname=document.getElementById("lname").value;
	
	if (lastname.length==0){
		lnameerror.innerHTML="Field can't be empty";
		return false;
	}
	if (!lastname.match(/^[A-Za-z]+$/)){
		lnameerror.innerHTML="Last Name must be written using letters only";
		return false;
	}
	lnameerror.innerHTML="<img src='check.png'>"
	return true;
	}
	/*------------------------------------------------------------------------------------------------------*/
	
	function validateNumber(){
		var number = document.getElementById("number").value;
		
	if (isNaN(number)){
		errornum.innerHTML="Please enter numerical values only";
		return false;
	}
	if (number.charAt(0)!=5){
		errornum.innerHTML="Number must start with 5";
		return false;
	}
		
	if (number.length!==8){
		errornum.innerHTML="Number must be 8 digits";
		return false;
	}
	
			errornum.innerHTML="<img src='check.png'>"
			return true;

	
	}
		/*------------------------------------------------------------------------------------------------------*/
		function validatePassport(){
		var pp=document.getElementById("pass").value;
		
		if (hide.style.display == 'none') {
			pp.innerHTML=" ";
			return true;
           
        }
		
if (pp.charAt(0)!=='P'){
		passerror.innerHTML="First letter must be 'P'";
		return false;
	}
		if (pp.length !=8){
		passerror.innerHTML="Passport must be 8 characters.";
		return false;
	}
	
	passerror.innerHTML="<img src='check.png'>"
			return true;

		}
		/*------------------------------------------------------------------------------------------------------*/
		function showpass() {
  var pass = document.getElementById("pw");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

	/*------------------------------------------------------------------------------------------------------*/
function confirm_reset() {
    return confirm("Are you sure you want to reset all text?");
	
}
	/*------------------------------------------------------------------------------------------------------*/
	
	 function toggle() {
        var hide = document.getElementById('hide');
		   var hide1 = document.getElementById('hide1');
        if (hide.style.display == 'block') {
            hide.style.display = 'none';
        }
        else {
            hide.style.display = 'block';
        }
		        if (hide1.style.display == 'none') {
            hide1.style.display = 'block';
        }
        else {
            hide1.style.display = 'none';
        }
    }
	
	
	
		
	/*------------------------------------------------------------------------------------------------------*/
	
function checkbox() {
  var checkBox = document.getElementById("check");
  var text = document.getElementById("tc");
  if (checkBox.checked == true){
 text.innerHTML = "<img src='check.png'>";
 return true;
  } else {
     text.innerHTML = "Please read terms and condition";
	 return false;
  }
}
	
	
	
	
	
	
	/*------------------------------------------------------------------------------------------------------*/
		
		function validatepw(){
			var pw = document.getElementById("pw").value;
			
			if (pw.length==0){
		pwerror.innerHTML="Field can't be empty";
		return false;
	}
				
			if(pw.indexOf(' ') >= 0){
    pwerror.innerHTML="Password must not contain any spaces"
	return false;
}
			
			
			if (pw.length<8){
				pwerror.innerHTML="Password should at least be 8 characters"
				return false;
			}
		if (!(/\d/.test(pw))){
				pwerror.innerHTML="Password must contain a number ";
				return false;
				
		}
		if (!/[A-Z]/.test(pw)){
				pwerror.innerHTML="Password must contain an upper case letter ";
				return false;
		}
			pwerror.innerHTML="<img src='check.png'>"
			return true;

		}
		
		/*------------------------------------------------------------------------------------------------------*/
		
			function validatepw2(){
			var pw2 = document.getElementById("pw2").value;
			var pw = document.getElementById("pw").value;
			
			if(pw2!=pw){
				pw2error.innerHTML="Password does not match"
			
			return false;
			}
			pw2error.innerHTML="<img src='check.png'>"
			return true;
			}
	/*------------------------------------------------------------------------------------------------------*/
	
	function age(){
   

    const d = new Date();
      
let y = d.getFullYear();

 
    var age=document.getElementById("errorage");
     var y2 =document.getElementById("year").value;
	     var m2 =document.getElementById("month").value;
		     var d2 =document.getElementById("date").value;



	if (isNaN(y2) ||isNaN(d2) || isNaN(m2)){
		age.innerHTML="Please enter numerical values only";
		return false;
	}

	if (d2>31 ||m2>12) {
		age.innerHTML="Please enter valid date";
		return false;
	}


	
	if ((y-y2)>18) {
		age.innerHTML=" "
		return true;
		}
age.innerHTML=" User must be over 18!"
return false;
    }
	
	
	/*------------------------------------------------------------------------------------------------------*/
	
	function validatenic(){
		var lname=document.getElementById("lname").value;
		var nic=document.getElementById("NIC").value
		var lettername=lname.charAt(0);
		var letternic=nic.charAt(0);
		
		
		if (hide1.style.display == 'none') {
			NIC.innerHTML=" ";
			return true;
           
        }
		
		if(lettername !== letternic){
			NIC.innerHTML="First character must be equal to first letter in Last name";
			return false;
		}
		if (nic.length!==14){
			NIC.innerHTML="NIC must have  14 characters";
			return false;
	}
		NIC.innerHTML="<img src='check.png'>"
			return true;
	}
		
	/*------------------------------------------------------------------------------------------------------*/
	

		function validateform(){

	if (!validateFirstName() || !validateLastName() || !validateNumber() || !validatePassport|| !checkbox() ||  !validatepw()|| !age() ||  !validatenic()||!validatepw2()){
	   return confirm("Please correct the errors and make sure that you have not leave any empty field");
	  return false;
	  }
	             location.href='success.html';

	  return true
		}
		
		
