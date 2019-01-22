$('p:empty').each(function() {
	var a = $(this).prev().html();
	$(this).html(a);
})