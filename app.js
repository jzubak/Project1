// (1) get start and end city strings 

var city1name = "Mumbai"
var city2name = "Philadelphia"

var city1_id;
var city2_id;

var city1country_id;
var city2country_id;

var count_id;

var resto_id;
var restoName;
var restoImg;
var restoURL;
var price_range;
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

var totalVotes = 0;
var totalPrice = 0;
var totalRating = 0;
var avgVotes = 0;
var avgPrice =0;
var avgRating =0;
var indexVotes = 0;
var indexPrice = 0;
var indexRating = 0;

var segCount = 0;
var segVotes = 0;
var segPrice = 0;
var segRating = 0;
var segTotalVotes = 0;
var segAvgPrice = 0;
var segAvgRating = 0;
var segIndexVotes = 0;
var segIndexPrice = 0;
var segIndexRating = 0;

$(document).ready(function () {
    
    $("#submit-btn").on("click", (event) => {
    event.preventDefault();

    city1Name = $("#startLocation").val();

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

        // Philly
        // var qryEntity = 287;

        // Chinese
        // var qryCuisine = 25;
    
        // Bar Food
        //var cuisine_id = 227;

        // Fusion
        var cuisine_id =274;

        var count_id=20;
    
        var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + cuisine_id + "&entity_type=city&count=" + count_id; 
    
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
            price_range= city1search.restaurants[i].restaurant.price_range;
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

            totalVotes = votes + totalVotes;
            totalPrice = avg_cost_two + totalPrice;
            totalRating = agg_rating = + totalRating;

            pairedValKey={
                resto_id: resto_id,
                name : restoName,
                image: restoImg,    
                url: restoURL,
                price_range: price_range;
                agg_rating : agg_rating,
                rating_text: rating_text,
                avg_cost_two: avg_cost_two,
                currency: currency,
                price_range: price_range,
                cuisine_id: cuisine_id,
                cuisines : cuisines,
                votes: votes}
                
            obj_city1.push(pairedValKey);

            console.log(obj_city1);

            rando_resto1 = $("<div class='rando_resto'>");
            // add another attr with URL
            // add a data-value?

            img1 = obj_city1[i].image;
            console.log(img1);

            name1 = obj_city1[i].name;
            console.log(name1);

            pImg = $("<img>").attr("src", img1);
            rando_resto1.append(pImg)

            pName = $("<p>").text(name1);
            rando_resto1.append(pName);

            $("#reco-restos").prepend(rando_resto1);
            
            };

            // (1) 
            // FULL ARRAY METRICS

            // get averages
            avgVotes = totalVotes/count_id;
            avgPrice = totalPrice/count_id;
            avgRating = totalRating/count_id;

            // index on each restaurant from the array
            // need a for loop for the array
            // push index to each key pair-value for
            //  --> Votes
            //  --> Price
            //  --> Rating

            //  (2) 
            //  PRICING SEGMENT ARRAY METRICS
            //
            // separate array into 4 NEW ARRAYS BY price_range (1, 2, 3, 4) segment 
            //
            // segCount =
            // segTotalVote =
            // segAvgPrice =
            // segAvgRating =
            // segVotes =
            // segPrice =
            // segRating =
            // indexVotes =
            // indexPrice =
            // indexRating = 
            //
            // FOR EACH segment ARRAY
            //  --> calculate totals for
            //      --> Votes
            //      --> Price
            //      --> Rating
            //  --> calculate averages for
            //      --> Votes
            //      --> Price
            //      --> Rating
            //  --> calculate indices for
            //      --> Votes
            //      --> Price
            //      --> Rating
            //
            //  --> PUSH indices to EACH RESTAURANT IN SEGMENT ARRAY
            //
            //  PERFORM ANALYSI ON PRICE_RANGE SEGMENT ARRAYS TO DETERMINE THE 
            //  OPTIMAL RESTAURANT RECOMMENDATION BY SEGMENT=4, SEGMENT =1, and SEGMENT OR(2,3)

            // need for loop to append each from the SEGMENT ARRAYS

            // rando_resto1 = $("<div class='rando_resto'>");
            // // add another attr with URL
            // // add a data-value?

            // img1 = obj_city1[i].image;
            // console.log(img1);

            // name1 = obj_city1[i].name;
            // console.log(name1);

            // pImg = $("<img>").attr("src", img1);
            // rando_resto1.append(pImg)

            // pName = $("<p>").text(name1);
            // rando_resto1.append(pName);

            // $("#reco-restos").prepend(rando_resto1);

        });

    });
        
        
});
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwhvcz5UIY3y0nZaA76lSHEm24P99-Wzg",
    authDomain: "project1-2f7ae.firebaseapp.com",
    databaseURL: "https://project1-2f7ae.firebaseio.com",
    projectId: "project1-2f7ae",
    storageBucket: "project1-2f7ae.appspot.com",
    messagingSenderId: "842716287063"
  };
  firebase.initializeApp(config);

