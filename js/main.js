
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    const titles = ('君が好きだよ、由利江').split('')
    const titleElement = document.getElementById('title');
    let index = 0;
    
    //document.getElementById('.\music\Yuuri Dried Flower Lyrics.mp3').play();

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

function showPic(){

  var srcimg = "images/20250701_025138-COLLAGE.jpg";
  const pic = document.getElementById("bigpic");
  if(pic.style.display ==="none"){
    pic.style.display = "block";
    pic.style.opacity = "1";
    pic.style.transition = "opacity 1s ease-in-out";
  }
  else{
    pic.style.display = "none"
  }
  
  
  // const audio = document.getElementById("audio");
  // audio.play();
  
  // setTimeout(() => {
  //   pic.style.opacity = "0";
  //   setTimeout(() => {
  //     pic.style.display = "none";
  //   }, 1000);
  // }, 3000);
}