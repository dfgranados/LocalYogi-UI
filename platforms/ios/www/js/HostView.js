var HostView = function() {

  this.initialize = function() {
      this.$el = $('<div/>');
  };

  this.render = function() {
      this.$el.html(this.template());
      return this;
  };

  this.initialize();

};


var HostVolunteerView = function() {

  this.initialize = function() {
      this.$el = $('<div/>');
  };

  this.render = function() {
      this.$el.html(this.template());
      return this;
  };

  this.initialize();

};