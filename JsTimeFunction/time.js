setInterval(callTime, 1000);
function callTime() {
  const currentDated = new Date();
  console.log(currentDated);
  var cDate = currentDated.getDate();
  var month = currentDated.getMonth();
  const months = ["jan", "feb", "march", "April", "may", "june"];
  var cMonth = months[month];
  var cYear = currentDated.getFullYear();
  document.getElementById("dDate").innerHTML = cDate;
  document.getElementById("dMonth").innerHTML = cMonth;
  document.getElementById("dYear").innerHTML = cYear;
  document.getElementById("dMonth").innerHTML = cMonth;
  // document.getElementById('azarDate').innerHTML = `${'Date: ' + cDate + ' Month: ' + cMonth + ' Year: ' + cYear}`
  var cTime = currentDated.toLocaleTimeString("en-US", { hour12: true });
  console.log(cTime);
  var day = currentDated.getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
  var cDay = days[day];
  console.log(cDay);
  document.getElementById("cdays").innerHTML = cDay;
  var hour = currentDated.getHours();
  console.log(hour);
  if (hour > 6) {
    document.getElementById("dayTimes").innerHTML = "Morning";
  }
  if (hour > 12) {
    document.getElementById("dayTimes").innerHTML = "Afternoon";
  }
  if (hour > 14) {
    document.getElementById("dayTimes").innerHTML = "Evening";
  }
  if (hour > 18) {
    document.getElementById("dayTimes").innerHTML = "Night";
  }
  var amPM;
  console.log(hour);
  if (hour > 12) {
    hour = hour - 12;
    amPM = "Pm";
  } else {
    hour = hour;
    amPM = "Am";
  }
  console.log(hour);
  document.getElementById("cHour").innerHTML = hour;
  document.getElementById("cMinute").innerHTML = currentDated.getMinutes();
  document.getElementById("cSecond").innerHTML = currentDated.getSeconds();
  document.getElementById("amPm").innerHTML = amPM;
}
callTime()
