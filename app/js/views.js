(function(v) {

  v.Page = Backbone.View.extend({
    initialize: function() {
      this.template = JST[this.template];
      this.render();
      if(this.components) {
        _.defer(this.components);
      }
    },
    render: function() {
      this.$el.html(this.template((this.model || this.collection || new Backbone.Model({})).toJSON()));
      return this;
    }
  });

  v.Component = v.Page;

  v.Forecaster = v.Component.extend({
    template: "app/templates/components/forecaster.hb",
    el: ".forecaster"
  });

  v.HomePage = v.Page.extend({
    template: "app/templates/pages/home.hb",
    components: function() {
      var SaskatoonWeather = new Backbone.Model({
        temperature: "cold",
        city: "Saskatoon",
        timeOfDay: "evening"
      });
      new v.Forecaster({ model: SaskatoonWeather });
    }
  });

  v.AboutPage = v.Page.extend({
    template: "app/templates/pages/about.hb",
    components: function() {
      var ColumbusWeather = new Backbone.Model({
        temperature: "chilly",
        city: "Columbus",
        timeOfDay: "morning"
      });
      new v.Forecaster({ model: ColumbusWeather });
    }
  });

})(APP.Views);