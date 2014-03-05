require.config({
	baseUrl : "/scripts/app",
	paths : {
		"jquery" : "/scripts/lib/jquery",
		"lib" : "/scripts/lib/"
	}
});
require(['mainApp','jquery'],function(app,$){
			$(function(){
				app.start();
			});
		});