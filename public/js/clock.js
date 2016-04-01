var datetime = null,
date = null;

var update = function () {
    var myDate = new Date();
    myDate.setHours ( myDate.getHours() + 1 );
    var html = '<p>' + myDate.format('dddd, MMMM Do') + '</p>';
    html += '<p id="time">' + myDate.format('HH:mm') + '</p>';
    datetime.html(html);
};

$(document).ready(function() {
    datetime = $('#date');
    update();
    setInterval(update, 10000);
});