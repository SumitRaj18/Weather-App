const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44eacb2f32msha049be11d53f67fp15e6b1jsn566b2cb720e8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let search=document.querySelector("#search");
let temp=document.querySelector(".temp");
let humidity= document.querySelector(".humidity");
let feels= document.querySelector(".feels");
let wind= document.querySelector(".wind");
let submit=document.querySelector(".submit");
let city_name=document.querySelector("#city-name")
let cities=document.querySelector("#cities")
let max= document.querySelector(".max");
let min= document.querySelector(".min");
let picture= document.querySelector(".picture");
let icon= document.querySelector(".icon");
let pct= document.querySelector(".pct");
const getweather=(cities)=>{
    city_name.innerHTML=cities.charAt(0).toUpperCase()+cities.slice(1);
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cities, options)
.then(response => response.json())
.then(response => {
  console.log(response)
 temp.innerHTML= response.temp+"°C"
 max.innerHTML= "Max:  "+response.max_temp+"°C", min.innerHTML="|  "+"Min: "+ response.min_temp+"°C"
 humidity.innerHTML="Humidity: "+response.humidity+"%"
 feels.innerHTML="Feels Like: "+response.feels_like+"°C"
 wind.innerHTML="Wind Speed: " +response.wind_speed+"Km/h"
 pct.innerHTML="Precipitation: " +response.cloud_pct+"%"
 ;

 if (response.temp<15) {
  picture.style.backgroundImage="url(clouds.png)"
}
if (response.temp<0) {
  picture.style.backgroundImage="url(snowfall.png)"
} if(response.temp>15) {
  picture.style.backgroundImage="url(sun.png)"
} if(response.cloud_pct>40 & response.temp>10) {
  picture.style.backgroundImage="url(storm.png)"
} 
}
 
  

  )}
 
  submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(cities.value)
  })

  getweather("Mumbai");
  let date=document.querySelector(".date");
  let todayday=document.querySelector(".day");
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // Months are zero-based, so add 1
  let year = today.getFullYear();
  date.innerHTML= month + "/" + day + "/" + year;

  let days = new Date();
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayOfWeek = daysOfWeek[days.getDay()];
  todayday.innerHTML="|  "+dayOfWeek;
  console.log("Today is " + dayOfWeek);
  
  function updateLiveTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds;
  
    // Update the content of the liveTime element
    document.getElementById('liveTime').innerText = timeString;
  }
  
  // Update the time every second (1000 milliseconds)
  setInterval(updateLiveTime, 1000);
  
  // Initial call to display the time immediately when the page loads
  updateLiveTime();
  
 
  
  cities.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
     submit.click();
    }
  });