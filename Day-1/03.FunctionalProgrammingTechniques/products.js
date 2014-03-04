var products = [
	{id:1,name:"pen",cost:10,units:20,category:1},
	{id:5,name:"hen",cost:15,units:22,category:2},
	{id:9,name:"den",cost:12,units:12,category:1},
	{id:2,name:"len",cost:19,units:42,category:2},
	{id:8,name:"ten",cost:14,units:32,category:1},
	{id:4,name:"zen",cost:11,units:21,category:2}
]

function sort(list){
  for(var i=0;i<list.length-1;i++)
   for(var j=i+1;j<list.length;j++)
     if (list[i].id > list[j].id){
       var temp = list[i];
       list[i] = list[j];
       list[j] = temp;
    }
}

function sort(list,attrName){
  for(var i=0;i<list.length-1;i++)
   for(var j=i+1;j<list.length;j++)
     if (list[i][attrName] > list[j][attrName]){
       var temp = list[i];
       list[i] = list[j];
       list[j] = temp;
    }
}

function sort(list,comparerFn){
  for(var i=0;i<list.length-1;i++)
   for(var j=i+1;j<list.length;j++)
     if (comparerFn(list[i],list[j]) > 0){
       var temp = list[i];
       list[i] = list[j];
       list[j] = temp;
    }
}

sort(products) //products sorted by "id". hint : use selection sort

console.table(products);

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]


function join(leftList,rightList,leftKeySelectorFn,rightKeySelectorFn,keyComparerFn,mergeFn){
	var result = [];
	for(var i=0;i<leftList.length;i++){
		var leftKey = leftKeySelectorFn(leftList[i]);
		for(var j=0;j<rightList.length;j++){
			var rightKey = rightKeySelectorFn(rightList[j]);
			if (keyComparerFn(leftKey,rightKey) == 0){
				result.push(mergeFn(leftList[i],rightList[j]));
			}
		}
	}
	return result;
}

function groupBy(list,..){
	
}