import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Viewer from './Viewer/Viewer';
import './FolderView.css';
import { useAppContext } from '../AppCtx/AppCtx';
import { useParams } from 'react-router-dom';
import Return from '../Return/Return';
import CreateModal from './Sidebar/CreateModal/CreateModal';
import AddUrl from './AddUrl/AddUrl';

export default function FolderView(){
	
	const {colors} = useAppContext();
	const {resource} = useParams();
	const [modal,setModal] = useState(false);

	const title = {
		color: colors.text,
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
	}

	const handleCreateFolder = ()=>{
		setModal(true);
	}
	const handleClose = ()=>{
		setModal(false);
	}

	const handleAddFolder = ()=>{
		
	}

	return(
		<div className="wrapper">
			{modal && <CreateModal onCreate = {()=>{}} onClose = {handleClose}/>}
			<Return/>
			<div className="view-wrapper">
				<AddUrl onAdd = {handleCreateFolder}/>
				<div className="name">{resource}</div>
				<div className="folder-view">
					<Sidebar onCreate = {handleCreateFolder}/>
					<Viewer/>
				</div>
			</div>
		</div>

	)
}
