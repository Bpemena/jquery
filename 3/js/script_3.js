$('p').each(function() {
	var text = $(this).html();
	$(this).replaceWith('<div>' + text + '</div>')
});