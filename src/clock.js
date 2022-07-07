const currentClockTitle = document.querySelector("#center_elements #current_clock");
const remainClockTitle = document.querySelector("#center_elements #remain_clock");
const test = document.querySelector("#center_elements #test");

function getClock(){
  //To display the current time
  const date = new Date();
  var now_hours = date.getHours();
  var now_mins = date.getMinutes();
  var now_secs = date.getSeconds();

  const hours = String(now_hours).padStart(2, "0");
  const minutes = String(now_mins).padStart(2, "0");
  const seconds = String(now_secs).padStart(2, "0");
  currentClockTitle.innerText = `현재시각: ${hours}:${minutes}:${seconds}`;

  //Show Time Remaining
  //FYI, getDate(), getDay(), getMilliseconds(), getMonth(), getTime()
  if(now_hours<8 && now_hours>=0){
    now_hours = now_hours + 24;
  }

  if((now_hours==8) && (now_mins<30)){
    now_hours = now_hours + 24;
  }

  var re_hr = 32 - now_hours;
  var re_min = 29 - now_mins;

  if(re_min<0){
    re_hr = re_hr - 1;
    re_min = re_min + 60;
  }
  const re_hours = String(re_hr).padStart(2, "0");
  const re_minutes = String(re_min).padStart(2, "0");

  var re_sec = 60 - date.getSeconds();
  if(re_sec==60){
    re_sec = 0;
  }
  const re_seconds = String(re_sec).padStart(2, "0");

  remainClockTitle.innerText = `남은시간: ${re_hours}:${re_minutes}:${re_seconds}`;
}

getClock();
setInterval(getClock, 1000);
