// Immediately invoked Function Expression (IIFE)

// iife function method 
(function chai() {
    //name IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connect Two ${name}`);
} )('Jitendra')