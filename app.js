// (1) get start and end city strings 

var city1name = "Sydney"
var city2name = "Philadelphia"
var city1_id;
var city2_id;

var city1country_id;
var city2country_id;
var city1country_name;
var city2country_name;

var arrCountryCuisines = [
    {countryID:14, posID: 0, country: "Australia", cuisines: [{cuisine_name: "Australian", cuisine_id: 131}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 30, posID: 1, country: "Brasil", cuisines: [{cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83},{cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 37, posID: 2, country: "Canada", cuisines: [{cuisine_name: "Canadian", cuisine_id: 381}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Caribbean", cuisine_id: 158},{cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 42, posID: 3, country: "Chile", cuisines: [{cuisine_name: "Chilean", cuisine_id: 229}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 54, posID: 4, country: "Czech Republic", cuisines: [{cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Desserts", cuisine_id: 100}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "Hungarian", cuisine_id: 228},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Patisserie", cuisine_id: 183},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 1, posID: 5, country: "India", cuisines: [{cuisine_id: 148, cuisine_name: "Indian"}]},
    {countryID: 94, posID: 6, country: "Indonesia", cuisines: [{}, {}]},
    {countryID: 97, posID: 7, country: "Ireland", cuisines: [{}, {}]},
    {countryID: 99, posID: 8, country: "Italy", cuisines: [{}, {}]},
    {countryID: 112, posID: 9, country: "Lebanon", cuisines: [{}, {}]},
    {countryID: 123, posID: 10, country: "Malaysia", cuisines: [{}, {}]},
    {countryID: 148, posID: 11, country: "New Zealand", cuisines: [{cuisine_name: "New Zealand", cuisine_id: 961}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 162, posID: 12, country: "Philippines", cuisines: [{}, {}]},
    {countryID: 163, posID: 13, country: "Poland", cuisines: [{}, {}]},
    {countryID: 164, posID: 14, country: "Portugal",  cuisines: [{cuisine_name: "Portuguese", cuisine_id: 87}, {cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Tapas", cuisine_id: 179}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 166, posID: 15, country: "Qatar", cuisines: [{}, {}]},
    {countryID: 182, posID: 16, country: "Singapore", cuisines: [{}, {}]},
    {countryID: 185, posID: 17, country: "Slovakia", cuisines: [{}, {}]},
    {countryID: 189, posID: 18, country: "South Africa", cusiines: [{}, {}]},
    {countryID: 191, posID: 19, country: "Sri Lanka", cuisines: [{}, {}]},
    {countryID: 208, posID: 20, country: "Turkey", cuisines: [{}, {}]},
    {countryID: 214, posID: 21, country: "UAE", cuisines: [{}, {}]},
    {countryID: 215, posID: 22, country: "United Kingdom", cuisines: [{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fish and Chips", cuisine_id: 298}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_id: 148, cuisine_name: "Indian"},  {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    {countryID: 216, posID: 23, country: "United States", cuisines: [{cuisine_name: "American", cuisine_id: 1}, {cuisine_name: "Amish", cuisine_id: 954}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Cajun", cuisine_id: 491}, {cuisine_name: "California", cuisine_id: 956},{cuisine_name: "Caribbean", cuisine_id: 158},{cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Hawaiian", cuisine_id: 521},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Jewish", cuisine_id: 265}, {cuisine_name: "Mexican", cuisine_id: 73}, {cuisine_name: "New American", cuisine_id: 996},{cuisine_name: "New Mexican", cuisine_id: 995},{cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963},{cuisine_name: "Pizza", cuisine_id: 82}, {cuisine_name: "Po'Boys", cuisine_id: 970},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Soul Food", cuisine_id: 461}, {cuisine_name: "Southern", cuisine_id: 471}, {cuisine_name: "Southwestern", cuisine_id: 966},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Tex-Mex", cuisine_id: 150}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}];

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

// function isCountryID(element) {
//     for (i=0;i<arrCountryCuisines.length;i++){
//         if (element !== arrCountryCuisines[i].countryID) {
//         }else{
//             return i;
//         }
//   }
// }

$(document).ready(function () {
    
    // $("#submit-btn").on("click", (event) => {
    // event.preventDefault();

    // city1Name = $("#startLocation").val();

    var queryURL ="https://developers.zomato.com/api/v2.1/cities?q=" + city1name + "&count=1";
    
    //console.log(queryURL);
    
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
    }).then(function(city1response) {
    
        console.log(city1response);     
        
        city1_id= city1response.location_suggestions[0].id;
        //console.log("the start city is: " + city1_id);

        city1country_id = city1response.location_suggestions[0].country_id;
        console.log("the start city COUNTRY ID is: " + city1country_id);
        city1country_name = city1response.location_suggestions[0].country_name;
        console.log("the start city COUNTRY NAME is: " + city1country_name);

        // (2) need to apply country_id to grab cuisine strings and cuisine_id from array defined below
        //var country = ["Australia", "Brasil"];

        // city1countryIDpos = arrCountryCuisines.findIndex(isCountryID(city1country_id));
        // console.log("the city1countryIDpos is: " + city1countryIDpos);

        // -->DUMMUY-ED UP DATA TO TEST THE BALANCE OF THE CUISINE ID LOOKUP OPS<--
        //
        // should return the 5th position in the index per the countryID (1) fron the city AJAX call
        // and the subsequent build of a string of integers = cuisine_id(s) per the arrCountryCuisines

        //India
        //city1countryIDpos = 5;
        city1countryIDpos=0;
        
        console.log("The numner of cuisines for " + city1country_name + " is " + arrCountryCuisines[city1countryIDpos].cuisines.length);

        for (i=0;i<arrCountryCuisines[city1countryIDpos].cuisines.length;i++){

            city1cuisineID = arrCountryCuisines[city1countryIDpos].cuisines[i].cuisine_id + ", " + city1cuisineID;
        };

        console.log("the city1CuisineID is: " + city1cuisineID);

        // based on country from Zomato qryStartCity and qryEndCity selections, grab country, and apply
        // cuisine_ID

        // (3) city_id(s) and cuinsine_id(s) are passed into Zomato API via AJAX GET for results on the search response

        // STATIC CUISINE DATA IDs
        // Chinese
        // var qryCuisine = 25;
        // Bar Food
        //var cuisine_id = 227;
        // Fusion
        // var cuisine_id =274;

        // STATIC RESPONSE COUNT AMOUNTS
        // var count_id=20;
        var count_id=3;
    
        // var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + cuisine_id + "&entity_type=city&count=" + count_id; 
        var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + city1cuisineID + "&entity_type=city&count=" + count_id; 
    
        //console.log(queryURL);
    
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
            agg_rating = parseFloat(city1search.restaurants[i].restaurant.user_rating.aggregate_rating);
            console.log("The agg_rating is: " + agg_rating);
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
            votes = parseFloat(city1search.restaurants[i].restaurant.user_rating.votes);
            
            // TOTALS
            totalVotes = votes + totalVotes;
            totalPrice = avg_cost_two + totalPrice;
            totalRating = agg_rating  + totalRating;

            // CREATE ARRAY OF API DATA
            pairedValKey={
                resto_id: resto_id,
                name : restoName,
                image: restoImg,    
                url: restoURL,
                price_range: price_range,
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

            // POPULATE THE DIV
            rando_resto1 = $("<div class='rando_resto'>");

            img1 = obj_city1[i].image;

            name1 = obj_city1[i].name;

            pImg = $("<img>").attr({
                    "src": img1,
                    "data-value": restoURL
                    });

            rando_resto1.append(pImg)

            pName = $("<p>").text(name1);
            rando_resto1.append(pName);

            $("#reco-restos").prepend(rando_resto1);
            
            };

            // (1) 
            // FULL ARRAY METRICS

            // get averages
            console.log("The TOTAL VOTES IS: " + totalVotes);
            console.log("The TOTAL PRICE IS: " + totalPrice);
            console.log("The TOTAL RATING IS: " + totalRating);

            avgVotes = parseFloat(totalVotes/count_id).toFixed(0);
            console.log("The average VOTES is: " + avgVotes);
            avgPrice = parseFloat(totalPrice/count_id).toFixed(0);
            console.log("The average PRICE is: " + avgPrice);
            avgRating = parseFloat(totalRating/count_id).toFixed(1);
            console.log("The average RATING is: " + avgRating);

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

            // img1 = obj_city1[i].image;

            // name1 = obj_city1[i].name;

            // pImg = $("<img>").attr({
            //          "src": img1,
            //          "data-value": restoURL
            //          });

            // rando_resto1.append(pImg)

            // pName = $("<p>").text(name1);
            // rando_resto1.append(pName);

            // $("#reco-restos").prepend(rando_resto1);

        });

    });
        
        
});