/* 	
Directives for
		- Favourite Team Panel
		- Date Selector Panel
		- Dayview Panel
		- Scoreboard Panel
*/

app.directive('favouriteTeamPanel', function() {
	return {
		templateUrl: 'templates/favourite-team-panel.html'
	};
});

app.directive('dateSelectorPanel', function() {
	return {
		templateUrl: 'templates/date-selector-panel.html'
	};
});

app.directive('dayviewPanel', function() {
	return {
		templateUrl: 'templates/dayview-panel.html'
	}
});

app.directive('scoreboardPanel', function() {
	return {
		templateUrl: 'templates/scoreboard-panel.html'
	}
})