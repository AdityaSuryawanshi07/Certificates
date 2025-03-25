// script.js
const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {
    const logo = document.getElementById("logo");

    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        button.innerText = "🔆";
        logo.src = 'https://www.getparallax.com/wp-content/themes/stack-parallax/assets/img/logo-white.svg'
        
        
        
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        button.innerText = "🌙";
        logo.src = 'https://www.networkinginfosystems.com/Images/parallax-logo.png'
    }
});



gsap.to(".div1", { duration: 1, x: 0, rotation: 0,});
gsap.to(".shoes1", { duration: 3, x: 0, rotation: 360, ease: "bounce.out" });

let shoes = document.getElementById("shoes1");
shoes.addEventListener('mouseover', myFunction);

function myFunction() {
    gsap.to(".shoes1", { duration: 4, x: 0, rotation: 360, scale: 3 });
    
}





const divimg = document.getElementById("img-thumbnail");
const image = document.getElementById("card-img-top");

divimg.addEventListener("mouseover", function() {
            // Animate both the button and the image on click
            gsap.to(divimg, {
                duration: 0.9 ,
                scale: 1,
                ease: "bounce.out",
                yoyo: true,
                repeat: 1
            });

            gsap.to(image, {
                duration: 0.9,
                rotation: 360,            // Rotate the image by 360 degrees
                scale: 1,               // Scale the image up by 1.2
                ease: "elastic.out(2, 75)", // Elastic bounce easing
                yoyo: true,
                repeat: 1
            });
        });





















