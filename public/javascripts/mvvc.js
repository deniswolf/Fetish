(function($){
	head.js(
		// init files for mvvc
		'/javascripts/mvvc/model.js',
		function(){

$hostname = $('html').attr('data-hostname');


$(document).ready(function(){
var ioDispatcher = io.connect('http://'+$hostname+':3001/entities');

var dispatcher = $({});

viewModel = new ViewModel();



ko.applyBindings(viewModel);

ioDispatcher.on('connect', function (socket) {
	$.getJSON('/mvvc.json')
		.success(function(data){
			var entities = data;
			entities.forEach(function(entity){
				viewModel.publishEntity(entity);
			});
		});
	});
});






		}
	);
})(jQuery);
