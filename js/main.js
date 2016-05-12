	// jshint ignore: start

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
      function(stream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(stream);
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.log("The following error occurred: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}


// TRACKER
var videoInput = document.getElementById('video');
var canvasInput = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas2');

  var htracker = new headtrackr.Tracker({debug : canvas2});
  htracker.init(videoInput, canvasInput);
  htracker.start();


document.addEventListener('headtrackingEvent', 
  function (event) {
    /*original object*/
    // console.log(event);
    console.log(event.z);
    textResize(event.z);

  }
);



// TEXT RESIZE
var textfield = document.getElementById('text');
var sensitivity = 100;

function textResize (distance) {
  var value = 1.2*((distance + sensitivity) / (20 + sensitivity));
  // console.log(distance);
  var newEm = value + "em";
  // console.log(newEm);
  document.getElementById('text').style.fontSize = newEm;
}






