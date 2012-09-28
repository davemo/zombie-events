(function(v, runtime) {
  
  v.Page = Backbone.View.extend({
      template: _.template("<h2>I am the {{ title }} page</h2><input type='button' class='say-hi' value='Say Hi'/>"),
      initialize: function() {
        this.render();
      },
      render: function() {
        this.$el.html(this.template({ title: this.title }));
        return this;
      }
  });
  
  v.HomePage = v.Page.extend({
      title: "Home",
      events: {
          "click .say-hi" : function() { alert('I am Home'); }
      }
  });

  v.AboutPage = v.Page.extend({
      title: "About",
      events: {
          "click .say-hi" : function() { alert('I am About'); }
      }
  });

})(APP.Views, APP.Runtime);