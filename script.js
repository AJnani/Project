 // JavaScript to handle button clicks and update the display
 const display = document.getElementById('display');
 let currentInput = '';

 // Add a click event listener to all the buttons
 const buttons = document.querySelectorAll('button');
 buttons.forEach(button => {
     button.addEventListener('click', () => {
         const value = button.getAttribute('value');
         if (value === '=') {
             // Evaluate the expression and update the display
             try {
                 currentInput = eval(currentInput).toString();
                 display.textContent = currentInput;
             } catch (error) {
                 display.textContent = 'Error';
             }
         } else if (value === 'AC') {
             // Clear the display
             currentInput = '';
             display.textContent = '0';
         } else {
             // Append the value to the current input
             currentInput += value;
             display.textContent = currentInput;
         }
     });
 });