var www = $('#test').nextAll('.www:first');
$('#test').clone().insertAfter(www);
www.insertAfter($('#test'));
$('#test').remove();