$(document).ready(function(){
	var slider = new PageSlider($('body'));
	router.start();


	/*show bottom navigation for pages in the "show" array, remove it for others*/

	function navBarVisibility() {
		var hash = window.location.hash;
		hash = hash.toString();

		var showNavBar = [];
		var hideNavBar = ["", "#host-volunteer-view", "#main-menu-view", "#register-view", "#register-view-a", "#register-view-b", "#register-view-c1", "#register-view-c2", "#register-view-d"];

		
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

	/*add active styling to home first time after login*/
	$(".icon-home").parent().addClass("active");

	/*change the color of the navbar menu items to the currently active page*/
	$(".tab-item").on("click", function(){
		$(".tab-item").removeClass("active");
		$(this).addClass("active");
	});


});