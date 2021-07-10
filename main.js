var menuList = document.getElementById("menuList");

      menuList.style.maxHeight = "0px";

      function togglemenu(){
        if(menuList.style.maxHeight == "0px")
        {
          menuList.style.maxHeight = "350px";
        }
        else{
          menuList.style.maxHeight = "0px";
        }
      }


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

let project = document.getElementById("project_description1")

project.style.color = "white";