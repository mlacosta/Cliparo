import React from 'react';
import {useAppContext} from '../../AppCtx/AppCtx';
/*import {FaBeer } from 'react-icons/ai';*/
import './Box.css';

export default function Box(){
	
	const {colors} = useAppContext();

	const box = {
		height: 240,
		width: 200,
		border: `2px solid white`,
		borderRadius:'20px',
		margin:50
	}

	const title = {
		color:colors.text02,
		textAlign:'center',
		fontSize:'2rem',
		fontWeight:300
	}
	
	return(
	
			<div className="Box" style={box}>
				<h3 style={title}>New folder</h3>
				{/*<AiOutlinePlusCircle ></AiOutlinePlusCircle >*/}
			</div>)
}
