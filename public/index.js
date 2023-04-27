document.getElementById("project-title").innerHTML = "Project 1 Title";
document.getElementById("project-text").innerHTML = "Project 1 Text ";
document.getElementById("project-button").innerHTML = "Project 1 Button";

function changeToProject1() {
  document.getElementById("project-title").innerHTML = "Project 1 Title";
  document.getElementById("project-text").innerHTML = "Project 1 Text ";
  document.getElementById("project-button").innerHTML = "Project 1 Button";
}
function changeToProject2() {
  document.getElementById("project-title").innerHTML = "Project 2 Title";
  document.getElementById("project-text").innerHTML = "Project 2 Text ";
  document.getElementById("project-button").innerHTML = "Project 2 Button";
}
function changeToProject3() {
  document.getElementById("project-title").innerHTML = "Project 3 Title";
  document.getElementById("project-text").innerHTML = "Project 3 Text ";
  document.getElementById("project-button").innerHTML = "Project 3 Button";
}

function hideUnhide()
{
  var item = document.getElementById("form").style.display;

  document.getElementById("form").style.display = "none";

  if(item === "inherit")
  {
    document.getElementById("form").style.display = "none";
  }
  else if(item === "none")
  {
    document.getElementById("form").style.display = "inherit";
  }
}