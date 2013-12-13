
jQuery(document).ready(function ($) {

  // Make sure links don't open in external windows
  var a=document.getElementsByTagName("a");
  for(var i=0;i<a.length;i++) {
    a[i].onclick=function() {
      if (this.getAttribute("href") != 'https://www.facebook.com/bahnsharing') {
        window.location=this.getAttribute("href");
        return false
      }
    }
    if (a[i].getAttribute("href") === 'https://www.facebook.com/bahnsharing') {
      a[i].setAttribute('target','_blank');
    }
  }

});