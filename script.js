// http://api.weatherapi.com/v1/current.json?key=1ab997ac263f4782ba0132242262003&q=Accra&aqi=no


const temperatureField = document.querySelector('.temp'); 
const locationField = document.querySelector('.time_location p');
const dateandTimeField = document.querySelector('.time_location span');
const conditionField = document.querySelector('.condition p');
const searchField = document.querySelector('.search_area');
const form = document.querySelector('form'); 

form.addEventListener('submit', searchForLocation)

let target = 'Accra';

const fetchResults = async (targetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=1ab997ac263f4782ba0132242262003&q=${targetLocation}$=no`;
    
    const response = await fetch(url);

    const data = await response.json()

    console.log(data);


    let locationName = data.location.name
    // console.log(locationName)
    let time = data.location.localtime

    let temperature = data.current.temp_c

    let condition = data.current.condition.text

    updateDetails(temperature , locationName , time , condition)
} 


function updateDetails(temp, locationName, time, condition){
      let splitDate = time.split(' ')[0]

      let splitTime = time.split(' ')[1]

      let currentDay = getDayName(new Date(splitDate).getDay())


       temperatureField.innerText = temp
       locationField.innerText = locationName
       dateandTimeField.innerText = `${splitDate} ${currentDay}, ${splitTime}`
       conditionField.innerText = condition
    // weatherField.innerText = condition/

 }



function searchForLocation(e){
    e.preventDefault();

    target = searchField.value

    fetchResults(target)

}

fetchResults(target);


function getDayName(number){
    switch(number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Unknown";
    }
}


// {/* <input type="text" id="city" placeholder="Enter city">
// <button onclick="getWeather()">Search</button> */}

// {/* <script> */}
// async function getWeather() {
//   con st city = document.getElementById("city").value;

//   if (!city) {
//     alert("Please enter a city name");
//     return;
//   }

//   const apiKey = "YOUR_API_KEY";
//   const url = `https://api.weatherapi.com/v1/current.json?key=1ab997ac263f4782ba0132242262003&q=${city}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.error) {
//       alert(data.error.message);
//       return;
//     }

//     console.log("City:", data.location.name);
//     console.log("Temp:", data.current.temp_c);

//   } catch (error) {
//     console.log("Fetch error:", error);
//   }
// }
// </script>









