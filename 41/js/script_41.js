$('p[class]').each(function() {
	var cl = $(this).attr('class');
	$(this).removeAttr('class').wrap('<div>');
	$(this).parent().addClass(cl);
})