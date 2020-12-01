import React from 'react';
import { BiLinkAlt } from 'react-icons/bi';

export default function AddUrl({ onAdd }){
	const style = {
		position:'absolute',
		zIndex:100,
		fontSize:'2rem',
		color:'white',
		right:0,
		top:-10,
		backgroundColor:'black',
		padding:4,
		width:120
	}

	const add = {
		position:'relative',
		left:8,
		top:2,
		fontSize:'2rem',
		color:'white',
	}

	const span = {
		position:'relative',
		top:-4,
		fontSize:'1.2rem'
	}

	return(
		<div className="addurl-wrapper" style={style} onClick = {onAdd}>
			<span style={span}>Add new link</span>
			<BiLinkAlt style={add}/>
		</div>
		
	)
}
