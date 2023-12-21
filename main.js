document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('December 31, 2023 23:59:59').getTime();
  
    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerText = days + 'd';
      document.getElementById('hours').innerText = hours + 'h';
      document.getElementById('minutes').innerText = minutes + 'm';
      document.getElementById('seconds').innerText = seconds + 's';
    }
  
    // Initial call
    updateCountdown();
  
    // Update every second
    setInterval(updateCountdown, 1000);
  });
  