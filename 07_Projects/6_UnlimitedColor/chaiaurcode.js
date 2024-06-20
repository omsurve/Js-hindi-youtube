function selectColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let intervalId;

  function startChangeColor() {
    console.log('Start');
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000);
      }
  
    function changeColor() {
      document.body.style.backgroundColor = selectColor();
      color = '';
      console.log(selectColor());
    }
  }
  
  function stopChangeColor() {
    clearInterval(intervalId);
    intervalId = null
  }
  
  document.querySelector('#start').addEventListener('click', startChangeColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangeColor);
