function attachEventsListeners() {
  const buttons = document.querySelectorAll("[id*=Btn]");

  let units = {
    seconds: 86400,
    minutes: 1440,
    hours: 24,
    days: 1,
  };

  buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
      const input = Number(e.target.previousElementSibling.value);
     
      const type = e.target.id.split("Btn")[0];
      const days = input / units[type];

      const daysEl = document.querySelector("#days");
      const hoursEl = document.querySelector("#hours");
      const minutesEl = document.querySelector("#minutes");
      const secondsEl = document.querySelector("#seconds");

      daysEl.value = days;
      hoursEl.value = days * 24;
      minutesEl.value = days * 1440;
      secondsEl.value = days * 86400;
    });
  });
}
