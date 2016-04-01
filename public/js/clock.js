var datetime = null,
date = null;

var update = function () {
    date = moment(new Date());
    var myDate = new Date();
    myTime =  ( myDate.getHours() + 1 );
    myMins =  ( myDate.getMinutes() );

    var html = '<p>' + date.format('dddd, MMMM Do') + '</p>';
    html += '<p id="time">' + myTime + ':' + myMins + '</p>';
    datetime.html(html);
};

$(document).ready(function() {
    datetime = $('#date');
    update();
    setInterval(update, 10000);
});