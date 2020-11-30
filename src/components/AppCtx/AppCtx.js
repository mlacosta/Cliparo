import React from 'react';

const colors = {
	background:'white',
	text: '#006466',
	text02: '#006466',
	spinner:'#3e1f47'
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

