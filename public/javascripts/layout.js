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
				$container.trigger('after-update');
				$container.find('.data-container').trigger('update');
		});
	}

	function postForm(){
		var event = arguments[0],
			callback = arguments[1];
		event.preventDefault();

		var $form = $(this),
			$container = $form.closest('.data-container'),
			postData = $form.serialize(),
			postUrl = $form.attr('action');
		$.post(postUrl, postData);
	}

	$('body').on('update','.comments.data-container,.entity.data-container',getUpdateContainer);

	$('body').on('submit','form.comments-form, form.button_to.delete',postForm);

	$('body').on('update','.entities.thumbnails', function(){
		location.reload();
	});

	$('body').on('after-update','.entity.data-container', function(){
		var $container =$(this),
			status = $container.find('form.status .value').attr('value');

		$container.removeClass('alert-error alert-success alert');
		switch(status){
			case 'green':
				$container.addClass('alert-success');
				break;
			case 'yellow':
				$container.addClass('alert');
				break;
			case 'red':
				$container.addClass('alert-error');
				break;
		}

		$container.closest('.entities.thumbnails').masonry({
			itemSelector: '.thumbnail'
		});
	});
	$('body').on('submit','form.status',postForm);
	$('body').on('click','.entity-header .btn-group .dropdown-menu a',function(){
		var status = $(this).attr('data-status'),
		    $form = $(this).closest('.entity-header').find('form.status');

		    if (!status) return;

		    $form.find('.value').attr('value', status);
		    $form.submit();
	});

	//init views in Entity
	$('.entity.data-container').trigger('update');

	//socket.io

	var socketEntities = io.connect('http://localhost:3001/entities');
	socketEntities
		.on('updateAll',
			function(data){
				$('.entities.thumbnails').trigger('update');
			}
		)
		.on('updateEntity',
			function(entity_id){
				$('#entity'+entity_id).trigger('update');
			}
		);

});
})(jQuery);
