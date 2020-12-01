import React from 'react';
import './Sidebox.css';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {useAppContext} from '../../../AppCtx/AppCtx';

export default function Sidebox({ create, name , onClick}){
	
	const {currentFolder} = useAppContext();

	let selected = currentFolder == name ;

	const plus = {
		fontSize:'2rem',
		margin:'10px',
	}

	const box = {
		backgroundColor: selected ? 'lightblue' : 'white',
	}

	const style = {
		fontWeight: 700,
		marginLeft: 30
	}

	return(

		<div className='sidebox' onClick = {create ? onClick : onClick(name)} style={box}>
			{create ? <><AiOutlinePlusSquare style = {plus}/><span className="description">Create New Folder</span></> 
			        : <span className="description" {...{style}}>{name}</span>
			}
		</div>
	
	)

}
