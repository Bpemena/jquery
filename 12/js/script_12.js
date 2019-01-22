$('p').each(function() {
	$(this).before($(this).clone().css('color','red'));	
}).css('color','green');