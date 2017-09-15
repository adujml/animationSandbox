$('.box').hover(function(){
	$(this).children('.shutter-overlay').slideDown(125);
}, function(){
	$(this).children('.shutter-overlay').slideUp(125);
});