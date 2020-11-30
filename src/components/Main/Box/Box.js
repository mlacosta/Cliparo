import React, {useState} from 'react';
import {useAppContext} from '../../AppCtx/AppCtx';
import {BsPlusCircle } from 'react-icons/bs';
import {AiFillFolderOpen } from 'react-icons/ai';
import './Box.css';
import {Link} from "react-router-dom";

export default function Box({create, name, onClick }){
	
	const {colors} = useAppContext();

	const box = {
		height: 240,
		width: 200,
		border: `1px ${create ? 'solid' :'dashed'} gray`,
		borderRadius:'10px',
		margin:50,
		padding:10
	}

	const title = {
		color:colors.text02,
		textAlign:'center',
		fontSize:'2rem',
		fontWeight:create ? 700 : 300
	}
	
	return(
		<>
			{!create &&<div className="Box" style={box} onClick = {onClick}>
				 			<h3 style={title}>Create New folder</h3>
							 <BsPlusCircle style={{fontSize:'5rem', marginLeft:60, fontWeight:300}}/>
					   </div>
			}
			{ create && <Link to={`${name}`} style={{textDecoration: 'none'}}>
							<div className="Box" style={box} onClick = {onClick}>
								<h3 style={title}>{name}</h3>	 
								<AiFillFolderOpen style={{fontSize:'5rem', marginLeft:60, fontWeight:300}}/>
							</div>
						</Link>
			}
		</>
)
}
