import { useEffect, useState } from "react";

function StockData() {
    const [name, setName] = useState("5-january-2000")
    const[data, setData] = useState(null);
    console.log('ad')
useEffect(function(){
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${name}`).then((res)=>res.json())
    .then(info =>
        setData(info.data[0])

    )
},[name])

function ChangeData(e){
setName(e.target.value)
}
   return(
<>
data fetching change year
<br/>
<input type="text" value ={name} onChange={ChangeData}/>
{data ? 
<ul>
    <li>{data.open}</li>
    <li>{data.close}</li>
    <li>{data.date}</li>

</ul>: "empty" }
<Robot  />

</>
    
   )

}

function Robot(){
    const[position, setPosition]= useState({ left: '0', right:'0', top:'7', bottom:'20'});
   
const[ans,setAns]= useState("");



function changeposition(e){
console.log(e.key)
  if(e.key == "ArrowLeft") {
    setPosition({left: '1', right: '5', top:'7'});
    }
    if(e.key == "ArrowRight"){
        setPosition({left:'5', right:'1', top:'7'});
    }
    if(e.key == "ArrowDown"){
        setPosition({left:'0', right:'0', top:'7.5'});
    }
    if(e.key == "ArrowUp"){
        setPosition({left:'0', right:'0', top:'6.5'});
    }
     
}

function Arrowfunc(e){
if(e.key =="l"){
    setPosition({left: '1', right: '5', top:'7'});
}
if(e.key =="r"){
    setPosition({left:'5', right:'1', top:'7'});
}
if(e.key =="u"){
    setPosition({left:'0', right:'0', top:'6.5'});
}
if(e.key =="d"){
    setPosition({left:'0', right:'0', top:'7.5'});
}
if(e.key =="o"){
    setPosition({ left: '0', right:'0', top:'7', bottom:'20'});
}
}


useEffect(()=>{
    window.addEventListener('keydown', changeposition);

},[])
return(
        <>
        <h1> Robot App</h1>
        <input type="text" placeholder="please enter L R U D" onKeyDown={Arrowfunc} />
        <h3>Press left, right, top, down arrows</h3>

<h1 style={{
          position: 'absolute',
          left: `${position.left}em`,
          right: `${position.right}em`,
          down: `${position.down}em`,
          top: `${position.top}em`,

          }}>🤖</h1>





</>
    )
}
export default StockData;
