var arr1 = $('#text').prevAll().get();
var arr2 = $('#text').nextAll().get();
$('#text').prevAll().remove().end().nextAll().remove().end().before(arr2).after(arr1);
