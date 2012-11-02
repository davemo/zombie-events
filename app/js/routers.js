(function(r, v, runtime) {

  r.Main = Backbone.Router.extend({
    initialize: function() {
      _.bindAll(this);
      this.container = $("#page");
    },
    routes: {
      "home"    : "home",
      "about"   : "about",
      "*path"   : "home"
    },
    home: function() {
      this._renderPage(v.HomePage);
    },
    about: function() {
      this._renderPage(v.AboutPage);
    },
    _renderPage: function(View) {
      this.container.empty().append(new View().render().el);
    }
  });

})(APP.Routers, APP.Views, APP.Runtime);