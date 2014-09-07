// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    /*LOGIN VIEWS*/
    LoginView.prototype.template = Handlebars.compile($("#login-view").html());
    RegisterView.prototype.template = Handlebars.compile($("#register-tpl").html());
    /*NAV BAR VIEWS*/
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    MyClassesView.prototype.template = Handlebars.compile($("#myclasses-view").html());
    SearchView.prototype.template = Handlebars.compile($("#search-view").html());
    FilterView.prototype.template = Handlebars.compile($("#filter-view").html());
    /*MAIN MENU VIEWS*/
   MainMenuView.prototype.template = Handlebars.compile($("#main-menu-view").html());
   ClassesView.prototype.template = Handlebars.compile($("#classes-tpl").html());
   MapView.prototype.template = Handlebars.compile($("#map-tpl").html());
   HostView.prototype.template = Handlebars.compile($("#host-tpl").html());
   SettingsView.prototype.template = Handlebars.compile($("#settings-tpl").html());
   InviteView.prototype.template = Handlebars.compile($("#invite-tpl").html());
   /*HOST VIEWS*/
   HostVolunteerView.prototype.template = Handlebars.compile($("#host-volunteer-view").html());


    var service = new EmployeeService();

    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        slider.slidePage(new LoginView(service).render().$el);
    });

  service.initialize().done(function () {
  router.addRoute('', function() {
      slider.slidePage(new LoginView(service).render().$el);
  });

      /*LOGIN VIEWS*/

     router.addRoute('register-tpl', function() {
          slider.slidePage(new RegisterView().render().$el);
    });

     /*NAV BAR VIEWS*/

      router.addRoute('home-tpl', function() {
          slider.slidePage(new HomeView().render().$el, "fast");
    });

       router.addRoute('myclasses-view', function() {
         slider.slidePage(new MyClassesView().render().$el, "fast");
    });

        router.addRoute('search-view', function() {
         slider.slidePage(new SearchView().render().$el, "fast");
    });

         router.addRoute('filter-view', function() {
         slider.slidePage(new FilterView().render().$el, "fast");
    });

     /*MAIN MENU VIEWS*/

      router.addRoute('main-menu-view', function() {
          slider.slidePageFrom(new MainMenuView().render().$el, "left");
    });

      router.addRoute('classes-tpl', function() {
          slider.slidePage(new ClassesView().render().$el, "fast");
    });

      router.addRoute('map-tpl', function() {
          slider.slidePage(new MapView().render().$el, "fast");
    });

      router.addRoute('host-tpl', function() {
          slider.slidePage(new HostView().render().$el, "fast");
    });

      router.addRoute('settings-tpl', function() {
          slider.slidePage(new SettingsView().render().$el, "fast");
    });

      router.addRoute('invite-tpl', function() {
          slider.slidePage(new InviteView().render().$el, "fast");
    });

      /*HOST VIEW*/
     router.addRoute('host-volunteer-view', function() {
          slider.slidePage(new HostVolunteerView().render().$el);
    });


  router.addRoute('employees/:id', function(id) {
      service.findById(parseInt(id)).done(function(employee) {
          slider.slidePage(new EmployeeView(employee).render().$el);
      });
  });

  router.start();
});

    /* --------------------------------- Event Registration -------------------------------- */
    
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
      FastClick.attach(document.body);
      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);

}());
