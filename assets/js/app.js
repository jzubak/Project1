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
    14: {country: "Australia", cuisines: [{cuisine_name: "Australian", cuisine_id: 131}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    30: {country: "Brasil", cuisines: [{cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83},{cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    37: {country: "Canada", cuisines: [{cuisine_name: "Canadian", cuisine_id: 381}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Caribbean", cuisine_id: 158},{cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    42: {country: "Chile", cuisines: [{cuisine_name: "Chilean", cuisine_id: 229}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    54: {country: "Czech Republic", cuisines: [{cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Desserts", cuisine_id: 100}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "Hungarian", cuisine_id: 228},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Patisserie", cuisine_id: 183},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    1: {country: "India", cuisines: [{cuisine_id: 148, cuisine_name: "Indian"}]},
    94: {country: "Indonesia", cuisines: [{}, {}]},
    97: {country: "Ireland", cuisines: [{cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    99: {country: "Italy", cuisines: [{cuisine_name: "Italian", cuisine_id: 55}, {cuisine_name: "European", cuisine_id: 38},{cuisine_name: "Bakery", cuisine_id: 5}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Desserts", cuisine_id: 100}, {cuisine_name: "Austrian", cuisine_id: 201}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "Ice Cream", cuisine_id: 233}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Patisserie", cuisine_id: 183},{cuisine_name: "Pizza", cuisine_id: 82}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Sandwich", cuisine_id: 304}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    112: {country: "Lebanon", cuisines: [{}, {}]},
    123: {country: "Malaysia", cuisines: [{}, {}]},
    148: {country: "New Zealand", cuisines: [{cuisine_name: "New Zealand", cuisine_id: 961}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    162: {country: "Philippines", cuisines: [{}, {}]},
    163: {country: "Poland", cuisines: [{cuisine_name: "Polish", cuisine_id: 219}, {cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Russian", cuisine_id: 84}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    164: {country: "Portugal",  cuisines: [{cuisine_name: "Portuguese", cuisine_id: 87}, {cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Tapas", cuisine_id: 179}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    166: {country: "Qatar", cuisines: [{}, {}]},
    184: {country: "Singapore", cuisines: [{}, {}]},
    189: {country: "South Africa", cuisines: [{cuisine_name: "South African", cuisine_id: 267}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    191: {country: "Sri Lanka", cuisines: [{}, {}]},
    208: {country: "Turkey", cuisines: [{cuisine_name: "Turkish", cuisine_id: 142}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Armenian", cuisine_id: 175}, {cuisine_name: "Greek", cuisine_id: 156}, {cuisine_name: "Iranian", cuisine_id: 140}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Kebab", cuisine_id: 178}, {cuisine_name: "Mediterranean", cuisine_id: 70}, {cuisine_name: "Middle Eastern", cuisine_id: 137},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    214: {country: "UAE", cuisines: [{}, {}]},
    215: {country: "United Kingdom", cuisines: [{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "European", cuisine_id: 38},{cuisine_name: "Fish and Chips", cuisine_id: 298}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_id: 148, cuisine_name: "Indian"},  {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Scottish", cuisine_id: 210}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308},{cuisine_name: "Welsh", cuisine_id: 965}]},
    216: {country: "United States", cuisines: [{cuisine_name: "American", cuisine_id: 1}, {cuisine_name: "Amish", cuisine_id: 954}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Cajun", cuisine_id: 491}, {cuisine_name: "California", cuisine_id: 956},{cuisine_name: "Caribbean", cuisine_id: 158}, {cuisine_name: "Creole", cuisine_id: 928}, {cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Hawaiian", cuisine_id: 521},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Jewish", cuisine_id: 265}, {cuisine_name: "Mexican", cuisine_id: 73}, {cuisine_name: "New American", cuisine_id: 996},{cuisine_name: "New Mexican", cuisine_id: 995},{cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963},{cuisine_name: "Pizza", cuisine_id: 82}, {cuisine_name: "Po'Boys", cuisine_id: 970},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Puerto Rican", cuisine_id: 361}, {cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Sandwich", cuisine_id: 304}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Soul Food", cuisine_id: 461}, {cuisine_name: "Southern", cuisine_id: 471}, {cuisine_name: "Southwestern", cuisine_id: 966},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Tex-Mex", cuisine_id: 150}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}
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
var arr_city1_price_range = [];
var obj_city1_price_range1 = [];
var obj_city1_price_range2= [];
var obj_city1_price_range3= [];
var obj_city1_price_range4= [];
var obj_city1_segRestoID;

var obj_city2 = [];
var arr_city2_price_range=[];
var obj_city2_price_range1= [];
var obj_city2_price_range2= [];
var obj_city2_price_range3= [];
var obj_city2_price_range4= [];
var obj_city2_segRestoID;

var city1resto;
var img1;
var name1;
var cuisine1;
var currency1;
var price1;
var rating1;

var city2resto;
var img2;
var name2;
var cuisine2;
var currency2;
var price2;
var rating2;

var pName;
var pImg;
var pCuisine;
var pPrice;
var pRating;

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
var segTotalVotes=0;
var segTotalPrice=0;
var segTotalRatings=0;
var segVotes = 0;
var segPrice = 0;
var segRating = 0;
var segAvgVotes = 0;
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

        var queryURL ="https://developers.zomato.com/api/v2.1/cities?q=" + city1name + "&count=1";
    
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
        }).then(function(city1response) {
    
            console.log(city1response);     
        
            city1_id= city1response.location_suggestions[0].id;

            city1country_id = city1response.location_suggestions[0].country_id;
            console.log("the start city COUNTRY ID is: " + city1country_id);
            city1country_name = city1response.location_suggestions[0].country_name;
            console.log("the start city COUNTRY NAME is: " + city1country_name);
        
            console.log("The number of cuisines for " + city1name + ", " + city1country_name + " is : " + objCountryCuisines[city1country_id].cuisines.length);

            // loop to collect cusisine_id(s) from objCountryCuisines for the [city1name and city1country_id]
            for (var i=0;i<objCountryCuisines[city1country_id].cuisines.length;i++){

                city1cuisineID = objCountryCuisines[city1country_id].cuisines[i].cuisine_id + ", " + city1cuisineID;
            };

            console.log("the city1CuisineID is: " + city1cuisineID);

            // STATIC RESPONSE COUNT AMOUNTS
            var count_id=20;
            // var count_id=3;
    
            var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + city1cuisineID + "&entity_type=city&count=" + count_id; 
    
            $.ajax({
                url: queryURL,
                method: "GET",
                headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
            }).then(function(city1search) {
    
                console.log(city1search); 

                for(i=0;i<city1search.restaurants.length;i++){
                    // id
                    resto_id = city1search.restaurants[i].restaurant.id;
                    //  price_range SEGMENTATION
                    price_range= city1search.restaurants[i].restaurant.price_range;
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
                    totalRating = agg_rating  + totalRating;

                    // CREATE OBJECT OF API DATA
                    pairedValKey={
                        resto_id: {
                            name : restoName,
                            price_range: price_range,
                            cuisine_id: city1cuisineID,
                            cuisine: cuisine,
                            restoImg: restoImg,    
                            url: restoURL,
                            currency: currency,
                            avg_cost_two: avg_cost_two,
                            agg_rating : agg_rating,
                            rating_text: rating_text,
                            votes: votes}
                        };
                
                    console.log(price_range);
            
                    if (pairedValKey.resto_id.price_range===1){

                        obj_city1_price_range1.push(pairedValKey);

                    } if(pairedValKey.resto_id.price_range===2){
                        obj_city1_price_range2.push(pairedValKey);

                    } if(pairedValKey.resto_id.price_range===3){
                        obj_city1_price_range3.push(pairedValKey);
                
                    } if(pairedValKey.resto_id.price_range===4){
                        obj_city1_price_range4.push(pairedValKey);
                
                    };

                    obj_city1.push(pairedValKey);

                };

                // (1) 
                // FULL METRICS FOR BOTH CITY1 AND CITY2 OBJECTS

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

                for(i=0; i<obj_city1.length; i++){
                    console.log("the obj_city1.length is: " + obj_city1.length);

                    //  --> Votes
                        // share of Total Votes (column G from Excel)
                        obj_city1[i].shareTotalVotes = obj_city1[i].resto_id.votes/totalVotes;
                        console.log("The total votes share is: " + obj_city1[i].shareTotalVotes)

                        // total index on Votes (column R from Excel)
                        obj_city1[i].indexTotalVotes = ((obj_city1[i].resto_id.votes-avgVotes)/obj_city1[i].votes)*100;

                    //  --> Price
                        // total index on Price (column O from Excel)
                        obj_city1[i].indexTotalPrice = ((obj_city1[i].resto_id.avg_cost_two-avgPrice)/obj_city1[i].avg_cost_two)*100;

                    //  --> Rating
                        // total index on Rating (column L from Excel)
                        obj_city1[i].indexTotalRating = ((obj_city1[i].resto_id.agg_rating-avgRating)/obj_city1[i].agg_rating)*100;
                };

                //  loop to each restaurant from the object

                arr_city1_price_range.push(obj_city1_price_range1, obj_city1_price_range2, obj_city1_price_range3,obj_city1_price_range4);
                
                // // (1) LOOP THROUGH THE subObjectsByPrice_Range_Segment

                for (var i=0; i< arr_city1_price_range.length; i++){

                    if(arr_city1_price_range[i].length !== 0){

                        segCount = arr_city1_price_range[i].length;

                        segTotalVotes=arr_city1_price_range[i].reduce(function(totalVotes,currVal){
                            return totalVotes+currVal.resto_id.votes
                        },0)

                        segAvgVotes = segTotalVotes/segCount;

                        console.log("the segAvgVotes is: "+ segAvgVotes);

                        segTotalPrice =arr_city1_price_range[i].reduce(function(totalPrice,currVal){
                            return totalPrice+currVal.resto_id.avg_cost_two
                        },0)

                        segAvgPrice = parseFloat(segTotalPrice/segCount.toFixed(0));

                        console.log("the segAvgPrice is: "+ parseFloat(segAvgPrice).toFixed(0));

                        segTotalRating =arr_city1_price_range[i].reduce(function(totalRating,currVal){
                            return totalRating+currVal.resto_id.agg_rating
                        },0)

                        segAvgRating = segTotalRating/segCount;
                        
                        console.log("the segAvgRating is: "+ segAvgRating);

                        arr_city1_price_range[i].forEach(element => {
                    
                            element.resto_id.segIndexVotes = ((element.resto_id.votes-segAvgVotes)/element.resto_id.votes)*100
                            
                            console.log("The segIndexVotes is: " + element.resto_id.segIndexVotes);
                            
                            element.resto_id.segIndexPrice = ((element.resto_id.avg_cost_two-segAvgPrice)/element.resto_id.avg_cost_two)*100
                            
                            console.log("The segIndexPrice is: " + element.resto_id.segIndexPrice);
                            
                            element.resto_id.segIndexRating =((element.resto_id.agg_rating-segAvgRating)/element.resto_id.agg_rating)*100
                            
                            console.log("The segIndexRating is: " + element.resto_id.segIndexRating);
                        
                            });
                        
                        // (2) PERFORM ANALYSIS ON INDICES TO DETERMINE THE RECOMMENDED RESTIO 
                        // (3) IF THERE'S A "TIE" BETWEEN 2 OR MORE RESTOS WITHIN A SEGMENT, 
                        //  TIE-BREAKERS ARE DETERMINED BY INDICES AT TOTAL LEVEL, i.e., wrt entire obj_city1 
                        //
                        //  (4) PUSH indices to EACH RESTAURANT IN obj_city1 per the equivalent resto_id IN obj_city1 
                        //
                        //  (5) BASED ON THE RESULTS OF THE ANALYSIS, PUSH A NEW PROPERTY TO THE obj_city1 = TRUE ON 
                        //  THE RESTOS THAT WILL BE DRAWN TO THE PAGE <DIV> PREPEND & APPEND AND USE THIS ^^PROPERTY 
                        //  TO DETERMINE AND PERFORM THE POPULATING OF THE PAGE

                    };  
                
                };

                //  (6) POPULATE THE DIV FOR CITY1
                    city1resto = $("<div class='city1resto'>");
                    
                    // APPEND THE TEXT ELEMENTS, THEN PREPEND THE IMAGE TO THE DIV

                    for(i=0; i< obj_city1.length; i++){

                    img1 = obj_city1[i].resto_id.restoImg;

                        // console.log(img1);

                        name1 = obj_city1[i].resto_id.name;

                        // console.log(name1);

                        cuisine1= obj_city1[i].resto_id.cuisine;

                        // console.log(cuisine1);

                        currency1 = obj_city1[i].resto_id.currency;
                        price1 = obj_city1[i].resto_id.avg_cost_two;

                        // console.log(currency1 + price1);
                        rating1=obj_city1[i].resto_id.rating_text;

                        // console.log(rating1);

                        // pImg = $("<img>").attr({
                        //         "class": "city1restoIMG",
                        //         "src": img1,
                        //         "data-value": restoURL
                        //         });

                        
                    pImg = $("<img>").attr({
                            "class": obj_city1[i].resto_id.restoImg,
                            "src": img1,
                            "data-value": restoURL
                            });
                    
                    // console.log(pImg);
                    city1resto.append(pImg);

                    // pName = $("<p>").text(name1);

                    pName = $("<p>")
                    .text(name1)
                    .addClass("city1restoName");
                    city1resto.append(pName);

                    // console.log(city1resto);

                    pPrice = $("<p>")
                            .text(currency + price1)
                            .addClass("city1restoPrice");
                    city1resto.append(pPrice);

                    // console.log(pPrice);

                    pCuisine = $("<p>")
                                .text(cuisine1)
                                .addClass("city1restoCuisine");
                    city1resto.append(pCuisine);
                    
                    // console.log(pCuisine);

                    pRating = $("<p>")
                                .text(rating1)
                                .addClass("city1restoRating");
                    city1resto.append(pRating);
                    };
                    // console.log(pRating);

                    // PREPEND TO startCards DIV
                    $("#startCards").prepend(city1resto);    

                    // // (7) BEGIN END CITY AKA CITY2
                    // //
                    // //
                    // // (8) REPEAT ENTIRETY OF LINES 141:322 FOR CITY2
                    // //
                    // // (9) THE DIV FOR CITY2
                    // // 
                    // // (10) CREATE FUNCTIONALITY TO BE ABLE TO CROSS-X-PRODUCT CUISINES + WEATHJER ACROSS CITIES
                    // //
                    // //


// // END OF ZOMATO JAVASCRIPT
            // });
// start of weather
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
});
});
// Initialize Firebase
                // var config = {
                //     apiKey: "AIzaSyAwhvcz5UIY3y0nZaA76lSHEm24P99-Wzg",
                //     authDomain: "project1-2f7ae.firebaseapp.com",
                //     databaseURL: "https://project1-2f7ae.firebaseio.com",
                //     projectId: "project1-2f7ae",
                //     storageBucket: "project1-2f7ae.appspot.com",
                //     messagingSenderId: "842716287063"
                // };
                // firebase.initializeApp(config);
