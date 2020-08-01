const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const getTimeDifference = (targetDate) => {
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

const updateTime = (targetDate) => {
  const { days, hours, minutes, seconds } = getTimeDifference(targetDate);
  daysElement.innerText = days;
  hoursElement.innerText = hours.toString().padStart(2, "0");
  minutesElement.innerText = minutes.toString().padStart(2, "0");
  secondsElement.innerText = seconds.toString(),padStart(2, "0");
};

const targetDate = new Date("2020-08-19 23:59:00");
updateTime(targetDate);
setInterval(UpdateTime, 1000, targetDate);
