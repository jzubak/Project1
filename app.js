//declare variables
var home;
var dest;
var city1 = "philadelphia";
var city2 = "miami";
var country1 = "us";
var country2 = "us";
var APIKeyWeather = "30bacb09b1a6ec05e34d8f5ac74ca7de";
var queryURL;
var sumTemp = 0;
var sumClouds = 0;
var sumRain = 0;
var aveTemp;
var aveClouds;
var aveRain;

// var city1name = "Sydney"
// var city2name = "Philadelphia"
var city1name;
var city2name;
var city1_id;
var city2_id;

var city1country_id;
var city2country_id;
var city1country_name;
var city2country_name;

var objCountryCuisines = {
    14: { country: "Australia", cuisines: [{ cuisine_name: "Australian", cuisine_id: 131 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Pacific", cuisine_id: 321 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Sushi", cuisine_id: 177 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    30: { country: "Brasil", cuisines: [{ cuisine_name: "Brazilian", cuisine_id: 159 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "Grill", cuisine_id: 181 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Latin American", cuisine_id: 136 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "South American", cuisine_id: 972 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    37: { country: "Canada", cuisines: [{ cuisine_name: "Canadian", cuisine_id: 381 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Caribbean", cuisine_id: 158 }, { cuisine_name: "Deli", cuisine_id: 192 }, { cuisine_name: "Diner", cuisine_id: 541 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Pacific", cuisine_id: 321 }, { cuisine_name: "Pacific Northwest", cuisine_id: 963 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Sushi", cuisine_id: 177 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    42: { country: "Chile", cuisines: [{ cuisine_name: "Chilean", cuisine_id: 229 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "Grill", cuisine_id: 181 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Latin American", cuisine_id: 136 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "South American", cuisine_id: 972 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    54: { country: "Czech Republic", cuisines: [{ cuisine_name: "Eastern European", cuisine_id: 651 }, { cuisine_name: "European", cuisine_id: 38 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Desserts", cuisine_id: 100 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "Hungarian", cuisine_id: 228 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Patisserie", cuisine_id: 183 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    1: { country: "India", cuisines: [{ cuisine_id: 148, cuisine_name: "Indian" }] },
    94: { country: "Indonesia", cuisines: [{}, {}] },
    97: { country: "Ireland", cuisines: [{ cuisine_name: "Irish", cuisine_id: 135 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "European", cuisine_id: 38 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    99: { country: "Italy", cuisines: [{ cuisine_name: "Italian", cuisine_id: 55 }, { cuisine_name: "European", cuisine_id: 38 }, { cuisine_name: "Bakery", cuisine_id: 5 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Desserts", cuisine_id: 100 }, { cuisine_name: "Austrian", cuisine_id: 201 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "Ice Cream", cuisine_id: 233 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Patisserie", cuisine_id: 183 }, { cuisine_name: "Pizza", cuisine_id: 82 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Salad", cuisine_id: 998 }, { cuisine_name: "Sandwich", cuisine_id: 304 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    112: { country: "Lebanon", cuisines: [{}, {}] },
    123: { country: "Malaysia", cuisines: [{}, {}] },
    148: { country: "New Zealand", cuisines: [{ cuisine_name: "New Zealand", cuisine_id: 961 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Pacific", cuisine_id: 321 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Sushi", cuisine_id: 177 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    162: { country: "Philippines", cuisines: [{}, {}] },
    163: { country: "Poland", cuisines: [{ cuisine_name: "Polish", cuisine_id: 219 }, { cuisine_name: "Eastern European", cuisine_id: 651 }, { cuisine_name: "European", cuisine_id: 38 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Russian", cuisine_id: 84 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    164: { country: "Portugal", cuisines: [{ cuisine_name: "Portuguese", cuisine_id: 87 }, { cuisine_name: "Brazilian", cuisine_id: 159 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "Grill", cuisine_id: 181 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Latin American", cuisine_id: 136 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Tapas", cuisine_id: 179 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    166: { country: "Qatar", cuisines: [{}, {}] },
    184: { country: "Singapore", cuisines: [{}, {}] },
    189: { country: "South Africa", cuisines: [{ cuisine_name: "South African", cuisine_id: 267 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "British", cuisine_id: 133 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "European", cuisine_id: 38 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Sushi", cuisine_id: 177 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    191: { country: "Sri Lanka", cuisines: [{}, {}] },
    208: { country: "Turkey", cuisines: [{ cuisine_name: "Turkish", cuisine_id: 142 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Armenian", cuisine_id: 175 }, { cuisine_name: "Greek", cuisine_id: 156 }, { cuisine_name: "Iranian", cuisine_id: 140 }, { cuisine_name: "Israeli", cuisine_id: 218 }, { cuisine_name: "Kebab", cuisine_id: 178 }, { cuisine_name: "Mediterranean", cuisine_id: 70 }, { cuisine_name: "Middle Eastern", cuisine_id: 137 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Salad", cuisine_id: 998 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] },
    214: { country: "UAE", cuisines: [{}, {}] },
    215: { country: "United Kingdom", cuisines: [{ cuisine_name: "British", cuisine_id: 133 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "European", cuisine_id: 38 }, { cuisine_name: "Fish and Chips", cuisine_id: 298 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_id: 148, cuisine_name: "Indian" }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Irish", cuisine_id: 135 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Scottish", cuisine_id: 210 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }, { cuisine_name: "Welsh", cuisine_id: 965 }] },
    216: { country: "United States", cuisines: [{ cuisine_name: "American", cuisine_id: 1 }, { cuisine_name: "Amish", cuisine_id: 954 }, { cuisine_name: "BBQ", cuisine_id: 193 }, { cuisine_name: "Bar Food", cuisine_id: 227 }, { cuisine_name: "Burger", cuisine_id: 168 }, { cuisine_name: "Cafe", cuisine_id: 30 }, { cuisine_name: "Cajun", cuisine_id: 491 }, { cuisine_name: "California", cuisine_id: 956 }, { cuisine_name: "Caribbean", cuisine_id: 158 }, { cuisine_name: "Creole", cuisine_id: 928 }, { cuisine_name: "Deli", cuisine_id: 192 }, { cuisine_name: "Diner", cuisine_id: 541 }, { cuisine_name: "Fusion", cuisine_id: 274 }, { cuisine_name: "Hawaiian", cuisine_id: 521 }, { cuisine_name: "International", cuisine_id: 154 }, { cuisine_name: "Israeli", cuisine_id: 218 }, { cuisine_name: "Jewish", cuisine_id: 265 }, { cuisine_name: "Mexican", cuisine_id: 73 }, { cuisine_name: "New American", cuisine_id: 996 }, { cuisine_name: "New Mexican", cuisine_id: 995 }, { cuisine_name: "Pacific", cuisine_id: 321 }, { cuisine_name: "Pacific Northwest", cuisine_id: 963 }, { cuisine_name: "Pizza", cuisine_id: 82 }, { cuisine_name: "Po'Boys", cuisine_id: 970 }, { cuisine_name: "Pub Food", cuisine_id: 983 }, { cuisine_name: "Puerto Rican", cuisine_id: 361 }, { cuisine_name: "Salad", cuisine_id: 998 }, { cuisine_name: "Sandwich", cuisine_id: 304 }, { cuisine_name: "Seafood", cuisine_id: 83 }, { cuisine_name: "Soul Food", cuisine_id: 461 }, { cuisine_name: "Southern", cuisine_id: 471 }, { cuisine_name: "Southwestern", cuisine_id: 966 }, { cuisine_name: "Steak", cuisine_id: 141 }, { cuisine_name: "Sushi", cuisine_id: 177 }, { cuisine_name: "Tex-Mex", cuisine_id: 150 }, { cuisine_name: "Vegetarian", cuisine_id: 308 }] }
}

var city1countryIDpos;
var city2countryIDpos;
var city1cuisineID = "";
var city2cuisineID = "";

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
var cuisine;
var cuisines;
var votes;

var pairedValKey;
var obj_city1 = [];
var obj_city2 = [];
var rando_resto1;
var pName;
var pImg;
var pCuisine;
var pPrice;
var pRating;

var totalVotes = 0;
var totalPrice = 0;
var totalRating = 0;
var avgVotes = 0;
var avgPrice = 0;
var avgRating = 0;
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

        // BEGIN STARTCITY AKA CITY1

        city1name = $("#startLocation").val();
        console.log("the city1name is: " + city1name);

        var queryURL = "https://developers.zomato.com/api/v2.1/cities?q=" + city1name + "&count=1";

        $.ajax({
            url: queryURL,
            method: "GET",
            headers: { "X-Zomato-API-KEY": "fb4f91615b9755f2f7a9d0b29a4b8483" }
        }).then(function (city1response) {

            console.log(city1response);

            city1_id = city1response.location_suggestions[0].id;

            city1country_id = city1response.location_suggestions[0].country_id;
            console.log("the start city COUNTRY ID is: " + city1country_id);
            city1country_name = city1response.location_suggestions[0].country_name;
            console.log("the start city COUNTRY NAME is: " + city1country_name);

            console.log("The number of cuisines for " + city1name + ", " + city1country_name + " is : " + objCountryCuisines[city1country_id].cuisines.length);

            // loop to collect cusisine_id(s) from objCountryCuisines for the [city1name and city1country_id]
            for (var i = 0; i < objCountryCuisines[city1country_id].cuisines.length; i++) {

                city1cuisineID = objCountryCuisines[city1country_id].cuisines[i].cuisine_id + ", " + city1cuisineID;
            };

            console.log("the city1CuisineID is: " + city1cuisineID);

            // STATIC RESPONSE COUNT AMOUNTS
            // var count_id=20;
            var count_id = 3;

            var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + city1cuisineID + "&entity_type=city&count=" + count_id;

            $.ajax({
                url: queryURL,
                method: "GET",
                headers: { "X-Zomato-API-KEY": "fb4f91615b9755f2f7a9d0b29a4b8483" }
            }).then(function (city1search) {

                console.log(city1search);

                for (i = 0; i < city1search.restaurants.length; i++) {
                    //  price_range SEGMENTATION
                    price_range = city1search.restaurants[i].restaurant.price_range;
                    // id
                    resto_id = city1search.restaurants[i].restaurant.id;
                    //  name
                    restoName = city1search.restaurants[i].restaurant.name;
                    //  cuisine
                    cuisine = city1search.restaurants[i].restaurant.cuisines;
                    console.log("the cuisines are: " + cuisine);
                    //  image
                    restoImg = city1search.restaurants[i].restaurant.featured_image;
                    //  url
                    restoURL = city1search.restaurants[i].restaurant.url;
                    //  currency
                    currency = city1search.restaurants[i].restaurant.currency;
                    //  avg_cost_two
                    avg_cost_two = city1search.restaurants[i].restaurant.average_cost_for_two;
                    //  aggregate_rating
                    agg_rating = parseFloat(city1search.restaurants[i].restaurant.user_rating.aggregate_rating);
                    //  rating_text
                    rating_text = city1search.restaurants[i].restaurant.user_rating.rating_text;
                    //  votes
                    votes = parseFloat(city1search.restaurants[i].restaurant.user_rating.votes);

                    // TOTALS
                    totalVotes = votes + totalVotes;
                    totalPrice = avg_cost_two + totalPrice;
                    totalRating = agg_rating + totalRating;

                    // CREATE ARRAY OF API DATA
                    pairedValKey = {
                        price_range: price_range,
                        resto_id: resto_id,
                        name: restoName,
                        cuisine_id: city1cuisineID,
                        cuisine: cuisine,
                        restoImg: restoImg,
                        url: restoURL,
                        currency: currency,
                        avg_cost_two: avg_cost_two,
                        agg_rating: agg_rating,
                        rating_text: rating_text,
                        votes: votes
                    }

                    obj_city1.push(pairedValKey);

                    console.log(obj_city1);

                    // POPULATE THE DIV
                    city1resto = $("<div class='city1resto'>");

                    // APPEND THE TEXT ELEMENTS, THEN PREPEND THE IMAGE TO THE DIV

                    pName = $("<p>").attr({
                        "class": "city1restoName",
                        "text": name
                    });
                    // pName = $("<p>").text(name1);
                    city1resto.append(pName);

                    // ADD RATING, CUISINES --> NEED CLASS 

                    pPrice = $("<p>").attr({
                        "class": "city1restoPrice",
                        "text": currency + avg_cost_two
                    });
                    city1resto.append(pPrice);

                    // console.log(pPrice);

                    pCuisine = $("<p>").attr({
                        "class": "city1restoCuisine",
                        "text": cuisine
                    });
                    city1resto.append(pCuisine);

                    pRating = $("<p>").attr({
                        "class": "city1restoRating",
                        "text": agg_rating
                    });
                    city1resto.append(pRating);

                    // pImg = $("<img>").attr({
                    //     "class": "city1restoIMG",
                    //     "src": restoImg,
                    //     "data-value": restoURL
                    //     });

                    // city1resto.append(pImg)

                    // PREPEND TO startCards DIV
                    // $("#startCards").prepend(city1resto);
                    $("#startCards").append(city1resto);

                    // BEGIN END CITY AKA CITY2
                    //
                    //

                };





                // (1) 
                // FULL METRICS FOR BOTH CITY1 AND CITY2 OBJECTS

                // get averages
                console.log("The TOTAL VOTES IS: " + totalVotes);
                console.log("The TOTAL PRICE IS: " + totalPrice);
                console.log("The TOTAL RATING IS: " + totalRating);

                avgVotes = parseFloat(totalVotes / count_id).toFixed(0);
                console.log("The average VOTES is: " + avgVotes);
                avgPrice = parseFloat(totalPrice / count_id).toFixed(0);
                console.log("The average PRICE is: " + avgPrice);
                avgRating = parseFloat(totalRating / count_id).toFixed(1);
                console.log("The average RATING is: " + avgRating);

                // index on each restaurant from the object
                // need a for loop for the object
                // push index to each key pair-value for
                //  --> Votes
                //  --> Price
                //  --> Rating

                //  (2) 
                //  SUB-SEGMENT BY PRICE_RANGE OBJECT METRICS
                //
                // separate EACH CITY object into 4 NEW ARRAYS BY price_range (1, 2, 3, 4) segment 
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
                // FOR EACH SUB-SEGMENT BY PRICE-RANGE
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
                //  PERFORM ANALYSIS ON PRICE_RANGE SEGMENT ARRAYS TO DETERMINE THE 
                //  OPTIMAL RESTAURANT RECOMMENDATION BY SEGMENT=4, SEGMENT =1, and SEGMENT OR(2,3)

                // need for loop to append each from the SEGMENT ARRAYS

                // MOVE THE <DIV> APPEND/PREPEBD PROCESS ^^^ DOWN HERE FOR BOTH CITY1 AND CITY2
                //
                //
                //
                //

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

        function resetVars() {
            console.log("start of resetVars()");
            sumTemp = 0;
            sumClouds = 0;
            sumRain = 0;
            console.log("SumTemp: "+sumTemp);
            console.log("SumClouds: "+sumClouds);
            console.log("SumRain: "+sumRain);
        }
        function findAverages() {
            console.log("starting findAverages()");
            aveTemp = sumTemp / 8;
            aveClouds = sumClouds / 8;
            aveRain = sumRain / 8;
            console.log("aveTemp: " + aveTemp);
            console.log("aveClouds: " + aveClouds);
            console.log("aveRain: " + aveRain);
        }
        function consoleLogs() {
            console.log("SumTemp: " + sumTemp);
            console.log("SumClouds: " + sumClouds);
            console.log("SumRain: " + sumRain);
        }
            var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city1 + ", " + country1 + "&units=imperial&appid=" + APIKeyWeather;
            $.ajax({
                url: queryURL1,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                console.log("City: " + response.city.name);

                //!!!TO DO!!!! slideshow, temp, rain, clouds
                var dayDiv = $("<div>");
                var tempDiv = $("<div>");
                var cloudsDiv = $("<div>");
                var rainDiv = $("<div>");
                var btnDiv = $("<button>");
                dayDiv.attr("id", "day");
                tempDiv.attr("id", "temp");
                cloudsDiv.attr("id", "clouds");
                rainDiv.attr("id", "rain");
                btnDiv.attr("id", "nextDay");
                btnDiv.text("Next Day");
                $("#startWeather").append(dayDiv);
                $("#startWeather").append(tempDiv);
                $("#startWeather").append(cloudsDiv);
                $("#startWeather").append(rainDiv);
                $("#startWeather").append(btnDiv);

                function updateWeather() {
                    console.log("start of updateWeather");
                    $(tempDiv).text("Average Temperature: " + Math.floor(aveTemp)+" (Fahrenheit)");
                    if (aveClouds < 20) {
                        $(cloudsDiv).text("Sunny");
                    } else if (20 <= aveClouds < 60) {
                        $(cloudsDiv).text("Partly Cloudy");
                    } else {
                        $(cloudsDiv).text("Cloudy");
                    }
                    if (aveRain < 1.5) {
                        $(rainDiv).text("No Rain");
                    } else if (1.5 <= aveRain < 2.5) {
                        $(rainDiv).text("Light Rain Showers");
                    } else {
                        $(rainDiv).text("Rainy");
                    }
                }
                resetVars();
                //show Today's weather
                console.log("DAY 1:");
                $("#day").text("Today: ");
                for (var i = 0; i < 8; i++) {
                    sumTemp = sumTemp + response.list[i].main.temp;
                    sumClouds = sumClouds + response.list[i].clouds.all;
                    if (response.list[i].rain !== undefined) {
                        var typeOfRain = typeof response.list[i].rain["3h"];
                        if (typeOfRain === "number") {
                            sumRain = sumRain + response.list[i].rain["3h"];
                        }
                    }
                }
                consoleLogs();

                $("#nextDay").attr("data-day", "1");
                findAverages();
                updateWeather();
                //next day button click to display other days' weathers
                $("#nextDay").click(function () {
                    resetVars();
                    if ($("#nextDay").attr("data-day") === "0") {
                        console.log("DAY 1:");
                        $("#day").text("Today: ");
                        for (var i = 0; i < 8; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay").attr("data-day", "1");
                    } else if ($("#nextDay").attr("data-day") === "1") {
                        console.log("DAY 2:");
                        $("#day").text("Tomorrow: ");
                        for (var i = 8; i < 16; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay").attr("data-day", "2");
                    } else if ($("#nextDay").attr("data-day") === "2") {
                        console.log("DAY 3:");
                        $("#day").text("Day 3: ");
                        for (var i = 16; i < 24; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay").attr("data-day", "3");
                    } else if ($("#nextDay").attr("data-day") === "3") {
                        console.log("DAY 4:");
                        $("#day").text("Day 4: ");
                        for (var i = 24; i < 32; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay").attr("data-day", "4");
                    } else {
                        console.log("DAY 5:");
                        $("#day").text("Day 5: ");
                        for (var i = 32; i < response.list.length; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay").attr("data-day", "0");
                    }
                    findAverages();
                    updateWeather();
                });
                resetVars();
            });
            //destination weather call
            var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city2 + ", " + country2 + "&units=imperial&appid=" + APIKeyWeather;
            $.ajax({
                url: queryURL2,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                console.log("City: " + response.city.name);

                //!!!TO DO!!!! slideshow, temp, rain, clouds
                var dayDiv2 = $("<div>");
                var tempDiv2 = $("<div>");
                var cloudsDiv2 = $("<div>");
                var rainDiv2 = $("<div>");
                var btnDiv2 = $("<button>");
                dayDiv2.attr("id", "day2");
                tempDiv2.attr("id", "temp2");
                cloudsDiv2.attr("id", "clouds2");
                rainDiv2.attr("id", "rain2");
                btnDiv2.attr("id", "nextDay2");
                btnDiv2.text("Next Day");
                $("#endWeather").append(dayDiv2);
                $("#endWeather").append(tempDiv2);
                $("#endWeather").append(cloudsDiv2);
                $("#endWeather").append(rainDiv2);
                $("#endWeather").append(btnDiv2);

                function updateWeather2() {
                    console.log("start of updateWeather");
                    $(tempDiv2).text("Average Temperature: " + Math.floor(aveTemp) + " (Fahrenheit)");
                    if (aveClouds < 20) {
                        $(cloudsDiv2).text("Sunny");
                    } else if (20 <= aveClouds < 60) {
                        $(cloudsDiv2).text("Partly Cloudy");
                    } else {
                        $(cloudsDiv2).text("Cloudy");
                    }
                    if (aveRain < 1.5) {
                        $(rainDiv2).text("No Rain");
                    } else if (1.5 <= aveRain < 2.5) {
                        $(rainDiv2).text("Light Rain Showers");
                    } else {
                        $(rainDiv2).text("Rainy");
                    }
                }

                //show Today's weather
                console.log("DAY 1:");
                $("#day2").text("Today: ");
                for (var i = 0; i < 8; i++) {
                    sumTemp = sumTemp + response.list[i].main.temp;
                    sumClouds = sumClouds + response.list[i].clouds.all;
                    if (response.list[i].rain !== undefined) {
                        var typeOfRain = typeof response.list[i].rain["3h"];
                        if (typeOfRain === "number") {
                            sumRain = sumRain + response.list[i].rain["3h"];
                        }
                    }
                    consoleLogs();
                }
                $("#nextDay2").attr("data-day", "1");
                findAverages();
                updateWeather2();
                //next day button click to display other days' weathers
                $("#nextDay2").click(function () {
                    resetVars();
                    if ($("#nextDay2").attr("data-day") === "0") {
                        console.log("DAY 1:");
                        $("#day2").text("Today: ");
                        for (var i = 0; i < 8; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay2").attr("data-day", "1");
                    } else if ($("#nextDay2").attr("data-day") === "1") {
                        console.log("DAY 2:");
                        $("#day2").text("Tomorrow: ");
                        for (var i = 8; i < 16; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay2").attr("data-day", "2");
                    } else if ($("#nextDay2").attr("data-day") === "2") {
                        console.log("DAY 3:");
                        $("#day2").text("Day 3: ");
                        for (var i = 16; i < 24; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay2").attr("data-day", "3");
                    } else if ($("#nextDay2").attr("data-day") === "3") {
                        console.log("DAY 4:");
                        $("#day2").text("Day 4: ");
                        for (var i = 24; i < 32; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay2").attr("data-day", "4");
                    } else {
                        console.log("DAY 5:");
                        $("#day2").text("Day 5: ");
                        for (var i = 32; i < response.list.length; i++) {
                            sumTemp = sumTemp + response.list[i].main.temp;
                            sumClouds = sumClouds + response.list[i].clouds.all;
                            if (response.list[i].rain !== undefined) {
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = sumRain + response.list[i].rain["3h"];
                                }
                            }
                            consoleLogs();
                        }
                        $("#nextDay2").attr("data-day", "0");
                    }
                    findAverages();
                    updateWeather2();
                });
            });
        });
    });