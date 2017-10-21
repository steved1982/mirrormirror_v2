var updateNews = function () {
    $.ajax({
        url: "newsfeed.php",
        success: function (xml) {
            $("#greeting").html(xml);
        }
    });
};

var updateWeather = function () {

    var api_key = "3b94fb713b3d9d8cc30ebad237fa2892";
    var units = "metric";
    var location = "Tonbridge,uk";
    $.ajax({

        url: "http://api.openweathermap.org/data/2.5/weather?q="+location+"&units="+units+"&appid="+api_key,
        success: function (data) {
            nightorday = "d";
            if (data.dt > data.sys.sunset) {
                nightorday = "n";
            }
            weatherLen = data.weather.length;

            html = '<div id="weather-icon" width="128" height="128"><i class="owf owf-5x owf-'+data.weather[weatherLen-1].id+'-'+nightorday+'"></i><br />'+Math.ceil(data.main.temp)+'&deg; ' + data.weather[weatherLen-1].main+'</div>';
            html += '<div class="weather-text" id="region">'+data.name+'</div>';
            html += '<div class="weather-text"><i class="fa fa-angle-up"></i>  High '+data.main.temp_max + ' <i class="fa fa-angle-down"></i>  Low ' + data.main.temp_min + '</div>'
            $("#weather").html(html);
        }
        ,
        url: "http://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=metric&appid="+api_key,
        success: function (data) {
            console.log(data);

            forecast = '<div class="forecast-feed">';
            forecast += '<div style="width: 20%; text-align: center; float: left; margin-right:5px;">'+data.list[7].weather[0].main+'<br /><img src="http://openweathermap.org/img/w/' + data.list[7].weather[0].icon + '.png" /><br>'+data.list[7].main.temp+'&#8451;</div>';
            forecast += '<div style="width: 20%; text-align: center; float: left; margin-right:5px;">'+data.list[15].weather[0].main+'<br /><img src="http://openweathermap.org/img/w/' + data.list[15].weather[0].icon + '.png" /><br>'+data.list[15].main.temp+'&#8451;</div>';
            forecast += '<div style="width: 20%; text-align: center; float: left; margin-right:5px;">'+data.list[23].weather[0].main+'<br /><img src="http://openweathermap.org/img/w/' + data.list[23].weather[0].icon + '.png" /><br>'+data.list[23].main.temp+'&#8451;</div>';
            forecast += '<div style="width: 20%; text-align: center; float: left; margin-right:5px;">'+data.list[31].weather[0].main+'<br /><img src="http://openweathermap.org/img/w/' + data.list[31].weather[0].icon + '.png" /><br>'+data.list[31].main.temp+'&#8451;</div>';
            forecast += '<div style="width: 20%; text-align: center; float: left;">'+data.list[39].weather[0].main+'<br /><img src="http://openweathermap.org/img/w/' + data.list[39].weather[0].icon + '.png" /><br>'+data.list[39].main.temp+'&#8451;</div>';
            forecast += '</div>';

            $("#forecast").html(forecast);
        }
    });
};

$(document).ready(function() {
    updateNews();
    updateWeather();
    setInterval(updateNews, 60000);
    setInterval(updateWeather, 60000);
});