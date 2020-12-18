const firebase = require('./firebase-connect');

module.exports = {
    _addUserData: (req, callback) => {
        let username = req.username;
        let usertype = req.usertype;

        let userObject = {
            usertype: req.usertype,
            username: req.username,
            email: req.email,
            phoneNumber: req.phoneNumber,
            age: req.age
        }

        firebase.database().ref(usertype + "/" + username).set(userObject);
        callback("Added successfully");
    },

    _updateUserData: (req, callback) => {
        let username = req.username;
        let usertype = req.usertype;

        let updatedUserObj = {
            usertype: req.usertype,
            username: req.username,
            email: req.email,
            phoneNumber: req.phoneNumber,
            age: req.age
        }

        firebase.database().ref(usertype + "/" + username).update(updatedUserObj, (error)=> {
            if(error)
                callback("Unsuccessful");
            else 
                callback("Updated successfully");
        });
    },

    _getUserData: (req, callback) => {
        let usertype = req.usertype;
        let username = req.username;

        firebase.database().ref(usertype + "/" + username).once("value").then((snapshot)=>{
            callback(snapshot.val());
        });
    },

    _deleteUserData: (req, callback) => {
        let usertype = req.usertype;
        let username = req.username;

        firebase.database().ref(usertype + "/" + username).remove();

        callback("Deleted successfully");
    }
};