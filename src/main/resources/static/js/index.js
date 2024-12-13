
//show ads automatically
let slideIndex = 0;
	showSlides();
	
	function showSlides() {
	  let i;
	  let slides = document.getElementsByClassName("mySlides");
	  let dots = document.getElementsByClassName("dot");
	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";  
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1}    
	  for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " active";
	  setTimeout(showSlides, 4000); // Change image every 4 seconds
	}
	
	//manually change ads
	var slideIndex1 = 1; // Initialize slide index
	
	// Show slides based on slide index
	function showSlides1(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	
	  if (n > slides.length) {slideIndex1 = 1}    
	  if (n < 1) {slideIndex1 = slides.length}
	
	  // Hide all slides
	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";  
	  }
	
	  // Remove the "active" class from all dots
	  for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	  }
	
	  // Show the selected slide and highlight the active dot
	  slides[slideIndex1-1].style.display = "block";  
	  dots[slideIndex1-1].className += " active";
	}
	
	// Change slide index and show slides
	function currentSlide(n) {
	  slideIndex1 = n;
	  showSlides1(slideIndex1);
	}