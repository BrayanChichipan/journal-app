import { firebase, googleAuthProvider } from '../firebase/firebase-config';

import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
      
    return ( dispatch ) => {

        setTimeout(() => {
            
            dispatch( login (1234,'pedro') );

        }, 3500);

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