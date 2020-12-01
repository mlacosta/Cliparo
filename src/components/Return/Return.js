import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Return(){

	const style = {
		position:'absolute',
		top:50,
		left:100,
		cursor:'pointer',
		padding: '5px 15px',
		color:'green'
	}

	const span = {
		position:'relative',
		top:-3,
		fontSize:'1.4rem',
		fontWeight:500,
		marginLeft:10,
		color:'white',
	}

	return(
		<Link to='/' style={{ textDecoration:'none' }}>
			<div className="return" {...{style}}>
				<FaArrowLeft style={{ fontSize: '1.4rem'}}/><span style={span}>Return</span>
			</div>
		</Link>
	)
}
