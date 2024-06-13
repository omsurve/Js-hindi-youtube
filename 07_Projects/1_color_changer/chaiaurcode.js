const body = document.querySelector('body')
const button = document.querySelectorAll('.button')
// console.log(button);
// console.log(body);

button.forEach(function (button){
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e.target.id);

        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = 'gray'
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
        
        // We will also done with if else

        // if (e.target.id==='gray') {
        //      body.style.backgroundColor = e.target.id

        // }
    });
});