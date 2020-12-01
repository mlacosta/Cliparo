import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Viewer from './Viewer/Viewer';
import './FolderView.css';
import { useAppContext } from '../AppCtx/AppCtx';
import { useParams } from 'react-router-dom';
import { ReactTinyLink } from 'react-tiny-link';


export default function FolderView(){
	
	const {colors} = useAppContext();
	const {resource} = useParams();

	const title = {
		color: colors.text,
		margin:0,
		textAlign:'center',
		fontSize:'4rem',
		padding: 20
	}

	return(
		<div className="wrapper">
			<div className="view-wrapper">
				<div className="name">{resource}</div>
				<div className="folder-view">
					<Sidebar/>
					<Viewer/>
				</div>
			</div>
		</div>

	)
}
