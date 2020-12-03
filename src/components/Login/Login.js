import React from 'react';
import GoogleLogin from 'react-google-login';
import { useAppContext } from '../AppCtx/AppCtx';
import './login.css';

const ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;


export default function Login(){

	const {setAccess, setGoogleResponse, setClientId, clientId } = useAppContext();

	const  handleLogin = async (res)=>{
		setGoogleResponse(res);
		setClientId(res.googleId);

		await fetch(`/auth?id=${res.googleId}`).then(
			(res)=>{
				return res.json();
			}
		).then(
			(res)=>{
				console.log(res);
				if (res.authorized){
					setAccess(true)
				}else{
					alert('you are not authorized to use this app')
					setAccess(false)
				}
			}
		).catch(()=>{
			alert('you are not authorized to use this app')
			setAccess(false)
			}
		);
		console.log(res);
	  }


	return(
		<div className = 'login'>
			<GoogleLogin
                clientId = {ID}
                buttonText = 'Login with Google'
                onSuccess = {handleLogin}
                onFailure = {(res)=>{console.log(res)}}
				cookiePolicy = {'single_host_origin'}
				style = {{width:400}}
            />
		</div>
	)
}
