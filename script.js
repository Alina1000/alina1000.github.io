const targetDate = new Date("2022-11-19 18:00:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

getTimeDifference = (targetDate) => {
  const diff = targetDate.getTime() - Date.now();

  if (diff < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
const minutes = Math.floor(diff / (1000 * 60)) % 60;
const seconds = Math.floor(diff / 1000) % 60;

  return { days, hours, minutes, seconds };
};

const updateTime = () => {
  const { days, hours, minutes, seconds } = getTimeDifference(targetDate);
  daysElement.innerText = days;
  hoursElement.innerText = hours.toString().padStart(2, "0");
  minutesElement.innerText = minutes.toString().padStart(2, "0");
  secondsElement.innerText = seconds.toString().padStart(2, "0");
};

updateTime();
setInterval(updateTime, 1000);
