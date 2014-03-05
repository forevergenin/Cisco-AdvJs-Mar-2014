var app = app || {};
(function(app){
	app.start = function(){
		var calculator = new app.SalaryCalculator();
		var calculatorView = new app.SalaryCalculatorView("#salaryCalculatorTemplate",calculator);
		calculatorView.init();
		$(document.body).append(calculatorView.$root);
	}
})(app);
