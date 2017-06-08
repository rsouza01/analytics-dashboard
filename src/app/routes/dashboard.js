// app/routes/dashboard.js

module.exports = function(app) {

	var controller = app.controllers.dashboard;

	app.get('/', controller.dashboard);
}
