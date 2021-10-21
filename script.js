

var screenStr = '';
var num1 = '';
var num2 = '';
var operator;
var OperatorExists = false;
var result = "";

document.getElementById('screenStr').innerHTML = '0';


function pushBtn(char) {

    if (document.getElementById('screenStr').innerHTML.indexOf('=') != -1 && (char != 'C'))
        return;

    screenStr = document.getElementById('screenStr');


    switch (char) {
        case 'C': 
            {
                screenStr = '';
                num1 = '';
                num2 = '';
                operator = '';
                OperatorExists = false;
                document.getElementById('screenStr').innerHTML = '0';
                return;
            }
        case '+': case '-': case '*': case '/': 
            {
                if (!OperatorExists && num1 != "") { 
                    operator = char;
                    OperatorExists = true;
                }
               
                else return; 
            } break;

        case '=':
            {
              
                if (num1 == "" || num2 == "" || !OperatorExists) 
                    return;
            } break;
        
       
        default:
            {
                if (document.getElementById('screenStr').innerHTML == 'Error-Undifined')
                    return;
                if (!OperatorExists) 
                    num1 += char;
                else { 
                    num2 += char;
                }
            } break;
    }

    
    if (screenStr.innerHTML == '0')
        screenStr.innerHTML = char; 
    else screenStr.innerHTML += char; 

    if (char == '=')
        calculate(); 
}

function calculate() {

    
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operator == '+')
        result = num1 + num2;
    else if (operator == '-')
        result = num1 - num2;
    else if (operator == '*')
        result = num1 * num2;
    else { 
        if (num2 == 0) {
            result = 'Error-Undifined'
            screenStr.innerHTML = result;
            return;
        }
        else {
            result = num1 / num2;
            result = result.toFixed(3); 
        }
    }
    screenStr.innerHTML += result;
}





