var sn = document.getElementById("top")

window.onscroll = function () {
 if(pageYOffset >=700){
    
   sn.style.display="block";

    } else{

   sn.style.display="none";

    }
}

sn.onclick = function () {
  window.scrollTo(0,0);
}