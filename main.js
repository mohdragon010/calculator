//declaring html elements
let btns = document.querySelectorAll('.btn');
let result = document.getElementsByClassName("result")[0];
//declaring variables
let num1 = null;
let num2 = null;
let operation = null;
//adding event for each btn
btns.forEach(btn => {
    //declaring value attribute of btn
    let value = btn.getAttribute("value");   
    //adding click event
    btn.addEventListener('click', () => {
        //clear function
        if (value === 'c') {
            result.textContent = "";
            num1 = null;
            num2 = null;
            operation = null;
        //if value is a number
        }
        else if (!isNaN(Number(value))) {
            result.textContent += value;
        }
        //if value is equal sign
        else if(value === "="){
            //if user tries to divide by zero
            num2 = Number(result.textContent);
            if (num2 === 0 && operation === "/") {
                result.textContent = "Error, Division by zero";
                return;
            }
            //making operations
            if (operation && num1 !== null && !isNaN(num2)) {
                result.textContent =
                    operation === "+" ? num1 + num2 :
                    operation === "-" ? num1 - num2 :
                    operation === "*" ? num1 * num2 :
                    num1 / num2;
            } 
        }
        //if value is an operator
        else{
            operation = value;
            num1 = Number(result.textContent);
            result.textContent = "";
        }
    })
})