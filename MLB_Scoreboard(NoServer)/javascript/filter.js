/*
	Helper function for ng-repeat filter.
	It lets users to use ng-repeat with custom iteration number.
*/

app.filter('range', function() {
	return function(input, total) {

		total = parseInt(total);
		for (var i=0; i<total; i++) {
			input.push(i);
		}
		return input;
	};
});