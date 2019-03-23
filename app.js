// (1) get departure and arrival city strings user specifies their travel depature city and arrival city

// (2) get cuisine strings based on departure country and arrival country

// (3) city stings passed into the Zomato API via AJAX GET for city_IDs from the cities response

// (4) cuisine strings passed into the Zomato API via AJAX GET for cuisine_IDs from the cuisine response

// (5) city_IDs and cuinsineIDs are passed into Zomato API via AJAX GET for results on the search response

//      APIkey
//      entity_type = city
//      entity_id = city_id as integer
//      cuisines = list multiple separated by comma
//      collection_id= 1 means "trending this week"
//      q = search keyword...how to use?
//     
//      retuned properties of signficance: 
//          name
//          average_cost_for_two
//          price_range
//          opentable_support:
//          aggregate_rating:
//          rating_text:
//          votes:
//          has_fake_votes:
//          has_online_delivery:
//          is_delivering_now:
//          

//  query for returning restaurants based on search criteria of city and cuisineID...
//  need cuisineID per above query/AJAX

$(document).ready(function(){

var qryEntity = 287
var qryCuisine = 25
    
var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + qryEntity + "&cuisines=" + qryCuisine + "&entity_type=city"; 
    
console.log(queryURL);
    
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
    }).then(function(response) {
    
        console.log(response);    
        
    });
});