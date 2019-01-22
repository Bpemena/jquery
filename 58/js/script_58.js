$(':checkbox').each(function() {
	$(this).prop('checked', !$(this).prop('checked'));
});