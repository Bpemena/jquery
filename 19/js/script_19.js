var $prev = $('#test').prevAll(':eq(1)').html();
var $next = $('#test').nextAll(':eq(1)').html();
$('#test').prevAll(':eq(1)').html($next);
$('#test').nextAll(':eq(1)').html($prev);