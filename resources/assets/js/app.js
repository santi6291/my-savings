const FirebaseProvider = require('./providers/firebase')

class App {
    constructor() {
        document.addEventListener("DOMContentLoaded", this.load.bind(this));
    }

    load() {
        // init providers
        this.firebase = new FirebaseProvider(this);

        // bind provider envets
        this.bindEvents();
    }

    bindEvents() {
        this.firebase.signInWithPopup();
    }
}

new App();

