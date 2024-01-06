BASE_URL="https://api.openweathermap.org/data/2.5/weather?";

 const apikey="dd8aebe89049aada6b9a2f608b4a997f";
 const cityname=document.querySelector(".upper input").value;
 const search=document.querySelector("#search");
 const icon=document.querySelector("#icon");
 const forecast=document.querySelector("a");

 const temp=document.querySelector(".temp h2");
 const type=document.querySelector(".temp p");
 const aqi=document.querySelector(".temp btn");
 const reelfeel=document.querySelector(".reelfeel");
 const presure=document.querySelector(".pressure");
 const humidity=document.querySelector(".humidity");
 const chanceofrain=document.querySelector(".chanceof");
 const windspeed=document.querySelector(".windspeed");
 const uvin=document.querySelector(".uv index");

 
 

search.addEventListener("click",  async ()=>{
    const cityname=document.querySelector(".upper input").value;
    const url=`${BASE_URL}q=${cityname} &appid=${apikey}&units=metric`;
    let response = await fetch(url);
     let data = await response.json();
      console.log(data);
    changevalue(data);
})
function changevalue( data){
    temp.innerHTML=parseInt(data.main.temp);
    type.innerHTML=data.weather[0].main;
   reelfeel.innerHTML=data.main.feels_like;
   presure.innerHTML=data.main.pressure;
   humidity.innerHTML=data.main.humidity;
   chanceofrain.innerHTML="50%";
   windspeed.innerHTML=data.wind.speed;
}

forecast.addEventListener("click",async()=>{
 
   url=`${BASE_URL}`;
   let response=await fetch(url);
   let data=await response.json();
 for(let i=0;i<4;i++){
   const date=document.querySelector(`.subdays -${i+1} h4`);
   date.innerHTML=data.main[i].dt_text;
   const temp=document.querySelector(`.subdays-${i+1}.temp1 h3`);
   temp.innerHTML=data.main[i].temp;
   const weather=document.querySelector(`.subdays-${i+1} .temp1 p`);
   weather.innerHTML=data.main[i].main;
 }



})
