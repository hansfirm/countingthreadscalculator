var $ = jQuery.noConflict();

var horas = new Date().getHours();
if (horas >= 0 && horas < 12)
    {var relativeTime = "morning";}
else if (horas >= 12 && horas < 18)
    {var relativeTime = "afternoon";}
else 
    {var relativeTime = "evening";}
    document.getElementById("tiempo").innerHTML = relativeTime;

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
var online = 0;
var industryUnitsSold = 121500400400;
var industryAnnualLbs = 6567562980000;
var sell = 0;
var dry = 0;
var brandRatio = 1;
var carbon = 0
var userInitEmits = 0;
var userFinalEmits = 0;

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

    document.getElementById("electricity").innerHTML = totalElectricity;
    document.getElementById("hospitalHours").innerHTML = Math.round(hospitalHours);


    waterWasher = 52*wash*40;
    waterGrow = (713.2645*freq);
    water = Math.round(waterWasher+waterGrow);
    document.getElementById("water").innerHTML = water;


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
    var yearlyCost = cost - sellReimbursement + washCost + dryCost;
    var workers = freq*4;
    var underpaidWorkers = workers*0.93;
    var smallBiz = freq/1.5;
    var used = 1215450000;
    var killed = 7240267000;
    var totalAn = 121500000000;
    var animalsUsed = (freq*used)/totalAn;
    var animalsKilled = (freq*killed)/totalAn;
    var animalsHurt = Math.round(animalsUsed) + Math.round(animalsKilled) +1;
    document.getElementById("yearlyCost").innerHTML = Math.round(yearlyCost);
    document.getElementById("workers").innerHTML = workers;
    document.getElementById("underpaidWorkers").innerHTML = Math.round(underpaidWorkers);
    document.getElementById("smallBiz").innerHTML = Math.round(smallBiz);
    document.getElementById("animalsHurt").innerHTML = animalsHurt;


    if (animalsHurt > 1) 
      {var animalVerbage = "animals were";}
    else
      {var animalVerbage = "animal was";}
    document.getElementById("animalVerbage").innerHTML = animalVerbage; 

    userInitEmits = (freq*industryAnnualLbs)/industryUnitsSold;
    onlinePercent = online*0.01;
    emitsReimbursement = userInitEmits*0.6*(onlinePercent);
    userFinalEmits = userInitEmits - emitsReimbursement;
    roadTrips = userFinalEmits/377;
    document.getElementById("carbon").innerHTML = Math.round(userFinalEmits);
    document.getElementById("roadTrips").innerHTML = Math.round(roadTrips);

    showers = Math.round(water/17);
    document.getElementById("showers").innerHTML = showers;

}

