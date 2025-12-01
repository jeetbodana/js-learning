const form =document.querySelector('form');
//This usecase will give you empty value
// const height = praseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please enter a valid height';
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<h3> your BMI is ${bmi}</h3>`;
        if(bmi < 18.6){
            console.log('Underweight');
        } else if(bmi >= 18.6 && bmi < 24.9) {
            console.log('Normal weight');
        } else {
            console.log('Overweight');
        }
    }
     

})