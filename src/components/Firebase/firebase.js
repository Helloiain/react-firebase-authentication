import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAISk84c_lMNaj_Sn73aZqFceIc0xQS6QA',
	authDomain: 'react-authentication-611bd.firebaseapp.com',
	databaseURL: 'https://react-authentication-611bd.firebaseio.com',
	projectId: 'react-authentication-611bd',
	storageBucket: 'react-authentication-611bd.appspot.com',
	messagingSenderId: '1051478116153',
	appId: '1:1051478116153:web:af2e66629a51a869088ae8'
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		this.auth = app.auth();
	}

	// *** Auth API ***

	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
