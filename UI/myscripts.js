window.onload = function() {
    document.getElementById("asd").style.display = "none";
    document.getElementById("comment").style.display = "none"; 
    document.getElementById("comment1").style.display = "none"; 
    document.getElementById("comment2").style.display = "none"; 
    document.getElementById("comment3").style.display = "none"; 
    document.getElementById("comment4").style.display = "none"; 
    document.getElementById("comment5").style.display = "none"; 
    
};
function asd(a) {
    if (a == 1) {
        document.getElementById("asd").style.display = "block";
    } else {
        document.getElementById("asd").style.display = "none";
    }  
}
  function comment(b) {
    if (b == 1) {
      document.getElementById("comment").style.display = "block";
    } else {
      document.getElementById("comment").style.display = "none";
    }  
  }
  
  function myFunction() {
    var x = document.getElementById("tog");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function comment1(c) {
    if (c == 1) {
      document.getElementById("comment1").style.display = "block";
    } else {
      document.getElementById("comment1").style.display = "none";
    }  
  }

  function comment2(d) {
    if (d == 1) {
      document.getElementById("comment2").style.display = "block";
    } else {
      document.getElementById("comment2").style.display = "none";
    }  
  }

  function comment3(e) {
    if (e == 1) {
      document.getElementById("comment3").style.display = "block";
    } else {
      document.getElementById("comment3").style.display = "none";
    }  
  }

  function comment4(f) {
    if (f == 1) {
      document.getElementById("comment4").style.display = "block";
    } else {
      document.getElementById("comment4").style.display = "none";
    }  
  }

  function comment5(g) {
    if (g == 1) {
      document.getElementById("comment5").style.display = "block";
    } else {
      document.getElementById("comment5").style.display = "none";
    }  
  }

    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}