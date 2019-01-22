$('#test').click(function() {
	$(this).parentsUntil('.www').find('p').css('color', 'red');
});