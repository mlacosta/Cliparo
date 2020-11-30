import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Viewer from './Viewer/Viewer';
import './FolderView.css';
import { ReactTinyLink } from 'react-tiny-link'

export default function FolderView(){
	return(
		<div className="wrapper">

			<div className="folder-view">
				<Sidebar/>
				<Viewer/>
			</div>

		</div>

	)
}
