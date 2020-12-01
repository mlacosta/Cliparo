import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Viewer from './Viewer/Viewer';
import './FolderView.css';
import { useAppContext } from '../AppCtx/AppCtx';
import { useParams } from 'react-router-dom';
import Return from '../Return/Return';
import CreateModal from './Sidebar/CreateModal/CreateModal';
import AddUrl from './AddUrl/AddUrl';
import { BsInfoSquareFill } from 'react-icons/bs';

export default function FolderView(){
	
	const {colors, folder, addSubfolder, addLink, currentFolder} = useAppContext();
	const {resource} = useParams();
	const [modal,setModal] = useState(false);
	const [isUrl, setIsUrl] = useState(false);

	const title = {
		color: colors.text,
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
	}

	const handleCreateFolder = ()=>{
		setIsUrl(false)
		setModal(true);
	}

	const handleCreateUrl = ()=>{
		setIsUrl(true)
		setModal(true);
	}

	const handleClose = ()=>{
		setModal(false);
	}

	const handleAddFolder = (subName)=>{
		return ()=>{
			addSubfolder(resource,subName);
			setModal(false);
		}
	}

	const handleAddUrl = (url)=>{
		return ()=>{
			addLink(resource,url);
			setModal(false);
		}
	}

	return(
		<div className="wrapper">
			{modal && <CreateModal onCreate = {!isUrl? handleAddFolder : handleAddUrl} onClose = {handleClose} addUrl = {isUrl}/>}
			<Return/>
			<div className="view-wrapper">
				<AddUrl onAdd = {handleCreateUrl}/>
				<div className="name">{resource}</div>
				<div className="folder-view">
					<Sidebar onCreate = {handleCreateFolder}/>
					<Viewer/>
				</div>
			</div>
		</div>

	)
}
