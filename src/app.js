gsap.registerPlugin(MotionPathPlugin);

// set the element to rotate from it's center
gsap.set([".rocket", ".rocket--self"], {
	xPercent: -50,
	yPercent: -50,
	transformOrigin: "50% 50%"
});

// animate the rocket along the path
gsap.to(".rocket", {
    motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
    },
    duration: 8,
    repeat: -1,
    ease: "power1.inOut",
    immediateRender: true,
});

// edit the motion path
MotionPathHelper.create(".rocket");
