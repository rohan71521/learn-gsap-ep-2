
var tml = gsap.timeline();

tml.from("nav img, #nav-2 h3, #nav-3 h3, #nav-3 button",{
    opacity: 0,
    duration: 0.7,
    delay:1,
    y: -50,
    stagger: 0.2
})
tml.from("h1",{
    opacity: 0,
    y: 300,
    stagger:0.2
})
tml.from("#images img",{
    scale: 0,
    opacity: 0,
    stagger: 0.3
})
tml.from("h5",{
    opacity:0,
    scale:0
})
tml.to("h5",{
    y:30,
    repeat: -1,
    duration:0.8,
    yoyo:true
})



















