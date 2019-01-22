$('p:empty').each(function() {
	$(this).html($(this).prevAll('h2:first').html());
})
