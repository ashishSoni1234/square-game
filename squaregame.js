
 let x= document.getElementById("boxes-1");
 let y=document.getElementById("boxes-2");
 let z= document.getElementById("boxes-3");
 let w=document.getElementById("boxes-4");
  x.addEventListener("mouseenter",()=>{
    let r= Math.floor( Math.random()*100);
    x.innerHTML=r;
  })
  x.addEventListener("mouseleave",()=>{
    let r= Math.floor( Math.random()*100);
    x.innerHTML=r;
  })
  y.addEventListener("mouseenter",()=>{
   y.style.backgroundColor="red";
  })
  y.addEventListener("mouseleave",()=>{
    y.style.backgroundColor="green";
  })
  z.addEventListener("mousemove",()=>{
    let a =Math.floor( Math.random()*256);
    let b =Math.floor( Math.random()*256);
    let c =Math.floor( Math.random()*256);
    z.style.backgroundColor=`rgb(${a},${b},${c})`;
  })
  z.addEventListener("mouseleave",()=>{
    z.style.backgroundColor="white";
  })
  w.addEventListener("mouseenter",()=>{
    let a =Math.floor( Math.random()*256);
    let b =Math.floor( Math.random()*256);
    let c =Math.floor( Math.random()*256);
    let l=Math.floor( Math.random()*256);
    let m =Math.floor( Math.random()*256);
    let n =Math.floor( Math.random()*256);
    let p=Math.floor( Math.random()*256);
    let q =Math.floor( Math.random()*256);
    let s=Math.floor( Math.random()*256);
    x.style.backgroundColor=`rgb(${a},${b},${c})`;
    y.style.backgroundColor=`rgb(${l},${m},${n})`;
    z.style.backgroundColor=`rgb(${p},${q},${s})`;
  })
  w.addEventListener("mouseleave",()=>{
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    z.style.backgroundColor="white";
    w.style.backgroundColor="white";
  })

  