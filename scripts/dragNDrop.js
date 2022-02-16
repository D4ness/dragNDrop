const takeField = document.querySelector('.take-block');
const putHereField = document.querySelector('.put_here');
const putNetField = document.querySelector('.put_net');
let netCounter = 0;

function generateColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    if (color.length < 6) color = '0' * (6 - color.length) + color;
    return '#' + color;
}

takeField.onpointerdown = function (event) {
    const cordX = event.clientX;
    const cordY = event.clientY;
    const block = document.createElement('div');
    block.className = 'square';
    const color = generateColor();
    block.style.zIndex = 100;
    block.style.backgroundColor = color;
    takeField.appendChild(block);
    block.style.left = cordX - block.offsetWidth / 2 + 'px';
    block.style.top = cordY - block.offsetHeight / 2 + 'px';
    document.onpointermove = (event) => {
        block.style.left = event.clientX - block.offsetWidth / 2 + 'px';
        block.style.top = event.clientY - block.offsetHeight / 2 + 'px';
    }
    document.onpointerup = function (event) {
        function checkPutField(x, y) {
            return (cordSquareX > x) && (cordSquareX < x + 400) &&
                (cordSquareY > y) && (cordSquareY < y + 400)
        }

        const cordSquareX = event.clientX;
        const cordSquareY = event.clientY;
        const cordPutNetX = document.querySelector('.put_net').offsetLeft;
        const cordPutNetY = document.querySelector('.put_net').offsetTop;
        const cordPutHereX = document.querySelector('.put_here').offsetLeft;
        const cordPutHereY = document.querySelector('.put_here').offsetTop;

        if (checkPutField(cordPutNetX, cordPutNetY)) {
            if (netCounter++ < 16) {
                block.style.position = 'relative';
                block.style.left = null;
                block.style.top = null;
                block.style.zIndex = '99';
                block.style.backgroundColor = color;
                takeField.removeChild(block);
                putNetField.appendChild(block);
            } else {
                takeField.removeChild(block);
            }
        } else if (checkPutField(cordPutHereX, cordPutHereY)) {
            takeField.removeChild(block);
            putHereField.appendChild(block);
        } else {
            takeField.removeChild(block);
        }
        document.onpointermove = undefined;
    };
};

