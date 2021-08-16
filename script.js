/*************************************************************************************************************************
A SIMPLE APP THAT GRABS A USERS CITY AND DISPLAYS SOME INFORMATION ABOUT THAT CITY'S WEATHER

BACKGROUND COLORS: 
#8BC9D9
#A3CDD8
#89D5EA
#54B8D4
#719CA7

ATTRIBUTION FOR PICTURS:
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 
*************************************************************************************************************************/

/* ============================================================
// ===== Create the function to work with the api object ======
// ==========================================================*/
doAPIcall = async (cityName) => {
  const result = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${/*PLEASE INSERT YOUR OWN KEY HERE BY GOING TO - https://home.openweathermap.org/api_keys*/}&lang=en.json`
    )
    .catch((err) => {
      //server response is not 200
      if (err.response) {
        // Simple alert box with error message. Will create modal later to replace.
        alert(
          "Uh-Oh something went wrong.\nPlease check your spelling and try again."
        );
        return; // break out of function
      }
    });
  // grab the data response payload and store in a variable
  let result1 = result.data;

  // Grab all needed data and store in variables also convert highTemp and lowTemp into fahrenheit
  let grabCity = result1.name;
  let grabDegree = Math.floor((result1.main.temp - 273.15) * 1.8 + 32);
  let highTemp = Math.floor((result1.main.temp_max - 273.15) * 1.8 + 32);
  let lowTemp = Math.floor((result1.main.temp_min - 273.15) * 1.8 + 32);
  let forecast = result1.weather[0].description;
  let humidityIndex = result1.main.humidity;

  /***************************************************  
     Create the widgets to display the weather data
  ****************************************************/
  // display the city and current temp
  tempInfo = document.getElementById("temp");
  tempInfo.style.textAlign = "center";
  tempInfo.style.verticalAlign = "middle";
  tempInfo.style.lineHeight = "3";
  tempInfo.style.width = "749px";
  tempInfo.style.height = "416px";
  tempInfo.style.backgroundColor = "#8BC9D9";
  tempInfo.style.fontSize = "400%";
  tempInfo.innerHTML = `${grabCity}<br>${grabDegree}&#xb0;`;

  // display high temp info
  highTempInfo = document.getElementById("highTemp");
  highTempInfo.style.textAlign = "center";
  highTempInfo.style.verticalAlign = "middle";
  highTempInfo.style.lineHeight = "3";
  highTempInfo.style.width = "749px";
  highTempInfo.style.height = "416px";
  highTempInfo.style.backgroundColor = "#A3CDD8";
  highTempInfo.style.fontSize = "300%";
  highTempInfo.innerHTML = `Current High Temp<br>${highTemp}&#xb0;`;

  // display low temp info
  lowTempInfo = document.getElementById("lowTemp");
  lowTempInfo.style.textAlign = "center";
  lowTempInfo.style.verticalAlign = "middle";
  lowTempInfo.style.lineHeight = "3";
  lowTempInfo.style.width = "749px";
  lowTempInfo.style.height = "416px";
  lowTempInfo.style.backgroundColor = "#89D5EA";
  lowTempInfo.style.fontSize = "300%";
  lowTempInfo.innerHTML = `Current Low Temp<br>${lowTemp}&#xb0;`;

  // display forecast info
  forecastInfo = document.getElementById("forecast");
  forecastInfo.style.textAlign = "center";
  forecastInfo.style.verticalAlign = "middle";
  forecastInfo.style.lineHeight = "3";
  forecastInfo.style.width = "749px";
  forecastInfo.style.height = "416px";
  forecastInfo.style.backgroundColor = "#54B8D4";
  forecastInfo.style.fontSize = "300%";
  forecastInfo.innerHTML = `Your Local Weather Forecast<br>${forecast.toUpperCase()}`;

  // display humidity info
  humidityIndexInfo = document.getElementById("humidity");
  humidityIndexInfo.style.textAlign = "center";
  humidityIndexInfo.style.verticalAlign = "middle";
  humidityIndexInfo.style.lineHeight = "3";
  humidityIndexInfo.style.width = "749px";
  humidityIndexInfo.style.height = "416px";
  humidityIndexInfo.style.backgroundColor = "#719CA7";
  humidityIndexInfo.style.fontSize = "300%";
  humidityIndexInfo.innerHTML = `Your Local Humidity Index<br>${humidityIndex}&#37;`;
};

// ============================================================
// ======= make a listener for the button being clicked =======
// ============================================================
handleClick = () => {
  // grab value from user and store in variable
  let citySearch = document.getElementsByName("city")[0].value;

  // send an API call to api.openweathermap.org
  doAPIcall(citySearch);
};

// ============================================================
// ============= Attach listener to submit button =============
// ============================================================
submitButtonClicked = () => {
  // handle event listener when button is clicked
  document
    .getElementById("submit-button")
    .addEventListener("click", handleClick);
};

// execute submitButtonClicked function
submitButtonClicked();
