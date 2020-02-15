var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('#city');
var weather_icon = document.querySelector('#weather_icon');
var desc = document.querySelector('#weather_desc');
var weather_data = document.querySelector('#weather_data');



button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=83f236d80ec78bac2c7e5a24df8268d3`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        var name = data['name'];
        var country = data['sys']['country'];
        var cur_temp = data['main']['temp'];
        var min_temp = data['main']['temp_min'];
        var max_temp = data['main']['temp_max'];
        var pressure = data['main']['pressure'];
        var humidity = data['main']['humidity'];
        var descValue = data['weather'][0]['description'];
        var wind_speed = data['wind']['speed'];
        var wind_degree = data['wind']['deg'];
        
        city.innerHTML = `${name}, ${country}`;
        desc.innerHTML = descValue;
        weather_data.innerHTML = `Current temperature: ${cur_temp}°C </br>
                                  Min.temperature: ${min_temp}°C</br>
                                  Max.temperature: ${max_temp}°C</br>
                                  Atmospheric pressure: ${pressure} hPa</br>
                                  Humidity: ${humidity}%</br>
                                  Wind: ${wind_speed}km/h,${wind_degree} degree ` ;
        
        
    })
    
    .catch(error => console.dir(error))
    })
