import React, {useEffect, useState} from 'react';
import {useAppContext} from '../AppCtx/AppCtx';
import Box from './Box/Box';
import ClipLoader from "react-spinners/ClipLoader";
import './Main.css';
import Modal from './../Modal/Modal';

let folders = [{name:'Fullstack',
				links: ['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/','https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/']},
			   {name:'Big Data',
			   links: ['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/','https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/']},
			   {name: 'Music Production',
			   links: ['https://redux.js.org/','https://youtu.be/VabSfLWISr4','https://www.freecodecamp.org/news/async-await-javascript-tutorial/','https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/']}]

let request = new Promise(
  (res,rej)=>{
    setTimeout(()=>{res(folders)},1500)
  }
);

export default function Main(){
	const {colors} = useAppContext();

	let {folder, setFolder} =  useAppContext();
	let [loading, setLoading] =  useState(true);
	let [showModal,setModal] = useState(false);

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

	
	const handleCreate = ()=>{
		setModal(true);
	}

	const handleClose = ()=>{
		setModal(false);
	}

	const handleCreateFolder = (value)=>{
		return ()=>{
			setFolder([...folder,{name:value}]);
			setModal(false);
		}
		
	}

	return(<div className="main" style={main}>
				<h1 className='main-title'style={title}>Cliparo</h1>
				<h2>Save all your favourite web resources in one page!</h2>
				
				<div className="box-container">
				{loading && <ClipLoader color={colors.spinner} size={60} css='margin-top:150px;'/>}
				{!loading && <Box create={false} onClick={handleCreate}/>}
				{folder.map((value)=>{return <Box create = {true} name = {value["name"]}/>}) }
				
				</div>
				{showModal && <Modal onClose = {handleClose} onCreate = {handleCreateFolder}/>}

			</div>)
}
