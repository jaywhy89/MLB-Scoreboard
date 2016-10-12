app.controller('DateController', function($scope, jsonUrl) {

	$scope.currentTab=-1;
	$scope.favouriteTeam = "Blue Jays"
	$scope.setDate = function() {
		$scope.year = $scope.newDate.getFullYear();
		$scope.month = $scope.newDate.getMonth()+1;
		$scope.date = $scope.newDate.getDate();
		jsonUrl.setUrl($scope.year,$scope.month,$scope.date);
		jsonUrl.getPromise().then(function(response) {
			$scope.myData = response.data.data.games;
			$scope.multiple = angular.isArray($scope.myData.game);
			$scope.gameOccured = $scope.myData.hasOwnProperty('game');
		})

	};

	$scope.nextDate = function() {
		$scope.newDate.setTime($scope.newDate.getTime()+86400000);
		$scope.setDate();
		$scope.toMainView();
	}

	$scope.prevDate = function() {
		$scope.newDate.setTime($scope.newDate.getTime()-86400000);
		$scope.setDate();
		$scope.toMainView();
	}

	$scope.favTeamFirst = function(game) {
		return (game.home_team_name !== $scope.favouriteTeam) && (game.away_team_name !== $scope.favouriteTeam);
	};

	$scope.activateTab = function($index) {
		$scope.currentTab = $index;
		$scope.setInningSize();
	}

	$scope.setInningSize = function() {
		$scope.inningSize = $scope.myData.game[$scope.currentTab].linescore.inning.length;
	}

	$scope.activateTabSingle = function() {
		$scope.currentTab = 0;
		$scope.setInningSizeSingle();
	}

	$scope.setInningSizeSingle = function() {
		$scope.inningSize = $scope.myData.game.linescore.inning.length;
	}

	$scope.toMainView = function() {
		$scope.currentTab = -1;
	}

	$scope.setFavouriteTeam = function(teamName) {
		$scope.favouriteTeam = teamName;
	}
});