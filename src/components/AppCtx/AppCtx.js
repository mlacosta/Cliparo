import React , {useState} from 'react';

const colors = {
	background:'#764abc',
	text: '#006466',
	text02: '#006466',
	spinner:'#3e1f47'
}
  
const AppContext = React.createContext();
export const useAppContext = ()=>{return React.useContext(AppContext)};

export default function AppCtx({children}){

	let [folder, setFolder] =  useState([]);

	return(<>
				<AppContext.Provider value = {{colors,folder, setFolder}}>
					{children}
				</AppContext.Provider>
			</>)
}

