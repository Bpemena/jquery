$('select').click(function(){
	$(this).children().each(function(){
		var option = $(this), 
		i = option.index();
		inputAll = $('input[type="radio"]'); 
		if(option.prop('selected')) {inputAll.eq(i).prop('checked', true);} else {inputAll.eq(i).prop('checked', false);} 
	});
});