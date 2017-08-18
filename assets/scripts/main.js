$( "#language-curl-button" ).click(function() {

	$('#language-curl-button').addClass("active");
	$('#language-node-button').removeClass("active");
	$('#language-json-button').removeClass("active");

	$('code.curl').removeClass("hidden");
	$('code.node').addClass("hidden");
	$('code.json').addClass("hidden");
});

$( "#language-node-button" ).click(function() {

	$('#language-curl-button').removeClass("active");
	$('#language-node-button').addClass("active");
	$('#language-json-button').removeClass("active");

	$('code.curl').addClass("hidden");
	$('code.node').removeClass("hidden");
	$('code.json').addClass("hidden");
});

$( "#language-json-button" ).click(function() {

	$('#language-curl-button').removeClass("active");
	$('#language-node-button').removeClass("active");
	$('#language-json-button').addClass("active");

	$('code.curl').addClass("hidden");
	$('code.node').addClass("hidden");
	$('code.json').removeClass("hidden");
});
