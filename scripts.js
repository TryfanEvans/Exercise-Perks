var selectedslide = 0;
var width;

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

function setup()
{
	carousel = document.querySelector(".carousel");
	panels   = carousel.children;
	width = panels[0].getBoundingClientRect().width + 1000;
	 document.querySelector(".left").disabled = true;
	panelsarr = Array.from(panels);
	panelsarr.forEach( generate);
	
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
	var docWidth = document.documentElement.offsetWidth;
	[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
}



function generate(panel, index)
{
	
	panel.style.left = index * width + "px";
}

function moveslide(dir)
{   

carousel = document.querySelector(".carousel");
	panels   = carousel.children;
	pos = selectedslide * -width
	
	if (dir == "left")
	{selectedslide--;
	
	var id = setInterval(lastslide, 1);
	function lastslide() {
    if (pos > selectedslide * -width) {
		
      clearInterval(id);
	 
    } else {
      pos = pos + 16;
     
      carousel.style.left = pos + 'px';
    }
  }
	}
	
	if (dir == "right")
	{selectedslide++;

	var id = setInterval(nextslide, 1);
	function nextslide() {
    if (pos < selectedslide * -width) {
      clearInterval(id);
	 
    } else {
      pos = pos - 16;
     
      carousel.style.left = pos + 'px';
    }
  }
	}
	
	if (selectedslide == 0)
	{
		 document.querySelector(".left").disabled = true;
		 
	}
	else{
		 document.querySelector(".left").disabled = false;
	}
	
	if (selectedslide == panels.length - 1)
	{
		 document.querySelector(".right").disabled = true;
		 
	}
	else{
		 document.querySelector(".right").disabled = false;
	}
}
