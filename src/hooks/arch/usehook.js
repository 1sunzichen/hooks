import React,{useState,useEffect} from 'react';
import Mock from 'mockjs';
// const useUser=()=>{
//   const [user,setUsers]=useState(null);
//   useEffect(()=>{
//     setTimeout(() => {
//       setUsers(['小张','小明'])
//     }, 1000);
//   },[])
//   return user;
// }
//迁移hoc 互相套用 自定义 hooks  




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

const useRequest=()=>{
  const [data,setData]=useState(null);
  useEffect(()=>{
    request().then(data=>{
      setData(data);
      console.log(data,"data");
      
    })
  },[])

  function reload(){
    setData(null);
    request().then(data=>{
      setData(data);
    })
  }
  return [data,reload]
}
export default ()=> {

  const [user,reload]=useRequest()
  console.log(user,"user");
  
  if(user===null){
    return<div>loading...</div>
  }
  return <ul>
    {user.map((item,i)=>{
      return <li key={i}>{item}</li>
    })}
    <button onClick={reload}>reload</button>
  </ul>
  // return (<div>123</div>)
}