var tl=gsap.timeline()


tl.from("#main h3",{
    y:-50,
    opacity:0,
    duration:0.8,
    stagger:0.18
})
tl.from(".main2 h1",{
    x:-500,
    opacity:0,
    stagger:0.18,
    duration:0.8

})
tl.from(".main2 img",{
    x:100,
    opacity:0,
    rotate:45,
    duration:0.5,
    stagger:0.5
})