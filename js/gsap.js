
 gsap.registerPlugin(ScrollTrigger);

 // You can use a ScrollTrigger in a tween or timeline
 gsap.to(".insta", {
   yPercent: -90,
   stagger: 0,
   scrollTrigger: {
     trigger: ".insta",
     start: "top center",
     end: "+=300",
     scrub: true,
     markers: false,
     id: "scrub"
   }
 }, 0);
 gsap.to(".facebook", {
   yPercent: -58,
   stagger: 0,
   scrollTrigger: {
     trigger: ".facebook",
     start: "top center",
     end: "+=250",
     scrub: true,
     markers: false,
     id: "scrub"
   }
 }, 0);