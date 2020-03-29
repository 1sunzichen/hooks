import React,{useEffect,useState} from 'react';
import Mock from 'mockjs';
function request(){
  return new Promise((resolve)=>{
  
      setTimeout(() => {
          resolve(
             Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'name': '@cname'
            }]
        }).list.map(x=>x.name)
          )
      }, 2000);
    
  })
}

function useRequest() {
  const [init,setInit]=useState(null);
  useEffect(()=>{
   request().then(data=>{
     setInit(data)
   })
  })
  function reload() {
    setInit(null);
     request().then(data=>{
     setInit(data)
     })

  }

  return [init,reload]
}

export default ()=>{
  const [init,reload]=useRequest();
   if(init===null){
    return<div>loading...</div>
  }
  return(
    <div>
    <ul>
    {init.map((item,i)=>{
      return <li key={i}>{item}</li>
    })}
    </ul>
    <button onClick={reload}>reload</button>
    </div>
  )
}