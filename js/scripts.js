$(document).ready(function() {
	$('form#enter').submit(function(event) {
		var typeInput = $('input#type').val();

		$('.type').text(typeInput);

		$('#answer').show();

		event.preventDefault();
	});
});