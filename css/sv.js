function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    const menuIcon = document.querySelector('.menu-icon');

    menu.classList.toggle('active');
    overlay.classList.toggle('active');

    // Change ☰ to ✕
    menuIcon.textContent = menu.classList.contains('active') ? '✕' : '☰';
}

// Close menu when clicking overlay
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.remove('active');
    this.classList.remove('active');
    document.querySelector('.menu-icon').textContent = '☰';
});

// Mobile dropdown toggle (click to open/close)
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.dropbtn');
    btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
            this.innerHTML = dropdown.classList.contains('active') ? 
                'Services ▲' : 'Services ▼';
        }
    });
});

// Auto Sliding Banner
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
}

// Manual Navigation
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

document.querySelector('.next-btn').addEventListener('click', () => {
    slideIndex++;
    showSlides();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 1) slideIndex = document.getElementsByClassName("slide").length;
    showSlides();
});