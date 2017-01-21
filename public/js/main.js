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

            html = '<div id="weather-icon" width="128" height="128"><i class="owf owf-5x owf-'+data.weather[0].id+'-'+nightorday+'"></i></div>';
            html += '<div id="region">'+data.name+' ' + Math.ceil(data.main.temp)+'&deg;</div>';
            html += '<div><i class="fa fa-angle-up"></i>  High '+data.main.temp_max + ' <i class="fa fa-angle-down"></i>  Low ' + data.main.temp_min + '</div>'
            $("#weather").html(html);

            //$("#forecast").html(html);
        }
    });
};

$(document).ready(function() {
    updateNews();
    updateWeather();
    setInterval(updateNews, 60000);
    setInterval(updateWeather, 60000);
});