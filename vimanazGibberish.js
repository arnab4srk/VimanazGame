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
function genQues(){
    genTimer();
    index = Math.floor(Math.random()*Object.keys(questions).length + 1)
    document.getElementById("question").innerHTML = JSON.stringify(questions[index].question);
    console.log(points);
    i++;
    if(i>10 && points < 7){
        window.location.assign("https://www.google.com");
    }
    else if(points == 7){
        window.location.assign("https://www.google.com");
    }
}
function genTimer(){
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
      if(timeleft < 0){
        console.log("Hala Madrid");
        clearInterval(downloadTimer);
        document.getElementById("ans").value = "";
        document.getElementById("hintText").innerHTML = "";
        genQues();
      } else {
        document.getElementById("countdown").innerHTML = timeleft;
      }
      timeleft--;
    }, 1000);
}
function printHint(){
    document.getElementById("hintText").innerHTML = JSON.stringify(questions[index].hint);
}
function nextQues(){
    let ans = document.getElementById("ans").value;
    console.log(questions[index].question.toLowerCase())
    console.log(ans.toLowerCase());
    if(ans.toLowerCase() == questions[index].answer.toLowerCase() && points <=5){
        points++;
        document.getElementById("ans").value = "";
        document.getElementById("hintText").value = "";
        genQues();
    }
    if(points==7){
        window.location.assign("https://google.com");
    }
}