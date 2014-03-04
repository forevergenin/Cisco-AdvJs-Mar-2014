require.config({
	baseUrl : "/scripts/app",
	paths : {
		"jquery" : "/scripts/lib/jquery",
		"lib" : "../lib"
	}
});
require(['mainApp','jquery'],function(app,$){
		console.log($);
			$(function(){
				app.start();
			});
		});