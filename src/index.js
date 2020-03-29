import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Comstate from './hooks/1-state.js';
import ComuseEffect from './hooks/2-useEffect.js';
import Comref from './hooks/migration/ref.js';
import Comcontext from './hooks/migration/context.js';
import Comlifecycle from './hooks/migration/1-lifecycle.js';
import Commisorder from './hooks/advanced/misorder.js';
import Comlayouteffect from './hooks/advanced/layouteffect.js';
import Commemorize from './hooks/advanced/memorize.js';
import Comreduxer from './hooks/advanced/redux.js';
import Comchain from './hooks/principle/chain.js';
import Comusehook from './hooks/arch/usehook.js';
import Comanimation from './hooks/arch/animation.js';
import Comhoc from './hooks/arch/hoc.js';
import Practice from './hooks/practice/index.js';

const Wraper=styled.div`
  display:flex;
  justify-content:space-around;
`;
ReactDOM.render((
   <BrowserRouter>
    <Wraper>
      <div style={{width:"200px",display:"flex",flexDirection:"column",textAlign:"center"}}>
        
        <Link to={"/practice"} style={{fontSize:20,fontWeight:"bold"}}>实践</Link>
       
        <h1 style={{margin:0,padding:0}}>基础</h1>
        <Link to={"/state"}>useState</Link>
        <Link to={"/effect"}>useEffect</Link>
        <h1 style={{margin:0,padding:0}}>2-migration</h1>
        <Link to={"/lifecycle"}>lifecycle</Link>
        <Link to={"/ref"}>ref</Link>
        <Link to={"/context"}>context</Link>
        <h1 style={{margin:0,padding:0}}>3-advanced</h1>
        <Link to={"/misorder"}>misorder</Link>
        <Link to={"/layouteffect"}>layouteffect</Link>
        <Link to={"/memorize"}>memorize</Link>
        <Link to={"/reduxer"}>reduxer</Link>
        <h1 style={{margin:0,padding:0}}>3-principle</h1>
         <Link to={"/chain"}>chain</Link>
        <h1 style={{margin:0,padding:0}}>4-arch</h1>
        <Link to={"/usehook"}>usehook</Link>
        <Link to={"/hoc"}>hoc</Link>
        <Link to={"/animations"}>animation</Link>
      </div>

      <div style={{flex:1}}>
          <h1>华光少年的学习之路</h1>
          <Switch>
        
            <Route path="/state"  component={Comstate}/>
            <Route path="/practice"  component={Practice}/>
            <Route path="/effect"  component={ComuseEffect}/>
            <Route path="/lifecycle"  component={Comlifecycle}/>
            <Route path="/ref"  component={Comref}/>
            <Route path="/context"  component={Comcontext}/>
            <Route path="/misorder"  component={Commisorder}/>
            <Route path="/layouteffect"  component={Comlayouteffect}/>
            <Route path="/memorize"  component={Commemorize}/>
            <Route path="/reduxer"  component={Comreduxer}/>
            <Route path="/chain"  component={Comchain}/>
            <Route path="/usehook"  component={Comusehook}/>
            <Route path="/hoc"  component={Comhoc}/>
            <Route path="/animations"  component={Comanimation}/>
          </Switch>
      </div>
    </Wraper>
      </BrowserRouter>
       
),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();