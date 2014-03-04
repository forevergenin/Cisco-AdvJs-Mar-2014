define(['SalaryCalculator','SalaryCalculatorView','jquery'],function(SalaryCalculator,SalaryCalculatorView,$){
	var app = {
		start : function(){
				var calculator = new SalaryCalculator();
				var calculatorView = new SalaryCalculatorView("#salaryCalculatorTemplate",calculator);
				calculatorView.init();
				$(document.body).append(calculatorView.$root);
			}
	};
	return app;
});
