import React,{useState,useEffect,useRef,forwardRef,
useImperativeHandle} from 'react';
// useImperativeHandle 在函数式组件中，用于定义暴露给父组件的ref方法。
// useRef: 用于获取元素的原生DOM或者获取自定义组件所暴露出来的ref方法(父组件可以通过ref获取子组件，并调用相对应子组件中的方法)
// React.forwardRef: 将ref父类的ref作为参数传入函数式组件中，本身props只带有children这个参数，这样可以让子类转发父类的ref,当父类把ref挂在到子组件上时，子组件外部通过forwrardRef包裹，可以直接将父组件创建的ref挂在到子组件的某个dom元素上

const Input=(props)=>{
  //创建一个ref
  const ref=useRef();
  //will receive props
  //shouldComponentsupdate
  useEffect(()=>{
    console.log(props.value);
    ref.current.value=props.value;
  },[props.value])//浅比较
  return <input ref={ref}/>
}
// 传入 ref   
const Input2=(props,ref)=>{
  const refInput=useRef();
  //暴露给 父组件ref的方法
  useImperativeHandle(ref,()=>({ 
    //注册focus 函数
    focus1:()=>{
      refInput.current.focus();
    }
  }),[])
  useEffect(()=>{
    refInput.current.value=props.initialValue;
  },[])
  return <input
    onChange={(e)=>props.onChange(e.target.value)}
    ref={refInput}
  />
}
            //父组件传入 ref  
const Minput=forwardRef(Input2);
export default ()=>{
  const [value,setValue]=useState('he')
  const r1=useRef();
  useEffect(()=>{
    console.log('component did mount');
    //失效的时候执行
    // return ()=>{
    //   console.log('component will unmount');
    // } 
  })

  return <div>
    <Input value={value}/>
    <button onClick={()=>setValue(x=>"Hello00")} >click</button>
    <Minput
      ref={r1}
      initialValue={300}
      onChange={(x)=>console.log('1:',x)}
    />
    <button onClick={()=>{
      r1.current.focus1()
      }}>
    focus1
  </button>


  </div>;
}