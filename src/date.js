const all = document.querySelectorAll("#bodybody > ul > li");
const weekend = document.getElementsByClassName("weekend");
const nd_weekend = document.getElementsByClassName("nd_weekend");
const nd_normal = document.getElementsByClassName("nd_normalweek");

function checkDate(){
  const date = new Date();

  //Time correction
  var hh = date.getHours();
  var mm = date.getMinutes();
  var day = date.getDay();
  localStorage.setItem("today", day);

  const forced_day = localStorage.getItem("forced_day");
  if(forced_day!=null){
    day = forced_day;
  }
  else{
    var nowTime = 60*hh + mm;

    if(nowTime>0 && nowTime<=510){
      day = day-1;
      if(day<0){
        day = day+7;
      }
    }
    //console.log(day);
    //localStorage.setItem("today", day);
  }

  controlElements(day);
}

function controlElements(day){
  //Element initialization
  for(var i=0; i<all.length; i++){
    if(all[i].classList.contains("hide")){
      all[i].classList.remove("hide");
    }
  }
  //Saturday's corresponding element - 'hide' is default
  const saturday = document.querySelector("#bodybody > ul > li.saturday");
  saturday.classList.add("hide");

  //=========Divide the Day of the Week=========
  //Mon-Thur
  if(day>0 && day<5){
    //Hide 'Weekend' elements
    for(var i=0; i<weekend.length; i++){
      weekend[i].classList.add("hide");
    }

    //Hide 'Next day Weekend' elements
    for(var i=0; i<nd_weekend.length; i++){
      nd_weekend[i].classList.add("hide");
    }
  }

  //Fri
  else if(day==5){
    //Hide 'Weekend' elements
    for(var i=0; i<weekend.length; i++){
      weekend[i].classList.add("hide");
    }

    //Show 'Friday' elements
    const friday = document. querySelector("#bodybody > ul > li.friday");
    friday.classList.remove("hide");

    //Hide 'Next day Normal week' elements
    for(var i=0; i<nd_normal.length; i++){
      nd_normal[i].classList.add("hide");
    }
  }

  //Sat
  else if(day==6){
    //Show 'Saturday' elements
    saturday.classList.remove("hide");

    //Hide 'Next day Normal week' elements
    for(var i=0; i<nd_normal.length; i++){
      nd_normal[i].classList.add("hide");
    }
  }

  //Sun
  else if(day==0){
    //Hide 'Next day Weekend' elements
    for(var i=0; i<nd_weekend.length; i++){
      nd_weekend[i].classList.add("hide");
    }
  }
}

checkDate();
