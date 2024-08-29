function homepageAnimation(){
  gsap.set(".slidesm", { scale: 5 })
 
let timeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  },
})

timeLine
.to(".vdodiv", {
  '--clip': "0%",
  ease: Power2
}, "a")
.to(".slidesm", {
  scale: 1,
  ease: Power2
}, "a")
.to(".lft", {
  xPercent: -10,
  stager: .03,
  ease: Power4
}, "b")
.to(".rgt", {
  xPercent: 10,
  stager: .03,
  ease: Power4
}, "b")

} 


function realPageAnimation(){
  gsap.to(".slide", {
    scrollTrigger:{
      trigger: ".real",
      start: "top top", 
      end: "bottom bottom",
      scrub: 1
    },
    xPercent: -300,
    ease: Power4
  });
}


function teamAnimation(){
document.querySelectorAll(".listelem")
.forEach((elem)=>{
  elem.addEventListener("mousemove", function(dets){
    gsap.to(this.querySelector(".picture"), {
      opacity: 1,
      ease: Power4,
      x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
      duration: .5
    })
  });

  elem.addEventListener("mouseleave", function(dets){
    gsap.to(this.querySelector(".picture"), {
      opacity: 0,
      ease: Power4,
      duration: .5
    })
  });

})
};

function loco() {
  const locomotiveScroll = new LocomotiveScroll();
};


function capsulesAnimation(){
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%", 
      end: "bottom bottom", 
      scrub: 1
    },
    y: 0,
    ease: Power4
  })
}


function bodyColorChange(){
  document.querySelectorAll(".section")
.forEach((elem)=>{
  ScrollTrigger.create({
    trigger: elem,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function(){
      document.body.setAttribute("theme", elem.dataset.color)
    },
    onEnterBack: function(){
      document.body.setAttribute("theme", elem.dataset.color)
    }
  })
})
}

loco();
homepageAnimation();
realPageAnimation();
teamAnimation();
capsulesAnimation();
bodyColorChange();

// 2:22:00 Timestamp

