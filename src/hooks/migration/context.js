import React,{useContext} from 'react';
import HelloContext from '../lib/HelloContext.js';
  // 1、创建 context usecontext
  // 2、HelloContext.Provider context 的 提供者 成员 
  // 3、HelloContext.Consumer context 的 消费者 成员
  // 提供者1
const {Provider}=HelloContext;
//提供者2
const Ctx1=React.createContext(1);
const Desendant=()=>{
  //消费者1
  const value=useContext(HelloContext);
  //消费者2
  const value1=useContext(Ctx1);
  //拿到 消费者成员
  return <div>{value}
    <h2>{value1}</h2>
  </div>
}

const Child=()=>{
  return <Desendant/>
}

const Parent=()=>{
  return <Provider value={"hellocontext"}>
          <Ctx1.Provider value={2}>
            <Child/>
          </Ctx1.Provider>
  </Provider>
}


export default Parent;