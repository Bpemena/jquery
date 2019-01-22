$('input').each(function() {
	var a = $(this).val();
	$(this).val(a*a);
})
