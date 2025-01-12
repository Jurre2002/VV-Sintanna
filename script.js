// document.addEventListener("DOMContentLoaded", function () {
//     const dropdowns = document.querySelectorAll(".dropdown1, .dropdown2, .dropdown3, .dropdown4");

//     dropdowns.forEach(dropdown => {
//         const submenu = dropdown.querySelector(".submenu");

//         dropdown.addEventListener("click", function (event) {
//             event.stopPropagation(); // Voorkomt dat klikken op andere delen van de pagina invloed heeft.
//             submenu.classList.toggle("visible");
//             dropdown.classList.toggle("open"); 
//         });
//     });

//     document.addEventListener("click", function (event) {
//         dropdowns.forEach(dropdown => {
//             const submenu = dropdown.querySelector(".submenu");
//             const isClickInsideMenu = dropdown.contains(event.target);
//             if (!isClickInsideMenu) {
//                 submenu.classList.remove("visible");
//                 dropdown.classList.remove("open"); 
//             }
//         });
//     });
// });

// window.onscroll = function() {stickNav()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function stickNav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown1, .dropdown2, .dropdown3, .dropdown4");

    dropdowns.forEach(dropdown => {
        const submenu = dropdown.querySelector(".submenu");

        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); 

            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    const otherSubmenu = otherDropdown.querySelector(".submenu");
                    otherSubmenu.classList.remove("visible");
                    otherDropdown.classList.remove("open");
                }
            });

            submenu.classList.toggle("visible");
            dropdown.classList.toggle("open");
        });
    });

    document.addEventListener("click", function () {
        dropdowns.forEach(dropdown => {
            const submenu = dropdown.querySelector(".submenu");
            submenu.classList.remove("visible");
            dropdown.classList.remove("open");
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".fa-bars");
    const closeMenu = document.querySelector(".fa-xmark")
    const mobileMenu = document.querySelector(".nav1");

    hamburgerMenu.addEventListener("click", () => {
        mobileMenu.style.display = "flex";
        hamburgerMenu.classList.add("active");
        closeMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        mobileMenu.style.display = "none";
        hamburgerMenu.classList.remove("active");
        closeMenu.classList.remove("active");
    });

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); 

            const subMenu = item.nextElementSibling; 
            const icon = item.querySelector("i"); 

            
            if (subMenu && subMenu.classList.contains("subsubmenu1")) {
                
                subMenu.style.display = 
                    subMenu.style.display === "flex" ? "none" : "flex";

                
                icon.classList.toggle("rotate");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger); 

    gsap.from(".nieuws-items", {
        opacity: 0, 
        y: 50, 
        duration: 1.5, 
        stagger: 0.2, 
        scrollTrigger: {
            trigger: ".nieuws", 
            start: "top 80%", 
            once: true, 
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger); 

    // De timeline van de animaties
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".volgende_wedstrijd", 
            start: "top 80%", 
            once: true, 
        },
    });

    
    timeline
        .to(".wedstrijd_gegevens", { // Het komt van links buiten het scherm naar rechts binnen het scherm
            opacity: 1,
            x: 0, 
            duration: 1.5,
            ease: "power2.out", 
        })
        .to(
            ".filter_functies", // Het komt van rechts buiten het scherm naar links binnen het scherm
            {
                opacity: 1,
                x: 0, 
                duration: 1.5,
                ease: "power2.out",
            },
            "<" //Zorgt ervoor dat de tweede animatie tegelijk begint met de eerste
        )
        .to(".wedstrijd_afbeelding", {
            opacity: 1,
            y: 0, 
            duration: 1.5,
            ease: "power2.out",
        });
});







