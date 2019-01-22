$('#number').blur(function(){ 
	var a = $(this); 
	$(':checkbox').each(function (i) {
		var box = $(this);
		if(i + 1 === a.val()*1) {box.prop('checked', true);} else {box.prop('checked', false);} 
	}) 
}) 