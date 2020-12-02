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
			/*let search = folder.find((value)=>{return value.name == name})['subfolders'];
			setSubfolders(search);
			setCurrentFolder(search[0]["name"]);*/

			await fetch(`/subfolders/${name}`).then( res =>{return res.json()}).then((res)=>{
				setSubfolders(res["subfolders"]);
			
			})
			
		}
	}

	const addSubfolder = (name,subName)=>{
		/*const index = folder.findIndex((value)=>{return value["name"] == name});
		let temp = [...folder];
		temp[index]["subfolders"].push({name:subName,links:[]});
		setFolder(temp);*/
	}

	const addLink = (name,url)=>{
		/*const index = folder.findIndex((value)=>{return value["name"] == name});
		const subIndex = folder[index]['subfolders'].findIndex((value)=>{return value["name"] == currentFolder});
		let temp = [...folder];
		temp[index]["subfolders"][subIndex]["links"].unshift(url);
		setFolder(temp);*/
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
				     setLinks}

	return(<>
				<AppContext.Provider value = {context}>
					{children}
				</AppContext.Provider>
			</>)
}

