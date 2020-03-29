import React,{useState,useEffect} from 'react';

export default ()=>{
  const [count,setCount]= useState(0);
  useEffect(()=>{
    console.log('use Effect');
    setTimeout(() => {
      setCount(x=>x+1);
    }, 2000);
    
  },[Math.min(count,4)])//[] 当依赖的变量改变时，变量等于 依赖的变量 useEffect 会再次执行：
  console.log('render');
  
  return <div>
    早上好
    <p>{count}</p>
    次
  </div>
}