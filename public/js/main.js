
'use strict';

document.addEventListener("DOMContentLoaded", ()=>{
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let arr=[];


for (let i=0; i<20; i++)
{    
    let ctxObject={};
    ctxObject.ctxA=ctx;
    ctxObject.cx=Math.round(Math.random()*340+30);
    ctxObject.cy=Math.round(Math.random()*340+30);
    ctxObject.radius=Math.round(Math.random()*20+10);
    let gipotenuza=0;
    
    for (let a=0; a<i; a++){
   
        let x=Math.pow(Math.abs(ctxObject.cx-arr[a].cx),2);
        let y=Math.pow(Math.abs(arr[a].cy-ctxObject.cy),2);
        let r=ctxObject.radius+arr[a].radius;        
        gipotenuza=Math.sqrt(x+y);        
        if(gipotenuza>r)
        {                  
        }
        else {                    
            
            ctxObject.cx=Math.random()*340+30;
            ctxObject.cy=Math.random()*340+30;
            ctxObject.radius=Math.random()*20+10;
            a=-1; /*если вновь сгенерированный кружочек не прошел проверку, мы его генерируем снова,
             и начинаем проверку с остальными кружечками начиная с начала массива(-1)!!! важно!!!*/                    
        }
} 
                ctxObject.gipotenuza=gipotenuza;
                ctxObject.index=i;
                ctxObject.connect=0;          
                ctxObject.ctxA.beginPath(); 
                ctxObject.ctxA.arc(ctxObject.cx, ctxObject.cy, ctxObject.radius, 0, 2 * Math.PI); /*параметры кружечка (начало по х, начало по у, радиус кружечка, больше 1 это будет обрезанный кружочек,...)*/
                ctxObject.ctxA.fillStyle="rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
                ctxObject.ctxA.fill();   /*эта функция добавляет цвета в кружечки*/ 

arr[i]=ctxObject;       
}

let mass=arr.slice();

    let first=-1;
    let second=-1;
    let third=-1;
    function showLine(mass,mass1,mass2,mass3){
    if(mass.connect==0){  
       mass.ctxA.beginPath();
       mass.ctxA.moveTo(mass.cx, mass.cy);
       mass.ctxA.lineTo(mass3.cx, mass3.cy);
       mass.ctxA.stroke(); 
      ++mass.connect;
   }

    if (mass.connect==1){
       mass.ctxA.beginPath();
       mass.ctxA.moveTo(mass.cx, mass.cy);
       mass.ctxA.lineTo(mass2.cx, mass2.cy);
       mass.ctxA.stroke();
       ++mass.connect;
   }
    if (mass.connect==2){
       mass.ctxA.beginPath();
       mass.ctxA.moveTo(mass.cx, mass.cy);
       mass.ctxA.lineTo(mass1.cx, mass1.cy);
       mass.ctxA.stroke(); 
       ++mass.connect;       
      } 
      if(mass.connect==3){
        console.log("Every path is accupant");
      }
   
 }
   function gipotenuzaSort(mass,index){
    for (let i=0; i<mass.length; i++)
    {
       mass[i].gipotenuza = Math.sqrt(Math.pow(Math.abs(mass[index].cx-mass[i].cx),2)+Math.pow(Math.abs(mass[i].cy-mass[index].cy),2));
    }    
          

       for (let i=0; i<mass.length; i++)
    {
        for (let j=i; j<mass.length; j++)
        {
           if(mass[i].gipotenuza>mass[j].gipotenuza)
           {
            let tmp=mass[j];
            mass[j]=mass[i];
            mass[i]=tmp;
           }
        }
    }
        showLine(mass[0],mass[1],mass[2],mass[3]);
        
}
    console.log(mass.length);
    for (let i=0; i<20; i++){
      gipotenuzaSort(mass,i);
      mass[0].cx=0;
        mass[0].cy=0; 
     }
      

});