describe("Salary Calculator Application", function(){
	describe("Salary Calculator Model",function(){
		it("When no tax is applied the salary should equal to the sum of basic, hra & da",function(){
			var calculator = new app.SalaryCalculator();
			calculator.basic(10000);
			calculator.hra(2000);
			calculator.da(3000);
			calculator.tax(0);

			calculator.calculate();

			expect(calculator.salary).toBe(15000);
		});
	});
	describe("Salary Calculator View",function(){
		it("should reflect the basic in the basic textbox when the model is chaning",function(done){
			var model = new app.SalaryCalculator();
			var view = new app.SalaryCalculatorView("#salaryCalculatorTemplate",model);
			view.init();
			model.basic(10000);
			
			setTimeout(function(){
				console.log(view.$root.find("#txtBasic").val());
				expect(view.$root.find("#txtBasic").val()).toBe('10000');
			});
			
			done();
		});
	});

});