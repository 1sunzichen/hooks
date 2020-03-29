import React,{useState,useEffect} from 'react';
const Greeting =()=>{
  return <p>Hello</p>
}

export default ()=>{
  const [count,setCount]=useState(0);
  const [display,setDisplay]=useState(false);

  //错误  递归 死循环：count 大于1 render  然后 count >1 ... 
  // if(count>1){
  //   setDisplay(x=>true)
  // }


// hook 内部：按顺序 判断 执行
// 未捕获的不变违规：渲染的hook比上一次渲染时更多
  // if(count>1){
  //   useEffect(()=>{
  //     setDisplay(x=>true)
  //   })
  // }
  // else{
  //   useEffect(()=>{
  //     setDisplay(x=>false)
  //   })
  // }

  // 这次就可以捕获到
  //  useEffect(()=>{
  //    //判断 是否大于1 
  //     if(count>1){
  //        setDisplay(x=>true)
  //     }else{

  //      setDisplay(x=>false)
  //     }
  //   },[count>2]); //默认进来执行一次，判断 变量 满足 依赖 条件
  // 这次就可以捕获到
   useEffect(()=>{
     //判断 是否大于1 
      if(count>1){
         setDisplay(x=>true)
      }
    },[count>1]); //effect默认进来执行一次， 判断 变量 满足 依赖 条件
  return <div>
  
    <p>{count}</p>
    <button onClick={() =>setCount(x=>x+1)}>click</button>
    {display&&<Greeting/>}
  </div>
}