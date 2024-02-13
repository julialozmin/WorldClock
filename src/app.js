let timer;

function updateTime(cityId, timezone) {
  let cityElement = document.querySelector(cityId);
  const cityDateElement = cityElement.querySelector(".date");
  const cityTimeElement = cityElement.querySelector(".time");
  let cityTime = moment().tz(timezone);
  cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
  cityTimeElement.innerHTML = cityTime.format("hh:mm:ss [<small>]A[</small>]");
}

function runClocks() {
  function updateAll() {
    updateTime("#los-angeles", "America/Los_Angeles");
    updateTime("#sydney", "Australia/Sydney");
    updateTime("#tokyo", "Asia/Tokyo");
  }
  timer = setInterval(updateAll, 1000);
}

function showSelectedCity(event) {
  clearInterval(timer);
  function updateSelected() {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
    const cityName = cityTimezone.replace("_", " ").split(`/`)[1];
    const cityDisplay = document.querySelector("#cities");
    const selectedCityDate = moment().tz(cityTimezone).format("MMMM Do YYYY");
    const selectedCityTime = moment()
      .tz(cityTimezone)
      .format("hh:mm:ss [<small>]A[</small>]");

    cityDisplay.innerHTML = `<div class="city"><div>
            <h2>${cityName}</h2>
            <div class="date">${selectedCityDate}</div>
          </div>
          <div class="time">${selectedCityTime}</div>
        </div>
         <a href="">All cities</a>
  `;
  }
  setInterval(updateSelected, 1000);
}

let citiesSelect = document.querySelector("#cities-dropdown");

citiesSelect.addEventListener("change", showSelectedCity);

runClocks();
