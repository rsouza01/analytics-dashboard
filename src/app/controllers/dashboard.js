// app/controllers/dashboard.js


module.exports = function() {

	var controller = {};

	controller.dashboard = function(req, res) {
		res.render('ss_dashboard', {pageName: 'Dashboard',
			subHeading: 'Statistics Overview'});
	};

	return controller;
}
