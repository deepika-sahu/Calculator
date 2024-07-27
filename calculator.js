let string = "";

document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let value = e.target.innerHTML;

            if (value === 'DEL') {
                string = string.slice(0, -1);
            } else if (value === 'AC') {
                string = '';
            } else if (value === '=') {
                try {
                    string = eval(string) || '';
                } catch {
                    string = 'Error';
                }
            } else {
                string += value;
            }
            
            display.value = string;
        });
    });

    // Add event listener for "Enter" key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default action of the Enter key
            try {
                string = eval(display.value) || '';
            } catch {
                string = 'Error';
            }
            display.value = string;
        }
    });
});







