window.myFunction = function() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();

  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  }

  window.myFunction1 = function() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput1');
    filter = input.value.toUpperCase();
  
    ul = document.getElementById("myUL1");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    }



    window.myFunction2 = function() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput2');
        filter = input.value.toUpperCase();
      
        ul = document.getElementsByClassName("myUL2");
        var li = [];

        for (i=0;i<ul.length; i++){            
            for(k = 0; k < ul[i].getElementsByTagName('li').length; k++)
            {                
                li.push(ul[i].getElementsByTagName('li')[k]);
            }
        }

        //li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];

          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            console.log(li[i].parentNode);
            li[i].parentNode.style.display = "";
            li[i].parentNode.parentNode.style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
        }