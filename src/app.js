function updateTime(cityid, timezone) {
  let cityElement = document.querySelector(cityid);
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");
  let cityTime = moment().tz(timezone);
  cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
  cityTimeElement.innerHTML = cityTime.format("hh:mm:ss [<small>]A[</small>]");
}

setInterval(function () {
  updateTime("#los-angeles", "America/Los_Angeles");
  updateTime("#sydney", "Australia/Sydney");
  updateTime("#tokyo", "Asia/Tokyo");
})(1, 1000);
