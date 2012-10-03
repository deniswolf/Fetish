(function($){
$(document).ready(function(){

	//fix to select selected element w/o complex render playarounds
	(function fixForSelectors(){
		var $select = $('form select');
		var selected_option = $select.attr('data-selected');
		$select.val(selected_option);
	})();


	//ajax get/post sugar for Enitites and their Comments

	function getUpdateContainer(){
		var event = arguments[0];
		event.stopPropagation();

		var $container = $(this),
			action = $container.attr('data-action');

		$.ajax({
			url: action,
			dataType: 'html'
		}).success(function(data){
				$container.html(data);
		});
	}

	function postFormUpdateContainer(){
		var event = arguments[0];
		event.preventDefault();

		var $form = $(this),
			$container = $form.closest('.container'),
			postData = $form.serialize(),
			postUrl = $form.attr('action');

		$.post(postUrl, postData).success(function(){
			$container.trigger('update');
		});
	}

	$('body').on('update','.comments.container,.entity.container',getUpdateContainer);

	$('body').on('submit','form.comments-form, form.button_to.delete',postFormUpdateContainer);

	$('body').on('submit','form.select_to',postFormUpdateContainer);
	$('body').on('change','.select_to select',function(){
		$(this).closest('form').submit();
	});



});
})(jQuery);
