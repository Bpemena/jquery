$('p').on('click', function() {
        	$(this).prev().remove().end().next().remove();
        });