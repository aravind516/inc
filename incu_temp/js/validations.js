


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

//if others is selected make text field required
function makeothersreq(){
	
if($("#check-9").is(':checked')){
		  
		  $("#others").attr('required',true);
	  }
	  else
		  $("#others").prop('required',false);
		  $("#others").attr('value',"");
	  
	  

	
	
}


//select at least one checkbox of sector and stage
function validate(){

   if($(".sector:checkbox:checked").length == 0){
	   		  
		alert("please select at least one sector to invest");

       return false;
   } else if($(".stage:checkbox:checked").length == 0){
		alert("please select at least one stage of startup to invest");

       return false;
   }else {
   
       return true;
   }

}
		