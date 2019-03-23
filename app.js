// (1) get start and end city strings 

var startCityName = "Philadelphia"
var endCityName = "London"
var startCity;
var endCity;

$(document).ready(function () {
    
    // $("#submit-button").on("click", (event) => {
    // event.preventDefault();

    // var qryStartCity = $("#startCity").val();

    var queryURL ="https://developers.zomato.com/api/v2.1/cities?q=" + startCityName + "&count=1";
    
    console.log(queryURL);
    
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
        }).then(function(responseCity1) {
    
        console.log(responseCity1);     
        
        var startCity = responseCity1.location_suggestions[0].id;
        console.log("the start city is: " + startCity1);

    // parse the object for the correct city_id
    
    // parse the object for the correct country_id

    // var qryEndCity = $("#endCity").val();
    // var qryEndCity = "London"

    // var queryEndURL ="https://developers.zomato.com/api/v2.1/cities?q=" + qryEndCity + "&count=1";
    
    // console.log(queryEndURL);
    
    //     $.ajax({
    //         url: queryEndURL,
    //         method: "GET",
    //         headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
    //     }).then(function(responseEnd) {
    
    //     console.log(responseEnd);    

    //     var endCity = responseEnd.location_suggestions[0].id;
    //     console.log("the end city is: " + endCity);
        
    //     });

    // responseStart sends back every city match
    // need to push these to the Firebase
    // prompt the select the city 
    // parse the object for the correct city_id
    // parse the object for the correct country_id

    // });

    // (2) need to apply country_id to grab cuisine strings and cuisine_id from array defined below
    //var country = ["Australia", "Brasil"];

    // based on country from Zomato qryStartCity and qryEndCity selections, grab country, and apply
    // cuisine_ID

    // (3) city_IDs and cuinsineIDs are passed into Zomato API via AJAX GET for results on the search response

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

    // var qryEntity = 287
    // var qryCuisine = 25

    var city_id = startCity;
    var cuisine_id = 227
    
    var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city_id + "&cuisines=" + cuisine_id + "&entity_type=city"; 
    
    console.log(queryURL);
    
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
        }).then(function(responseRestosCity1) {
    
        console.log(responseRestosCity1); 

        });
        
    });
});