var array = [];
$('#test').parents().each( function() {
	var cl = $(this).attr('class');
	if (cl) {array = array.concat($class.split(' '));}
});
	alert(array);