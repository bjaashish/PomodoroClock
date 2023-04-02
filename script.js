var start=document.getElementById('start');
var reset=document.getElementById('reset');
var min=document.getElementById('min');
var sec=document.getElementById('sec');

var sp=document.getElementById('sp');
var ss=document.getElementById('ss');
var bp=document.getElementById('bp');
var bs=document.getElementById('bs');

var smin=document.getElementById('smin');
var bmin=document.getElementById('bmin');

var border=document.getElementsByClassName('border');

var heading=document.getElementById('h3');

var btndisable=true;


var clockId=0;

var isRunning=false;

bp.addEventListener("click",function(){

    if(btndisable)
    {
        bmin.innerText=parseInt(bmin.innerText)+1;
        min.innerText=bmin.innerText;
        heading.innerText="Break Time";
        
    }
    else{
        return;
    }

});

bs.addEventListener("click",function(){
    
    
    if(btndisable){

        
        if(bmin.innerText==0){
            // alert("Time can't be negative");
            return;
        }
        bmin.innerText=parseInt(bmin.innerText)-1;
        min.innerText=bmin.innerText;
        heading.innerText="Break Time";

    }
    else{

        return;

    }
    


});

sp.addEventListener("click",function(){

    if(btndisable){

        smin.innerText=parseInt(smin.innerText)+1;
        min.innerText=smin.innerText;
        heading.innerText="Session Time";

    }
    else{
        return;
    }
    
});

ss.addEventListener("click",function(){
    
    if(btndisable){

        if(smin.innerText==0){
            // alert("Time can't be negative");
            return;
        }
        smin.innerText=parseInt(smin.innerText)-1;
        min.innerText=smin.innerText;
        heading.innerText="Session Time";

    }
    else{
        return;
    }


});



start.addEventListener("click",function(){

    btndisable=false;
    isRunning=!isRunning;
    updateButton();

    if(isRunning){

        clockId= setInterval(function(){
            updateTime();
        
        },1000);

    }
    else{

        clearInterval(clockId);

    }




});
reset.addEventListener("click",function(){

    btndisable=true;

    heading.innerText="Session Time";

    isRunning=false;
    updateButton();

    min.innerText=20;
    sec.innerText=59;
    
    clearInterval(clockId);
    
});

function updateTime(){

    if(min.innerText==0 && sec.innerText==0){

        console.log("ex");
        clearInterval(clockId);
        return;
    }

    if(sec.innerText==0){

        min.innerText-=1;
        sec.innerText=59;
    }

    sec.innerText--;
    
}

function stopInterval(){

    clearInterval();

}

function updateButton(){

    if(isRunning){

        start.innerText="Pause";
        return;

    }
    start.innerText="Start";
}
