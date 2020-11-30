import React, {useState} from 'react';
import {useAppContext} from '../../AppCtx/AppCtx';
/*import {FaBeer } from 'react-icons/ai';*/
import './Box.css';

export default function Box({create, name, onClick }){
	
	const {colors} = useAppContext();

	const box = {
		height: 240,
		width: 200,
		border: `2px solid black`,
		borderRadius:'20px',
		margin:50,
		padding:10
	}

	const title = {
		color:colors.text02,
		textAlign:'center',
		fontSize:'2rem',
		fontWeight:300
	}
	
	return(
	
			<div className="Box" style={box} onClick = {onClick}>
				{!create && <h3 style={title}>Create New folder</h3>}
				{ create && <h3 style={title}>{name}</h3>	 }
				{/*<AiOutlinePlusCircle ></AiOutlinePlusCircle >*/}
			</div>)
}
