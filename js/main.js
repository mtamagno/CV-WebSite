
var audio = new Audio('typing.mp3');

function typingEffect (target, message, index, interval) {

  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {typingEffect(target, message, index, interval); }, interval);
  }
 else {
   audio.pause();
 }
}


function bubble(i,target) {
  var text = ["Welcome.",
              "This is my Website",
              "I hope u apreciate it",
              "For more information CLICK me"];
  var interval = 100;
  var waitTime = 1000;
  if(i<text.length){
    audio.load()
    audio.play();
    $(target).empty();
    var wordTime = (interval * text[i].length) + waitTime;
    typingEffect(target, text[i], 0, interval);
    i++;
    setTimeout(function () {bubble(i,target); },wordTime);
    }
}



function start(){
  var i = 0;
  bubble(i,"#bubble");
  info();

}

function info(){
var info = {
  "name" : "Marco",
  "surname" : "Tamagno",
  "age" : "24",
  "gender" : "Male",
  "occupation" : "Student in Urbino University"
}
$("#info").append("<center>"+info.name+" "+info.surname+"<br>"+info.age+"<br>"+info.gender+"<br>"+ info.occupation+"</center>");


}


function textArray(){

  var i = 0;
  bubble(i,"#bubble");
}


function show(id) {
  pos=175;

  if( $('#info').css('display') =="none"){
      $("#bubble").animate({
        left: -pos
      });
    }

else{
  $('#curriculumVitae').css('display',"none");
  $("#bubble").animate({
    left: 0
  });
}

  $('#info').toggle( [500] );
  $('#arrowCV').toggle( [500] );

}


function cv(id) {
  $('#curriculumVitae').toggle( [1500] );


}
