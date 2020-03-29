import React,{useState,useEffect} from 'react';
const Input=(props)=>{

  //will receive props
  //shouldComponentsupdate
  useEffect(()=>{
    console.log(props.value);

  },[props.value])//浅比较
  return <input/>
}
export default (props)=>{
  const [value,setValue]=useState('he')
  useEffect(()=>{
    console.log('component did mount');
    //失效的时候执行
    return ()=>{
      console.log('component will unmount');
    } 
  })


  return <div>
    <Input value={value}/>
    <button onClick={()=>setValue(x=>"Hello00")} >click</button>
  </div>;
}