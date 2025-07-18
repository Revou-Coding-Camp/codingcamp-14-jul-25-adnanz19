document.addEventListener("DOMContentLoaded", function () {
  const name = prompt("Please enter your name:");
  if (name) {
    const welcomeText = document.getElementById("welcoming");
    if (welcomeText) {
      welcomeText.textContent = `Welcome ${name}!`;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("message-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("tanggal-lahir").value;
    const message = document.getElementById("pesan").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";

    const now = new Date();
    const currentTime = now.toLocaleString();
    document.getElementById("current-time").textContent = currentTime;

    document.getElementById("name-output").textContent = name;
    document.getElementById("birth-output").textContent = birthDate;
    document.getElementById("gender-output").textContent = gender;
    document.getElementById("message-output").textContent = message;

    document.getElementById("message-card").classList.remove("hidden");
  });
});

const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Optional: Tutup menu saat link diklik
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
  
  