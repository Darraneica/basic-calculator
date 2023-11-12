//used arrow function to clear the calculator display.
const clearNum = () => {
    showResults.value = '';
};

//used arrow function to add numbers to the calculator display. 
const calculateNum = (number) => {
    //this checks to see if current value already contains a decimal point.
    if(showResults.value.includes('.') && number === '.'){
        return; // will not return decimal point.
    }
    showResults.value += number;
};

//used arrow function to add numbers to the calculator display.
const showOperator = (operator) => {
    showResults.value += operator;
};

//arrow function that executes the calculation.
const getSum = () => {
    try{
        showResults.value = eval(showResults.value);
    } catch(error){
        showResults.value = 'Error';
    }

};

// refers to displaying the calculation on the calculator screen.
const showResults = document.getElementById('show');