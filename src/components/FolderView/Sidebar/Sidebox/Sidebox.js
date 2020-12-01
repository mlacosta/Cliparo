import React from 'react';
import './Sidebox.css';
import {AiOutlinePlusSquare} from 'react-icons/ai';

export default function Sidebox({ create, name , onClick}){
	
	const plus = {
		fontSize:'2rem',
		margin:'10px'
	}

	return(

		<div className='sidebox' onClick = {create ? onClick : onClick(name)}>
			{create ? <><AiOutlinePlusSquare style = {plus}/><span className="description">Create New Folder</span></> 
			        : <span className="description">{name}</span>
			}
		</div>
	
	)

}
