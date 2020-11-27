
import React ,{useState, useEffect} from 'react';
import './App.css';
import AppCtx, {useAppContext} from './components/AppCtx/AppCtx';
import Main from './components/Main/Main';


let folders = [{name:'Fullstack'},{name:'Big Data'},{name: 'Music Production'}]

function App() {

  let [folder, setFolder] =  useState([]);

  useEffect(()=>{
    

  },[])

  return (
    <AppCtx>
      <Main></Main>
    </AppCtx>
  );
}

export default App;
