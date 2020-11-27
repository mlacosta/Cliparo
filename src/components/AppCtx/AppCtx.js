import React from 'react';

const colors = {
	background:'#6930c3',
	text: '#48bfe3',
	text02: '#72efdd'
}
  
const AppContext = React.createContext();
export const useAppContext = ()=>{return React.useContext(AppContext)};

export default function AppCtx({children}){
	return(<>
				<AppContext.Provider value = {{colors}}>
					{children}
				</AppContext.Provider>
			</>)
}

