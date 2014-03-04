define([],function(){
	function SalaryCalculator(){
			var changeSubscribers = {};
			var _basic, _hra, _da, _tax;
			this.basic = function(val){
				if (typeof val === "undefined") return _basic;
				_basic = val;
				triggerChangeSubscribers("basic");
			};
			this.hra = function(val){
				if (typeof val === "undefined") return _hra;
				_hra = val;
				triggerChangeSubscribers("hra");
			};
			this.da = function(val){
				if (typeof val === "undefined") return _da;
				_da = val;
				triggerChangeSubscribers("da");
			};
			this.tax = function(val){
				if (typeof val === "undefined") return _tax;
				_tax = val;
				triggerChangeSubscribers("tax");
			};
			this.calculate = function(){
				var gross =this.basic() + this.hra() + this.da();
				this.salary = ((100-this.tax())/100) * gross;
				triggerChangeSubscribers("salary");
			};
			function triggerChangeSubscribers(attrName){
				var changeSubscribersForAttr = changeSubscribers[attrName];
				for(var i=0;i<changeSubscribersForAttr.length;i++)
					(function(index){
						setTimeout(function(){
							changeSubscribersForAttr[index]();	
						});	
					})(i);
					
					
			}
			this.addOnChange = function(attrName, callback){
				if (typeof changeSubscribers[attrName] === "undefined") 
					changeSubscribers[attrName] = [];
				changeSubscribers[attrName].push(callback);
			}
		}
	return SalaryCalculator;
});
