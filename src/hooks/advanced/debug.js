import React,{useState} from 'react';
export default ()=> {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  //render 2次
  return (
    <div>
      <p>早上好 {count} 次</p>
      <p>早上好共 {count1} 次</p>
                            {/* //函数式写法 */}
      <button onClick={() => {
        setCount(x=>x + 1)
        setCount1(x=>x + 2)
        }
        }>
        点击
      </button>
    </div>
  );
}
