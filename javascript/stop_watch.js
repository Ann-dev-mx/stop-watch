//INITIALISING THE time variables
let hours = 0;
let minutes = 0;
let seconds = 0;

//for putting leading zeros
let dh =0;
let dm=0;
let ds=0;

function runtimer(){ //function for runinng the stop watch
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;

        if(minutes  === 60){
            minutes = 0;
            hours++;
        }

    }

    //apply leading zeros while hours or minutes or seconds less than 10
    if(seconds <10){
        ds = "0" + seconds.toString();
    }
    else{
        ds = seconds;
    }
    if(minutes<10){
        dm = "0" + minutes.toString();
    }
    else{
        dm = minutes;
    }
    if(hours <10){
        dh = "0" + hours.toString();
    }
    else{
        dh = hours;
    }

    document.getElementById("timer").innerHTML = dh + ":" + dm + ":" + ds;

}
let flag = "stop";
let val = null;

function startTimer(){
   if (val===null){
              val=window.setInterval(runtimer, 100);
              
               flag = "start";

               document.getElementById("startStop").disabled = false;
                document.getElementById("save").disabled = true;
     }   
        
}


function pauseplay(){
        document.getElementById("save").disabled = true;
        if(flag === "stop"){
              val = window.setInterval(runtimer, 100);
              document.getElementById("startStop").innerHTML = "PAUSE";
              flag = "start";

        }
        else{

        window.clearInterval(val);
        document.getElementById("startStop").innerHTML = "PLAY";
        flag = "stop";

    }
}


function resetTimer(){

    window.clearInterval(val);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "PAUSE";
    document.getElementById("startStop").disabled = true;
    val=null;
    document.getElementById("STimer").disabled = false;
    document.getElementById("save").disabled = true;
}

function stopTimer(){

    window.clearInterval(val);
   document.getElementById("reset").disabled = true;
    document.getElementById("startStop").disabled = true;
    document.getElementById("STimer").disabled = true;
    document.getElementById("save").disabled = false;
    
}
function timeSave(){
    if(typeof(Storage) !== "undefined") {
        localStorage.h = hours;
        localStorage.m = minutes;
        localStorage.s = seconds; 
    
    document.getElementById("result").innerHTML = "Your last calculated time is " + localStorage.h + " hours," + localStorage.m + " minutes " + localStorage.s +" seconds";
    document.getElementById("reset").disabled = false;
  }
}