// MOBILE NAVBAR (VERTICAL - CLEAN)
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
// scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// appointment form
document.getElementById("appointmentForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("success").innerText = "✅ Confirmed! Our team will reach out shortly to finalize the details of your visit.";
});
// SMOOTH HERO IMAGE FADE
const images = [
  "images/h3.png",
  "images/h5.png",
  "images/h2.jpeg",
  "images/h4.jpeg",
  "images/h6.jpeg",
];

let current = 0;
let showingBg1 = true;

const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

// initial image
bg1.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
  const next = (current + 1) % images.length;

  if (showingBg1) {
    bg2.style.backgroundImage = `url(${images[next]})`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `url(${images[next]})`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingBg1 = !showingBg1;
  current = next;
}, 4000);

// GALLERY MODAL
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const galleryImages = document.querySelectorAll(".gallery-grid img");
const close = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

close.onclick = () => {
  modal.style.display = "none";
};

