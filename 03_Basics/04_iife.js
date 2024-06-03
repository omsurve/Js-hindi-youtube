// Imediately Invoked Function Expression

(function chai() {
    // name IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED, ${name}`);
})('om')