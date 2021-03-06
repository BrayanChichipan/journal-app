import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';

import { types } from '../types/types';
import { uiFinishLoading, uiStarLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
      
    return ( dispatch ) => {

        dispatch( uiStarLoading() );
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ( { user } ) => {
            
            dispatch( uiFinishLoading() );
            dispatch( login(user.uid, user.displayName) );
            
        }).catch( error => {
            console.log( error );
            dispatch( uiFinishLoading() );
            Swal.fire('Fail',error.message,'error');
        });

    }
}

export const starRegisterWhithEmailPasswordName = ( email, password, name) => {

    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword( email, password) //el displayName se guarda como null
            .then( async ({ user }) => {

                await user.updateProfile( {displayName: name} );   //una vez se crea el usuario le agregamos el displayName

                dispatch(login(user.uid, user.displayName));
            })
            .catch( error => {
                console.log(error)
                Swal.fire('Fail', error.message, 'error');
            } 
            );

    }
}

export const startGoogleLogin = () => {

    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider  )
            .then ( ({ user })=> {
                dispatch( login(user.uid, user.displayName));
            } )

    }

}

export const login = ( uid, displayName ) => (
    {
        type: types.login,
        payload : {
            uid,
            displayName
        }
    }
)

export const startLogout = () => {

    return async ( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout() );
    }

}

export const logout = ()=>({

    type: types.logout,

}) 