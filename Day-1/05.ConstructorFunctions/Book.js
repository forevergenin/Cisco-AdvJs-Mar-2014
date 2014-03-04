function Book(id,title,cost){
  if (this.constructor.name !== "Book") 
     return new Book(id,title,cost);
  this.id = id;
  this.title = title;
  this.cost = cost;
}

//modify the above function to satisfy the following conditions
/*
1. id cannot be modified after the object is created
2. title cannot be set to a null string
3. cost cannot be a lesser value than the existing cost
*/

function Book(id,title,cost){
  if (this.constructor.name !== "Book") 
     return new Book(id,title,cost);
  var _id = id,
      _title = title,
      _cost = cost;
  this.id = function(){
     return _id;
  };
  this.title = function(val){
     if (typeof val === "undefined") return _title;
     if (val !== "") _title = val;
  };
  this.cost = function(val){
     if (typeof val === "undefined") return _cost;
     if (val > _cost) _cost = val;
  }
}

