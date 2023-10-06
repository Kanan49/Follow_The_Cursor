/* NAVBAR */
gsap.from(".navbar div", {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  y: "20",
  ease: "expo.inOut",
  stagger: 1
});

/* MEDIA */
gsap.from(".media ul li", {
  duration: 1.5,
  delay: 1.5,
  stagger: 0.08,
  opacity: 0,
  x: "-20",
  ease: "expo.inOut",
});

/* TEXT */
gsap.from(".text h1 .hide--text", {
  duration: 1.5,
  delay: 1,
  y: "100%",
  ease: "expo.inOut",
});

gsap.from(".text h3 .hide--text", {
  duration: 1.5,
  delay: 1.2,
  y: "100%",
  ease: "expo.inOut",
});

gsap.from(".text p .hide--text", {
  duration: 1.5,
  delay: 1.3,
  y: "200%",
  ease: "expo.inOut",
});

gsap.from(".text h2", {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  x: "-10000",
  ease: "expo.inOut",
});

/* SPONSOR */
gsap.from(".sponsor img", {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  y: "20",
  ease: "expo.inOut",
});

gsap.from(".sponsor p", {
  duration: 1.5,
  delay: 1.6,
  opacity: 0,
  y: "20",
  ease: "expo.inOut",
});

/* DISTORTION */
gsap.from(".distortion", {
  duration: 1.5,
  delay: 2,
  opacity: 0,
  y: "20",
  ease: "expo.inOut",
});

/* OVERLAY */
gsap.to(".first", {
  duration: 1.5,
  delay: 0.5,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".second", {
  duration: 1.5,
  delay: 0.6,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".third", {
  duration: 1.5,
  delay: 0.7,
  top: "-100%",
  ease: "expo.inOut",
});




/* FOLLOW THE CURSOR */
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


const colors = [
  "#005c56", "#00625d", "#006964", "#006f6c", "#007673", "#007d7b", "#008483", "#008a8b", "#009193", "#00989b", "#009fa3", "#00a6ac"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});



window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();



