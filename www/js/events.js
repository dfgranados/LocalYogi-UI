$(document).ready(function(){
	/*show bottom navigation for pages in the "show" array, remove it for others*/

	function navBarVisibility() {
		var hash = window.location.hash;
		hash = hash.toString();

		var showNavBar = [];
		var hideNavBar = ["", "#host-volunteer-view", "#main-menu-view"];

		
		if(contains(hideNavBar, hash))
		{
			$(".bar-tab").css("display", "none");
		}
		else
		{
			$(".bar-tab").css("display", "block");
		}

		}

	/*check page every ten miliseconds for url hash*/
	setInterval(navBarVisibility, 10);

	/*function to check if an array contains a specific object*/
	function contains(a, obj) {
		var i = a.length;
		while (i--) {
			if (a[i] === obj) {
				return true;
			}
		}
		return false;
	}

	/*$( ".login-btn" ).on("click",function() {
		$('.bar-tab').css("display", "block");
	});*/
});