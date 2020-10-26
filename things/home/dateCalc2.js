var d1 = new Date('2021/07/22 00:00:00');
var d2 = new Date();

var diffTime = d1.getTime() - d2.getTime();
var diffSecond = Math.floor(diffTime / (1000));
var diffMonth = Math.round(Math.floor(diffSecond / (2635200)));
var diffDay = Math.round(Math.floor(diffSecond / (86400)));

if (diffMonth > 1){
  document.write(diffMonth + " months left...");
}
else if (diffSecond < 0){
  document.write("Today")
}
else{
  document.write(diffDay + " days left...");
}


/*
1day ... 86400 sec
1month(30.5days) ... 2635200 sec
*/