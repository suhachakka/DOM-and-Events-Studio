// Write your JavaScript code here.
// Remember to pay attention to page loading!

let start =null;
let spaceShuttleHeight=0;
let pos=0;
let pos_y=0;

function takeOff(){
let confirm =window.confirm("Confirm that the shuttle is ready for takeoff");
    if(confirm){
document.getElementById("shuttleBackground").style.backgroundColor="blue" ;
let p= document.getElementById("flightStatus");
p.innerHTML="Shuttle in flight";
    let h=document.getElementById("spaceShuttleHeight");
    h.innerHTML=10000;
    start = true;
}else{
    console.log("shuttle is not yet landed");
    start =false;
}
}
//}
function land(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    document.getElementById("shuttleBackground").style.backgroundColor="green" ;

    let para=document.getElementById("flightStatus");
    para.innerHTML="The shuttle has landed.";
    let ht=document.getElementById("spaceShuttleHeight");
    ht.innerHTML= 0;
}
// window.addEventListener("load", function() {
//     let abort = document.getElementById("missionAbort");
//     abort.addEventListener("click",function(event){
    function abort(){
    let confirmation = window.confirm("Confirm that you want to abort the mission");
    if(confirmation){
    document.getElementById("flightStatus").innerHTML= "Mission aborted";
    document.getElementById("shuttleBackground").style.backgroundColor="green" ;
    document.getElementById("spaceShuttleHeight").innerHTML=0;
}else{
    console.log("Mission already aborted")
}}
//     });
// });
function up(){
    pos+=10;
    spaceShuttleHeight+=10000;
    document.getElementById("rocket").style.position="absolute"

    document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    document.getElementById("rocket").style.top = pos+"px"

}


function down(){
    spaceShuttleHeight-=10000;
    pos+=10;
    document.getElementById("rocket").style.position="absolute"

    document.getElementById("spaceShuttleHeight").innerHTML=spaceShuttleHeight;
    document.getElementById("rocket").style.bottom = pos+"px"

}
function right(){
    pos+=10; 
    document.getElementById("rocket").style.position="absolute"

   document.getElementById("rocket").style.right = pos+"px"
}
function left(){
    pos+=10;
    document.getElementById("rocket").style.position="absolute"

    document.getElementById("rocket").style.left = pos+"px"

}