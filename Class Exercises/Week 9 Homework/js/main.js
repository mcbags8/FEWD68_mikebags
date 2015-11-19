$("#cityinfo").submit(function() {
	event.preventDefault();
	var cityzip = $("#cityzip").val();
  	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityzip +',us&appid=d7565cfa5c281402a89945de1719a6ea';
  	
	$.ajax({
	   type: 'GET',
	    url: url,
	    dataType: 'jsonp',
	    success: function(json) {
	       console.log(json);
	       	var temp = Math.round((json.main.temp-273.15)*1.8+32);
      		$("#City").html("<span>"+json.name+"</span>");
      		$("#Temperature").html("<span>"+temp+"</span>");
      		$("#Description").html("<span>"+json.weather[0].description+"</span>");
      		$("#Windspeed").html("<span>"+json.wind.speed+"</span>");
		},
	    	error: function(e) {
	       	console.log(e.message);
	    }
	});
});