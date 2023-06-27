 const display = document.querySelector("#display");
 const buttons = document.querySelectorAll("button");

 buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear') {
            display.innerText = "";
        } else if (item.id == 'clear') {
            let string = display.innerText.toString();
            display.innerText = string.subtr(0, string.lenght - 1); 
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval((display.innerText))/2;
            alert('You Have successfully calculated your cgpa for the year');
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText  = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
 })

