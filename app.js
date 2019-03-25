// (1) get start and end city strings 

var city1name = "Mumbai"
var city2name = "Philadelphia"
var city1_id;
var city2_id;
var city1country_id;
var city2country_id;
var resto_id;
var restoName;
var restoImg;
var restoURL;
var aggRating;
var rating_text;
var currency;
var avg_cost_two;
var price_range;
var cuisine_id;
var cuisines;
var votes;
var pairedValKey;
var obj_city1 = [];
var obj_coty2 = [];
var rando_resto1;
var pName;
var pImg;

$(document).ready(function () {
    
    // $("#submit-button").on("click", (event) => {
    // event.preventDefault();

    var queryURL ="https://developers.zomato.com/api/v2.1/cities?q=" + city1name + "&count=1";
    
    console.log(queryURL);
    
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
    }).then(function(city1response) {
    
        console.log(city1response);     
        
        city1_id= city1response.location_suggestions[0].id;
        console.log("the start city is: " + city1_id);

        city1country_id = city1response.location_suggestions[0].country;

        // var queryURL ="https://developers.zomato.com/api/v2.1/cities?q=" + city2name + "&count=1";
    
        // console.log(queryURL);
    
        // $.ajax({
        //     url: queryURL,
        //     method: "GET",
        //     headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
        //     }).then(function(city2response) {
    
        // console.log(city2response);    

        // city2_id = city2response.location_suggestions[0].id;
        // console.log("the end city is: " + city2_id);
        
        // });

        // (2) need to apply country_id to grab cuisine strings and cuisine_id from array defined below
        //var country = ["Australia", "Brasil"];

        // based on country from Zomato qryStartCity and qryEndCity selections, grab country, and apply
        // cuisine_ID

        // (3) city_id(s) and cuinsine_id(s) are passed into Zomato API via AJAX GET for results on the search response

        // var qryEntity = 287
        // var qryCuisine = 25
    
        // 
        var cuisine_id = 227;
    
        var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + cuisine_id + "&entity_type=city"; 
    
        console.log(queryURL);
    
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
        }).then(function(city1search) {
    
            console.log(city1search); 

            for(i=0;i<city1search.restaurants.length;i++){
            
            // id
            resto_id = city1search.restaurants[i].restaurant.id;
            //  name
            restoName = city1search.restaurants[i].restaurant.name;
            //  image
            restoImg = city1search.restaurants[i].restaurant.featured_image;
            //  url
            restoURL = city1search.restaurants[i].restaurant.url;
            //  aggregate_rating
            agg_rating = city1search.restaurants[i].restaurant.user_rating.aggregate_rating;
            //  rating_text
            rating_text = city1search.restaurants[i].restaurant.user_rating.rating_text;
            //  avg_cost_two
            avg_cost_two = city1search.restaurants[i].restaurant.average_cost_for_two;
            //  avg_cost_two
            currency = city1search.restaurants[i].restaurant.currency;
            //  price_range
            price_range = city1search.restaurants[i].restaurant.price_range;
            //  cuisine
            votes = city1search.restaurants[i].restaurant.cuisines;
            //  votes
            votes = city1search.restaurants[i].restaurant.user_rating.votes;

            pairedValKey={
                resto_id: resto_id,
                name : restoName,
                image: restoImg,    
                url: restoURL,
                agg_rating : agg_rating,
                rating_text: rating_text,
                avg_cost_two: avg_cost_two,
                currency: currency,
                price_range: price_range,
                cuisine_id: cuisine_id,
                cuisines : cuisines,
                votes: votes}
                
            obj_city1.push(pairedValKey);
            
            };

            console.log(obj_city1);

            rando_resto1 = $("<div class='rando_resto'>");
            // add another attr with URL
            // add a data-value?

            img1 = obj_city1[2].image;
            console.log(img1);

            name1 = obj_city1[2].name;
            console.log(name1);

            pImg = $("<img>").attr("src", img1);
            rando_resto1.append(pImg)

            pName = $("<p>").text(name1);
            rando_resto1.append(pName);

            $("#reco-restos").prepend(rando_resto1);

        });

    });
        
        
});