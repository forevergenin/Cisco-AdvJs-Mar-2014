window.addEventListener("DOMContentLoaded",function(){
	test("Should be able to add two numbers",function(){
		//Arrange
		var number1 = 10, number2 = 20, expectedResult = 30;

		//Act
		var result = sum(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add two numbers in string format",function(){
		//Arrange
		var number1 = "10", number2 = "20", expectedResult = 30;

		//Act
		var result = sum(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add two functions returning numbers",function(){
		//Arrange
		var f1 = function(){ return 10;};
		var f2 = function(){ return 20;};
		var expectedResult = 30;
		//Act
		var result = sum(f1,f2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add two functions returning numbers in string format",function(){
		//Arrange
		var f1 = function(){ return "10";};
		var f2 = function(){ return "20";};
		var expectedResult = 30;
		//Act
		var result = sum(f1,f2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add more than two arguments",function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			number3 = 30;
		var expectedResult = 60;
		//Act
		var result = sum(number1, number2, number3);

		//Assert
		return result === expectedResult;
	});

	test("Should be able to add an array of numbers",function(){
		//Arrange
		var numbers = [10,20,30];
		var expectedResult = 60;
		//Act
		var result = sum(numbers);

		//Assert
		return result === expectedResult;
	});
	

})