document.addEventListener("DOMContentLoaded", function () {
  const day = document.querySelector(".days")
  const hoursDisplay = document.querySelector(".hours")
  const minutes = document.querySelector(".minutes")
  const seconds = document.querySelector(".seconds")

  let days = 1
  let hour = 1
  let remainingMinutes = 1
  let sec = 59

  day.textContent = days
  hoursDisplay.textContent = hour
  minutes.textContent = remainingMinutes
  seconds.textContent = sec

  setInterval(() => {
    sec--
    if (sec < 0) {
      remainingMinutes--
      sec = 59
      console.log(11)
    }
    if (remainingMinutes < 0) {
      hour--
      remainingMinutes = 0
    }
    if (hour < 0) {
      days--
      hour = 0
    }
    if (days < 0) {
      days = 0
    }
    if (days === 0 && hour === 0 && remainingMinutes === 0) {
      sec = 0
    }

    seconds.innerHTML = sec
    minutes.innerHTML = remainingMinutes
    hoursDisplay.innerHTML = hour
    day.innerHTML = days
  }, 100)
})
