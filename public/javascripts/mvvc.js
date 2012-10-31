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

ioDispatcher.on('publishAll', function (entities) {
		viewModel.entities([]);
		entities.map(viewModel.publishEntity);
	});
});






		}
	);
})(jQuery);
