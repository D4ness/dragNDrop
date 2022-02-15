const takeField = document.querySelector('.take-block');
const putHereField = document.querySelector('.put_here');
const putNetField = document.querySelector('.put_net');

takeField.onpointerdown = function (event) {
    const cordX = event.clientX;
    const cordY = event.clientY;
    const block = document.createElement('div');
    block.className = 'square';
    block.style.zIndex = 100;
    block.style.left = cordX - 50 + 'px';
    block.style.top = cordY - 50 + 'px';
    // console.log('style', block.style)
    // console.log('page',cordX,block.style.left, block.offsetHeight);
    takeField.appendChild(block);
    console.log(event);
    document.onpointermove = (event) => {
        block.style.left = event.clientX - 50 + 'px';
        block.style.top = event.clientY - 50 + 'px';
    }
    document.onpointerup = function (event) {
        const cordX = event.clientX;
        const cordY = event.clientY;
        console.log(block);
        if ((cordX > 1200) || (cordY > 400) || (cordX < 400)) {
            takeField.removeChild(block);
        } else if ((cordY < 400) && (cordX > 400) && (cordX < 800)) {
            block.style = 'position: relative; left: null; top: null; z-index: 99;'
            takeField.removeChild(block);
            putNetField.appendChild(block);
            console.log('kopa')
            console.log(cordX, cordY)
        } else if ((cordY < 400) && (cordX > 800) && (cordX < 1200)) {
            takeField.removeChild(block);
            putHereField.appendChild(block);
        }
        document.onpointermove = '';
    };
};


// const DragNDrop = () => {
//     const takeField = document.querySelector('.take-block');
//     const putNetField = document.querySelector('.put_net');
//     const putHereField = document.querySelector('.put_here');
//     function createElement(event) {
//         const block = document.createElement('div');
//         block.className = 'square';
//         block.style.position = 'absolute';
//         block.style.zIndex = 1000;
//         // block.draggable = true;
//         takeField.appendChild(block);
//         moveBlockTo(event.pageX, event.pageY);
//         function moveBlockTo(pageX, pageY) {
//             block.style.left = pageX - block.offsetWidth / 2 + 'px';
//             block.style.top = pageY - block.offsetHeight / 2 + 'px';
//         }
//         function onPointerMove(event) {
//             moveBlockTo(event.pageX, event.pageY);
//             block.hidden = true;
//             document.elementFromPoint(event.clientX, event.clientY);
//             block.hidden = false;
//         }
//         takeField.addEventListener('pointermove', onPointerMove);
//         // setTimeout(() => {
//         //     block.classList.add('hide')
//         // }, 330);
//         block.onpointerup = function() {
//             document.removeEventListener('pointermove', onPointerMove);
//             block.onmouseup = null;
//         };
//         // block.ondragstart = function (event){
//         //     return false;
//         // }
//     }
//     function putElement(event) {
//         console.log('element put');
//         const square = document.createElement('div');
//         square.className = 'square';
//         putNetField.appendChild(square);
//     }
//     function dragOver(evt) {
//         evt.preventDefault();
//     }
//
//     function dragOut() {
//         // putNetField.classList.remove('hovered');
//     }
//
//     function dragEnter() {
//         this.classList.add('hovered');
//     }
//
//     function dragLeave() {
//         this.classList.remove('hovered');
//     }
//
//     takeField.addEventListener('pointerdown', createElement);
// // putNetField.addEventListener('pointerover', dragOver);
// // putNetField.addEventListener('pointerout', dragOut);
//     putNetField.addEventListener('pointerenter', dragEnter);
//     putNetField.addEventListener('pointerleave', dragLeave);
//     putNetField.addEventListener('pointerup', putElement);
// //
// };
// DragNDrop();