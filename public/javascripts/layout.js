(function($){
$(document).ready(function(){

	//fix to select selected element w/o complex render playarounds
	(function fixForSelectors(){
		var $select = $('form select');
		var selected_option = $select.attr('data-selected');
		$select.val(selected_option);
	})();


});
})(jQuery);
