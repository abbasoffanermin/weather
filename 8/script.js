let inp=document.querySelector("input")
let form=document.querySelector("form")
let tbl=document.querySelector("table")
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=3828f8a5cac845934fe6453a71139d81`)
   .then(response =>{
    
    response.json()
    .then(value =>{
        data=""

        data+=`<tr>
        <th scope="row">description</th>
        <td>${value.weather[0].description}</td>
        </tr>
        <tr>
        <th scope="row">temperature</th>
        <td>${value.main.temp}</td>
        </tr>
        <tr>
        <th scope="row">wind speed</th>
        <td>${value.wind.speed}</td>
        </tr>
      `
        
        //   data+=`  <tr>
        //   <th scope="row">${Object.keys(value.weather[0].description)}</th>
         
        //   <td>${Object.values(value.weather[0].description)}</td>
        // <td>${Object.entries(value.weather[0].description)}</td>
        // </tr>`


       tbl.innerHTML=data
     
    })
   })

})