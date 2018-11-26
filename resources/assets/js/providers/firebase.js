const firebase = require('firebase/app');
const { hook } = require('./hook');
require('firebase/auth');

class FirebaseProvider {
    constructor(app) {
        this.config = {
            apiKey: "AIzaSyAyStSa1CpOkg7Yo2rUcfEaDWtitEmOQZs",
            authDomain: "my-savings-3019c.firebaseapp.com",
            databaseURL: "https://my-savings-3019c.firebaseio.com",
            storageBucket: "my-savings-3019c.appspot.com",
        };

        firebase.initializeApp(this.config);
    }

    signInWithPopup() {
        console.log(hook('login-popup'))
        hook('login-popup').addEventListener('click', this.showPopup.bind(this), false);
    }

    showPopup() {
        const provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(this.handleLogin.bind(this));
    }

    handleLogin(result) {
        const uuid = result.user.uid;
        const profile = result.profile;
    }
}

module.exports = FirebaseProvider;
