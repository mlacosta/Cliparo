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

	const context = {colors, 
					 folder, 
					 setFolder, 
					 queryFolder, 
					 subfolders, 
					 currentFolder, 
					 setCurrentFolder}

	return(<>
				<AppContext.Provider value = {context}>
					{children}
				</AppContext.Provider>
			</>)
}

