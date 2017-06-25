


//password validation
$(document).ready(function () {
   $("#password, #repeatpwd").keyup(checkPasswordMatch);
});
   function checkPasswordMatch(){
var password = $("#password").val();
    var confirmPassword = $("#repeatpwd").val();
if(password.length<8){
       $("#password").parent().addClass('is-invalid');
	   $('button').prop('disabled', true);

}
else if(password != confirmPassword){
       $("#repeatpwd").parent().addClass('is-invalid');
					document.getElementById('repeatpwd').style.background="url('img/unchecked.gif') right no-repeat";
					$('button').prop('disabled', true);

					}else{$("#repeatpwd").parent().removeClass('is-invalid');
					document.getElementById('repeatpwd').style.background="url('img/checked.gif') right no-repeat";
					$('button').prop('disabled', false);

					}
}
					