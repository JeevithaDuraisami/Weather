const button=document.getElementById("button");
const countyName=document.getElementById("countyName");
const weather=document.getElementById("weather");
let counter = 0;

button.onclick = ()=>{
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        console.log(response);
        button.textContent="Next";
        weather.textContent="";
        console.log(response.data[counter].city);
        countyName.textContent=response.data[counter].city;
        //setTimeout(function(){
            weather.textContent=response.data[counter].weather_description;
        //},1500);
        counter++;
    })
    .catch(function(error){
       console.log(error);
    })
};