import React, {useEffect, useState} from 'react';
import {useAppContext} from '../AppCtx/AppCtx';
import Box from './Box/Box';
import ClipLoader from "react-spinners/ClipLoader";
import './Main.css';
import Modal from './../Modal/Modal';
import folders from './folders'
import axios from 'axios';

let request = new Promise(
  (res,rej)=>{
    setTimeout(()=>{res(folders)},1500)
  }
);

export default function Main(){
	const {colors} = useAppContext();

	let {folder, setFolder, queryFolder, setNames, folderNames, setCurrentFolder, subfolders } =  useAppContext();
	let [loading, setLoading] =  useState(true);
	let [showModal,setModal] = useState(false);

	const getFolders = ()=>{
		fetch('/folders').then((res)=>{
			return res.json()
		  }).then(res=>{
			  setNames(res["folders"]);
			  setLoading(false);
		   })
	}

	useEffect(()=>{
	  
		getFolders();

	},[showModal])

	const title = {
		color: colors.text,
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
	}

	const main = {
		height:'100vh',
		margin:0,
		display:'flex',
		
	}

	const handleCreate = ()=>{
		setModal(true);
	}

	const handleClose = ()=>{
		setModal(false);
	}

	const handleCreateFolder = (value)=>{
		return ()=>{
			axios.post('/folders',{value});
			setModal(false);
		}		
	}


	return(<div className="main" style={main}>
				<h2 style={{ color: 'white' }}>Save all your favourite web resources in one page!</h2>
				<div className="box-container">
				{loading && <ClipLoader color={colors.spinner} size={60} css='margin-top:150px;'/>}
				{!loading && <Box create={false} onClick={handleCreate}/>}
				{folderNames.map((value)=>{return <Box create = {true} name = {value} onClick = {queryFolder(value)}/>}) }
				
				</div>
				{showModal && <Modal onClose = {handleClose} onCreate = {handleCreateFolder}/>}

			</div>)
}
