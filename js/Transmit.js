$(document).ready(function(){
  var evtSource = new EventSource('php/transmit.php');
  evtSource.onmessage = function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
  }
});