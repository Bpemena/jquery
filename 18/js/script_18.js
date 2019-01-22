var a = $('#test').prev().html();
var b = $('#test').next().html();
$('#test').prepend(a).append(b);