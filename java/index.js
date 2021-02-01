var select=document.querySelector("#text-box");

function dis(val){
    var text=val;
    select.value+=val;
}

function clr(){
    select.value="";
}
 
function varsqr(){
  var num=select.value;
  if(num){
  select.value=Math.sqrt(num);
}
}

function back(){
    var x=select.value;

    select.value=x.slice(0,-1);
}



function sum(){
    var x=select.value;
if(x){
    select.value=eval(x);

}
}

function varOparator(val){
    var num=select.value;
    if(num){
        select.value+=val;
    }
}