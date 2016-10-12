app.factory("jsonUrl", function ($http){
	var data = {
		url: "",
		obj: {}
	};
	return {
		setUrl: function(year, month, date) {
		data.url = "http://gd2.mlb.com/components/game/mlb/year_"+year.toString()+"/month_"+("0"+month.toString()).slice(-2)+"/day_"+("0"+date.toString()).slice(-2)+"/master_scoreboard.json";
		// data.obj = $http.get(data.url);
		},
		getPromise: function() {
			return $http.get(data.url);
		},
		getUrl: function() {
			return data.url;
		}
	}
});