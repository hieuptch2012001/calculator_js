const numbers = document.getElementsByClassName('number');
const result = document.getElementById('result');

for (let number of numbers) {
    number.addEventListener('click', function () {
        result.innerHTML += this.value;
    });
}

function equal() {
    let res = result.innerHTML;
    let output = eval(res);
    result.innerHTML = output;
}

function cle() {
    result.innerHTML = "";
}
