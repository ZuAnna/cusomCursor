const head = document.querySelector('.title__cursor');

let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor (e) {
   mouseCursor.style.top = e.pageY + 'px';
   mouseCursor.style.left = e.pageX +'px'
}

head.addEventListener('mouseover',()=> {
   mouseCursor.classList.add('cursor-transformation')
});
head.addEventListener('mouseleave',()=> {
   mouseCursor.classList.remove('cursor-transformation')
});
