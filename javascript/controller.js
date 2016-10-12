app.controller('ScoreboardController', function($scope, jsonUrl) {

	// When currentTab is -1, 
	//   -> display dayview panel
	//   -> hide scoreboard panel
	$scope.currentTab=-1;

	// Set "Blue Jays" to default favourite team
	$scope.favouriteTeam = "Blue Jays";

	/*
		setDate() parses Date object into Year, Month, Date then calls service (jsonUrl)
		which returns complete URL for json file.
		Then, it calls getPromises service function to retrieve parsed JSON data.
		-"myData" points to game. (game could be object/array)
		-"multiple" stores boolean value, whethere mutltiple games occured or not.
		-"gameOccured" checks if any game occured on that date.
	*/
	$scope.setDate = function() {
		$scope.year = $scope.newDate.getFullYear();
		$scope.month = $scope.newDate.getMonth()+1;
		$scope.date = $scope.newDate.getDate();
		jsonUrl.setUrl($scope.year,$scope.month,$scope.date);

		jsonUrl.getPromise().then(function(response) {
			$scope.myData = response.data.data.games;
			$scope.multiple = angular.isArray($scope.myData.game);
			$scope.gameOccured = $scope.myData.hasOwnProperty('game');
		});

	};

	// Called from "Next Day" buytton, adds 1 day to "newDate"
	// Call toMainView to actiavte dayview panel.
	$scope.nextDate = function() {
		$scope.newDate.setTime($scope.newDate.getTime()+86400000);
		$scope.setDate();
		$scope.toMainView();
	}

	// Called from "Prev Day" buytton
	$scope.prevDate = function() {
		$scope.newDate.setTime($scope.newDate.getTime()-86400000);
		$scope.setDate();
		$scope.toMainView();
	}

	// Helper function for dayview panel to sort list by favourite team.  
	$scope.favTeamFirst = function(game) {
		return (game.home_team_name !== $scope.favouriteTeam) && (game.away_team_name !== $scope.favouriteTeam);
	};

	// Set currentTab to clicked game index (from JSON file, not from displayed index)
	// After retrieving index, call inningsize function.
	// Note: dayview panel is disabled by changing currentTab (not -1 anymore)
	$scope.activateTab = function(clickedGame) {
		$scope.currentTab = $scope.myData.game.indexOf(clickedGame);
		$scope.setInningSize();
	}

	// Get and set inningSize based on match data
	// Note: There could be extra innings or less innings.
	$scope.setInningSize = function() {
		$scope.inningSize = $scope.myData.game[$scope.currentTab].linescore.inning.length;
	}

	// Used for single match day 
	// Note: dayview panel is disabled by changing currentTab (not -1 anymore)
	$scope.activateTabSingle = function() {
		$scope.currentTab = 0;
		$scope.setInningSizeSingle();
	}

	// JSON file with single match store game object, not array.
	// Does the same thing as setInningSize(), but different access to "game"
	$scope.setInningSizeSingle = function() {
		$scope.inningSize = $scope.myData.game.linescore.inning.length;
	}

	// Activate dayview panel
	$scope.toMainView = function() {
		$scope.currentTab = -1;
	}

	// Set favourite team
	$scope.setFavouriteTeam = function(teamName) {
		$scope.favouriteTeam = teamName;
	}

});