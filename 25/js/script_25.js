$('p').each(function(a) {
	var text = $(this).html();
	$(this).html(text*a);
});