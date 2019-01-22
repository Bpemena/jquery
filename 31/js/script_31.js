$('p').on('click', function() {
        	$(this).nextAll(':eq(4)').not('b').remove();
    });