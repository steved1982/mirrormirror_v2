var updateNews = function () {
    $.ajax({
        url: "newsfeed.php",
        success: function (xml) {
            $("#greeting").html(xml);
        }
    });
};

$(document).ready(function() {
    updateNews();
    setInterval(updateNews, 60000);
});