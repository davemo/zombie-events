(function(r, v, runtime) {

  r.Main = Backbone.Router.extend({
    initialize: function() {
      _.bindAll(this);
      this.container = $("#page");
    },
    routes: {
      "saskatoon"    : "saskatoon",
      "columbus"   : "columbus",
      "*path"   : "saskatoon"
    },
    saskatoon: function() {
      this._renderPage(v.Saskatoon);
    },
    columbus: function() {
      this._renderPage(v.Columbus);
    },
    _renderPage: function(View) {
      this.container.empty().append(new View().render().el);
    }
  });

})(APP.Routers, APP.Views, APP.Runtime);