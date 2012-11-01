(function($){
	head.js(
		// init files for mvvc
		'/javascripts/mvvc/model.js',
		function(){

$(document).ready(function(){

$hostname = $('html').attr('data-hostname');
ioDispatcher = io.connect('http://'+$hostname+':3001/entities');

viewModel = new ViewModel();


ko.applyBindings(viewModel);

ioDispatcher
	.on('publishAll', function (entities) {
		viewModel.entities([]);
		entities.map(viewModel.publishEntity);
	})
	.on('removeEntity', function (id) {
		viewModel.entities.removeEntity(id);
	})
	.on('removeComment', function(x){
		console.log('nya');
		console.log(arguments);
	});



});

$('.entities').on('click','.removeComment',function(e){
	context = ko.contextFor(this);
	// ioDispatcher.emit('removeComment', context);

	// context.$parent.removeComment(context);
});



		}
	);
})(jQuery);
