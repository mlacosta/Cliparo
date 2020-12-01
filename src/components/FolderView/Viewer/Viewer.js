import React, { useEffect, useState } from 'react';
import { ReactTinyLink } from 'react-tiny-link';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../AppCtx/AppCtx';

export default function Viewer(){
	const {folder, subfolders, currentFolder} =  useAppContext();
	let {resource} = useParams();
	let [links,setLinks] = useState([]);
	
	useEffect(()=>{
		setLinks(subfolders.find((value)=>{return value.name == currentFolder}).links);
	},[currentFolder])	

	
	const viewer = {
		overflow:'auto',
		width:'80%'
	}

	return(<div className="viewer" style={viewer}>

			{links.map((link)=>{
				return(
					<ReactTinyLink
						cardSize="small"
						showGraphic={true}
						maxLine={2}
						minLine={1}
						url={link}
						width={'100%'}
					/>
				)
			})}
			</div>
		)
}
