var config = {
  apiKey: "",
  authDomain: "project1.firebaseapp.com"
  databaseURL: "https://project1.firebaseio.com"
  storageBucket: "project1.appspot.com"
  messageSenderId: ""
};
firebase.initializeApp(config);

var database = firebase.database();


var slideIndex = 0;
var images = [];
function carousel() {
  var i;
  for (i = 0; i < images.length; i++) {
    images[i].hide();
  }
  slideIndex++;
  if (slideIndex > images.length) {slideIndex = 1}
  images[slideIndex-1].show();
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

$(document).ready(function() {
  $("img.carouselImage").each(function(){
    images.push($(this));
  })
  carousel();
});
