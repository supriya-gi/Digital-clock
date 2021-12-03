$(document).ready(function(){

var time = function(){

var day = new Date();
var t_hours = day.getHours();
var t_minutes = day.getMinutes();
var t_seconds = day.getSeconds();
 
setTimeout(time , 500)

$('#time_h').html(t_hours + ':');
$('#time_m').html(t_minutes + ':');
$('#time_s').html(t_seconds);

if(t_hours >= 12){
    $('#slot').html('PM')
}
else{
    $('#slot').html('AM')
}
    }
    time();
})