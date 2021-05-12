function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "5px 5px";
      document.getElementById("navbar").style.height - "50px"
      document.getElementById("logo").style.fontSize = "25px";
      document.getElementById("logo").style.marginTop = "-2px"
      document.getElementById("logo").style.marginLeft = "0%"
      document.getElementById("logo").style.height = "50px";
      document.getElementById("logo").style.width = "150px";
    } else {
      document.getElementById("navbar").style.padding = "115px 10px";
      document.getElementById("logo").style.fontSize = "35px";
      document.getElementById("logo").style.marginTop = "-60px"
      document.getElementById("logo").style.marginLeft = "38%"
      document.getElementById("logo").style.height = "150px";
      document.getElementById("logo").style.width = "450px";
    }
  }
  

  window.onscroll = function() {scrollFunction()};