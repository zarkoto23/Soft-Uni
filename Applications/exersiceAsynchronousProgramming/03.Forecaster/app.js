function attachEvents() {
  const getWeatherBtn = document.getElementById("submit");
  const locationsUrl = "http://localhost:3030/jsonstore/forecaster/locations";

  const conditions = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
  };

  const forecastDiv = document.getElementById("forecast");
  const currentLabel = document.getElementsByClassName("label");
  const currentLabelOne = currentLabel[0];
  const currentLabelTwo = currentLabel[1];

  const inputValue = document.getElementById("location");

  getWeatherBtn.addEventListener("click", async (e) => {
    try {
      const locationRes = await fetch(locationsUrl);
      const locationData = await locationRes.json();

      const thisLocation = locationData.find(
        (loc) => loc.name === inputValue.value
      );
      const code = thisLocation.code;

      const todayWeatherFetch = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${code}`
      );
      const todayWeatherData = await todayWeatherFetch.json();

      const threeDayWeatherFetch = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
      );
      const threeDayWeatherData = await threeDayWeatherFetch.json();

      forecastDiv.style.display = "inline";

      const currentWeatherCond = todayWeatherData.forecast.condition;
      const threeDayCond = threeDayWeatherData.forecast.condition; //

      currentLabelOne.innerHTML = `Current conditions<br><span>${conditions[currentWeatherCond]}</span><br><span>${todayWeatherData.name}</span><br><span>${todayWeatherData.forecast.low}&#176;/${todayWeatherData.forecast.high}&#176;</span><br><span>${todayWeatherData.forecast.condition}</span>`;

      let total = "<span>Three day forecast</span><br>";

      threeDayWeatherData.forecast.forEach((day) => {
        total += `<span>${conditions[day.condition]}</span><br><span>${
          day.low
        }&#176;/${day.high}</span><br><span>${day.condition}</span>`;
      });
      currentLabelTwo.innerHTML = total;
    } catch {
      forecastDiv.style.display = "inline";
      forecastDiv.textContent = "Error";
    }
  });
}

attachEvents();
