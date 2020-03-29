import React,{useState,useEffect,useLayoutEffect} from 'react';
export default ()=> {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  //后执行
  useEffect(()=>{
    console.log('effect',new Date().getTime());
    
  })
  //先执行  
  useLayoutEffect(()=>{
    console.log("layoutEffect",new Date().getTime());
    
  })

  //render 2次
  return (
    <div>
      <p>早上好 {count} 次</p>
 
                            {/* //函数式写法 */}
      <button onClick={() => {
        setCount(x=>x + 1)
        }
        }>
        点击
      </button>
    </div>
  );
}
