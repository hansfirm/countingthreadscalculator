var opacity = 0;
var intervalID = 0;
var opacity2 = 0;
var intervalID2 = 0;
var opacity3 = 0;
var intervalID3 = 0;
var opacity4 = 0;
var intervalID4 = 0;
var opacity5 = 0;
var intervalID5 = 0;
var opacity6 = 0;
var intervalID6 = 0;



function addCommas(nStr)
{
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


var youngNudy=0;
var thugger = 0;

///TOOLY
var questionNumber = 1
var wash = 0
var dry = 0
var freq = 0
var donate = 0
var cheap = 0
var expensive = 0

var slider = document.getElementById("onlineRange");
var output = document.getElementById("online");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
  
}

var slider2 = document.getElementById("donateSellRange");
var output2 = document.getElementById("donateSell");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}


var freq = 0;
var regular = 1
var expensive = 1
var ff = 1
var online = 'turtle';
var industryUnitsSold = 121500400400;
var industryAnnualLbs = 6567562980000;
var sell = 0;
var dry = 0;
var brandRatio = 1;
var carbon = 0
var userInitEmits = 0;
var userFinalEmits = 0;
var totalElectricity = 0;
var hospitalHours = 0;

$("#freq").on("input",function(){
    freq = Number($(this).val());
    console.log(freq);
    console.log(typeof freq);
    outputEverything();
});



$("#brands").on("input",function(){
var regular = 1
var expensive = 1
var ff = 1
var wash = 0;

if (document.getElementById("vehicle1").checked == true)
  {var regular = regular+1;}
else
  {var regular = regular;}
if (document.getElementById("vehicle2").checked == true)
  {var expensive = expensive+1;}
else
  {var expensive = expensive;}
if (document.getElementById("vehicle3").checked == true)
  {var ff = ff+1;}
else
  {var ff = ff;}
if (document.getElementById("vehicle4").checked == true)
  {var regular = regular+1;}
else
  {var regular = regular;}
if (document.getElementById("vehicle5").checked == true)
  {var ff = ff+1;}
else
  {var ff = ff;}
if (document.getElementById("vehicle6").checked == true)
  {var ff = ff+1;}
else
  {var ff = ff;}
if (document.getElementById("vehicle7").checked == true)
  {var regular = regular+1;}
else
  {var regular = regular;}
if (document.getElementById("vehicle8").checked == true)
  {var ff = ff+1;}
else
  {var ff = ff;}
if (document.getElementById("vehicle9").checked == true)
  {var regular = regular+1;}
else
  {var regular = regular;}
if (document.getElementById("vehicle10").checked == true)
  {var regular = regular+1;}
else
  {var regular = regular;}
if (document.getElementById("vehicle11").checked == true)
  {var expensive = expensive+1;}
else
  {var expensive = expensive;}
if (document.getElementById("vehicle12").checked == true)
  {var ff = ff+1;}
else
  {var ff = ff;}
if (document.getElementById("vehicle13").checked == true)
  {var expensive = expensive+1;}
else
  {var regular = regular;}
if (document.getElementById("vehicle14").checked == true)
  {var ff = ff+1;}
else
  {var ff = ff;}
if (document.getElementById("vehicle15").checked == true)
  {var regular = regular+1;}
else
  {var regular = regular;}
console.log(ff);
console.log(expensive);
console.log(regular);

brandRatio = expensive/(regular+(1.5*ff));
outputEverything();

});



$("#onlineRange").on("input",function() {
    online = Number($(this).val());
    console.log(online);
    console.log(typeof online);
    outputEverything();
});




$("#donateSellRange").on("input",function(){
    sell = Number($(this).val());
    console.log(sell);
    console.log(typeof sell);
    outputEverything();

});




$("#wash").on("input",function(){
    wash = Number($(this).val());
    console.log(wash);
    console.log(typeof wash);
    outputEverything();
});



$("#dry").on("input",function(){
    dry = Number($(this).val());
    console.log(dry);
    console.log(typeof dry);
    outputEverything();
  });

