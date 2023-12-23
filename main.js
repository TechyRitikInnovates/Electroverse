document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("December 31, 2023 23:59:59").getTime();

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + "d";
    document.getElementById("hours").innerText = hours + "h";
    document.getElementById("minutes").innerText = minutes + "m";
    document.getElementById("seconds").innerText = seconds + "s";
  }

  updateCountdown();

  setInterval(updateCountdown, 1000);
});

let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    setInterval(changeContent, 5000);
  });

  function changeContent() {
    const contents = document.querySelectorAll('.content');
    const activeContent = document.querySelector('.content.active');
    const nextIndex = (Array.from(contents).indexOf(activeContent) + 1) % contents.length;

    activeContent.classList.remove('active');
    contents[nextIndex].classList.add('active');
  }