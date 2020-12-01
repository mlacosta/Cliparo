import React from 'react';
import Sidebox from './Sidebox/Sidebox';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../AppCtx/AppCtx';


export default function Sidebar(){

	const {resource} = useParams();
	const { folder, subfolders , setCurrentFolder} = useAppContext();

	const sidebar = {
		width:'20%',
		height:'100%',
		overflow: 'auto'
	}

	const handleSelect = (name)=>{
		return ()=>{
			setCurrentFolder(name);
		}
	}

	return(
		<div className="sidebar" style={sidebar}>
			<Sidebox create={true} onClick = {()=>{}}/>
			{subfolders.map((value)=>{return <Sidebox create={false} name={value.name} onClick = {handleSelect}/>})}
		</div>
	)
}
