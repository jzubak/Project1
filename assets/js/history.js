
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
        var database = firebase.database();
        $("#submit-btn").on("click", function (event) {
            event.preventDefault();

            // Grabs user input
            var city1 = $("#startLocation").val();
            var city2 = $("#endLocation").val();

            var newCity = {
                city1name: city1,
                city2name: city2,

            };
            database.ref().push(newCity);

            console.log(newCity.city1name);
            console.log(newCity.city2name);
        // });
        database.ref().on("child_added", function (childSnaphot) {
            console.log(childSnaphot.val());

            var cityname1 = childSnaphot.val().city1name;
            var cityname2 = childSnaphot.val().city2name;

            var newRow = $("<tr>").append(
                $("<td>").text(cityname1),
                $("<td>").text(cityname2),
            );
            $("#search-table > tbody").append(newRow);
        });
    });