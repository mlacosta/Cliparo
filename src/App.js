
import React ,{useState, useEffect} from 'react';
import './App.css';
import AppCtx, {useAppContext} from './components/AppCtx/AppCtx';
import Main from './components/Main/Main';
import FolderView from './components/FolderView/FolderView';
import { HashRouter as Router, Switch,Route,Link} from "react-router-dom";


function App() {

  const title = {
		color: "#006466",
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
	}


  return (
    <Router>
      <AppCtx>
        <h1 className='main-title'style={title}>Cliparo</h1>
				<h2>Save all your favourite web resources in one page!</h2>
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
