const showResults = document.getElementById('show');
const buttonSound = document.getElementById('buttonSound');

// Play sound when a button is pressed
const playSound = () => {
    buttonSound.currentTime = 0; // Reset sound to start
    buttonSound.volume = 1; // Max volume
    buttonSound.play();
};

// Function to clear the calculator screen
const clearNum = () => {
    playSound();
    showResults.value = '';
};

// Function to add numbers to the screen
const calculateNum = (number) => {
    playSound();
    if (showResults.value.includes('.') && number === '.') {
        return;
    }
    showResults.value += number;
};

// Function to add operators to the screen
const showOperator = (operator) => {
    playSound();
    showResults.value += operator;
};

// Function to evaluate the expression and display the result
const getSum = () => {
    playSound();
    try {
        showResults.value = eval(showResults.value);
    } catch (error) {
        showResults.value = 'Error';
    }
};
