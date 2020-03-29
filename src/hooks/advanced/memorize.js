import React,{useState,useCallback,useMemo} from 'react';
export default ()=> {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  //

  const [count1,setCount1]=useState(1);

  //该回调函数仅在某个依赖项改变时才会更新,当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
  //依赖条件为空 默认进来不执行
  const inc=useCallback(()=>{

    console.log('count',count);
    setCount(count+1);
  },[count])

  // count 和  count1 一个变化 就要 就更新
  const memorizedValue=useMemo(()=>count+count1,[count1,count])
  return (
    <div>
      <p>早上好 {count} 次</p>
      {memorizedValue}
                            {/* //函数式写法 */}
      <button onClick={inc}>
        点击
      </button>
    </div>
  );
}
