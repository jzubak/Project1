



 

// $(document).ready(function(){
//     $("#submit-btn").click(function(){
//       $("#searching").hide();
//       $("#searchResults").show();
//     });
//   });


 var animateResults = anime({
    targets: 'div.searchResults',
    translateY: [
        {value: 500, duration: 1500},
        {value: 0, duration: 800},
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    }
   
});

document.querySelector('#submit-btn .button').onclick = animateResults.button;