//declare variables
var city = "philadelphia";
var country = "us";
var APIKey = "";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ", " + country + "Burundi&units=imperial&appid=" + APIKey;
var sumTemp = 0;
var sumClouds = 0;
var sumRain = 0;
var aveTemp;
var aveClouds;
var aveRain;
function resetVars() {
    sumTemp = 0;
    sumClouds = 0;
    sumRain = 0;
}
function findAverages() {
    aveTemp = sumTemp / 8;
    aveClouds = sumClouds / 8;
    aveRain = sumRain / 8;
}
function consoleLogs() {
    console.log("Average temp: " + sumTemp / 8 + " degrees fahrenheit.");
    console.log("Average clouds: " + sumClouds / 8);
    console.log("Average rain: " + sumRain / 8);
    console.log("------------------------------------------------");
}
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log("City: " + response.city.name);

    //!!!TO DO!!!! slideshow, temp, rain, clouds
    var tempDiv = $("<div>");
    var cloudsDiv = $("<div>");
    var rainDiv = $("<div>");
    tempDiv.addClass("temp");
    cloudsDiv.addClass("clouds");
    rainDiv.addClass("rain");
    $("#temp").append(tempDiv);
    $("#clouds").append(cloudsDiv);
    $("#rain").append(rainDiv);

    function updateWeather() {
    $(tempDiv).text(aveTemp);
    $(cloudsDiv).text(aveClouds);
    $(rainDiv).text(aveRain);
    }

    $("#forecast").click(function() {
        $("#forecast").css("display","none");
        $("#weather").css("display","block");
        console.log("DAY 1:");
        $("#day").text("Today: ");
        for (var i = 0; i < 8; i++) {
            sumTemp = + response.list[i].main.temp;
            sumSun = + response.list[i].clouds.all;
            var typeOfRain = typeof response.list[i].rain["3h"];
            if (typeOfRain === "number") {
                sumRain = + response.list[i].rain["3h"];
            }
        }
        $("#nextDay").attr("data-day","1");
        findAverages();
        updateWeather();
        consoleLogs();
    });


    $("#nextDay").click(function() {
       resetVars();
       if ($("#nextDay").attr("data-day") === "0") {
           console.log("DAY 1:");
           $("#day").text("Today: ");
            for (var i = 0; i < 8; i++) {
                sumTemp = + response.list[i].main.temp;
                sumSun = + response.list[i].clouds.all;
                var typeOfRain = typeof response.list[i].rain["3h"];
                if (typeOfRain === "number") {
                    sumRain = + response.list[i].rain["3h"];
                }
            }
        $("#nextDay").attr("data-day","1");
       } else if ($("#nextDay").attr("data-day") === "1") {
           console.log("DAY 2:");
           $("#day").text("Tomorrow: ");
            for (var i = 8; i < 16; i++) {
                sumTemp = + response.list[i].main.temp;
                sumClouds = + response.list[i].clouds.all;
                var typeOfRain = typeof response.list[i].rain["3h"];
                if (typeOfRain === "number") {
                    sumRain = + response.list[i].rain["3h"];
                }
            }
        $("#nextDay").attr("data-day","2");
        } else if ($("#nextDay").attr("data-day") === "2") {
            console.log("DAY 3:");
            $("#day").text("Day 3: ");
            for (var i = 16; i < 24; i++) {
                sumTemp = + response.list[i].main.temp;
                sumClouds = + response.list[i].clouds.all;
                var typeOfRain = typeof response.list[i].rain["3h"];
                if (typeOfRain === "number") {
                    sumRain = + response.list[i].rain["3h"];
                }
            }
        $("#nextDay").attr("data-day","3");
        } else if ($("#nextDay").attr("data-day") === "3") {
            console.log("DAY 4:");
            $("#day").text("Day 4: ");
            for (var i = 24; i < 32; i++) {
                sumTemp = + response.list[i].main.temp;
                sumClouds = + response.list[i].clouds.all;
                var typeOfRain = typeof response.list[i].rain["3h"];
                if (typeOfRain === "number") {
                    sumRain = + response.list[i].rain["3h"];
                } 
            }
        $("#nextDay").attr("data-day","4");
        } else {
           console.log("DAY 5:");
            $("#day").text("Day 5: ");
            for (var i = 32; i < response.list.length; i++) {
                sumTemp = + response.list[i].main.temp;
                console.log(sumTemp);
                sumClouds = + response.list[i].clouds.all;
                var typeOfRain = typeof response.list[i].rain["3h"];
                if (typeOfRain === "number") {
                    sumRain = + response.list[i].rain["3h"];
                } 
            }
        $("#nextDay").attr("data-day","0");
        }
        findAverages();
        updateWeather();
        consoleLogs();
    });

});
