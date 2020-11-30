
import React ,{useState, useEffect} from 'react';
import './App.css';
import AppCtx, {useAppContext} from './components/AppCtx/AppCtx';
import Main from './components/Main/Main';
import FolderView from './components/FolderView/FolderView';
import { HashRouter as Router, Switch,Route,Link} from "react-router-dom";


function App() {

  return (
    <Router>
      <AppCtx>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route> 
          <Route path='/:resource'>
            <FolderView/>
          </Route> 
        </Switch>
      </AppCtx>
    </Router> 

  );
}

export default App;
