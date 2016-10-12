/* 
	< Service used by ScoreboardController > 

Build url with different date information and store it in data
When getPromise() is called, it returns promise object.

Note: within URL, Month and Day section must be 2 digits, starting with "0" if necessary.
Adding 0 at the beginning and slice 2 digits from the end will do it.
*/

app.factory("jsonUrl", function ($http){
	var data = {
		url: "",
	};

	return {

		setUrl: function(year, month, date) {
			data.url = "http://gd2.mlb.com/components/game/mlb/year_"+year.toString()+"/month_"+("0"+month.toString()).slice(-2)+"/day_"+("0"+date.toString()).slice(-2)+"/master_scoreboard.json";
		},
		getPromise: function() {
			return $http.get(data.url);
		}
	}
});