function outputEverything() {
    washCost = wash*52*0.25*0.1229
    dryCost = dry*52*2.25*0.1229
    washElectricity = (wash*52)*250
    dryElectricity = (dry*52)*2250
    totalElectricity = washElectricity+dryElectricity; 
    hospitalHours = (totalElectricity/1000)/31;
    console.log(washCost);
    console.log(dryCost);
    console.log(washElectricity);
    console.log(dryElectricity);

    document.getElementById('electricity').innerHTML = addCommas(totalElectricity);
    document.getElementById("hospitalHours").innerHTML = addCommas(Math.round(hospitalHours));


    waterWasher = 52*wash*40;
    waterGrow = (713.2645*freq);
    water = Math.round(waterWasher+waterGrow);
    document.getElementById('water').innerHTML = addCommas(water);



    acres = freq/536;
    if (acres < 0.01){
    acresRound = acres.toFixed(3);
    document.getElementById("acres").innerHTML = acresRound;
    }
    else{
    acresRound = acres.toFixed(2);
    document.getElementById("acres").innerHTML = acresRound;
    }


    waterPollution = (70000000*2000*freq)/industryUnitsSold;
    document.getElementById("dyes").innerHTML = Math.round(waterPollution);

    
    
    pestidogs = (5600000000*freq)/industryUnitsSold;
    if (Math.round(pestidogs) == 1 ){
      pestidogsVerbage = "pound";
      document.getElementById("pestidogs").innerHTML = Math.round(pestidogs);
      document.getElementById("pestidogsVerbage").innerHTML = pestidogsVerbage;
    }
    else if (Math.round(pestidogs) < 1){
      pestidogsVerbage = "pounds";
      document.getElementById("pestidogs").innerHTML = pestidogs.toFixed(2);
      document.getElementById("pestidogsVerbage").innerHTML = pestidogsVerbage;
    }
    else{
      pestidogsVerbage = "pounds";
      document.getElementById("pestidogs").innerHTML = Math.round(pestidogs);
      document.getElementById("pestidogsVerbage").innerHTML = pestidogsVerbage;
    }



    var cost = (freq*25)*brandRatio;
    var sellReimbursement = (sell*.01)*(cost)*(0.09);
    //var yearlyCost = cost - sellReimbursement + washCost + dryCost;
    var workers = freq*4;
    var underpaidWorkers = workers*0.93;
    var smallBiz = freq/1.5;
    var used = 1215450000;
    var killed = 7240267000;
    var totalAn = 121500000000;
    var animalsUsed = (freq*used)/totalAn;
    var animalsKilled = (freq*killed)/totalAn;
    var animalsHurt = Math.round(animalsUsed) + Math.round(animalsKilled) +1;
    //document.getElementById("yearlyCost").innerHTML = addCommas(Math.round(yearlyCost));
    document.getElementById("workers").innerHTML = workers;
    document.getElementById("underpaidWorkers").innerHTML = addCommas(Math.round(underpaidWorkers));
    document.getElementById("smallBiz").innerHTML = addCommas(Math.round(smallBiz));
    document.getElementById("animalsHurt").innerHTML = animalsHurt;


    if (animalsHurt > 1) 
      {var animalVerbage = "animals were";}
    else
      {var animalVerbage = "animal was";}
    document.getElementById("animalVerbage").innerHTML = animalVerbage; 

    userInitEmits = (freq*industryAnnualLbs)/industryUnitsSold;
    if (online>0){
      onlinePercent = online*0.01;
    }
    else{
      onlinePercent = 0.009;
    }
    emitsReimbursement = userInitEmits*0.6*(onlinePercent);
    userFinalEmits = userInitEmits - emitsReimbursement;
    roadTrips = userFinalEmits/377;
    document.getElementById("carbon").innerHTML = addCommas(Math.round(userFinalEmits));

    if (Math.round(roadTrips)==1){
      document.getElementById("roadTrips").innerHTML = Math.round(roadTrips);
      document.getElementById("roadTripsVerbage").innerHTML = "road trip";
    }
    else if (Math.round(roadTrips)==0){
      document.getElementById("roadTrips").innerHTML = roadTrips.toFixed(2);
      document.getElementById("roadTripsVerbage").innerHTML = "road trips";
    }
    else{
      document.getElementById("roadTrips").innerHTML = Math.round(roadTrips);
      document.getElementById("roadTripsVerbage").innerHTML = "road trips";
    }    

    showers = Math.round(water/17);
    document.getElementById("showers").innerHTML = addCommas(showers);




    if (Math.round(smallBiz) == 1 ){
      articleVerbage = "article";
      document.getElementById("articleVerbage").innerHTML = articleVerbage;
    }
    else{
      articleVerbage = "articles";
      document.getElementById("articleVerbage").innerHTML = articleVerbage;
    }




}







$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);
  });

  $(".next2").click(function(){


    
    if (freq==0 || freq==8008) {
    
      alert("You didn't answer all the questions");
    }
    
    else if (wash == 0 || wash == 8008){
      
        alert("You didn't answer all the questions");
    }
    
      else if (dry == 0 || dry == 8008){
      
        alert("You didn't answer all the questions");
      }
    else {

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);

myFunction();

function myFunction() {

  console.log(textothy)

  if (qt < textothy.length) {
    document.getElementById("demo1").innerHTML += textothy.charAt(qt);
    qt++;
    setTimeout(myFunction, speed1);
  }
  myFunction2();
}



function myFunction2() {
  
  console.log(qt);

  if (qt >= 12){

  if (dog < textothy2.length) {
    document.getElementById("demo2").innerHTML += textothy2.charAt(dog);
    dog++;
    setTimeout(myFunction2, speed2);
  }
}

myFunction3();
}


function myFunction3(){

  console.log(dog);

  if (dog >=33){

  if (cat < textothy3.length) {
    document.getElementById("demo3").innerHTML += textothy3.charAt(cat);
    cat++;
    setTimeout(myFunction3, speed3);
  }
}

myFunction4();


}

function myFunction4(){

  console.log(cat);

 if (cat >=34){

  if (otter < textothy4.length) {
    document.getElementById("demo4").innerHTML += textothy4.charAt(otter);
    otter++;
    setTimeout(myFunction4, speed4);
  }
}

myFunction5();


}


function myFunction5(){
  sleep(7000).then(() => {
    myFunction6();
  });
}

function myFunction6(){

  console.log(otter);


  if (otter >=24){

  if (liger < textothy5.length) {
    document.getElementById("demo5").innerHTML += textothy5.charAt(liger);
    liger++;
    setTimeout(myFunction6, speed5);
  }
}

}

    }

});

