var datetime = null,
date = null;

var update = function () {
    date = moment(new Date());
    time = date.format('HH:mm') + (1*60*60*1000);
    var html = '<p>' + date.format('dddd, MMMM Do') + '</p>';
    html += '<p id="time">' + time + '</p>';
    datetime.html(html);
};

$(document).ready(function() {
    datetime = $('#date');
    update();
    setInterval(update, 10000);
});