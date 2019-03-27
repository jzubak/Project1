// (1) get start and end city strings 

var city1name = "Sydney"
var city2name = "Philadelphia"
var city1_id;
var city2_id;

var city1country_id;
var city2country_id;
var city1country_name;
var city2country_name;

var objCountryCuisines = {
    14: {country: "Australia", cuisines: [{cuisine_name: "Australian", cuisine_id: 131}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    30: {country: "Brasil", cuisines: [{cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83},{cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    37: {country: "Canada", cuisines: [{cuisine_name: "Canadian", cuisine_id: 381}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Caribbean", cuisine_id: 158},{cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    42: {country: "Chile", cuisines: [{cuisine_name: "Chilean", cuisine_id: 229}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    54: {country: "Czech Republic", cuisines: [{cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Desserts", cuisine_id: 100}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "Hungarian", cuisine_id: 228},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Patisserie", cuisine_id: 183},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    1: {country: "India", cuisines: [{cuisine_id: 148, cuisine_name: "Indian"}]},
    94: {country: "Indonesia", cuisines: [{}, {}]},
    97: {country: "Ireland", cuisines: [{cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    99: {country: "Italy", cuisines: [{}, {}]},
    112: {country: "Lebanon", cuisines: [{}, {}]},
    123: {country: "Malaysia", cuisines: [{}, {}]},
    148: {country: "New Zealand", cuisines: [{cuisine_name: "New Zealand", cuisine_id: 961}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    162: {country: "Philippines", cuisines: [{}, {}]},
    163: {country: "Poland", cuisines: [{cuisine_name: "Polish", cuisine_id: 219}, {cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Russian", cuisine_id: 84}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    164: {country: "Portugal",  cuisines: [{cuisine_name: "Portuguese", cuisine_id: 87}, {cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Tapas", cuisine_id: 179}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    166: {country: "Qatar", cuisines: [{}, {}]},
    182: {country: "Singapore", cuisines: [{}, {}]},
    189: {country: "South Africa", cusiines: [{}, {}]},
    191: {country: "Sri Lanka", cuisines: [{}, {}]},
    208: {country: "Turkey", cuisines: [{}, {}]},
    214: {country: "UAE", cuisines: [{}, {}]},
    215: {country: "United Kingdom", cuisines: [{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "European", cuisine_id: 38},{cuisine_name: "Fish and Chips", cuisine_id: 298}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_id: 148, cuisine_name: "Indian"},  {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Scottish", cuisine_id: 210}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308},{cuisine_name: "Welsh", cuisine_id: 965}]},
    216: {country: "United States", cuisines: [{cuisine_name: "American", cuisine_id: 1}, {cuisine_name: "Amish", cuisine_id: 954}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Cajun", cuisine_id: 491}, {cuisine_name: "California", cuisine_id: 956},{cuisine_name: "Caribbean", cuisine_id: 158}, {cuisine_name: "Creole", cuisine_id: 928}, {cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Hawaiian", cuisine_id: 521},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Jewish", cuisine_id: 265}, {cuisine_name: "Mexican", cuisine_id: 73}, {cuisine_name: "New American", cuisine_id: 996},{cuisine_name: "New Mexican", cuisine_id: 995},{cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963},{cuisine_name: "Pizza", cuisine_id: 82}, {cuisine_name: "Po'Boys", cuisine_id: 970},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Soul Food", cuisine_id: 461}, {cuisine_name: "Southern", cuisine_id: 471}, {cuisine_name: "Southwestern", cuisine_id: 966},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Tex-Mex", cuisine_id: 150}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}
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
//     for (var i=0;i<objCountryCuisines.length;i++){
//         if (element !== objCountryCuisines[i].countryID) {
//         }else{
//             // return objCountryCuisines[i];
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

        // -->DUMMY-ED UP DATA TO TEST THE BALANCE OF THE CUISINE ID LOOKUP OPS<--
        //
        // should return the 5th position in the index per the countryID (1) fron the city AJAX call
        // and the subsequent build of a string of integers = cuisine_id(s) per the objCountryCuisines

        //India
        //city1countryIDpos = 5;

        // Australia
        // city1countryIDpos=0;
        
        console.log("The numner of cuisines for " + city1country_name + " is " + objCountryCuisines[city1country_id].cuisines.length);

        for (var i=0;i<objCountryCuisines[city1country_id].cuisines.length;i++){

            city1cuisineID = objCountryCuisines[city1country_id].cuisines[i].cuisine_id + ", " + city1cuisineID;
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