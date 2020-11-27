import React from 'react';
import {useAppContext} from '../AppCtx/AppCtx';
import Box from './Box/Box';

export default function Main(){
	const {colors} = useAppContext();

	const title = {
		color: colors.text,
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
	}

	const main = {
		backgroundColor: colors.background,
		height:'100vh',
		margin:0
	}

	return(<div className="main" style={main}>
				<h1 style={title}>Cliparo</h1>
				<Box></Box>	
			</div>)
}
