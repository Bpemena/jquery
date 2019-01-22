var sum = 0;
$('div').each(function() {
	var $height = $(this).height();
	sum += $height;
});
console.log(sum);
