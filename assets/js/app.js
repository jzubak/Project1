//declare variables
var city1;
var city2;
var country1;
var country2;
var APIKeyWeather = "30bacb09b1a6ec05e34d8f5ac74ca7de";
var queryURL;
var sumTemp = 0;
var sumClouds = 0;
var sumRain = 0;
var aveTemp;
var aveClouds;
var aveRain;
var sumTemp2 = 0;
var sumClouds2 = 0;
var sumRain2 = 0;
var aveTemp2;
var aveClouds2;
var aveRain2;

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
    1: {country: "India", cuisines: [{cuisine_id: 148, cuisine_name: "Indian"},{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Bakery", cuisine_id: 5}, {cuisine_name: "Mughlai", cuisine_id: 75}, {cuisine_name: "Nepalese", cuisine_id: 117}, {cuisine_name: "Central Asian", cuisine_id: 202}, {cuisine_name: "Pakistani", cuisine_id: 139}, {cuisine_name: "Fish and Chips", cuisine_id: 298}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    94: {country: "Indonesia", cuisines: [{cuisine_name: "Indonesian", cuisine_id: 114}, {cuisine_name: "Asian", cuisine_id: 3}, {cuisine_name: "Pan Asian", cuisine_id: 209}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227}, {cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    97: {country: "Ireland", cuisines: [{cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    99: {country: "Italy", cuisines: [{cuisine_name: "Italian", cuisine_id: 55}, {cuisine_name: "European", cuisine_id: 38},{cuisine_name: "Bakery", cuisine_id: 5}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Desserts", cuisine_id: 100}, {cuisine_name: "Austrian", cuisine_id: 201}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "Ice Cream", cuisine_id: 233}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Patisserie", cuisine_id: 183},{cuisine_name: "Pizza", cuisine_id: 82}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Sandwich", cuisine_id: 304}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    112: {country: "Lebanon", cuisines: [{cuisine_name: "Lebanese", cuisine_id: 66}, {cuisine_name: "Turkish", cuisine_id: 142}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Bakery", cuisine_id: 5}, {cuisine_name: "French", cuisine_id: 45}, {cuisine_name: "Greek", cuisine_id: 156}, {cuisine_name: "Iranian", cuisine_id: 140}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Kebab", cuisine_id: 178}, {cuisine_name: "Mediterranean", cuisine_id: 70}, {cuisine_name: "Middle Eastern", cuisine_id: 137},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    123: {country: "Malaysia", cuisines: [{cuisine_name: "Malaysian", cuisine_id: 69},  {cuisine_name: "Asian", cuisine_id: 3}, {cuisine_name: "Pan Asian", cuisine_id: 209}, {cuisine_name: "Bubble Tea", cuisine_id: 247}, {cuisine_name: "Burmese", cuisine_id: 22}, {cuisine_name: "Cambodian", cuisine_id: 111}, {cuisine_name: "Cantonese", cuisine_id: 121}, {cuisine_name: "Chinese", cuisine_id: 25}, {cuisine_name: "Taiwanese", cuisine_id: 190}, {cuisine_name: "Thai", cuisine_id: 95},{cuisine_name: "Vietnamese", cuisine_id: 99}, {cuisine_name: "Dim Sum", cuisine_id: 411}, {cuisine_name: "Japanese", cuisine_id: 60}, {cuisine_name: "Ramen", cuisine_id: 320}, {cuisine_name: "Laotian", cuisine_id: 901},  {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227}, {cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    148: {country: "New Zealand", cuisines: [{cuisine_name: "New Zealand", cuisine_id: 961}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    162: {country: "Philippines", cuisines: [{cuisine_name: "Filipino", cuisine_id: 112},  {cuisine_name: "Asian", cuisine_id: 3}, {cuisine_name: "Pan Asian", cuisine_id: 209}, {cuisine_name: "Bubble Tea", cuisine_id: 247}, {cuisine_name: "Burmese", cuisine_id: 22}, {cuisine_name: "Cambodian", cuisine_id: 111}, {cuisine_name: "Cantonese", cuisine_id: 121}, {cuisine_name: "Chinese", cuisine_id: 25}, {cuisine_name: "Taiwanese", cuisine_id: 190}, {cuisine_name: "Thai", cuisine_id: 95},{cuisine_name: "Vietnamese", cuisine_id: 99}, {cuisine_name: "Dim Sum", cuisine_id: 411}, {cuisine_name: "Japanese", cuisine_id: 60}, {cuisine_name: "Ramen", cuisine_id: 320}, {cuisine_name: "Laotian", cuisine_id: 901},  {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227}, {cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    163: {country: "Poland", cuisines: [{cuisine_name: "Polish", cuisine_id: 219}, {cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Russian", cuisine_id: 84}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    164: {country: "Portugal",  cuisines: [{cuisine_name: "Portuguese", cuisine_id: 87}, {cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Tapas", cuisine_id: 179}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    166: {country: "Qatar", cuisines: [{cuisine_name: "Middle Eastern", cuisine_id: 137},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Kebab", cuisine_id: 178}, {cuisine_name: "Mediterranean", cuisine_id: 70}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    184: {country: "Singapore", cuisines: [{cuisine_name: "Singaporean", cuisine_id: 119}, {cuisine_name: "Asian", cuisine_id: 3}, {cuisine_name: "Pan Asian", cuisine_id: 209}, {cuisine_name: "Bubble Tea", cuisine_id: 247}, {cuisine_name: "Burmese", cuisine_id: 22}, {cuisine_name: "Cambodian", cuisine_id: 111}, {cuisine_name: "Cantonese", cuisine_id: 121}, {cuisine_name: "Chinese", cuisine_id: 25}, {cuisine_name: "Taiwanese", cuisine_id: 190}, {cuisine_name: "Thai", cuisine_id: 95},{cuisine_name: "Vietnamese", cuisine_id: 99}, {cuisine_name: "Dim Sum", cuisine_id: 411}, {cuisine_name: "Japanese", cuisine_id: 60}, {cuisine_name: "Ramen", cuisine_id: 320}, {cuisine_name: "Laotian", cuisine_id: 901},  {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227}, {cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    189: {country: "South Africa", cuisines: [{cuisine_name: "South African", cuisine_id: 267}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    191: {country: "Sri Lanka", cuisines: [{cuisine_name: "Sri Lankan", cuisine_id: 86},{cuisine_id: 148, cuisine_name: "Indian"},{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Bakery", cuisine_id: 5},{cuisine_name: "Fish and Chips", cuisine_id: 298}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    208: {country: "Turkey", cuisines: [{cuisine_name: "Turkish", cuisine_id: 142}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Central Asian", cuisine_id: 202}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Armenian", cuisine_id: 175}, {cuisine_name: "Georgian", cuisine_id: 205},{cuisine_name: "Greek", cuisine_id: 156}, {cuisine_name: "Iranian", cuisine_id: 140}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Kebab", cuisine_id: 178}, {cuisine_name: "Mediterranean", cuisine_id: 70}, {cuisine_name: "Middle Eastern", cuisine_id: 137},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    214: {country: "UAE", cuisines: [{cuisine_name: "Middle Eastern", cuisine_id: 137}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Kebab", cuisine_id: 178}, {cuisine_name: "Mediterranean", cuisine_id: 70},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
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
var price_range1;

var city2resto;
var img2;
var name2;
var cuisine2;
var currency2;
var price2;
var rating2;
var price_range2;

var pName;
var pImg;
var pCuisine;
var pPrice;
var pRating;
var pRange;

var totalVotes = 0;
var totalPrice = 0;
var totalRating = 0;
var avgVotes = 0;
var avgPrice =0;
var avgRating =0;

var segCount = 0;
var segVotes=0;
var segPrice=0;
var segRating = 0;
var segAvgVotes = 0;
var segAvgPrice = 0;
var segAvgRating = 0;
var indexSegVotes = 0;
var indexSegPrice = 0;
var indexSegRating = 0;
var indexSegRank;
var indexTotalRank;

$(document).ready(function () {
    
    $("#submit-btn").on("click", (event) => {
    event.preventDefault();

    city1 = $("#startLocation").val().trim();
    console.log(city1);
    city2 = $("#endLocation").val().trim();
    
        // BEGIN STARTCITY AKA CITY1

        city1name = $("#startLocation").val().trim();
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
            // var count_id=20;
            var count_id=3;
    
            var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + city1cuisineID + "&entity_type=city&count=" + count_id; 
    
            $.ajax({
                url: queryURL,
                method: "GET",
                headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
            }).then(function(city1search) {
    
                console.log(city1search); 

                for(i=0;i<city1search.restaurants.length;i++){
                    // id
                    resto_id = parseInt(city1search.restaurants[i].restaurant.id);
                    console.log(resto_id);
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
                    // pairedValKey={
                    //     [resto_id]: {
                    //         name : restoName,
                    //         price_range: price_range,
                    //         cuisine_id: city1cuisineID,
                    //         cuisine: cuisine,
                    //         restoImg: restoImg,    
                    //         url: restoURL,
                    //         currency: currency,
                    //         avg_cost_two: avg_cost_two,
                    //         agg_rating : agg_rating,
                    //         rating_text: rating_text,
                    //         votes: votes,
                    //         indexTotalRank: '',
                    //         indexSegRank: '',
                    //         div_draw: "false"}
                    //     };

                        pairedValKey={
                            resto_id:  resto_id,
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
                            votes: votes,
                            indexTotalRank: '',
                            indexSegRank: '',
                            div_draw: "false"};
                
                    console.log(price_range);
            
                    if (pairedValKey.price_range===1){

                        obj_city1_price_range1.push(pairedValKey);

                    } if(pairedValKey.price_range===2){
                        obj_city1_price_range2.push(pairedValKey);

                    } if(pairedValKey.price_range===3){
                        obj_city1_price_range3.push(pairedValKey);
                
                    } if(pairedValKey.price_range===4){
                        obj_city1_price_range4.push(pairedValKey);
                
                    };

                    obj_city1.push(pairedValKey);
                    console.log(obj_city1);

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
                        //console.log(obj_city1[i][17011799].votes);

                        obj_city1[i].shareTotalVotes = obj_city1[i].votes/totalVotes;
                        // obj_city1[i][resto_id].shareTotalVotes = obj_city1[i][resto_id].votes/totalVotes;
                        console.log("The total votes share is: " + obj_city1[i].shareTotalVotes);

                        // total index on Votes (column R from Excel)
                        obj_city1[i].indexTotalVotes = ((obj_city1[i].votes-avgVotes)/obj_city1[i].votes)*100;

                    //  --> Price
                        // total index on Price (column O from Excel)
                        obj_city1[i].indexTotalPrice = ((obj_city1[i].avg_cost_two-avgPrice)/obj_city1[i].avg_cost_two)*100;

                    //  --> Rating
                        // total index on Rating (column L from Excel)
                        obj_city1[i].indexTotalRating = ((obj_city1[i].agg_rating-avgRating)/obj_city1[i].agg_rating)*100;

                    //  --> RANK
                        obj_city1[i].indexTotalRank = (obj_city1[i].indexTotalRating+obj_city1[i].indexTotalVotes)-obj_city1[i].indexTotalPrice;
                        console.log("The index total rank is: " + obj_city1[i].indexTotalRank);
                };

                //  array of the price_range segment sub-objects

                arr_city1_price_range.push(obj_city1_price_range1, obj_city1_price_range2, obj_city1_price_range3,obj_city1_price_range4);
                
                // LOOP THROUGH THE sub-Objects and calculate the indices by VOTES, PRICE, RATING

                for (var i=0; i< arr_city1_price_range.length; i++){

                    if(arr_city1_price_range[i].length !== 0)   {

                        // console.log(arr_city1_price_range); 
                        // console.log("the price_range object is: " + arr_city1_price_range[i][i].price_range);
                        segCount = arr_city1_price_range[i].length;

                        segVotes=arr_city1_price_range[i].reduce(function(segVotes,currVal){
                            // return segVotes+currVal[resto_id].votes
                            return segVotes+currVal.votes
                        },0)

                        console.log("the segVotes is: " + segVotes);

                        segAvgVotes = segVotes/segCount;

                        console.log("the segAvgVotes is: " + segAvgVotes);

                        segPrice =arr_city1_price_range[i].reduce(function(segPrice,currVal){
                            // return segPrice+currVal[resto_id].avg_cost_two
                            return segPrice+currVal.avg_cost_two
                        },0)

                        segAvgPrice = parseFloat(segPrice/segCount.toFixed(0));

                        console.log("the segAvgPrice is: "+ parseFloat(segAvgPrice).toFixed(0));

                        segRating =arr_city1_price_range[i].reduce(function(segRating,currVal){
                            // return segRating+currVal[resto_id].agg_rating
                            return segRating+currVal.agg_rating
                        },0)

                        segAvgRating = segRating/segCount;
                        
                        console.log("the segAvgRating is: "+ segAvgRating);

                        arr_city1_price_range[i].forEach(element => {
                    
                            element.indexSegVotes = ((element.votes-segAvgVotes)/element.votes)*100
                            // arr_city1_price_range[i].resto_id.segIndexVotes=element.resto_id.segIndexVotes;

                            console.log("The indexSegVotes is: " + element.indexSegVotes);
                            
                            console.log("the avg cost for two is: " + element.avg_cost_two);
                            // element.indexSegPrice = ((element[resto_id].avg_cost_two-segAvgPrice)/element.avg_cost_two)*100
                            element.indexSegPrice = ((element.avg_cost_two-segAvgPrice)/element.avg_cost_two)*100
                            
                            console.log("The indexSegPrice is: " + element.indexSegPrice);

                            element.indexSegRating =((element.agg_rating-segAvgRating)/element.agg_rating)*100
                            
                            console.log("The indexSegRating is: " + element.indexSegRating);

                            element.indexSegRank = (element.indexSegVotes+element.indexSegRating)-element.indexSegPrice 
                            
                            console.log("the indexSegRank is: " + element.indexSegRank);

                            // obj_city1[element[resto_id]][resto_id].indexSegRank = element[resto_id].indexSegRank;
                            
                            });

                            
                            // highestRanked_resto_id = arr_city1_price_range[i].map(function(highestRank){

                            //     return Math.max(arr_city1_price_range[i].resto_id.rankIndex), arr_city1_price_range[i].resto_id;

                            // });

                            // console.log(highestRank_resto_id);

                        // console.log ()

                    };  

                    // ****
                    //
                    //
                    // highestRanked_resto_id = arr_city1_price_range[i].reduce(function(highest, _rankIndex) {
                    //     return (highest.resto_id || 0) > arr_city1_price_range[i].resto_id.rankIndex ? highest : rank_index;
                    // }, rankIndex);
                    //
                    //
                    // LOGIC BELOW for $ and $$$$
                    // between $$ and $$$ --> whichever is a higher rankIndex, that's the 3rd reco
                    //
                    // ****
                    //
                    // console.log("the highest-ranked resto_id is: " + highestRanked_resto_id);
                            
                    // obj_city1[highestRanked_resto_id].divDraw = true;
                    //
                    // ****

                };

                //  POPULATE THE DIV FOR CITY1
                    city1resto = $("<div class='city1resto'>");
                    
                    // APPEND THE TEXT ELEMENTS, THEN PREPEND THE IMAGE TO THE DIV

                    for(i=0; i< obj_city1.length; i++){

                        img1 = obj_city1[i][resto_id].restoImg;

                        console.log(img1);

                        name1 = obj_city1[i][resto_id].name;

                        console.log(name1);

                        cuisine1= obj_city1[i][resto_id].cuisine;

                        console.log(cuisine1);

                        currency1 = obj_city1[i][resto_id].currency;
                        price1 = obj_city1[i][resto_id].avg_cost_two;

                        console.log(currency1 + price1);
                        rating1=obj_city1[i][resto_id].rating_text;

                        console.log(rating1);

                        price_range1=obj_city1[i][resto_id].price_range;

                        // pImg = $("<img>").attr({
                        //         "class": "city1restoIMG",
                        //         "src": img1,
                        //         "data-value": restoURL
                        //         });

                        pImg = $("<img>").attr({
                            "class": "city1restoIMG",
                            "src": obj_city1[i][resto_id].restoImg,
                            "data-value": restoURL
                            });
                        
                        console.log(pImg);
                        city1resto.append(pImg);

                        pName = $("<p>")
                            .text(name1)
                            .addClass("city1restoName");

                        city1resto.append(pName);

                        console.log(city1resto);
                        
                        pRange = $("<p>")
                                .text("Price Range: " + price_range1)
                                .addClass("city1restoRange");
                
                        city1resto.append(pRange);

                        console.log(pRange);

                        pPrice = $("<p>")
                            .text(currency + price1)
                            .addClass("city1restoPrice");
                      
                        city1resto.append(pPrice);

                        console.log(pPrice);

                        pCuisine = $("<p>")
                                .text(cuisine1)
                                .addClass("city1restoCuisine");
                                
                        city1resto.append(pCuisine);
                        
                        console.log(pCuisine);

                        pRating = $("<p>")
                                .text(rating1)
                                .addClass("city1restoRating");
                
                        city1resto.append(pRating);

                        console.log(pRating);

                        // PREPEND TO startCards DIV
                        $("#startCards").prepend(city1resto);

                    };    

                    // // 
                    // // (10) CREATE FUNCTIONALITY TO BE ABLE TO CROSS-X-PRODUCT CUISINES + WEATHJER ACROSS CITIES
                    // //
                    // //


// // END OF ZOMATO JAVASCRIPT
            });
//===========================

        // BEGIN ENDCITY AKA CITY2

        city2name = $("#endLocation").val().trim();
        console.log("the city2name is: " + city2name);  

        var queryURL ="https://developers.zomato.com/api/v2.1/cities?q=" + city2name + "&count=1";

        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
        }).then(function(city2response) {

            console.log(city2response);     

            city2_id= city2response.location_suggestions[0].id;

            city2country_id = city2response.location_suggestions[0].country_id;
            console.log("the end city COUNTRY ID is: " + city2country_id);
            city2country_name = city2response.location_suggestions[0].country_name;
            console.log("the end city COUNTRY NAME is: " + city2country_name);

            console.log("The number of cuisines for " + city2name + ", " + city2country_name + " is : " + objCountryCuisines[city2country_id].cuisines.length);

            // loop to collect cusisine_id(s) from objCountryCuisines for the [city1name and city1country_id]
            for (var i=0;i<objCountryCuisines[city2country_id].cuisines.length;i++){

                city2cuisineID = objCountryCuisines[city2country_id].cuisines[i].cuisine_id + ", " + city2cuisineID;
            };

            console.log("the city2CuisineID is: " + city2cuisineID);

            // STATIC RESPONSE COUNT AMOUNTS
            // var count_id=20;
            var count_id=3;

            var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city2_id + "&cuisines=" + city2cuisineID + "&entity_type=city&count=" + count_id; 

            $.ajax({
                url: queryURL,
                method: "GET",
                headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
            }).then(function(city2search) {

                console.log(city2search); 

                for(i=0;i<city2search.restaurants.length;i++){
                    // id
                    resto_id = city2search.restaurants[i].restaurant.id;
                    //  price_range SEGMENTATION
                    price_range= city2search.restaurants[i].restaurant.price_range;
                    //  name
                    restoName = city2search.restaurants[i].restaurant.name;
                    //  cuisine
                    cuisine = city2search.restaurants[i].restaurant.cuisines;
                    console.log("the cuisines are: " + cuisine);
                    //  image
                    restoImg = city2search.restaurants[i].restaurant.featured_image;
                    //  url
                    restoURL = city2search.restaurants[i].restaurant.url;
                    //  currency
                    currency = city2search.restaurants[i].restaurant.currency;
                    //  avg_cost_two
                    avg_cost_two = city2search.restaurants[i].restaurant.average_cost_for_two;
                    //  aggregate_rating
                    agg_rating = parseFloat(city2search.restaurants[i].restaurant.user_rating.aggregate_rating);
                    //  rating_text
                    rating_text = city2search.restaurants[i].restaurant.user_rating.rating_text;
                    //  votes
                    votes = parseFloat(city2search.restaurants[i].restaurant.user_rating.votes);
                    
                    // TOTALS
                    totalVotes = votes + totalVotes;
                    totalPrice = avg_cost_two + totalPrice;
                    totalRating = agg_rating  + totalRating;

                    // CREATE OBJECT OF API DATA
                    pairedValKey={
                        resto_id: {
                            name : restoName,
                            price_range: price_range,
                            cuisine_id: city2cuisineID,
                            cuisine: cuisine,
                            restoImg: restoImg,    
                            url: restoURL,
                            currency: currency,
                            avg_cost_two: avg_cost_two,
                            agg_rating : agg_rating,
                            rating_text: rating_text,
                            votes: votes,
                            indexTotalRank: '',
                            indexSegRank: '',
                            div_draw: "false"}
                        };
                
                    console.log(price_range);
            
                    if (pairedValKey.resto_id.price_range===1){

                        obj_city2_price_range1.push(pairedValKey);

                    } if(pairedValKey.resto_id.price_range===2){
                        obj_city2_price_range2.push(pairedValKey);

                    } if(pairedValKey.resto_id.price_range===3){
                        obj_city2_price_range3.push(pairedValKey);
                
                    } if(pairedValKey.resto_id.price_range===4){
                        obj_city2_price_range4.push(pairedValKey);
                
                    };

                    obj_city2.push(pairedValKey);

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

                for(i=0; i<obj_city2.length; i++){
                    console.log("the obj_city2.length is: " + obj_city2.length);

                    //  --> Votes
                        // share of Total Votes (column G from Excel)
                        obj_city2[i].resto_id.shareTotalVotes = obj_city2[i].resto_id.votes/totalVotes;
                        console.log("The total votes share is: " + obj_city2[i].resto_id.shareTotalVotes)

                        // total index on Votes (column R from Excel)
                        obj_city2[i].resto_id.indexTotalVotes = ((obj_city2[i].resto_id.votes-avgVotes)/obj_city2[i].resto_id.votes)*100;

                    //  --> Price
                        // total index on Price (column O from Excel)
                        obj_city2[i].resto_id.indexTotalPrice = ((obj_city2[i].resto_id.avg_cost_two-avgPrice)/obj_city2[i].resto_id.avg_cost_two)*100;

                    //  --> Rating
                        // total index on Rating (column L from Excel)
                        obj_city2[i].resto_id.indexTotalRating = ((obj_city2[i].resto_id.agg_rating-avgRating)/obj_city2[i].resto_id.agg_rating)*100;

                    //  --> RANK

                        obj_city2[i].resto_id.indexTotalRank = (obj_city2[i].resto_id.indexTotalRating+obj_city2[i].resto_id.indexTotalVotes)-obj_city2[i].resto_id.indexTotalPrice;    
                        
                        console.log("The index total rank is: " + obj_city2[i].resto_id.indexTotalRank);
                };

                //  loop to each restaurant from the object

                arr_city2_price_range.push(obj_city2_price_range1, obj_city2_price_range2, obj_city2_price_range3,obj_city2_price_range4);
                
                // // (1) LOOP THROUGH THE subObjectsByPrice_Range_Segment

                for (var i=0; i< arr_city2_price_range.length; i++){

                    if(arr_city2_price_range[i].length !== 0){

                        segCount = arr_city2_price_range[i].length;

                        segVotes=arr_city2_price_range[i].reduce(function(segVotes,currVal){
                            return segVotes+currVal.resto_id.votes
                        },0)

                        console.log("the segVotes is: " + segVotes);

                        segAvgVotes = segVotes/segCount;

                        console.log("the segAvgVotes is: "+ segAvgVotes);

                        segPrice =arr_city2_price_range[i].reduce(function(segPrice,currVal){
                            return segPrice+currVal.resto_id.avg_cost_two
                        },0)

                        segAvgPrice = parseFloat(segPrice/segCount.toFixed(0));

                        console.log("the segAvgPrice is: "+ parseFloat(segAvgPrice).toFixed(0));

                        segRating =arr_city2_price_range[i].reduce(function(segRating,currVal){
                            return segRating+currVal.resto_id.agg_rating
                        },0)

                        segAvgRating = segRating/segCount;
                        
                        console.log("the segAvgRating is: "+ segAvgRating);

                        arr_city2_price_range[i].forEach(element => {
                    
                            element.resto_id.indexSegVotes = ((element.resto_id.votes-segAvgVotes)/element.resto_id.votes)*100
                            
                            console.log("The indexSegVotes is: " + element.resto_id.indexSegVotes);
                            
                            element.resto_id.indexSegPrice = ((element.resto_id.avg_cost_two-segAvgPrice)/element.resto_id.avg_cost_two)*100
                            
                            console.log("The indexSegPrice is: " + element.resto_id.indexSegPrice);
                            
                            element.resto_id.indexSegRating =((element.resto_id.agg_rating-segAvgRating)/element.resto_id.agg_rating)*100
                            
                            console.log("The indexSegRating is: " + element.resto_id.indexSegRating);

                            element.resto_id.indexSegRank = (element.resto_id.indexSegVotes+element.resto_id.indexSegRating)-element.resto_id.indexSegPrice 
                            console.log("the indexSegRank is: " + element.resto_id.indexSegRank);

                            // obj_city2[element.resto_id].resto_id.indexSegRank = element.resto_id.indexSegRank;
                        
                            });

                    };  
                
                };

                //  POPULATE THE DIV FOR CITY2
                    city2resto = $("<div class='city2resto'>");
                    
                    // APPEND THE TEXT ELEMENTS, THEN PREPEND THE IMAGE TO THE DIV

                    for(i=0; i< obj_city2.length; i++){

                        img2 = obj_city2[i].resto_id.restoImg;

                        console.log(img2);

                        name2 = obj_city2[i].resto_id.name;

                        console.log(name2);

                        cuisine2= obj_city2[i].resto_id.cuisine;

                        console.log(cuisine2);

                        currency2 = obj_city2[i].resto_id.currency;
                        price2 = obj_city2[i].resto_id.avg_cost_two;

                        console.log(currency2 + price2);

                        rating2=obj_city2[i].resto_id.rating_text;

                        console.log(rating2);

                        price_range2=obj_city2[i].resto_id.price_range;

                        // pImg = $("<img>").attr({
                        //         "class": "city2restoIMG",
                        //         "src": img2,
                        //         "data-value": restoURL
                        //         });

                        pImg = $("<img>").attr({
                            "class": "city2restoIMG",
                            "src": obj_city2[i].resto_id.restoImg,
                            "data-value": restoURL
                            });
                        
                        console.log(pImg);
                        city2resto.append(pImg);

                        pName = $("<p>")
                            .text(name2)
                            .addClass("city2restoName");

                        city2resto.append(pName);

                        console.log(city2resto);

                        pRange = $("<p>")
                                .text("Price Range: " + price_range2)
                                .addClass("city2restoRange");
                
                        city2resto.append(pRange);

                        console.log(pRange);

                        pPrice = $("<p>")
                            .text(currency2 + price2)
                            .addClass("city2restoPrice");
                    
                        city2resto.append(pPrice);

                        console.log(pPrice);

                        pCuisine = $("<p>")
                                .text(cuisine2)
                                .addClass("city2restoCuisine");
                                
                        city2resto.append(pCuisine);
                        
                        console.log(pCuisine);

                        pRating = $("<p>")
                                .text(rating2)
                                .addClass("city2restoRating");
                
                        city2resto.append(pRating);

                        console.log(pRating);

                        // PREPEND TO startCards DIV
                        $("#endCards").prepend(city2resto);

                    };    
                    
// //
// // CREATE FUNCTIONALITY TO BE ABLE TO CROSS-X-PRODUCT CUISINES + WEATHJER ACROSS CITIES
// //


// // END OF ZOMATO JAVASCRIPT

            });

//            
//===========================    
//       
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
        function resetVars2() {
            console.log("start of resetVars()");
            sumTemp2 = 0;
            sumClouds2 = 0;
            sumRain2 = 0;
            console.log("SumTemp: "+sumTemp2);
            console.log("SumClouds: "+sumClouds2);
            console.log("SumRain: "+sumRain2);
        }
        function findAverages2() {
            console.log("starting findAverages()");
            aveTemp2 = sumTemp2 / 8;
            aveClouds2 = sumClouds2 / 8;
            aveRain2 = sumRain2 / 8;
            console.log("aveTemp: " + aveTemp2);
            console.log("aveClouds: " + aveClouds2);
            console.log("aveRain: " + aveRain2);
        }
        function consoleLogs2() {
            console.log("SumTemp: " + sumTemp2);
            console.log("SumClouds: " + sumClouds2);
            console.log("SumRain: " + sumRain2);
        }
        var countryAbbreviations = [
            ["au", "Australia"],
            ["cz", "Czech Republic"],
            ["it", "Italy"],
            ["ph", "Philippines"],
            ["sg", "Singapore"],
            ["tr", "Turkey"],
            ["br", "Brasil"],
            ["in", "India"],
            ["lb", "Lebanon"],
            ["pl", "Poland"],
            ["sk", "Slovakia"],
            ["ae", "UAE"],
            ["ca", "Canada"],
            ["id", "Indonesia"],
            ["my", "Malaysia"],
            ["pt", "Portugal"],
            ["za", "South Africa"],
            ["uk", "United Kingdom"],
            ["cl", "Chile"],
            ["ie", "Ireland"],
            ["nz", "New Zealand"],
            ["qa", "Qatar"],
            ["lk", "Sri Lanka"],
            ["us", "United States"]
        ]
        //find home country abbreviation for weather api
        for (var i = 0; i < countryAbbreviations.length; i++) {
            if (city1country_name === countryAbbreviations[i][1]) {
                country1 = countryAbbreviations[i][0];
                console.log(country1);
                break;
            }
        }
        //find destination country abbreviation for weather api
        for (var i = 0; i < countryAbbreviations.length; i++) {
            if (city2country_name === countryAbbreviations[i][1]) {
                country2 = countryAbbreviations[i][0];
                console.log(country2);
                break;
            }

            var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city1 + ", " + country1 + "&units=imperial&appid=" + APIKeyWeather;
            $.ajax({
                url: queryURL1,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                console.log("City: " + response.city.name);
                $("#startWeather").empty();
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
                resetVars2();
                console.log(response);
                console.log("City: " + response.city.name);
                $("#endWeather").empty();
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
                    $(tempDiv2).text("Average Temperature: " + Math.floor(aveTemp2) + " (Fahrenheit)");
                    if (aveClouds2 < 20) {
                        $(cloudsDiv2).text("Sunny");
                    } else if (20 <= aveClouds2 < 60) {
                        $(cloudsDiv2).text("Partly Cloudy");
                    } else {
                        $(cloudsDiv2).text("Cloudy");
                    }
                    if (aveRain2 < 1.5) {
                        $(rainDiv2).text("No Rain");
                    } else if (1.5 <= aveRain2 < 2.5) {
                        $(rainDiv2).text("Light Rain Showers");
                    } else {
                        $(rainDiv2).text("Rainy");
                    }
                }

                //show Today's weather
                console.log("DAY 1:");
                $("#day2").text("Today: ");
                for (var i = 0; i < 8; i++) {
                    sumTemp2 = sumTemp2 + response.list[i].main.temp;
                    sumClouds2 = sumClouds2 + response.list[i].clouds.all;
                    if (response.list[i].rain !== undefined) {
                        var typeOfRain = typeof response.list[i].rain["3h"];
                        if (typeOfRain === "number") {
                            sumRain2 = sumRain2 + response.list[i].rain["3h"];
                        }
                    }
                    consoleLogs2();
                }
                    $("#nextDay2").attr("data-day", "1");
                    findAverages2();
                    updateWeather2();
                    //next day button click to display other days' weathers
                    $("#nextDay2").click(function () {
                        resetVars2();
                            if ($("#nextDay2").attr("data-day") === "0") {
                                console.log("DAY 1:");
                                $("#day2").text("Today: ");
                                for (var i = 0; i < 8; i++) {
                                    sumTemp2 = sumTemp2 + response.list[i].main.temp;
                                    sumClouds2 = sumClouds2 + response.list[i].clouds.all;
                                    if (response.list[i].rain !== undefined) {
                                        var typeOfRain = typeof response.list[i].rain["3h"];
                                        if (typeOfRain === "number") {
                                            sumRain2 = sumRain2 + response.list[i].rain["3h"];
                                        }
                                    }
                                    consoleLogs2();
                                }
                                $("#nextDay2").attr("data-day", "1");
                            } else if ($("#nextDay2").attr("data-day") === "1") {
                                console.log("DAY 2:");
                                $("#day2").text("Tomorrow: ");
                                for (var i = 8; i < 16; i++) {
                                sumTemp2 = sumTemp2 + response.list[i].main.temp;
                                sumClouds2 = sumClouds2 + response.list[i].clouds.all;
                                        if (response.list[i].rain !== undefined) {
                                        var typeOfRain = typeof response.list[i].rain["3h"];
                                            if (typeOfRain === "number") {
                                            sumRain2 = sumRain2 + response.list[i].rain["3h"];
                                            }
                                        }
                                    consoleLogs2();
                                }
                                $("#nextDay2").attr("data-day", "2");
                            } else if ($("#nextDay2").attr("data-day") === "2") {
                                console.log("DAY 3:");
                                $("#day2").text("Day 3: ");
                                for (var i = 16; i < 24; i++) {
                                    sumTemp2 = sumTemp2 + response.list[i].main.temp;
                                    sumClouds2 = sumClouds2 + response.list[i].clouds.all;
                                        if (response.list[i].rain !== undefined) {
                                            var typeOfRain = typeof response.list[i].rain["3h"];
                                            if (typeOfRain === "number") {
                                            sumRain2 = sumRain2 + response.list[i].rain["3h"];
                                            }
                                        }   
                                    consoleLogs2();
                                }
                                $("#nextDay2").attr("data-day", "3");
                            } else if ($("#nextDay2").attr("data-day") === "3") {
                                console.log("DAY 4:");
                                $("#day2").text("Day 4: ");
                                for (var i = 24; i < 32; i++) {
                                    sumTemp2 = sumTemp2 + response.list[i].main.temp;
                                    sumClouds2 = sumClouds2 + response.list[i].clouds.all;
                                        if (response.list[i].rain !== undefined) {
                                            var typeOfRain = typeof response.list[i].rain["3h"];
                                        if (typeOfRain === "number") {
                                        sumRain2 = sumRain2 + response.list[i].rain["3h"];
                                        }
                                    }
                                consoleLogs2();
                                }
                                $("#nextDay2").attr("data-day", "4");
                            } else {
                                console.log("DAY 5:");
                                $("#day2").text("Day 5: ");
                                for (var i = 32; i < response.list.length; i++) {
                                    sumTemp2 = sumTemp2 + response.list[i].main.temp;
                                    sumClouds2 = sumClouds2 + response.list[i].clouds.all;
                                    if (response.list[i].rain !== undefined) {
                                        var typeOfRain = typeof response.list[i].rain["3h"];
                                    if (typeOfRain === "number") {
                                        sumRain2 = sumRain2 + response.list[i].rain["3h"];
                                        }
                                    }
                                consoleLogs2();
                                }
                                $("#nextDay2").attr("data-day", "0");
                            }
                            findAverages2();
                            updateWeather2();
                        });
                    });
                };
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
        // var database = firebase.database();


        //     // Grabs user input
        //     var city1 = $("#startLocation").val();
        //     var city2 = $("#endLocation").val();

        //     var newCity1 = {
        //         city1name: city1,
        //         city2name: city2,
        //     };
        //     database.ref().push(newCity1);
        //     // database.ref().push(newCity2);
        //     console.log(newCity.city1name);
        //     console.log(newCity.city2name);
        // // });
        // database.ref().on("child_added", function (childSnaphot) {
        //     console.log(childSnaphot.val());

        //     var cityname1 = childSnaphot.val().city1name;
        //     var cityname2 = childSnaphot.val().city2name;

        //     var newRow = $("<tr>").append(
        //         $("<td>").text(cityname1),
        //         $("<td>").text(cityname2),
        //     );
        //     $("#search-table > tbody").append(newRow);
        // });
    });
    });
// });
// });