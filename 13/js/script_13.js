$('h2+p').each(function() {
	$(this).prev().before($(this));
})