import test from './test.jpg'

function addImag() {
    const img = document.createElement('img');
    img.alt = 'girls';
    img.width = 300;
    img.src = test;
    const body = document.querySelector('body')
    body.appendChild(img);
}
export default addImag;