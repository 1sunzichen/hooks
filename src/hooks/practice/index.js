import React, {useState,useEffect,useRef
,useContext
} from 'react';
const ContextMy=React.createContext(1);
const Desendant=()=>{
const ContextMyC=useContext(ContextMy);
console.log(ContextMyC);

  return <div>
      {ContextMyC}
  </div>
}
const Child=()=>{
  return(
    <Desendant/>
  )
}

const Parent=()=>{
  return(
    //这里的value 是 固定的
    <ContextMy.Provider value={999}>
        <Child />
    </ContextMy.Provider>
  )
}


export default Parent;