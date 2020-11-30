import React from 'react';
import { ReactTinyLink } from 'react-tiny-link';
import {useParams} from 'react-router-dom';
import {useAppContext} from '../../AppCtx/AppCtx';

export default function Viewer(){
	const {folder} =  useAppContext();
	let {resource} = useParams();
	let links =  folder.find ((value)=>{return value.name == resource}).links;
	
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
