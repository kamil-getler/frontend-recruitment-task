const popup = document.getElementById('popup');
const pop__box = document.getElementById('popup__box');
const body = document.getElementById('black__popup');
const text = document.getElementById('content');
const openB = document.getElementById('open__button');

let numberClick = 1;
let result = parseInt(numberClick);
console.log(numberClick)
console.log(result)



let test = localStorage.getItem('click');
lockal();




function lockal() {

    if (test == undefined) {
        numberClick = 1;
        console.log("numer" + numberClick)
    } else {
        result = localStorage.getItem('click')
        console.log("bramka2  " + numberClick)
    }


}


function click(result) {
    if (test == undefined) {
        text.textContent = 'You have clickedd ' + result + ' times to related'

    } else {
        text.textContent = 'You have clicked ' + localStorage.getItem('click') + ' times to related'
    }

}

function openClose() {
    if (result >= 5) {
        openB.classList.remove('open__button');

    }



}
popup.addEventListener('click', () => {
        openClose();
        if (test == undefined) {
            localStorage.setItem('click', numberClick)
            pop__box.classList.toggle('popup__open');
            click(result);
            console.log("bramka brak :" + result)
            result = parseInt(result);
            result += 1;
            localStorage.setItem('click', result)



        } else {

            pop__box.classList.toggle('popup__open');
            click(result);
            console.log("bramka3 :" + result);
            result = parseInt(result);
            result += 1;
            localStorage.setItem('click', result)

        }
    },
    false);


pop__box.addEventListener('click', () => {

    pop__box.classList.toggle('popup__open');

}, false);

openB.addEventListener('click', () => {

    result = 1;
    localStorage.setItem('click', result);
    openB.classList.toggle('open__button');
}, false);