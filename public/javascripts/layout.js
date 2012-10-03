(function($){
$(document).ready(function(){

	//ajax get/post sugar for Enitites and their Comments

	function getUpdateContainer(){
		var event = arguments[0],
			callback = arguments[1];

		event.stopPropagation();

		var $container = $(this),
			action = $container.attr('data-action');

		$.ajax({
			url: action,
			dataType: 'html'
		}).success(function(data){
				$container.html(data);
				$container.find('.data-container').trigger('update');
		});
	}

	function postFormUpdateContainer(){
		var event = arguments[0],
			callback = arguments[1];
		event.preventDefault();

		var $form = $(this),
			$container = $form.closest('.data-container'),
			postData = $form.serialize(),
			postUrl = $form.attr('action');
		$.post(postUrl, postData).success(function(data){
			$container.trigger('update');
		});
	}

	$('body').on('update','.comments.data-container,.entity.data-container',getUpdateContainer);

	$('body').on('submit','form.comments-form, form.button_to.delete',postFormUpdateContainer);

	$('body').on('submit','form.select_to',postFormUpdateContainer);
	$('body').on('change','.select_to select',function(){
		$(this).closest('form').submit();
	});

	//init views in Entity
	$('.entity.data-container').trigger('update');


});
})(jQuery);
