var lcTime = moment();


$('document').ready(function() {

//date on the jumbotron
var curDay = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").text(curDay);


//change to input box
$("input").css("height","75px");
$("input").css("background-color", "lawngreen",);


//adding business standard time
var nine = moment().hour(9).format('h a');
$("#nine").text(nine);

var ten = moment().hour(10).format('H a');
$("#ten").text(ten);

var eleven = moment().hour(11).format('h a');
$("#eleven").text(eleven);

var noon = moment().hour(12).format('h a');
$("#noon").text(noon);

var one = moment().hour(13).format('h a');
$("#one").text(one);

var two = moment().hour(14).format('h a');
$("#two").text(two);

var three = moment().hour(15).format('h a');
$("#three").text(three);

var four = moment().hour(16).format('h a');
$("#four").text(four);

var five = moment().hour(17).format('h a');
$("#five").text(five);

//background color changes based on past, present, or future.
if (moment().hour(09).isBefore(lcTime)){
    $('#tc9').css('background','cornflowerblue');

    }else if (moment().hour(09).isSame(lcTime,'hour')){
        $('#tc9').css('background','yellow');
    };

if (moment().hour(10).isBefore(lcTime)){
     $('#tc10').css('background','cornflowerblue');

    } else if (moment().hour(10).isSame(lcTime,'hour')){
        $('#tc10').css('background','yellow');
    };

 if (moment().hour(11).isBefore(lcTime)){
    $('#tc11').css('background','cornflowerblue');

    } else if (moment().hour(11).isSame(lcTime,'hour')){
        $('#tc11').css('background','yellow');
    };

if (moment().hour(12).isBefore(lcTime)){
    $('#tc12').css('background','cornflowerblue');

    } else if (moment().hour(12).isSame(lcTime,'hour')){
    $('#tc12').css('background','yellow');
    };
      

if (moment().hour(13).isBefore(lcTime)){
    $('#tc13').css('background','cornflowerblue');
     } else if (moment().hour(13).isSame(lcTime,'hour')){
     $('#tc10').css('background','yellow');
    };
  
if (moment().hour(14).isBefore(lcTime)){
       $('#tc14').css('background','cornflowerblue');

    } else if (moment().hour(14).isSame(lcTime,'hour')){
        $('#tc10').css('background','yellow');
};

if (moment().hour(15).isBefore(lcTime)){
    $('#tc15').css('background','cornflowerblue');

    } else if (moment().hour(15).isSame(lcTime,'hour')){
    $('#tc10').css('background','yellow');
};
                   
if (moment().hour(16).isBefore(lcTime)){
     $('#tc16').css('background','cornflowerblue');
 
    } else if (moment().hour(16).isSame(lcTime,'hour')){
     $('#tc10').css('background','yellow');
};

if (moment().hour(17).isBefore(lcTime)){
     $('#tc17').css('background','cornflowerblue');
     } else if (moment().hour(17).isSame(lcTime,'hour')){
        $('#tc10').css('background','yellow');
   };

 });
//the input gets turned into a var when button is pushed and added to local storage.
function saveInfo9(){
    var hr9 = document.getElementById('tc9').value;
    localStorage.setItem('hour-9',hr9)}

function saveInfo10(){
    var hr10 = document.getElementById('tc10').value;
    localStorage.setItem('hour-10',hr10);}

function saveInfo11(){
    var hr11 = document.getElementById('tc11').value;
    localStorage.setItem('hour-11',hr11);}

function saveInfo12(){
    var hr12 = document.getElementById('tc12').value;
    localStorage.setItem('hour-12',hr12);}

function saveInfo13(){
    var hr13 = document.getElementById('tc13').value;
    localStorage.setItem('hour-13',hr13);}

 function saveInfo14(){   var hr14 = document.getElementById('tc14').value;
    localStorage.setItem('hour-14',hr14);}

function saveInfo15(){
    var hr15 = document.getElementById('tc15').value;
    localStorage.setItem('hour-15',hr15);}
function saveInfo16(){
    var hr16 = document.getElementById('tc16').value;
    localStorage.setItem('hour-16',hr16);}

function saveInfo17(){
    var hr17 = document.getElementById('tc17').value;
    localStorage.setItem('hour-17',hr17);  

};
//turning local storage val into a var to 
var ls9 = localStorage.getItem("hour-9");
var   ls10 = localStorage.getItem("hour-10");
var   ls11 = localStorage.getItem("hour-11");
var   ls12 = localStorage.getItem("hour-12");
var   ls13 = localStorage.getItem("hour-13");
var   ls14 = localStorage.getItem("hour-14");
var   ls15 = localStorage.getItem("hour-15");
var   ls16 = localStorage.getItem("hour-16");
var   ls17 = localStorage.getItem("hour-17");

//Stored input 
$('#tc9').val(ls9);
$('#tc10').val(ls10);
$('#tc11').val(ls11);
$('#tc12').val(ls12);
$('#tc13').val(ls13);
$('#tc14').val(ls14);
$('#tc15').val(ls15);
$('#tc16').val(ls16);
$('#tc17').val(ls17);