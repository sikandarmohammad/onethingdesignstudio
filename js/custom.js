
var tl = gsap.timeline({
    defaults: {duration: 2}
});

tl.from('.grdbox_left', {
    y: -400,
    opacity: 0,
    "height": "0px",
}).from('.grdbox_right', {
    y: 400,
    opacity: 0,
    "height": "0px",
}, '-=2');

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});

