import React, {useEffect, useState} from 'react';
import {useAppContext} from '../AppCtx/AppCtx';
import Box from './Box/Box';
import ClipLoader from "react-spinners/ClipLoader";
import './Main.css';
import Modal from './../Modal/Modal';
import folders from './folders'

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
		backgroundColor: "f3f2ef",
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
			setFolder([...folder,{name:value, links:[]}]);
			setModal(false);
		}
		
	}

	return(<div className="main" style={main}>

				<div className="box-container">
				{loading && <ClipLoader color={colors.spinner} size={60} css='margin-top:150px;'/>}
				{!loading && <Box create={false} onClick={handleCreate}/>}
				{folder.map((value)=>{return <Box create = {true} name = {value["name"]}/>}) }
				
				</div>
				{showModal && <Modal onClose = {handleClose} onCreate = {handleCreateFolder}/>}

			</div>)
}
