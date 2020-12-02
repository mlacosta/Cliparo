import React , {useState} from 'react';
import axios from 'axios';

const colors = {
	background:'#764abc',
	text: '#006466',
	text02: '#006466',
	spinner:'white'
}
  
const AppContext = React.createContext();
export const useAppContext = ()=>{return React.useContext(AppContext)};


export default function AppCtx({children}){

	let [subfolders, setSubfolders] = useState([]);
	let [currentFolder, setCurrentFolder] = useState('');
	let [folderNames, setNames] = useState([]);
	let [links,setLinks] = useState([]);

	const queryFolder =  (name)=>{	
		return async ()=>{
			await fetch(`/subfolders/${name}`).then( res =>{return res.json()}).then((res)=>{
				setSubfolders(res["subfolders"]);
			})
		}
	}

	const addSubfolder = async (name,subName)=>{

		await axios.post(`/subfolders/${name}`,{name,subName}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
		await fetch(`/subfolders/${name}`).then( res =>{return res.json()}).then((res)=>{
			setSubfolders(res["subfolders"]);
		})

	}

	const addLink = async (name,url)=>{
		//await axios.post(`/link?folder=${name}&subfolder=${currentFolder}`,{url}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
		await fetch(`/subfolders/${name}`).then( res =>{return res.json()}).then((res)=>{
			setSubfolders(res["subfolders"]);
		})

	}

	const getLinks = async (name)=>{
		alert(name)
		await fetch(`/link?folder=${name}&subfolder=${currentFolder}`).then(res=>{return res.json()}).then(res=>{setLinks(res['links'])}).catch(err=>{console.log(err)});
	}


	const context = {colors, 
					 queryFolder, 
					 subfolders, 
					 currentFolder, 
					 setCurrentFolder,
					 addSubfolder,
					 addLink,
					 setNames,
					 folderNames,
					 links,
					 setLinks,
					 getLinks}

	return(<>
				<AppContext.Provider value = {context}>
					{children}
				</AppContext.Provider>
			</>)
}

