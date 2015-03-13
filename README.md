# Zombie Events in Backbone.JS Views

![visualization](https://raw.githubusercontent.com/davemo/zombie-events/master/visualization.png)

This is the source code for a [screencast](http://www.youtube.com/watch?v=BH4Cdq3cV44) I did on a quick examination of view level zombie events in Backbone.JS, how they manifest and one solution to help eliminate them. There are 3 commits in this codebase that walk through the steps I go through in the screencast.

# Running the App

1. Clone this repo
2. npm install
3. grunt run

# Other Notes

This project was built with [Lineman](https://github.com/testdouble/lineman) but makes significant modifications to portions of it, including:

1. Custom [Express.JS](http://expressjs.com/) server with stubbed endpoints
2. [Testem](https://github.com/airportyh/testem) for running specs separate from the lineman process: testem -f config/spec.json
3. [Twitter Bootstrap](https://github.com/twitter/bootstrap) with a basic single page app layout and navbar
4. Some default styling and Bootstrap mixins.less, useful for many projects
5. [Backbone](http://documentcloud.github.com/backbone/) router, models, collections and views in a way I usually organize things
6. Removal of default coffeescript files that lineman generates; you can still write coffeescript with lineman if you so desire, it's just not where I start :)

If you want a boilerplate project that features this application structure you can generate and customize one yourself with [Lineman](https://github.com/testdouble/lineman) or clone a copy of my [Lineman-Bootstrap-Boilerplate](https://github.com/davemo/lineman-bootstrap-boilerplate).

# License

MIT
