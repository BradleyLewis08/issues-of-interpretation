import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';

export default function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
