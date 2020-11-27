
import React ,{useState, useEffect} from 'react';
import './App.css';
import AppCtx, {useAppContext} from './components/AppCtx/AppCtx';
import Main from './components/Main/Main';



function App() {

  return (
    <AppCtx>
      <Main></Main>
    </AppCtx>
  );
}

export default App;
