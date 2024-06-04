// Imediately Invoked Function Expression

(function chai() {
    // name IIFE
    console.log(`DB CONNECTED`);
})();                              // If you want to write two iife then we havve to add semicolon (;)

((name)=>{
    console.log(`DB CONNECTED, ${name}`);
})('om')