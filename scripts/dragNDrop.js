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
    console.log(color);
    block.style.zIndex = 100;
    block.style.left = cordX - 50 + 'px';
    block.style.top = cordY - 50 + 'px';
    block.style.backgroundColor = color;
    takeField.appendChild(block);
    document.onpointermove = (event) => {
        block.style.left = event.clientX - 50 + 'px';
        block.style.top = event.clientY - 50 + 'px';
    }
    document.onpointerup = function (event) {
        const cordX = event.clientX;
        const cordY = event.clientY;
        if ((cordX > 1200) || (cordY > 400) || (cordX < 400)) {
            takeField.removeChild(block);
        } else if ((cordY < 400) && (cordX > 400) && (cordX < 800)) {
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
        } else if ((cordY < 400) && (cordX > 800) && (cordX < 1200)) {
            takeField.removeChild(block);
            putHereField.appendChild(block);
        }
        document.onpointermove = undefined;
    };
};

