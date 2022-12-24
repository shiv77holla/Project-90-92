var mosiac=""
var elem= document.documentElement;
function fullscrn(){
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
        hide.style.display='none';
        fullscrnbtn.style.display='none';
      console.log("hidden?")
}
function credit_display(){
document.getElementById("credits-popup").style.visibility= "visible"
}

function login(){
if((document.getElementById("player_1_name").value.length == 0) || (document.getElementById("player_2_name").value.length == 0))
{
alert("Error 4201:One or more Usernames is not filled")
}
else{
var name1= document.getElementById("player_1_name").value
var name2= document.getElementById("player_2_name").value
console.log(name1 + name2);
localStorage.setItem("name1", name1);
localStorage.setItem("name2", name2);
window.location="arena.html";
}
}

function music(){
  mosiac="true"
  localStorage.setItem("music", mosiac);
  myAudio = new Audio('Main_Theme.mp3');
  if (typeof myAudio.loop == 'boolean')
  {
      myAudio.loop = true;
  }
  else
  {
      myAudio.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
      }, false);
  }
  myAudio.play();

  musicy.style.display='none'
  musicn.style.display='initial'
}

function nmusic(){
mosiac="false"
localStorage.setItem("music", mosiac);
musicy.style.display='initial'
musicn.style.display='none'
myAudio.pause();
myAudio.currentTime = 0;
}
