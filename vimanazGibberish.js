var questions = {
    1 : {
        question: "All tie, dude!",
        answer: "altitude",
        hint: "When you reach higher levels of it, you have difficulty in breathing."
    },
    2: {
        question:"Missed isle",
        answer: "Missile",
        hint: "A Deadly weapon projected at a target"
    },
    3: {
        question:"Rack it",
        answer: "rocket",
        hint: "A jet engine containing its own propellant"
    },
    4: {
        question:"Pro pulse shunt",
        answer: "Propulsion",
        hint: "The act of setting in motion"
    },
    5: {
        question:"Tart Bull Lens",
        answer: "Turbulence",
        hint: "Instability in the Atmosphere."
    },
    6: {
        question:"Pie Load",
        answer: "Pilot",
        hint: "a person licensed to operate an aircraft"
    },
    7: {
        question:"Navy gate shunt",
        answer: "Navigation",
        hint: " Guidance of ships/airplanes from place to place."
    },
    8: {
        question:"Tick of",
        answer: "Take-Off",
        hint: "head for somewhere else"
    },
    9: {
        question:"Eer odd anime icks",
        answer: "Aerodynamics",
        hint: "drag reduction"
    },
    10: {
        question:"Yee Haw",
        answer: "Yaw",
        hint: "oscillation about a vertical axis"
    },
    11: {
        question:"fich",
        answer: "pitch",
        hint: "A motion on an aircraft's lateral axis"
    },
    12: {
        question:"Hair Yeal",
        answer: "Aerial",
        hint: "operating in the air."
    },
    13: {
        question:"Raw Oil",
        answer: "Roll",
        hint: "rotation about an axis"
    },
    14: {
        question:"Throw Tile",
        answer: "Throttle",
        hint: "device controlling flow of fuel"
    },
    15: {
        question:"eer bois",
        answer: "airbus",
        hint: "commerical aircraft"
    },
    16: {
        question:"Fusy Laj",
        answer: "FuseLage",
        hint: "the main body of an aircraft."
    },
    17: {
        question:"C Latte",
        answer: "Slat",
        hint: "You don't need hint for this one"
    },
    18: {
        question:"Fill App",
        answer: "Flap",
        hint: "movement of wings"
    },
    19: {
        question:"Elle Ruin",
        answer: "Aileron",
        hint: " flight control surface"
    },
    20: {
        question:"Stay label rise",
        answer: "Stabilizer",
        hint: "aerodynamic surface"
    }
}
var i=0;
var ans = document.getElementById("answer");
let points =0;
genQues();
genTimer();
function genQues(){
    index = Math.floor(Math.random()*Object.keys(questions).length + 1)
    document.getElementById("question").innerHTML = JSON.stringify(questions[index].question);
    //console.log(points);
}
function genTimer(){
    var timeleft = 45;
    var Timer = setInterval(function(){
      if(timeleft < 0){
        console.log(points);
        //location.href = "#";
        displayScore(points);
        $('#endGame').modal('show');
        clearInterval(Timer);
        //genQues();
      } else {
        document.getElementById("countdown").innerHTML = timeleft;
      }
      timeleft--;
    }, 1000);
}
function displayScore(points){
    var point = "\xa0"+ points.toString(10)  + "\xa0";
    document.getElementById("points").innerHTML = point;
    $('[id="submit"]').prop('onclick',null).off('click');
    $('[id="hint"]').prop('onclick',null).off('click');
    $('[id="ans"]').attr('disabled',"disabled");
    document.getElementById("question").innerHTML = "You've already attempted it.";
}
function printHint(){
    document.getElementById("hintText").innerHTML = JSON.stringify(questions[index].hint);
}
function nextQues(){
    let ans = document.getElementById("ans").value;
    //console.log(questions[index].question.toLowerCase())
    //console.log(ans.toLowerCase());
    document.getElementById("ans").value = "";
    document.getElementById("hintText").innerHTML = "";
    if(ans.toLowerCase() == questions[index].answer.toLowerCase()){
        points++;
    }
    genQues();
}