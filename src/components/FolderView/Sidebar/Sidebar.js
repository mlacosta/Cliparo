import React from 'react';
import Sidebox from './Sidebox/Sidebox';


export default function Sidebar(){

	const sidebar = {
		width:'20%',
		height:'100%',
	}

	return(
		<div className="sidebar" style={sidebar}>
			<Sidebox create={true}/>
		</div>
	)
}
