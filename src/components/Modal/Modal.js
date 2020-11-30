import React, {useState} from 'react';
import './Modal.css'

export default function Modal({ onClose, onCreate }){
	let [name,setName] = useState('');
	
	return(
	<>	
		<div className="modal-shadow">
			<div className="modal">
				<button className='close' onClick={onClose}>X</button>
				<div className="form">
					Folder Name:
					<input className='folder-name'type="text" onChange = {(evnt)=>{setName(evnt.target.value)}}/><br/>
					<button className='create' onClick={onCreate(name)}>Create Folder</button>
				</div>

			</div>
		</div>

	</>
	)
}
