// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-view").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-view").html());
    /*LOGIN VIEWS*/
    LoginView.prototype.template = Handlebars.compile($("#login-view").html());
    /*REGISTER VIEWS*/
      RegisterView.prototype.template = Handlebars.compile($("#register-view").html());
      RegisterViewA.prototype.template = Handlebars.compile($("#register-view-a").html());
      RegisterViewB.prototype.template = Handlebars.compile($("#register-view-b").html());
      RegisterViewC1.prototype.template = Handlebars.compile($("#register-view-c1").html());
      RegisterViewC2.prototype.template = Handlebars.compile($("#register-view-c2").html());
      RegisterViewD.prototype.template = Handlebars.compile($("#register-view-d").html());
    /*NAV BAR VIEWS*/
    /*HOME VIEWS*/
      HomeView.prototype.template = Handlebars.compile($("#home-view").html());
      AddPostView.prototype.template = Handlebars.compile($("#add-post").html());
    MyClassesView.prototype.template = Handlebars.compile($("#myclasses-view").html());
    SearchView.prototype.template = Handlebars.compile($("#search-view").html());
    FilterView.prototype.template = Handlebars.compile($("#filter-view").html());
    /*MAIN MENU VIEWS*/
   MainMenuView.prototype.template = Handlebars.compile($("#main-menu-view").html());
   /*CLASSES VIEWS*/
   ClassesView.prototype.template = Handlebars.compile($("#classes-view").html());
   AddClassView.prototype.template = Handlebars.compile($("#add-class").html());
   MapView.prototype.template = Handlebars.compile($("#map-view").html());
    /*HOST VIEWS*/
     HostView.prototype.template = Handlebars.compile($("#host-view").html());
     HostVolunteerView.prototype.template = Handlebars.compile($("#host-volunteer-view").html());
   SettingsView.prototype.template = Handlebars.compile($("#settings-view").html());
   InviteView.prototype.template = Handlebars.compile($("#invite-view").html());
   /*HOST VIEWS*/


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

     router.addRoute('register-view', function() {
          slider.slidePage(new RegisterView().render().$el);
    });

     router.addRoute('register-view-a', function() {
          slider.slidePage(new RegisterViewA().render().$el);
    });

     router.addRoute('register-view-b', function() {
          slider.slidePage(new RegisterViewB().render().$el);
    });

     router.addRoute('register-view-c1', function() {
          slider.slidePage(new RegisterViewC1().render().$el);
    });

     router.addRoute('register-view-c2', function() {
          slider.slidePage(new RegisterViewC2().render().$el);
    });

     router.addRoute('register-view-d', function() {
          slider.slidePage(new RegisterViewD().render().$el);
    });

     /*NAV BAR VIEWS*/

     /*HOME VIEW*/
      router.addRoute('home-view', function() {
          slider.slidePage(new HomeView().render().$el, "fast");
    });

      router.addRoute('add-post', function() {
          slider.slidePage(new AddPostView().render().$el);
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

      /*CLASSES VIEWS*/

      router.addRoute('classes-view', function() {
          slider.slidePage(new ClassesView().render().$el, "fast");
    });

       router.addRoute('add-class', function() {
          slider.slidePage(new AddClassView().render().$el);
    });

      router.addRoute('map-view', function() {
          slider.slidePage(new MapView().render().$el, "fast");
    });

      router.addRoute('host-view', function() {
          slider.slidePage(new HostView().render().$el, "fast");
    });

      router.addRoute('settings-view', function() {
          slider.slidePage(new SettingsView().render().$el, "fast");
    });

      router.addRoute('invite-view', function() {
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
