import React, { useState } from 'react';
import './CreateModal.css';

export default function CreateModal( { onCreate, onClose, addUrl }){
	let [name,setName] = useState('');
	const input = {
		width: addUrl ? 350 : 200
	}
	return(
		<div className="modal-shadow">
			<div className="create-modal">
				<button className='close' onClick={onClose}>X</button>
				<div className="form">
					{addUrl ? 'Paste the URL' : 'Folder Name:'}
					<input className='folder-name'type="text" onChange = {(evnt)=>{setName(evnt.target.value)}} style={input}/><br/>
					<button className='create' onClick={onCreate(name)}>{addUrl ? 'Add URL' : 'Create Folder'}</button>
				</div>
			</div>
		</div>

	)
}
