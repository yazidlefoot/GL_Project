$(".alert").hide();
/*if(localStorage.getItem("logFalse")!= null)
alert('ok');
*/
if(localStorage.getItem("mail") != null){
	$('#ifConnect').html("<h1> Vous êtes deja connecter </h1>");
}
function postLogin(pseudo, pass, success){
	$.ajax({
        dataType: "json",
        url: "ws/login/"+pseudo+"/"+pass,
        type: "POST",
    }).done(success)
	.fail(success);
}


function login(result){
	var role =  JSON.stringify(result);
	alert(role);
	if(role == "incorrect"){
		
		$(".alert").html("Wrong Username or Password");
		$(".alert").show();
		
	}
	else if (role == "mcc" || role == "mro")
	{	
		var pseudo =localStorage.getItem("tmp");
		//alert(pseudo);
		localStorage.setItem("mail",pseudo);
		localStorage.setItem("role",role);
		document.location.href="tasks_and_planes.html";
	}
	else {
		alert("role : "+role);
	}
}




$("#ok").click(function (){
	var pseudo =$('#username').val();
	var pass = $('#password').val();
	if(pseudo == ""){
		$(".alert").html("<a class='close' data-dismiss='alert' href='#'>×</a>Username required");
		$(".alert").show();
	}
	else if (pass == "") {
		$(".alert").html("<a class='close' data-dismiss='alert' href='#'>×</a>password required");
		$(".alert").show();
	}
	else{
		localStorage.setItem("tmp",pseudo);
		postLogin(pseudo,pass,login);
	}
});



