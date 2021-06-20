function myClock() {

var saat = document.getElementById('saat');
var dakika = document.getElementById('dakika');
var saniye = document.getElementById('saniye');

var s= new Date().getHours();
var d = new Date().getMinutes();
var ss= new Date().getSeconds();

s =(s<10)? "0"+s:s;
d =(d<10)?"0"+d:d;
ss =(ss<10)?"0"+ss:ss;


saat.innerHTML =s;
dakika.innerHTML=d;
saniye.innerHTML = ss;
}
var interval = setInterval(myClock,1000)

