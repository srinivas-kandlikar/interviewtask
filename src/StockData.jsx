import { useEffect, useState } from "react";

function StockData() {
    const [name, setName] = useState("5-january-2000")
    const[data, setData] = useState(null);

useEffect(function(){
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${name}`).then((res)=>res.json())
    .then(info =>
        setData(info.data[0])

    )
},[name])

console.log(name)
    function test(e){
setName(e.target.value);
    }
   return(
<>
<input type="text" value={name} onChange={test}/>
{data ? 
<ul>
    <li>{data.open}</li>
    <li>{data.close}</li>
    <li>{data.date}</li>

</ul>:""}




</>
    
   )

}

export default StockData;
