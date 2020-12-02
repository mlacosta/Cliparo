import React from 'react';
import './Sidebox.css';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {useAppContext} from '../../../AppCtx/AppCtx';
import {useParams} from 'react-router-dom';

export default function Sidebox({ create, name , onClick}){
	
	const {currentFolder} = useAppContext();

	const { foldername } = useParams();

	let selected = currentFolder == name ;

	const plus = {
		fontSize:'2rem',
		margin:'10px',
	}

	const box = {
		backgroundColor: selected ? 'lightgray' : 'white',
	}

	const style = {
		fontWeight: 700,
		marginLeft: 30
	}

	return(

		<div className='sidebox' onClick = {create ? onClick : onClick(name,foldername)} style={box}>
			{create ? <><AiOutlinePlusSquare style = {plus}/><span className="description">Create New Folder</span></> 
			        : <span className="description" {...{style}}>{name}</span>
			}
		</div>
	
	)

}
