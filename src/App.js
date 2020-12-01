
import React ,{useState, useEffect} from 'react';
import './App.css';
import AppCtx, {useAppContext} from './components/AppCtx/AppCtx';
import Main from './components/Main/Main';
import FolderView from './components/FolderView/FolderView';
import { HashRouter as Router, Switch,Route,Link} from "react-router-dom";
import background from './img/background_04.jpg';

function App() {

  const title = {
		color: "white",
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
  }
  
  const style = {
    height:'100vh',
    backgroundImage:`url(${background})`,
    backgroundSize:'cover'  
  }


  return (
    <div className="app-wrapper" style = {style}>
      <Router>
        <AppCtx>
          <h1 className='main-title'style={title}>Cliparo</h1>
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
    </div>


  );
}

export default App;
