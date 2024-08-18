var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

modalBg.addEventListener("click", function (e) {
  if (e.target === modalBg) {
    modalBg.classList.remove("bg-active");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalBg.classList.contains("bg-active")) {
    modalBg.classList.remove("bg-active");
  }
});

let image = document.getElementById("image");
let images = [
  "/images/car.png",
  "/images/bike2.png",
  "/images/cycle3.png",
  "/images/scooty.png",
];
let currentIndex = 0;

function changeImage() {
  image.classList.remove("fade-in");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
    image.onload = () => image.classList.add("fade-in");
  }, 300);
}

setInterval(changeImage, 2000);

document.addEventListener('DOMContentLoaded', function() {
   
    const contactForm = document.getElementById('contactForm');

    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

       
        if (validateForm(name, email, subject, message)) {
            
            alert('Thank you, ' + name + '! Your message has been sent successfully. We will get back to you soon.');

           
            contactForm.reset();
        }
    });

    
    function validateForm(name, email, subject, message) {
        let isValid = true;

       
        if (!name || !email || !subject || !message) {
            alert('Please fill in all the fields.');
            isValid = false;
        }

       
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        
        return isValid;
    }
});
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const pickupDate = document.getElementById('pick-date').value;
  const dropDate = document.getElementById('drop-date').value;
  const location = document.getElementById('location').value;
  const vehicleType = document.getElementById('vehicle-type').value;
  const city = document.getElementById('city').value;
  
  if (!pickupDate || !dropDate || !location || !vehicleType || !city) {
      alert('Please fill in all fields.');
      return;
  }
  alert(`Vehicle rented: ${vehicleType}\nPickup: ${pickupDate}\nDrop: ${dropDate}\nLocation: ${location}\nCity: ${city}`);
});

const sr=ScrollReveal ({
  distance:'60px',
  duration:2500,
  delay:400,
  reset:true
})


sr.reveal('.text',{delay:200,origin:'top'})

sr.reveal('.ride-container .box',{delay:600,origin:'top'})

