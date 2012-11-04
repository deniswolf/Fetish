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
	.on('removeComment', function(entityId, id){
		var entity = viewModel.entities().filter(function(e){
			return e.id === entityId;
		})[0];
		if (! entity) return;
		entity.comments.remove(function(comment){
			return comment.id() === id;
		});
	});



});

$('.entities').on('click','.removeComment',function(e){
	var context = ko.contextFor(this),
		id = context.$data.id(),
		entityId = context.$parent.id;

	ioDispatcher.emit('serverRemoveComment', entityId, id);
});



		}
	);
})(jQuery);
