// This code is to change scenes between two skys in Church.html 

window.onload = function () {
  document.querySelector(".b1").addEventListener("click", function () {
    var myobj1 = document.getElementById("sky");
    var mySrc = myobj1.getAttribute("src");
    if (mySrc === "#Harissa") myobj1.setAttribute("src", "#Charbel");
    else if (mySrc === "#Charbel") myobj1.setAttribute("src", "#Harissa");
    else myobj1.setAttribute("src", "#Charbel");
  });
};
