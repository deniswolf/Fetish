(function($){
	head.js(
		// init files for mvvc
		'/javascripts/mvvc/model.js',
		function(){



$(document).ready(function(){

var dispatcher = $({});

var viewModel = new ViewModel();


$.getJSON('/mvvc.json')
	.success(function(data){
		console.log('JSON data:',data);
	});

// dispatcher.on('data', function displayData (e, data) {
// 	var allExperiments = data;

// 	var displayTypes = ['abTest', 'featureToggle', 'ordered'];
// 	displayTypes.forEach(function (type) {
// 		var dataForType =  filter.byType(allExperiments, type);
// 		if (dataForType.length)	viewModel[type](dataForType);
// 	});
// });

ko.applyBindings(viewModel);

});






		}
	);
})(jQuery);
