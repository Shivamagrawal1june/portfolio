// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// type js plugin
let typeJsText = document.querySelector(".typeJsText");
let lines = typeJsText.dataset.typetext.split("|");
let lineIndex = 0;
let charIndex = -1;

typeJsText.innerHTML = "";

function typeJs() {
  if (charIndex < lines[lineIndex].length - 1) {
    charIndex++;
    typeJsText.innerHTML += lines[lineIndex].charAt(charIndex);
  } else if (lineIndex < lines.length - 1) {
    charIndex = -1;
    lineIndex++;
    typeJsText.innerHTML += "<br>";
  } else {
    typeJsText.innerHTML = "";
    lineIndex = 0;
    charIndex = -1;
  }
}

setInterval(() => {
  typeJs();
}, 200);

function openGmail() {
  const email = "shivamagrawal1june@gmail.com";

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  window.open(url, "_blank");
}

function downloadCV() {
  const link = document.createElement("a");
  link.href = "Resume.pdf"; // Path to your resume file
  link.download = "Shivam Resume.pdf"; // Name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
