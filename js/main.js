// WHITE LAYER FOLLOW MOUSE
$( document ).on( "mousemove", function(e) {
	$('.layer.white').css({'left':e.pageX})
})


// COLOUR SHIFT W MOUSE X

$( document ).on( "mousemove", function(e) {

	var x = (e.pageX / $(window).width() ) * 360;

	$('.bg1').css({'filter':'hue-rotate(' + x + 'deg)'})
})