$(document).ready(function(){
	/*show bottom navigation when a user has logged in*/
	
	function navBarVisibility() {
		var hash = window.location.hash;
		hash = hash.toString();
		
		if(hash === "")
		{
			$(".bar-tab").css("display", "none");
		}
		else
		{
			$(".bar-tab").css("display", "block");
		}

	}
	setInterval(navBarVisibility, 1);

	/*$( ".login-btn" ).on("click",function() {
		$('.bar-tab').css("display", "block");
	});*/

});