$(document).ready(function() {
	
	$('#contact .col1 h2 a').mouseenter(function() {
		$(this).html('me@coryvia.com');
	});

	$('#contact .col1 h2 a').mouseleave(function() {
		$(this).html('Email Me');
	});
	
	$('#contact .col2 h2 a').mouseenter(function() {
		$(this).html('"Fill me in!"');
	});

	$('#contact .col2 h2 a').mouseleave(function() {
		$(this).html('Contact Form');
	});
	
	$('#contact .col3 h2 a').mouseenter(function() {
		$(this).html('Let\'s Connect');
	});

	$('#contact .col3 h2 a').mouseleave(function() {
		$(this).html('LinkedIn');
	});
});