//local storage-Automatically initialize next day
function resetLocalStorage(){
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  var today = date.getDay();

  //아래부분 고치기
  /*const storeDay = localStorage.getItem("today");
  if((storeDay!=today) && ((60*hh)+mm)>510){
    localStorage.clear();
    localStorage.setItem("today", today);
  }*/

  var nowTime = 60*hh + mm;

  if(nowTime>0 && nowTime<=510){
    today = today-1;
    if(today<0){
      today = today+7;
    }
  }

  const std_day = localStorage.getItem("standardDay");
  if(std_day==null){
    localStorage.setItem("standardDay", today);
  }
  else{
    if(std_day!=today){
      resetCheck();
      localStorage.setItem("standardDay", today);
    }
  }
  //console.log("today: "+today+"\n"+"std_day: "+std_day+"\n");
}

//Press the "reset" button to initialize whether to check or not
function resetCheck(){
  for(var i=0; i<40; i++){
    var test_string = `ch_${i}`;
    const elementAvaliable = localStorage.getItem(test_string);
    if(elementAvaliable!=null){
      localStorage.setItem(test_string, false);
      var target = document.querySelector(`#${test_string}`);
      target.checked = false;
      //console.log("success "+`ch_${i}`);
    }
  }

  const nameAvailable = localStorage.getItem("dangbu_name");
  if(nameAvailable!=null){
    localStorage.removeItem("dangbu_name");
  }

  var name = prompt("당직부사관 이름: ");
  alert(name+"님. 안녕하세요?\n즐거운 당직 되세요! ^^");
  //console.log(name);
  localStorage.setItem("dangbu_name", name);
  loadEmailEx();

  /*for(var i=0; i<40; i++){
    var test_string = `ch_${i}`;
    localStorage.setItem(test_string, false);
    var target = document.querySelector(`#${test_string}`);
    target.checked = false;
    //console.log("success "+`ch_${i}`);
  }*/
}

//Mail example form
function loadEmailEx(){
  const nameAvailable = localStorage.getItem("dangbu_name");
  if(nameAvailable==null){
    alert("Something wrong!");
  }

  //Example_1
  const EmailEx1 = document.querySelector("#mail_example_1");
  EmailEx1.innerText = `\n[Mail Example] Headline\n\nHello!\n\nNice to meet you!\n\nI'm ${nameAvailable}.`;

  //Example_2
  const EmailEx2 = document.querySelector("#mail_example_2");
  EmailEx2.innerText = `\n[Mail Example] Headline\n\nHello!\n\nNice to meet you!\n\nI'm ${nameAvailable}.`;

  //Example_3
  const EmailEx3 = document.querySelector("#mail_example_3");
  EmailEx3.innerText = `\n[Mail Example] Headline\n\nHello!\n\nNice to meet you!\n\nI'm ${nameAvailable}.`;

  //Example_4
  const EmailEx4 = document.querySelector("#mail_example_4");
  EmailEx4.innerText = `\n[Mail Example] Headline\n\nHello!\n\nNice to meet you!\n\nI'm ${nameAvailable}.`;
}

//Get check status from local storage and display
function loadStorage(){
  for(var i=0; i<40; i++){
    var test_string = `ch+${i}`;
    var target = document.querySelector(`#${test_string}`);
    const state = localStorage.getItem(`${test_string}`);
    if(state=="true"){
      target.checked = true;
    }
  }
  loadEmailEx();
}

//Save click status to local storage
function uploadStorage(from){
  //console.log(from);
  const state = localStorage.getItem(from);
  if(state=="true"){
    localStorage.setItem(from, false);
  }
  else{
    localStorage.setItem(from, true);
  }
}

//Button for force day setting
function upload_forced(day){
  localStorage.setItem("forced_day", day);
  checkDate();
}

//Today Button
function upload_today(){
  //const storeDay = localStorage.getItem("today");
  localStorage.removeItem("forced_day");
  checkDate();
}

resetLocalStorage();
loadStorage();
