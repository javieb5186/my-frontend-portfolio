document.getElementById("project-title").innerHTML = "Accessibility Project";
document.getElementById("project-text").innerHTML = "Horiseon, the company that reached " +  
"out to me to make their website more accessible friendly. In addition to accessibility " + 
"I rearranged and added code to follow best practices to pass down to my new fellow developers. " +
"Clients were happy and they couldn't have asked for better results.";
document.getElementById("project-button").innerHTML = "Go to site";

function changeToProject1() {
  document.getElementById("project-title").innerHTML = "Accessibility Project";
  document.getElementById("project-text").innerHTML = "Horiseon, a company that reached " +  
  "out to me to make their website more accessible friendly. In addition to accessibility " + 
  "I rearranged and added code to follow best practices to pass down to my new fellow developers. " +
  "Clients were happy and they couldn't have asked for better results.";
  document.getElementById("project-button").innerHTML = "Go to site";
  document.getElementById("project-button").setAttribute("href", "https://javieb5186.github.io/Horiseon-Accessibility-Optimization/") = "Go to site";
}
function changeToProject2() {
  document.getElementById("project-title").innerHTML = "My First Capstone";
  document.getElementById("project-text").innerHTML = "A low poly space game. The most advanced engineering I did for this project " +
  "was create to many states for the enemy, as well as target tracking and target predications. Although, this was my early years " + 
  "I was ambitious in giving it my all, and it has made me eager to learn more.";
  document.getElementById("project-button").innerHTML = "Go to Project Code";
  document.getElementById("project-button").setAttribute("href", "https://github.com/javieb5186/SpaceRacer") = "Go to site";
}
function changeToProject3() {
  document.getElementById("project-title").innerHTML = "My First Live Site";
  document.getElementById("project-text").innerHTML = "My first live website, a study guide. As I began my journey into the wilds of " +
  "full stack. I was taking notes along the way as to not forget all that I have learned. Little did I know, I was an ant in a library. " + 
  "there is too much to learn, not enough time. At least I made a simple website during that process.";
  document.getElementById("project-button").innerHTML = "Go to site";
  document.getElementById("project-button").setAttribute("href", "https://javieb5186.github.io/prework-study-guide/") = "Go to site";
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