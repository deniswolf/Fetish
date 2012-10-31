(function($){
	head.js(
		// init files for mvvc
		'/javascripts/mvvc/model.js',
		function(){

$(document).ready(function(){

$hostname = $('html').attr('data-hostname');
var ioDispatcher = io.connect('http://'+$hostname+':3001/entities');

viewModel = new ViewModel();


ko.applyBindings(viewModel);

ioDispatcher
	.on('publishAll', function (entities) {
		viewModel.entities([]);
		entities.map(viewModel.publishEntity);
	})
	.on('removeEntity', function (id) {
		viewModel.entities.removeEntity(id);
	});



});




		}
	);
})(jQuery);
