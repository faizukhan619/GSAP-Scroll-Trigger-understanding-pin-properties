gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        // trigger:"#page2 img" ,       jab hum pin ka use krte hain element ko naa use krke element ke parent ko use krte hain
         trigger:"#page2",
         scroller:"body",
         markers: true,
         start:"top 0",
         end:"top -100%",
         scrub:2,
         pin: true   //pin se scroll hone se rok skte hain
    }
})