var empBase = {
	id : 100,
	calculateSalary : function(){
		return this.basic + this.hra + this.da;
	}
}

function Employee(name,basic,hra,da){
	this.name = name;
	this.basic = basic;
	this.hra = hra;
	this.da = da;
}

Employee.prototype = empBase;

var e1 = new Employee("Magesh",10000,2000,3000);
e1.name // => "Magesh"
e1.id // => 100 (from the empBase)

//--------------------

function Product(id,name,cost){
	this.id = id;
	this.name = name;
	this.cost = cost;
}

Product.prototype.display = function(){
	
}

