import React, { useState, useEffect, useContext, createContext } from 'react';
import * as firebase from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore, collection, addDoc, getDoc, setDoc, doc } from 'firebase/firestore';
// Add your Firebase credentials
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDmIzunzi3t3Nt5AckLleMyqQiXqZWs4YE',
  authDomain: 'issues-of-interpretation.firebaseapp.com',
  projectId: 'issues-of-interpretation',
  storageBucket: 'issues-of-interpretation.appspot.com',
  messagingSenderId: '564884940814',
  appId: '1:564884940814:web:d9698d73fa937babfcb45f',
});

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const auth = getAuth();
  const db = getFirestore(app);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const getUser = (docref) => {
    return getDoc(docref).then((snapshot) => {
        if(snapshot.exists()){
          return snapshot.data();
        } else {
          console.log(" user does not exist");
          return null;
        }
    });
  }

  const addUser = (firstName, lastName, email, uid) => {
	return setDoc(doc(db, 'users', uid), {
		email,
		firstName,
		lastName
	})
	.then((res) => {
		const docref = doc(db, 'users', uid);
		return getUser(docref).then((data) => {
			setUserData(data);
		})
	}
	).catch((error) => {
		console.log(error);
	}
	);
}
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(response => {
	  const docref = doc(db, 'users', response.user.uid);
	  getUser(docref).then((data) => {
      setUserData(data);
      setUser(response.user);
	  }	
	  );
    }).catch(error => {
		console.log(error);
	});
  };

  const signup = (firstName, lastName, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(response => {
      setUser(response.user);
	  return addUser(firstName, lastName, email, response.user.uid);
    });
  };

  const signout = () => {
    signOut(auth).then(() => {
      setUser(false);
      setUserData(false);
    });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
	  onAuthStateChanged(auth, user => {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  })
  }, [auth]);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    addUser,
    userData
  };
}
