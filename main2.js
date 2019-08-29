//show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
const dateElement = document.getElementById('dateElement');
console.log(dateElement);
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function calculator () {
    document.getElementById('results').innerHTML = 'The answer is: ';   // indirectly clears the screen 

    let a = parseInt(document.getElementById('value1').value);
    let b = parseInt(document.getElementById('value2').value);
    let op = document.getElementById('operator').value;
    console.log(a);
    console.log(b);
    console.log(op);
    let answer 
 
    // if (!a || !b) {
    //     console.log('Value is empty');
    // }
    //  if (Number.isNaN(a) || Number.isNaN(b)) {
    if(a !== '' ||  b !== '') {
        switch (op) {
            case 'add':
            answer = a + b;
            break;
            case 'min':
            answer = a - b;
            break;
            case 'div':
            answer = a / b;
            break;
            case 'mul':
            answer = a * b;
            break;
        }
        console.log(answer); 
    }
    else {
        alert('Input values are required');
    }
    
    document.getElementById('results').append(answer);
}
