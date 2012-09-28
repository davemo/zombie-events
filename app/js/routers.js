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
      this._renderPage(new v.HomePage());
    },
    about: function() {
      this._renderPage(new v.AboutPage());
    },
    _renderPage: function(view) {
      this.container.empty().append(view.render().el);
    }
  });
  
})(APP.Routers, APP.Views, APP.Runtime);