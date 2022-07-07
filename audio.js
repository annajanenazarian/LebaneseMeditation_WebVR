window.onload = function () {
  document.querySelector(".b2").addEventListener("click", function () {
    var myobj1 = document.getElementById("audio1"); 
    myobj1.setAttribute("volume", 0); 
    var myobj2 = document.getElementbyId("audio2");
    myobj2.setattribute("volume", 0);
  })}; 
      