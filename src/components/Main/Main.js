import React, {useEffect, useState} from 'react';
import {useAppContext} from '../AppCtx/AppCtx';
import Box from './Box/Box';

let folders = [{name:'Fullstack'},{name:'Big Data'},{name: 'Music Production'}]

let request = new Promise(
  (res,rej)=>{
    setTimeout(()=>{res(folders)},1500)
  }
);

export default function Main(){
	const {colors} = useAppContext();

	let [folder, setFolder] =  useState([]);
	let [loading, setLoading] =  useState(true);

	useEffect(()=>{

	  request.then((res)=>{
		  setFolder(res)
		  setLoading(false);
		}
	  )
  
	},[])

	const title = {
		color: colors.text,
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
	}

	const main = {
		backgroundColor: colors.background,
		height:'100vh',
		margin:0,
		display:'flex'
	}

	return(<div className="main" style={main}>
				<h1 style={title}>Cliparo</h1>
				<Box create={false}></Box>
				{!loading && folder.map((value)=>{return <Box create = {true} name = {value["name"]}></Box>}) }
				{loading && <div>Loading...</div>}
			</div>)
}
