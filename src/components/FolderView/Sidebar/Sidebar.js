import React, {useEffect} from 'react';
import Sidebox from './Sidebox/Sidebox';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../AppCtx/AppCtx';


export default function Sidebar({ onCreate}){

	const {subfolders , setCurrentFolder} = useAppContext();

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

	useEffect(()=>{
		try{
		   setCurrentFolder(subfolders[0].name);
		}catch(err){
			console.log(err);
		}
		
	},[subfolders]);

	return(
		<div className="sidebar" style={sidebar}>
			<Sidebox create={true} onClick = {onCreate}/>
			{subfolders.map((value)=>{return <Sidebox create={false} name={value.name} onClick = {handleSelect}/>})}
		</div>
	)
}
