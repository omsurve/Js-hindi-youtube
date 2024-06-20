let color;

 function selectColor() {
    // console.log("selectColor");
    const colorArr=["red","black","blue","green","gray","orange","white","yellow","purple","brown","pink"];
    color = colorArr[(Math.floor(Math.random() * colorArr.length))];
    // console.log(color)
    return color;
  }
  
  let intervalId;
  function startChangeColor(e) {
    e.stop
    // console.log('Start');
    intervalId = setInterval(changeColor, 1000);

    function changeColor() {
        console.log("changeColor");
        document.body.style.backgroundColor = selectColor();
    //   console.log(selectColor());
      color = '';
    }
  }
  
  
  
document.querySelector('#start').addEventListener('click',  function startChangeColor(e) {
    e.stopPropagation()
    // console.log('Start');
    document.querySelector("#win").innerHTML=""
    intervalId = setInterval(changeColor, 500);
    // document.querySelector('#start').setAttribute("disabled")
    

    function changeColor() {
        // console.log("changeColor");
        color = document.body.style.backgroundColor = selectColor();
        
        // color = '';
    }
  });
// document.querySelector('body').addEventListener('click', stopChangeColor);
document.querySelector('#stop').addEventListener('click', function stopChangeColor() {
    if(color==="red"){
        document.querySelector("#win").innerHTML="You are Win"
    }else{
        document.querySelector("#win").innerHTML="You are Loos"
    }
    clearInterval(intervalId);    
  });

