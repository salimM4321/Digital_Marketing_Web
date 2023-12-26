var  timer= new Date("december 28, 2023 10:00:00").getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var diff = timer - now ;


var days = Math.floor(diff /(1000*60*60*24));
console.log(days);
var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
console.log(hours);
var minutes =Math.floor((diff % (1000 *60*60)) /(1000*60));
console.log(minutes);
var seconds =Math.floor((diff %(1000 *60)) / 1000);
console.log(seconds);


document.getElementById("tm-btn1").innerHTML = days 
document.getElementById("tm-btn2").innerHTML = hours 
document.getElementById("tm-btn3").innerHTML = minutes 
document.getElementById("tm-btn4").innerHTML = seconds
},1000);
















const accordion = document.getElementsByClassName('faq-box');
for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })

}