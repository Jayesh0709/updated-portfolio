window.addEventListener("load", () => {
    gsap.to(".liquid-loader", {
        opacity: 0,
        delay: 3.5,  // Loader ALWAYS 4 sec visible
        duration: 0.4,
        ease: "power4.out",
        onComplete: () => {
            // STEP 3 → Loader hatao
            document.querySelector(".liquid-loader").style.display = "none";

            // STEP 4 → Scroll unlock
            document.body.style.overflow = "overlay";
        }
    });
});



function skills_fun() {
    let skills = document.querySelectorAll(".skill")

    skills.forEach(el => {
        let display = el.querySelector("img")
        display.style.display = "none";
        el.addEventListener("mouseenter", () => {
            el.querySelector("img").style.display = "block";
            gsap.to(el, {
                color: "#EE37A1",
                ease: "power3.out"
            })

        })

        el.addEventListener("mousemove", (e) => {
            const react = el.getBoundingClientRect();
            gsap.to(display, {
                x: e.clientX - react.left,
                y: e.clientY - react.top,
                ease: "none",
                scale: 1,
                duration: 0.5,
                opacity: 1
            })
        })
        el.addEventListener("mouseleave", () => {
            gsap.to(el.querySelector("img"), {
                display: "none",
                scale: 0
            })
            // el.querySelector("img").style.display = "none";
            gsap.to(el, {
                color: "white",
                ease: "power3.out",
            })
        })
    })
}
function project() {
    let pro_img = document.querySelectorAll(".project")

    pro_img.forEach(el => {
        // el.querySelectorAll(".link_icon")[0].style.display = "none";
        // el.querySelectorAll(".link_icon")[1].style.display = "none";
        let icons = el.querySelectorAll(".link_icon");
        el.addEventListener("mouseenter", () => {
            icons.forEach(i => i.style.display = "block");
            gsap.to(icons, {
                opacity: 1,
                filter: "brightness(0)"
                // display: "block"
            })
            gsap.to(el.querySelector("img"), {
                scale: 1.2,
                filter: "blur(4px)",
                // duration:0.5,
                // ease:"power4.out"
            })
        })

        el.addEventListener("mouseleave", () => {
            let t1 = gsap.timeline();
            t1.to(icons, {
                opacity: 0,
                duration: 0.1,

            })
            t1.add(() => icons.forEach(i => i.style.display = "none"));
            t1.to(el.querySelector("img"), {
                scale: 1,
                filter: "blur(0px)"
            })
        })
    });
}
function contact_ani() {
    let contact_box = document.querySelector(".contact_box");
    contact_box.addEventListener("mousemove", (e) => {
        const rect = contact_box.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        gsap.to(contact_box, {
            rotateY: (x - 0.5) * 20,
            rotateX: -(y - 0.5) * 20,
            // ease:"power3.out",
            duration: 0.2
        })
    })
    contact_box.addEventListener("mouseleave", () => {
        gsap.to(contact_box, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3
        })
    })
    let another = document.querySelector(".direct_con");
    another.addEventListener("mousemove", (e) => {
        const rect = another.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        gsap.to(another, {
            rotateY: (x - 0.5) * 20,
            rotateX: -(y - 0.5) * 20,
            // ease:"power3.out",
            duration: 0.2
        })
    })
    another.addEventListener("mouseleave", () => {
        gsap.to(another, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3
        })
    })
}

skills_fun()
project()
contact_ani()