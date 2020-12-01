import React , {useState} from 'react';

const colors = {
	background:'#764abc',
	text: '#006466',
	text02: '#006466',
	spinner:'white'
}
  
const AppContext = React.createContext();
export const useAppContext = ()=>{return React.useContext(AppContext)};


export default function AppCtx({children}){

	let [folder, setFolder] =  useState([]);
	let [subfolders, setSubfolders] = useState([]);
	let  [currentFolder, setCurrentFolder] = useState('');

	const queryFolder = (name)=>{	
		return ()=>{
			let search = folder.find((value)=>{return value.name == name})['subfolders'];
			setSubfolders(search);
			setCurrentFolder(search[0]["name"]);
		}
		
	}

	const addSubfolder = (name,subName)=>{
		const index = folder.findIndex((value)=>{return value["name"] == name});
		let temp = [...folder];
		temp[index]["subfolders"].push({name:subName,links:[]});
		setFolder(temp);
	}

	const addLink = (name,subName,url)=>{
		const index = folder.findIndex((value)=>{return value["name"] == name});
		const subIndex = folder[index]['subfolders'].findIndex((value)=>{return value["name"] == subName});

		let temp = [...folder];

		temp[index]["subfolders"][subIndex]["links"].unshift(url);
		setFolder(temp);
	}

	const context = {colors, 
					 folder, 
					 setFolder, 
					 queryFolder, 
					 subfolders, 
					 currentFolder, 
					 setCurrentFolder,
					 addSubfolder,
					 addLink}

	return(<>
				<AppContext.Provider value = {context}>
					{children}
				</AppContext.Provider>
			</>)
}

