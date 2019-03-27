<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
