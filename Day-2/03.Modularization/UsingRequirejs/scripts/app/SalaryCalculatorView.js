define(['jquery'],function($){
	function SalaryCalculatorView(rootElementId,model){
		var salaryCalculator = model;
		var rootElementId = rootElementId;
		var that = this;

		function onBasicChange(){
			that.$root.find("#txtBasic").val(salaryCalculator.basic());
		}

		function onHraChange(){
			that.$root.find("#txtHra").val(salaryCalculator.hra())
		}

		function onDaChange(){
			that.$root.find("#txtDa").val(salaryCalculator.da())
		}

		function onTaxChange(){
			that.$root.find("#rangeTax").val(salaryCalculator.tax())
			that.$root.find("#spanTax").html(salaryCalculator.tax());
		}

		this.init = function(){

			this.$root = $($(rootElementId).html());
			

			salaryCalculator.addOnChange("salary" , onSalaryChange);
			salaryCalculator.addOnChange("basic" , onBasicChange);
			salaryCalculator.addOnChange("hra" , onHraChange);
			salaryCalculator.addOnChange("da" , onDaChange);
			salaryCalculator.addOnChange("tax" , onTaxChange);

			this.$root.on("change","#txtBasic",onTxtBasicChange);
			this.$root.on("change","#txtHra",onTxtHraChange);
			this.$root.on("change","#txtDa",onTxtDaChange);
			this.$root.on("change","#rangeTax",onRangeTaxChange);
			this.$root.on("click","#btnCalculate",onBtnCalculateClick);

			//populate the defaults
			this.$root.find("#txtBasic").val(salaryCalculator.basic());
			this.$root.find("#txtHra").val(salaryCalculator.hra());
			this.$root.find("#txtDa").val(salaryCalculator.da());
			this.$root.find("#rangeTax").val(salaryCalculator.tax());
			this.$root.find("#spanTax").html(salaryCalculator.tax());
			
		}
		function onTxtBasicChange(){
			salaryCalculator.basic(parseInt(that.$root.find("#txtBasic").val()));
		}

		function onTxtHraChange(){
			salaryCalculator.hra(parseInt(that.$root.find("#txtHra").val()));
		}
		function onTxtDaChange(){
			salaryCalculator.da(parseInt(that.$root.find("#txtDa").val()));
		}
		function onRangeTaxChange(){
			salaryCalculator.tax(parseInt(that.$root.find("#rangeTax").val()));
		}
		function onSalaryChange(){
			that.$root.find("#divSalary").html(salaryCalculator.salary);
		}

		function onBtnCalculateClick(){
			salaryCalculator.calculate();
		}
	}
	return SalaryCalculatorView;
});

