
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    const titles = ('君が大好きだよー').split('')
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