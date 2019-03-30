
var city1name = "";
var city2name = "";


$(document).ready(function(){
    $("#submit-btn").click(function(){
      //Hide search page, show results page
      $("#searching").css('opacity', '0.0');
      $("#searchResults").css('opacity', '1.0');
      //HPrevent from reloading infinitely
      event.preventDefault();

      // capture start and end city
      city1name = $("#startLocation").val();
      city2name = $("#endLocation").val();
      //Console log check
      console.log("the from city1name is: " + city1name); 
      console.log("the from city2name is: " + city2name); 
      // Append resutls to page
      $("#startLocationResult").text(city1name);
      $("#endLocationResult").text(city2name);

    });
    
  });

  // Define button onclick elements
  var btn = document.getElementById('submit-btn');
  var btn2 = document.getElementById('newSearch');


      btn.onclick = function() {
        // Anime morphing technique, contort SVG
        var morphing = anime({
          targets: '.polymorph',
          points: [
          { value: '215,110 190,30 0,30 0,0 215,0   ' },
          ],
          easing: 'easeOutQuad',
          duration: 1200,
          loop: false
        });
          //  make search results div visible by pulling up and setting opacity from 0 to 1
          anime({
            targets: '#searchResults',
            opacity: 1,
            duration: 500,
            translateY:-170
          })

          //  Do the opposite for search results, set opacity from 1 to 0
          anime({
            targets: '#searching',
            opacity: 0,
            duration: 500,
            translateY: 0
          })

          // reverse the technique when users select new search, take them back to original state.
          var promise = morphing.finished.then(() => {
            btn2.onclick = function(){
              var morphing = anime({
            targets: '.polymorph',
            points: [
            { value: '215,110 0,110 0,0 47.7,0 215,0 ' },
            ],
            easing: 'easeOutQuad',
            duration: 1200,
            loop: false
          });
            
            // hide search results div
            anime({
              targets: '#searchResults',
              opacity: 0,
              duration: 500,
              translateY: 100
            })
            // show search bar 
            anime({
              targets: '#searching',
              opacity: 1,
              duration: 500,
              translateY: 0
            })

            }
            
          })
                
      };


     