console.log('js goes here you sick little monkey');

$(document).ready(function(){

	console.log('ready');

    $('.bg img').fullscreener();

    $.getJSON("/api/button/count", function( data ) {

    	$('.text h1').html(data.clicks);

    });

    $('.text button').on('touchstart click', function(e){

        e.stopPropagation(); e.preventDefault();
        
    	$.getJSON("/api/button/add", function( data ) {

	    	$('.text h1').html(data.clicks);

	    });
    })

});