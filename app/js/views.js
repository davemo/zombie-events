(function(v) {

  // Simple Example Models
  var SaskatoonWeather = new Backbone.Model({
    temperature: "cold",
    city: "Saskatoon",
    timeOfDay: "evening"
  });

  var ColumbusWeather = new Backbone.Model({
    temperature: "chilly",
    city: "Columbus",
    timeOfDay: "morning"
  });

  // A common render function for our abstractions
  var render = function() {
    this.$el.html(this.template((this.model || this.collection || new Backbone.Model({})).toJSON()));
    if(this.components) {
      _.defer(this.components);
    }
    return this;
  };

  // Abstractions
  v.Page      = Backbone.View.extend({ render: render });
  v.Component = Backbone.View.extend({ render: render });

  // Components
  v.Forecaster = v.Component.extend({
    template: JST["app/templates/components/forecaster.hb"],
    el: ".forecaster"
  });

  // Pages
  v.Saskatoon = v.Page.extend({
    template: JST["app/templates/pages/saskatoon.hb"],
    components: function() {
      new v.Forecaster({ model: SaskatoonWeather }).render();
    }
  });

  v.Columbus = v.Page.extend({
    template: JST["app/templates/pages/columbus.hb"],
    components: function() {
      new v.Forecaster({ model: ColumbusWeather }).render();
    }
  });

})(APP.Views);