$("#next1").click(function(){

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);


  
  thuggerTxt='Answer the questions:';
  typeWriterQuestions();

  function typeWriterQuestions() {
    console.log(thugger);
    if (thugger < thuggerTxt.length) {
      document.getElementById("turnMeUp").innerHTML += thuggerTxt.charAt(thugger);
      thugger++;
      setTimeout(typeWriterQuestions, speed6);
    }
    turnMeUp();
  }
function turnMeUp(){
  if (thugger <= 20){
      console.log('Not yet.')
  }
  else{
    sleep(800).then(() => {
    fadeIn2();
    });
    
  }
};

function fadeIn2() {
  setInterval(show2, 200);
}

function show2() {
  var body4 = document.getElementById("prev2");
  opacity4 = Number(window.getComputedStyle(body4)
                   .getPropertyValue("opacity"));
  if (opacity4 < 1) {
      opacity4 = opacity4 + 0.1;
      body4.style.opacity = opacity4
  } else {
      clearInterval(intervalID4);
  }

  var body5 = document.getElementById("next2");
  opacity2 = Number(window.getComputedStyle(body5)
                   .getPropertyValue("opacity"));
  if (opacity5 < 1) {
      opacity5 = opacity5 + 0.1;
      body5.style.opacity = opacity5
  } else {
      clearInterval(intervalID5);
  }

  var body6 = document.getElementById("questionsAppear");
  opacity6 = Number(window.getComputedStyle(body6)
                   .getPropertyValue("opacity"));
  if (opacity6 < 1) {
      opacity6 = opacity6 + 0.1;
      body6.style.opacity = opacity6
  } else {
      clearInterval(intervalID6);
  }



}





  });

$(".next3").click(function(){

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);


  
  nudyTxt='Here\'s what I calculated:';
  typeWriterLast();

  function typeWriterLast() {
    console.log(youngNudy);
    if (youngNudy < nudyTxt.length) {
      document.getElementById("treasure").innerHTML += nudyTxt.charAt(youngNudy);
      youngNudy++;
      setTimeout(typeWriterLast, speed6);
    }
    showMeTheMoney();
  }
function showMeTheMoney(){
  if (youngNudy <= 24){
      console.log('Not yet.')
  }
  else{
    sleep(800).then(() => {
      fadeIn();
    });
    
  }
};


function fadeIn() {
    setInterval(show, 200);
}

function show() {
    var body = document.getElementById("share");
    opacity = Number(window.getComputedStyle(body)
                     .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }

    var body2 = document.getElementById("prev4");
    opacity2 = Number(window.getComputedStyle(body2)
                     .getPropertyValue("opacity"));
    if (opacity2 < 1) {
        opacity2 = opacity2 + 0.1;
        body2.style.opacity = opacity2
    } else {
        clearInterval(intervalID2);
    }

    var body3 = document.getElementById("showMeTheMoney");
    opacity3 = Number(window.getComputedStyle(body3)
                     .getPropertyValue("opacity"));
    if (opacity3 < 1) {
        opacity3 = opacity3 + 0.1;
        body3.style.opacity = opacity3
    } else {
        clearInterval(intervalID3);
    }



}


  });



  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar")
  .css("width",percent+"%")
  }
  
  $(".submit").click(function(){
  return false;
  })

  });




  ///translating tooly!
  var horas = new Date().getHours();
if (horas >= 0 && horas < 12)
    {var relativeTime = "morning";}
else if (horas >= 12 && horas < 18)
    {var relativeTime = "afternoon";}
else 
    {var relativeTime = "evening";}



var i = 0;
var qt =0;
var dog = 0;
var cat = 0;
var otter = 0;
var liger = 0;
var txt = `Good ${relativeTime} – I'm here to help determine your annual fashion footprint! Answer the following questions to see how your clothing affects the environment and economy.`; /* The text */
var textothy = `I'm on it...`;
var textothy2 = 'Finding fashion industry facts...';
var textothy3 = 'Plugging in your fashion habits...';
var textothy4 = 'Crunching the numbers...';
var textothy5 = 'Ready for your results?';
var speed = 30; /* The speed/duration of the effect in milliseconds */
var speed1 = 45;
var speed2 = 90;
var speed3 = 160;
var speed4 = 300;
var speed5 = 400;
var speed6 = 75;



const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
 







