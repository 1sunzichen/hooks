import React, {useReducer
} from 'react';
const initialState={count:0}
function reducer(state,action) {
  switch (action.type) {
    case "add":
    return {count:state.count+1}
    case 'jian':
    return {count:state.count-1}
    default:
    throw new Error()
  }
}
function Counter(){
  //第二个参数 传初始值
  const [state,dispatch]=useReducer(reducer,initialState);
  return(
    <>
      Counter:
      {state.count}
      <button onClick={() =>dispatch({type:'add'})}>+</button>
      <button onClick={() =>dispatch({type:'jian'})}>-</button>
    </>
  )
}


export default Counter;