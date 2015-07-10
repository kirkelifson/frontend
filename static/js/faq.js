var main = function () {
	$('#cback .clickme').click(function () {
		var which = Math.floor(($(this).index() - 1) / 2); //Workaround. TODO: Proper solution
		$('#cback .toggleme').eq(which).slideToggle(250);
	});
};

$(document).ready(main);