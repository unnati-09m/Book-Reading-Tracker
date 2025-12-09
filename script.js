gsap.from("#firstcard2",{
    y : 150,
    duration: 6,
    // delay: 0.5,
    ease: "power2.linear",
    scrollTrigger:{
        trigger: "#firstcard2",
        scroller: 'body',
        // markers: true,
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    },
    

})

gsap.from("#firstcard1",{
    y : 100,
    duration: 8,
    // delay: 0.5,
    ease: "power2.linear",
    scrollTrigger:{
        trigger: "#firstcard1",
        scroller: 'body',
        // markers: true,
        start: 'top 90%',
        end: 'top 10%',
        scrub: 2,
        toggleActions: "restart pause reverse pause"
    },
    

})

gsap.from("#secondcard1",{
    y : 100,
    duration: 4,
    // delay: 0.5,
    ease: "power2.linear",
    scrollTrigger:{
        trigger: "#secondcard1",
        scroller: 'body',
        // markers: true,
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    },
    

})
gsap.from("#secondcard2",{
    y : 100,
    duration: 10,
    // delay: 0.5,
    ease: "power2.linear",
    scrollTrigger:{
        trigger: "#secondcard2",
        scroller: 'body',
        // markers: true,
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    },
    

})

gsap.from("#thirdcard1",{
    y : 100,
    duration: 10,
    // delay: 0.5,
    ease: "power2.linear",
    scrollTrigger:{
        trigger: "#thirdcard1",
        scroller: 'body',
        // markers: true,
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    },
    

})
gsap.from("#thirdcard2",{
    y : 150,
    duration: 6,
    // delay: 0.5,
    ease: "power2.linear",
    scrollTrigger:{
        trigger: "#thirdcard2",
        scroller: 'body',
        // markers: true,
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    },
    

});

// Open 
function openPopup() {
    document.getElementById("popup-bg").style.display = "flex";
}

// Close
function closePopup() {
    document.getElementById("popup-bg").style.display = "none";
}

// Switch login se signup
document.getElementById("showSignup").addEventListener("click", () => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "block";
});

// Switch signup se login
document.getElementById("showLogin").addEventListener("click", () => {
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".login-form").style.display = "block";
});

// Close when click outside
document.getElementById("popup-bg").addEventListener("click", (e) => {
    if (e.target.id === "popup-bg") {
        closePopup();
    }
});

// Button open 
document.querySelector(".hero-btn").addEventListener("click", openPopup);
document.querySelectorAll(".primaryBtn").forEach(btn => {
    btn.addEventListener("click", openPopup);
});
