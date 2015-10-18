
//why do we use the document.ready function?  What does this really do?
$(document).ready(function() {

$('#submit-btn').click(switchback);

function switchback() {
	//prevent default from resetting page after you change background
	event.preventDefault();
	//set city equal to value
	var city = $('#city-type').val(); //why does the city variable need to be within the function?  How would I pass the value from outside of the function?
	$('#city-type').val(''); //What does this line do?
	
	//conditionals by city
	if(city == 'new york city' || city == 'nyc' || city == 'new york') {
		$('body').attr('class','nyc');
	}
	else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
     else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
	}
}
})