$(':checkbox').on('click', function() {
	if ($(':checkbox:checked').length == 2) {
		$(':checkbox').attr('disabled', 'true');}
});