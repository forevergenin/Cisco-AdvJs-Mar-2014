function test(title,testFn){
		var result = testFn();
		var newTestItem =  document.createElement("li");
		newTestItem.innerHTML = title;
		newTestItem.classList.add(result ? "pass" : "fail");
		document.getElementById("ulTestList").appendChild(newTestItem);
	}	