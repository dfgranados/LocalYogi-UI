$(document).ready(function(){
	var slider = new PageSlider($('body'));
	router.start();

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

	/*function to close main menu and go back to last page*/
	MyClassesView.prototype.template = Handlebars.compile($("#myclasses-view").html());
	var lastPage;
	function closeMainMenu(){
		var hash = window.location.hash;
		if(hash === "#main-menu-view")
		{
			$( ".icon-close" ).on("click",function() {
			window.location.href = lastPage;
			});
		}
		else
		{
			hash = hash.toString();
			lastPage = hash;
		}
	}

	setInterval(closeMainMenu, 500);


});